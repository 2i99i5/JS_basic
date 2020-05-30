const modal = document.querySelector('.wrap');
const closeButton = document.querySelector('span');
const showButton = document.querySelector('button');

closeButton.addEventListener('click', function () {
    modal.classList.remove('animate__backInLeft');
    modal.classList.add('animate__backOutRight');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1000);
});

showButton.addEventListener('click', function () {
    modal.classList.remove('animate__backOutRight', 'hidden');
    modal.classList.add('animate__animated', 'animate__backInLeft');
});