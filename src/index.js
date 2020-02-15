import _ from 'lodash'
import * as utilities from './utilities'
import './style.css'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', utilities.NiJou(10), utilities.NAME, utilities.hoge]
  element.innerHTML = _.join(array, '@@@@');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei')