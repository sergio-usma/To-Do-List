import ListElement from './listElement.js';

export default class RenderList {
  constructor() {
    this.toDoList = localStorage.getItem('toDoList')
      ? JSON.parse(localStorage.getItem('toDoList'))
      : [];
    this.addTask = this.addTask.bind(this);
    this.renderList();
  }

  addTask(description) {
    const task = new ListElement(this.toDoList.length + 1, description, false);
    this.toDoList.push(task);
    this.renderList();
    this.toLocalStorage();
  }

  deleteTask(id) {
    this.toDoList = this.toDoList.filter((task) => task.id !== id);
    this.toLocalStorage();
  }

  renderList() {
    const listContainer = document.querySelector('.list__container__checklist');
    listContainer.innerHTML = '';

    this.toDoList.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.className = 'list__container__checklist__item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'list__container__checklist__item__checkbox';
      listItem.appendChild(checkbox);

      const textSpan = document.createElement('span');
      textSpan.className = 'list__container__checklist__item__text';
      textSpan.textContent = task.description;
      listItem.appendChild(textSpan);

      const buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'list__container__checklist__item__buttons';

      const removeButton = document.createElement('button');
      removeButton.className = 'list__container__checklist__item__rm-button';
      removeButton.innerHTML = '<i class="bi bi-trash"></i>';

      removeButton.addEventListener('click', () => {
        this.deleteTask(task.id);
        this.renderList();
      });

      buttonsDiv.appendChild(removeButton);

      const moveButton = document.createElement('button');
      moveButton.className = 'list__container__checklist__item__mv-button';
      moveButton.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
      buttonsDiv.appendChild(moveButton);

      listItem.appendChild(buttonsDiv);

      listContainer.appendChild(listItem);
    });
  }

  toLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }
}