const weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function getResultSixthTask() {

    weekDays.forEach((day) => {
        const taskElement = document.createElement('div');
        document.getElementById('result-6').appendChild(taskElement);
        taskElement.innerHTML = day;

        let fullDate = new Date();

        function getweekday(fullDate) {
            return weekDays[fullDate.getDay()];
        }

        let today = getweekday(fullDate);

        if (day === today) {
            taskElement.classList.add('today');
        }
    });
}

export { getResultSixthTask };