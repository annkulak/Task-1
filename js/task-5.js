function getResultFivethTask() {
    const taskData = document.createElement('div');
    document.getElementById('result-5').before(taskData);
    taskData.innerHTML = `<span>Входные данные:</span>`;

    const taskButton = document.createElement('button');
    taskData.appendChild(taskButton);
    taskButton.textContent = `Click me`;
    taskButton.id = 'user-number';

    const taskElement = document.createElement('div');
    document.getElementById('result-5').appendChild(taskElement);
    taskElement.id = 'user-result';
}

function userChoice() {

    const num = prompt('Введите число');

    function colonOdd(num) {
        let myNumber = num.toString();
        let result = [myNumber[0]];

        for (let i = 1; i < myNumber.length; i++) {
            if ((myNumber[i - 1] % 2 !== 0) && (myNumber[i] % 2 !== 0)) {
                result.push(':', myNumber[i]);
            }
            else {
                result.push(myNumber[i]);
            }
        }
        return result.join('');
    }

    const taskResult = document.getElementById('user-result');
    taskResult.innerHTML = `${colonOdd(num)}`;
}

export { getResultFivethTask, userChoice };