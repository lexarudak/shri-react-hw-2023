export const nextClickClose = (fn: (value: boolean) => void): void =>
  document.addEventListener("click", () => fn(false), {
    once: true,
  });
