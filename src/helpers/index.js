export const generateId = () => {
  const random = Math.random().toString(36).slice(2);
  const fecha = new Date().getTime().toString(36);
  return `${random}${fecha}`;
};

export const formateDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return newDate.toLocaleDateString('es-ES', options);
};

export const formatPrice = (number) => {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
