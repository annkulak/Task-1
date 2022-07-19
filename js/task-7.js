const arr = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java'];

function removeDuplicates(arr) {

    let resultElements = [];

    for (let i = 0; i < arr.length; i++) {
        if (resultElements.includes(arr[i].toLowerCase()) === false) {
            resultElements.push(arr[i].toLowerCase());
        }
    }
    return resultElements;
}

const result = removeDuplicates(arr);

function getResultSeventhTask() {
    const taskElement = document.createElement('div');
    document.getElementById('result-7').appendChild(taskElement);
    taskElement.innerHTML = `[${result}].`;
}

export { getResultSeventhTask };