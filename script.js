let cardItem = document.querySelectorAll('.card__item');
let button = document.querySelector('h1')

function flipCard() {
    cardItem.forEach(card => card.classList.toggle('flip'));
}

button.addEventListener('click', flipCard);


