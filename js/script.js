import { getHomeWorkPage } from './document.js';
import { getResultFirstTask } from './task-1.js';
import { getResultSecondTask } from './task-2.js';
import { getResultThirdTask } from './task-3.js';
import { getResultFourTask } from './task-4.js';
import { getResultFivethTask, userChoice } from './task-5.js';
import { getResultSixthTask } from './task-6.js';
import { getResultSeventhTask } from './task-7.js';
import { getResultEighthTask } from './task-8.js';

function getHomeWorkResult() {
    getResultFirstTask();
    getResultSecondTask();
    getResultThirdTask();
    getResultFourTask();
    getResultFivethTask();
    getResultSixthTask();
    getResultSeventhTask();
    getResultEighthTask();
}

getHomeWorkPage();
getHomeWorkResult();

const magicButton = document.getElementById('user-number');
magicButton.addEventListener('click', userChoice);