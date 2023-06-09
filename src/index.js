import './style.css';
import './assets/img/astronaut-bg.jpg';
import RenderList from './modules/renderList.js';

const renderList = new RenderList();

const addButton = document.querySelector('.list__container__input__button');
const inputText = document.querySelector('.list__container__input__text');

addButton.addEventListener('click', () => {
  const description = inputText.value.trim();
  if (description !== '') {
    renderList.addTask(description);
    inputText.value = '';
  }
});

inputText.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const description = inputText.value.trim();
    if (description !== '') {
      renderList.addTask(description);
      inputText.value = '';
    }
  }
});