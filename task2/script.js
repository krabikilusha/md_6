const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода в консоль');
});

console.log('Пример использования команды alert');

const fullname = prompt('Пример использования команды prompt');
console.log(fullname);