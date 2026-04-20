export const formatCurrency = (value) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(value));
  return `${value < 0 ? '- ' : ''}$ ${formatted.replace('$', '')}`;
};

export const formatCurrencyWithDecimals = (value) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));
  return `${value < 0 ? '- ' : ''}$ ${formatted.replace('$', '')}`;
};
