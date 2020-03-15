const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
.forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    ev.preventDefault();
    display.value += ev.target.innerText;
}