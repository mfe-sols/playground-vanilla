import { el } from '../dom';
import { chevronIcon } from '../icons';

export const buildFormInputsCard = () => {
  const quantityInput = el('input', { className: 'ds-input', attrs: { inputmode: 'numeric', 'data-js': 'quantity-input' } });
  const quantityMinus = el('button', { className: 'ds-btn ds-btn--ghost ds-btn--sm', text: '−', attrs: { type: 'button', 'data-js': 'quantity-dec' } });
  const quantityPlus = el('button', { className: 'ds-btn ds-btn--ghost ds-btn--sm', text: '+', attrs: { type: 'button', 'data-js': 'quantity-inc' } });

  const phoneInput = el('input', {
    className: 'ds-input',
    attrs: { inputmode: 'tel', placeholder: '(555) 123-4567', 'data-js': 'phone-input' },
  });
  const cardInput = el('input', {
    className: 'ds-input',
    attrs: { inputmode: 'numeric', placeholder: '1234 5678 9012 3456', 'data-js': 'card-input' },
  });
  const cvcInput = el('input', {
    className: 'ds-input',
    attrs: { inputmode: 'numeric', placeholder: '123', 'data-js': 'cvc-input' },
  });
  const currencyInput = el('input', {
    className: 'ds-input',
    attrs: { inputmode: 'decimal', placeholder: '0.00', 'data-js': 'currency-input' },
  });

  const selectTrigger = (label: string) =>
    el(
      'button',
      { className: 'ds-select-trigger', attrs: { type: 'button' } },
      el('span', { className: 'ds-select-trigger__label', text: label }),
      el('span', { className: 'ds-select-trigger__icon', attrs: { 'aria-hidden': 'true' } }, chevronIcon())
    );

  return el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Form Inputs' }),
    el(
      'div',
      { className: 'ds-grid-2' },
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'First name' }),
        el('input', { className: 'ds-input', attrs: { placeholder: 'Jane' } }),
        el('span', { className: 'ds-helper', text: 'Required' })
      ),
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'Last name' }),
        el('input', { className: 'ds-input', attrs: { placeholder: 'Doe' } })
      )
    ),
    el(
      'div',
      { className: 'ds-field' },
      el('label', { className: 'ds-label', text: 'Email' }),
      el(
        'div',
        { className: 'ds-input-group' },
        el('input', { className: 'ds-input', attrs: { placeholder: 'you@domain.com' } }),
        el('button', { className: 'ds-btn ds-btn--secondary ds-btn--md', text: 'Verify', attrs: { type: 'button' } })
      ),
      el('span', { className: 'ds-error', text: 'Invalid email' })
    ),
    el(
      'div',
      { className: 'ds-grid-2' },
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'Phone number' }),
        el(
          'div',
          { className: 'ds-input-group' },
          el(
            'div',
            { className: 'ds-select-menu ds-phone-select', attrs: { 'data-placeholder': 'Code', 'data-options': '["+1","+33","+44","+49","+65","+81","+84"]', 'data-js': 'phone-select' } },
            selectTrigger('+1')
          ),
          phoneInput
        ),
        el('span', { className: 'ds-helper', text: 'Select country code' })
      ),
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'Credit card' }),
        el(
          'div',
          { className: 'ds-input-group' },
          cardInput,
          el('span', { className: 'ds-input-suffix', text: 'VISA' })
        ),
        el('span', { className: 'ds-helper', text: 'Auto formatted' })
      )
    ),
    el(
      'div',
      { className: 'ds-grid-3' },
      el(
        'div',
        { className: 'ds-field', attrs: { style: 'grid-column: span 2' } },
        el('label', { className: 'ds-label', text: 'Card details' }),
        el('input', { className: 'ds-input', attrs: { placeholder: 'Name on card' } })
      ),
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'CVC' }),
        cvcInput,
        el('span', { className: 'ds-helper', text: '3–4 digits' })
      )
    ),
    el(
      'div',
      { className: 'ds-grid-2' },
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'Quantity' }),
        el('div', { className: 'ds-input-group' }, quantityMinus, quantityInput, quantityPlus),
        el('span', { className: 'ds-helper', text: 'Stepper input' })
      ),
      el(
        'div',
        { className: 'ds-field' },
        el('label', { className: 'ds-label', text: 'Amount' }),
        el(
          'div',
          { className: 'ds-input-group' },
          el(
            'div',
            { className: 'ds-select-menu ds-currency-select', attrs: { 'data-placeholder': 'USD', 'data-options': '["USD","EUR","VND","JPY","SGD"]', 'data-js': 'currency-select' } },
            selectTrigger('USD')
          ),
          currencyInput,
          el('span', { className: 'ds-input-suffix', text: '.00' })
        ),
        el('span', { className: 'ds-helper', text: 'Currency input' })
      )
    ),
    el(
      'div',
      { className: 'ds-inline-4' },
      el(
        'label',
        { className: 'ds-inline-2' },
        el('input', { className: 'ds-checkbox', attrs: { type: 'checkbox' } }),
        el('span', { className: 'ds-body2', text: 'Remember me' })
      ),
      el(
        'label',
        { className: 'ds-inline-2' },
        el('input', { className: 'ds-radio', attrs: { type: 'radio', name: 'opt' } }),
        el('span', { className: 'ds-body2', text: 'Option A' })
      ),
      el(
        'label',
        { className: 'ds-switch-field' },
        el('input', { className: 'ds-switch-input', attrs: { type: 'checkbox' } }),
        el('span', { className: 'ds-switch-control' }),
        el('span', { className: 'ds-body2', text: 'Notifications' })
      )
    ),
    el('textarea', { className: 'ds-textarea', attrs: { placeholder: 'Message' } }),
    el(
      'div',
      { className: 'ds-select-menu', attrs: { 'data-placeholder': 'Choose an option', 'data-options': '["Option 1","Option 2","Option 3"]', 'data-js': 'select-menu' } },
      selectTrigger('Choose an option')
    ),
    el(
      'div',
      {
        className: 'ds-select-menu',
        attrs: {
          'data-placeholder': 'Select tags',
          'data-multiple': 'true',
          'data-options': '["Design","Product","Engineering","Ops","Research"]',
          'data-value': '["Design","Product"]',
          'data-js': 'select-menu-multi',
        },
      },
      selectTrigger('Select tags')
    )
  );
};
