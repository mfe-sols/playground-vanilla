const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const findInstalledPackageDir = (packageName, startDir) => {
  let currentDir = startDir;
  while (true) {
    const candidate = path.join(currentDir, 'node_modules', ...packageName.split('/'));
    if (fs.existsSync(candidate)) return candidate;
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) return null;
    currentDir = parentDir;
  }
};

const localUiKitIndex = path.resolve(__dirname, '../../libs/ui-kit/design-system/src/index.ts');
const localUiKitCssDir = path.resolve(__dirname, '../../libs/ui-kit/css');
const localI18nIndex = path.resolve(__dirname, '../../libs/i18n/src/index.ts');

const hasLocalUiKitFallback = fs.existsSync(localUiKitIndex) && fs.existsSync(localUiKitCssDir);
const hasLocalI18nFallback = fs.existsSync(localI18nIndex);
const liveUiKitDir = findInstalledPackageDir('@mfe-sols/ui-kit', __dirname);
const liveI18nDir = findInstalledPackageDir('@mfe-sols/i18n', __dirname);
const hasLiveUiKit = Boolean(liveUiKitDir);
const hasLiveI18n = Boolean(liveI18nDir);
const isStrictLiveMode =
  process.env.VERCEL === '1' ||
  process.env.CI === 'true' ||
  process.env.MFE_REQUIRE_LIVE_PACKAGES === '1';

if ((!hasLiveUiKit || !hasLiveI18n) && isStrictLiveMode) {
  const missing = [
    !hasLiveUiKit ? '@mfe-sols/ui-kit' : null,
    !hasLiveI18n ? '@mfe-sols/i18n' : null
  ].filter(Boolean);
  throw new Error(
    [
      `Missing live package dependency: ${missing.join(', ')}`,
      'This build is running in strict live-package mode (CI/Vercel).',
      'Configure GitHub Packages auth and install dependencies before build:',
      '1) set NODE_AUTH_TOKEN (Vercel Environment Variable)',
      '2) run install in the app root (vercel.json installCommand or local npm/pnpm install)'
    ].join('\n')
  );
}

const aliasLiveUiKitToLocal = !hasLiveUiKit && hasLocalUiKitFallback;
const aliasLiveI18nToLocal = !hasLiveI18n && hasLocalI18nFallback;

if (aliasLiveUiKitToLocal || aliasLiveI18nToLocal) {
  const fallbackTargets = [
    aliasLiveUiKitToLocal ? '@mfe-sols/ui-kit -> ../../libs/ui-kit' : null,
    aliasLiveI18nToLocal ? '@mfe-sols/i18n -> ../../libs/i18n' : null
  ]
    .filter(Boolean)
    .join(', ');
  // Local DX fallback when private packages are not installed.
  console.warn(`[mfe-playground-vanilla] Using local library fallback: ${fallbackTargets}`);
}

module.exports = {
  entry: path.resolve(__dirname, 'src/org-playground-vanilla.ts'),
  output: {
    filename: 'org-playground-vanilla.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
      name: 'playgroundVanilla'
    },
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    extensionAlias: {
      '.js': ['.ts', '.js']
    },
    alias: {
      ...(aliasLiveUiKitToLocal ? { '@mfe-sols/ui-kit$': localUiKitIndex } : {}),
      ...(aliasLiveUiKitToLocal ? { '@mfe-sols/ui-kit/css': localUiKitCssDir } : {}),
      ...(aliasLiveI18nToLocal ? { '@mfe-sols/i18n$': localI18nIndex } : {})
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.[cm]?ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/partials'),
          to: 'partials'
        }
      ]
    })
  ],
  devServer: {
    port: 9008,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
