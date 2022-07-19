const obj = {
    Минск: 'Беларусь',
    Москва: 'Россия',
    Киев: 'Украина',
};

function getResultFirstTask() {
    for (let key in obj) {
        const taskElement = document.createElement('div');
        document.getElementById('result-1').appendChild(taskElement);
        taskElement.innerHTML = `${key} - это ${obj[key]}.`;
    }
}

export { getResultFirstTask };