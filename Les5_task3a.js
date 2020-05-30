const modal = document.querySelector('.wrap');
const closeButton = document.querySelector('span');
const showButton = document.querySelector('button');

closeButton.addEventListener('click', function () {
    modal.classList.add('hidden');
});

showButton.addEventListener('click', function () {
    modal.classList.remove('hidden');
});