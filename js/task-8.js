const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7];

const union = function (array1, array2) {

    const arr = array1.concat(array2);

    let resultElements = [];

    for (let i = 0; i < arr.length; i++) {
        if (resultElements.includes(arr[i]) === false) {
            resultElements.push(arr[i]);
        }
    }
    return resultElements;
}

function getResultEighthTask() {
    const taskElement = document.createElement('div');
    document.getElementById('result-8').appendChild(taskElement);
    taskElement.innerHTML = `[${union(array1, array2)}].`;
}

export { getResultEighthTask };