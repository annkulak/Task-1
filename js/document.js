import { taskCatalog } from './task-catalog.js';

function getHomeWorkPage() {
    const page = document.createElement('div');
    document.querySelector('body').appendChild(page);
    page.classList.add('wrapper');

    const chapterPageContainer = document.createElement('div');
    page.appendChild(chapterPageContainer);
    chapterPageContainer.classList.add('home-work-number');
    const homeWorkNumber = document.createElement('h1');
    chapterPageContainer.appendChild(homeWorkNumber);
    homeWorkNumber.textContent = 'домашнее задание №1';

    for (let i = 0; i < taskCatalog.length; i++) {
        const taskContainer = document.createElement('section');
        document.querySelector('.wrapper').insertAdjacentElement('beforeEnd', taskContainer);
        taskContainer.classList.add('task-container');
        taskContainer.id = `task-${[i + 1]}`;
    }

    for (let i = 0; i < taskCatalog.length; i++) {
        const task = document.getElementById(`task-${[i + 1]}`);

        const taskElement = document.createElement('h2');
        task.appendChild(taskElement);
        taskElement.classList.add('task-chapter');
        taskElement.textContent = taskCatalog[i].name;

        const descriptionElement = document.createElement('div');
        task.appendChild(descriptionElement);
        descriptionElement.classList.add('task-description');
        descriptionElement.textContent = taskCatalog[i].description;

        const resultElement = document.createElement('div');
        task.appendChild(resultElement);
        resultElement.classList.add('task-result');
        resultElement.id = `result-${[i + 1]}`;

        const resultChapter = document.createElement('span');
        resultElement.appendChild(resultChapter);
        resultChapter.textContent = 'Результат:';
    }
}

export { getHomeWorkPage };