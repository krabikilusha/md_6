let button = document.querySelector('button');
let para = document.querySelector('p');

button.addEventListener('mousedown', (event) => {
    console.log('Обработчик Кнопки');

    if (event.which === 3) {
        event.stopPropagation();
    }
});

para.addEventListener('mousedown', () => {
    console.log('Обработчик параграфа');
});

addEventListener('keypress', (e) => {
    if (String.fromCharCode(event.charCode).toLowerCase() === 'm' && event.shiftKey) {
        console.log('Вы создали горячую клавишу');
    }
});

document.querySelector('#duplicateField').addEventListener('click', 
(event) => {
  alert('Событие потомка');
  event.stopPropagation();
})