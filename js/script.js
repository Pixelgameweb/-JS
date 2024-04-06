let imgSrc = ['img/windows-98-1.webp', 'img/windows-98-2.webp', 'img/windows-98-3.webp', 'img/windows-98-4.webp', 'img/windows-98-5.webp', 'img/windows-98-6.webp', 'img/windows-98-7.webp', 'img/windows-98-8.webp', 'img/windows-98-9.webp', 'img/windows-98-10.webp', 'img/windows-98-11.webp', 'img/windows-98-12.webp', 'img/windows-98-13.webp', 'img/windows-98-14.webp', 'img/windows-98-15.webp', 'img/windows-98-16.webp','img/windows-98-17.webp', 'img/windows-98-18.webp', 'img/windows-98-19.webp', 'img/windows-98-20.webp', 'img/windows-98-21.webp', 'img/windows-98-22.webp', 'img/windows-98-23.webp', 'img/windows-98-24.webp', 'img/windows-98-25.webp', 'img/windows-98-26.webp', 'img/windows-98-27.webp', 'img/windows-98-28.webp', 'img/windows-98-29.webp', 'img/windows-98-30.webp'];

//Получить ссылки на элементы
const leftControl = document.querySelector("#left");
const rightControl = document.querySelector("#right")
const image = document.querySelector("#image");
const indicators = document.querySelector("#indicators");

let indicator;

// Перебираем массив картинок и создаем такое же количество индикаторов
imgSrc.forEach(( ) => {
    indicator = document.createElement("li");
    indicators.appendChild(indicator);
    indicator.classList.add("slider__indicator");
})

// for (let img of imgSrc) {
//     indicator = document.createElement("li");
//     indicators.appendChild(indicator);
//     indicator.classList.add("slider__indicator");
// }

//Получить индикаторы созданные динамически
let indicatorList = document.querySelectorAll(".slider__indicator")

// Сделать  активным первый индикатор 
indicatorList[0].classList.add("active");

//Функция подсветки активного индикатора
function addActiveIndicator(index) {
    for (const indicator of indicatorList) {
        indicator.classList.remove("active");
    }
    indicatorList[index].classList.add("active");
}

// i = индекс картинки 
let i = 0;
// Изначально отображать первую картинку из списка
image.src = imgSrc[i];

// Следующее изображение
rightControl.addEventListener("click", (e)=>{
    e.preventDefault( );
    i++;
    if (i == imgSrc.leght) {
        i = 0;
    }
    image.src = imgSrc[i];
    addActiveIndicator(i);
})

// Предыдущее изображение
leftControl.addEventListener("click", (e)=>{
    e.preventDefault( );
    i--;
    if (i < 0) {
        i = imgSrc.leght - 1;
    }
    image.src = imgSrc[i];
    addActiveIndicator(i);
})

