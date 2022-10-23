import chance from "chance";

/**
 * @description - Returns a random number between 0 and 2
 * @returns {number} - A random number between 0 and 2
 * */
export const getMoney = (): number => {
  const money = chance()
    .euro({ min: 0, max: 2 })
    .replace(",", ".")
    .split("€")[0];

  return parseFloat(money);
};
