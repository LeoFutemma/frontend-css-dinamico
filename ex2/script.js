const usuario = document.querySelector('#welcome');
const botao = document.querySelector('#btn-save');
const input = document.querySelector('#input-name');

const usuarioSalvo = localStorage.getItem('ultimoUsuario');

if (!usuarioSalvo) {
  usuario.textContent = 'Seja bem vindo, fulano!';
} else {
  usuario.textContent = usuarioSalvo;
}

botao.addEventListener('click', salvarUsuario);

function salvarUsuario() {
  usuario.textContent = `Seja bem vindo, ${input.value}!`;
  localStorage.setItem('ultimoUsuario', usuario.textContent);
  input.value = '';
}