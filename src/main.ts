import {add, multiply} from './calculate';

const addResult = add(4, 5);
const multiplyResult = multiply(4, 5);
const addResultOutput = document.querySelector('#addResultOutput');
const multiplyResultOutput = document.querySelector('#multiplyResultOutput');

if (addResultOutput && multiplyResultOutput) {
  addResultOutput.innerHTML = addResult.toString();
  multiplyResultOutput.innerHTML = multiplyResult.toString();
} else {
  console.log('output locations do not exist in DOM');
}
