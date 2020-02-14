import _ from 'lodash'
import * as utilities from './utilities'
import CatHoge from './utilities'
function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', utilities.NiJou(10), utilities.NAME, utilities.hoge]
  element.innerHTML = _.join(array, '@@@@');
  return element;
}

document.body.appendChild(component());
console.log(CatHoge.say());