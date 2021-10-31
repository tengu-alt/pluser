import Big from 'big.js';

function sum() {
  let a = Number(document.getElementById('fr').value);
  let b = Number(document.getElementById('sc').value);
  if (Number.isNaN(a) || Number.isNaN(b) || !Number.isFinite(a) || !Number.isFinite(b)) {
    document.getElementById('res').innerHTML = 'это не число';
  }
  a = new Big(a);
  b = new Big(b);
  document.getElementById('res').innerHTML = a.plus(b);
}
function twoPlusTwo() {
  const fr = document.createElement('input');
  fr.type = 'text';
  fr.id = 'fr';
  const sc = document.createElement('input');
  sc.type = 'text';
  sc.id = 'sc';
  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'посчитать';
  const result = document.createElement('div');
  result.id = 'res';
  document.body.append(fr);
  document.body.append(sc);
  document.body.append(button);
  document.body.append(result);
  button.addEventListener('click', sum);
}
const script = document.createElement('script');
script.setAttribute('src', 'big.js-master/big.js');
const head = document.querySelector('head');
head.prepend(script);

window.addEventListener('load', twoPlusTwo);
