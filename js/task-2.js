const weekDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

function getResultSecondTask() {
    for (let i = 0; i < weekDays.length; i++) {
        const taskElement = document.createElement('div');
        document.getElementById('result-2').appendChild(taskElement);
        taskElement.innerHTML = weekDays[i];

        if (weekDays[i] === 'суббота' || weekDays[i] === 'воскресенье') {
            taskElement.classList.add('holiday');
        }
    }
}

export { getResultSecondTask };