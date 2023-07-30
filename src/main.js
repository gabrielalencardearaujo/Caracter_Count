// import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

(function () {
  const texto = document.querySelector('#texto')
  const btnContar = document.querySelector('.btn')
  const caractere = document.querySelector('#itext')
  const contarTodos = document.querySelector('#icheck')
  const resultado = document.querySelector('#iresult')
  const alertas = document.querySelector('.alertas')
  let contador;

  btnContar.addEventListener('click', () => {
    alerts(texto.value, caractere.value)
  })

  function alerts(textoDigitado, pesquisa) {
    if (textoDigitado === '' || pesquisa === '') {
      resultado.value = ''
      alertas.style.display = 'block'
      alertas.textContent = 'Digite algum texto ou palavra chave'
    } else {
      alertas.style.display = 'none'
      textoDigitado = textoDigitado.toUpperCase()
      verificaPesquisa(textoDigitado, pesquisa.toUpperCase())
    }
  }

  function verificaPesquisa(texto, pesquisa) {
    if (pesquisa.length === 1) { contar(texto, pesquisa, true, false, false, false) }
    if (pesquisa === '*C*') { contar(texto, pesquisa, false, true, false, false) }
    else if (pesquisa === '*W*') { contar(texto, pesquisa, false, false, false, true) }
    else if (pesquisa.length >= 2) { contar(texto, pesquisa, false, false, true, false) }

  }

  function contar(texto, pesquisa, letra, todos, words, allwords) {
    contador = 0;

    if (letra) {
      const arrayTexto = texto.split('')
      arrayTexto.forEach((value) => {
        if (value === pesquisa) { contador++ };
      });
    }

    if (todos) { contador = texto.length }

    if (words) {
      const arrayTexto = texto.split(' ')
      arrayTexto.forEach((value) => {
        if (value === pesquisa) {
          contador++
        }
      });
    }

    if (allwords) {
      const arrayTexto = texto.split(' ')
      arrayTexto.forEach(() => contador++)
    }

    mostraResultado(contador)
  }

  function mostraResultado(valor) {
    resultado.value = valor
  }
})();
