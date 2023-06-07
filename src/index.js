import _ from 'lodash';
import './style.css';
import logoImg from '../assets/logo.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', 'This is my project'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const logo = new Image();
  logo.src = logoImg;

  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
