const words = [2, 'пашут', 'a', 7, 'руками', 'машут'];

function getProverbInCycle() {
    let string = '';
    for (let i = 0; i < words.length; i++) {
        if (i < (words.length - 1)) {
            string = string.concat(words[i], ',');
        }
        else {
            string = string.concat(words[i]);
        }
    }
    return string;
}

const proverbInCycle = getProverbInCycle();


function getProverb() {
    return words.join(',');
}
const proverb = getProverb();


function getProverbToString() {
    return words.toString();
}
const proverbString = getProverbToString();


function getResultFourTask() {
    const taskData = document.createElement('div');
    document.getElementById('result-4').before(taskData);
    taskData.innerHTML = `<span>Входные данные:</span> массив words = [${words}]
       (тип данных: ${(typeof words)}, массив: ${(Array.isArray(words))});`

    const taskElement = document.createElement('div');
    document.getElementById('result-4').appendChild(taskElement);
    taskElement.innerHTML = `
    1) с использванием цикла for: ${proverbInCycle} (тип данных: ${(typeof proverbInCycle)});<br /><br />
    2) метод join(): ${proverb} (тип данных: ${(typeof proverb)});<br /><br />
    3) метод toString(): ${proverbString} (тип данных: ${(typeof proverbString)}).`;
}

export { getResultFourTask };


