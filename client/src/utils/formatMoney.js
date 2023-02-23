export const formatMoney = ({ price }) => {
  const options = {
    minimumFractionDigits: 3,
  };
  if (price % 1000 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat("en-US", options);

  return formatter.format(price / 1000);
};
