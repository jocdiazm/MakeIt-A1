// 0. Funciones de interes
// eslint-disable-next-line import/prefer-default-export
const randomTimer = (min = 5, max = 180) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { randomTimer };
