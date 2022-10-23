import chance from "chance";

export const getMoney = () => {
  const money = chance()
    .euro({ min: 0, max: 2 })
    .replace(".", ",")
    .split("€")[0];

  return parseFloat(money);
};
