const PRICE_FORMATTER = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(price) {
  return PRICE_FORMATTER.format(price);
}
