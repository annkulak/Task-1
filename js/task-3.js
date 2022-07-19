const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
    return arr.map((element) => element);
}
const arr = arrayClone(vegetables);

function arrayNewClone() {
    return Array.from(vegetables);
}
const result = arrayNewClone();

function getResultThirdTask() {
    const taskElement = document.createElement('div');
    document.getElementById('result-3').appendChild(taskElement);
    taskElement.innerHTML = ` 
    1) метод map(): arr = [${arr}]; <br />
    2) метод Array.from(): newArr = [${result}].`
}

export { getResultThirdTask };