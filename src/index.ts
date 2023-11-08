// import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import { searchedWord } from './components/searchedWord';
import { allCaracter } from './components/allCaracter';
import { allWords } from './components/allWords';

const texto = document.querySelector('#texto') as HTMLTextAreaElement;
const btnContar = document.querySelector('.btn') as HTMLButtonElement;
const inputWord = document.querySelector('#consult') as HTMLInputElement;
const alertas = document.querySelector('.alertas') as HTMLDivElement;
const result = document.querySelector('.result') as HTMLDivElement;

btnContar.addEventListener('click', () => {
  const checked = checkValues();
  if(checked) mountResult();
});

function checkValues() {
  if(!texto.value) {
    alertas.style.display = 'block';
    alertas.textContent = 'Digite algum texto';
    return false;
  }

  alertas.style.display = 'none';
  return true;
}

function mountResult() {
  const regexMyWord = new RegExp(inputWord.value, 'gi');

  const myWordElement = searchedWord(texto.value.match(regexMyWord).length);
  const numberCaracter = allCaracter(texto.value.length)
  const numberWords = allWords(texto.value.match(/\w+/gi).length)

  result.innerHTML = `<h2>Resultados:</h2>`

  if(!inputWord.value) 
    result.innerHTML += numberCaracter + numberWords;
  else 
    result.innerHTML += myWordElement + numberCaracter + numberWords;
}