const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и вызывает функции
 * показа фотографии или текста.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const itemNode = clickedButtonEvent.target.parentNode;

    const item = {
        wrap: itemNode,
        img: itemNode.querySelector('img'),
        productName: itemNode.querySelector('.productName'),
        button: itemNode.querySelector('button'),
    };

    const textOnButton = item.button.innerText;
    if (textOnButton === 'Подробнее') {
        showText(item);
    } else {
        hideText(item);
    }
}

/**
 * Функция скрывает описание.
 * @param {Object} item 
 */
function hideText(item) {
    item.img.style.display = 'block';
    item.wrap.querySelector('.desc').remove();
    item.button.innerText = 'Подробнее';
}

/**
 * Функция показывает описание.
 * @param {Object} item 
 */
function showText(item) {
    item.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem magnam inventore sit aspernatur incidunt delectus omnis eaque praesentium alias dolor nihil, explicabo beatae tempora perspiciatis voluptates molestiae dolore maxime. Optio illum, pariatur nam fugit reprehenderit ducimus itaque molestiae repellendus dolorum sint! Iure, minima distinctio nesciunt eveniet voluptatum sed illum aperiam.'
    item.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    item.button.innerText = 'Отмена';
}