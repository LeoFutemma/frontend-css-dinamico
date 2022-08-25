const azul = document.querySelector('#blue');
const vermelho = document.querySelector('#red');
const verde = document.querySelector('#green');
const roxo = document.querySelector('#purple');
const body = document.querySelector('body');

azul.addEventListener('click', () => {
  body.style.setProperty('--primary-color', 'blue');
});

vermelho.addEventListener('click', () => {
  body.style.setProperty('--primary-color', 'red');
});

verde.addEventListener('click', () => {
  body.style.setProperty('--primary-color', 'green');
});

roxo.addEventListener('click', () => {
  body.style.setProperty('--primary-color', 'purple');
});
