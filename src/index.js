import _ from 'lodash'
import * as utilities from './utilities'
import './style.css'
import imageOne from './a.jpg'
import imageTwo from './b.jpg'
import imageThree from './c.jpg'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', utilities.NiJou(10), utilities.NAME, utilities.hoge]
  element.innerHTML = _.join(array, '@@@@');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei')
const imgOne = new Image();
const imgTwo = new Image();
const imgThree = new Image();

imgOne.src = imageOne;
imgTwo.src = imageTwo;
imgThree.src = imageThree;
document.body.appendChild(imgOne);
document.body.appendChild(imgTwo);
document.body.appendChild(imgThree);