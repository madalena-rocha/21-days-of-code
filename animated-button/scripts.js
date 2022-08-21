let switchTheme = document.querySelector('#switch-theme');
let container = document.querySelector('.container');

switchTheme.onclick = function() {
    container.classList.toggle('active');
}