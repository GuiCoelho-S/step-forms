export const phoneFormat = (number: string) => {
  const isCellPhone = number.trim().length === 11;

  if (isCellPhone) {
    number = number.replace(/[^\d]/g, "")
    return number.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3")
  } if (!isCellPhone) return number
};