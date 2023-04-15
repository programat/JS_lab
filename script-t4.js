// Получаем все блоки по классу
const blocks = document.querySelectorAll('.t4-box-layout');

// Массив путей к изображениям
const images = [
    'jungle covers/jungle candle flame cover.png',
    'jungle covers/jungle for ever cover.png',
    'jungle covers/jungle jungle cover.jpg',
    'jungle covers/jungle loving in stereo cover.jpg'
];

// Функция, которая отображает и скрывает изображение в случайном блоке
function showImage() {
    // Генерируем случайный индекс блока
    const index = Math.floor(Math.random() * blocks.length);
    // Получаем блок по индексу
    const block = blocks[index];
    // Получаем изображение в блоке
    const image = block.querySelector('.t4-box-image');

    // Получаем случайный путь к изображению
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Отображаем случайное изображение
    image.style.display = 'block';
    image.src = randomImage;

    // Через 100 мс скрываем изображение
    setTimeout(() => {
        image.style.display = 'none';
    }, 100);
}



// JavaScript код для обработчика события на кнопке
const button = document.getElementById('neuromorphic-button');
let intervalId;

function toggleButton() {
    if (button.querySelector('.button-label').innerText === 'Stop') {
        button.querySelector('.button-label').innerText = 'Run';
        clearInterval(intervalId);
        intervalId = null;
    } else {
        button.querySelector('.button-label').innerText = 'Stop';
        intervalId = setInterval(showImage, 100);
    }
}


button.addEventListener('click', toggleButton);
