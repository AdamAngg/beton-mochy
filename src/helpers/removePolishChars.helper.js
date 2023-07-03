export const removePolishChars = (str) => {
  const normalized = str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s]+/g, "-");

  return normalized;
};
