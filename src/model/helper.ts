import { GENRE_LIST } from "@/app/components/Filter/Filter.const";
import { Cart } from "@/redux";

export const nextClickClose = (fn: (value: boolean) => void): void =>
  document.addEventListener("click", () => fn(false), {
    once: true,
  });

export const nextActionClose = (fn: (value: boolean) => void): void => {
  const closeAndRemove = (): void => {
    fn(false);
    document.removeEventListener("scroll", closeAndRemove);
    document.removeEventListener("click", closeAndRemove);
  };
  document.addEventListener("click", closeAndRemove);
  document.addEventListener("scroll", closeAndRemove);
};

export const getTicketsAmount = (getCartItems: Cart): number => {
  const items = Object.values(getCartItems);
  return items.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);
};

export const getGenreRu = (genre: string): string =>
  GENRE_LIST.find(({ value }) => value === genre)?.name || genre;
