// import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import * as Counter from './components/CounterCaracteres/main';
import * as Regex from './components/Regex/main';

const urlSearchBar = window.location.href

if(urlSearchBar.includes('index')) Counter.start();

if(urlSearchBar.includes('regex')) Regex.start();
