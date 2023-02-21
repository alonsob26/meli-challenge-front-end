export const formatMoney = ({ amount }) => {
  const options = {
    minimumFractionDigits: 3,
  };
  if (amount % 1000 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 1000);
};
