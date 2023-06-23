import { Cart } from "@/redux";

export const nextClickClose = (fn: (value: boolean) => void): void =>
  document.addEventListener("click", () => fn(false), {
    once: true,
  });

export const getTicketsAmount = (getCartItems: Cart): number => {
  const items = Object.values(getCartItems);
  return items.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);
};
