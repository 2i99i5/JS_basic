'use strict';
let multiItemSlider = (function () {
    return function (selector, config) {
    let mainElement = document.querySelector(selector), // основный элемент блока
        sliderWrapper = mainElement.querySelector('.slider_wrapper'), // обертка для .slider-item
        sliderItems = mainElement.querySelectorAll('.slider_item'), // элементы
        sliderControls = mainElement.querySelectorAll('.slider_control'), // элементы управления
        sliderControlLeft = mainElement.querySelector('.slider_control_left'), // кнопка "LEFT"
        sliderControlRight = mainElement.querySelector('.slider_control_right'), // кнопка "RIGHT"
        wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
        itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента
        positionLeftItem = 0, // позиция левого активного элемента
        transform = 0, // значение транфсофрмации .slider_wrapper
        step = itemWidth / wrapperWidth * 100, // величина шага для трансформации
        items = []; // массив элементов

    // наполнение массива items
    sliderItems.forEach(function (item, index) {
        items.push({ item: item, position: index, transform: 0 });
    });

    let position = {
        getMin: 0,
        getMax: items.length - 1,
    }

    let transformItem = function (direction) {
        if (direction === 'right') {
            if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
                return;
            }
            if (!sliderControlLeft.classList.contains('slider_control_show')) {
                sliderControlLeft.classList.add('slider_control_show');
            }
            if (sliderControlRight.classList.contains('slider_control_show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
                sliderControlRight.classList.remove('slider_control_show');
            }
            positionLeftItem++;
            transform -= step;
        }
        if (direction === 'left') {
            if (positionLeftItem <= position.getMin) {
                return;
            }
            if (!sliderControlRight.classList.contains('slider_control_show')) {
                sliderControlRight.classList.add('slider_control_show');
            }
            if (sliderControlLeft.classList.contains('slider_control_show') && positionLeftItem - 1 <= position.getMin) {
                sliderControlLeft.classList.remove('slider_control_show');
            }
            positionLeftItem--;
            transform += step;
        }
        sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    let controlClick = function (el) {
        if (el.target.classList.contains('slider_control')) {
        el.preventDefault();
        let direction = el.target.classList.contains('slider_control_right') ? 'right' : 'left';
        transformItem(direction);
        }
    };

    // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
    let setupListeners = function () {
        sliderControls.forEach(function (item) {
        item.addEventListener('click', controlClick);
        });
    }

    // инициализация
    setupListeners();

    return {
        right: function () { // метод right
        transformItem('right');
        },
        left: function () { // метод left
        transformItem('left');
        }
    }

    }
}());

let slider = multiItemSlider('.slider');