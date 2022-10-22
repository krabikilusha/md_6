userTextField .onclick = function() {
    const userText = prompt('Введите текст изменения ссылки');
    const userTextField = document.querySelector('#userTextField');
    userTextField.textContent = userText;
    console.log('Текст в блоке с id userTextField изменён на', userText);
};

userTextField.addEventListener('click', function(event) {
    this.textContent = 'Вы не перешли по ссылке';
    event.preventDefault();
});