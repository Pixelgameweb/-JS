//Получить ссылки на элементы
const leftControl = document.querySelector("#left");
const rightControl = document.querySelector("#right")
const image = document.querySelector("#image");
let indicators = document.querySelector("#indicators");

let indicator;

// Перебираем массив картинок и создаем такое же количество индикаторов
imgSrc.forEach(( ) => {
    indicator = document.createElement("li");
    indicators.appendChild(indicator);
    indicator.classList.add("slider__indicator");
})

// for(let img of imgSrc) {
//     indicator = document.createElement("li");
//     indicators.appendChild(indicator);
//     indicator.classList.add("slider__indicator");
// }

//Получить индикаторы созданные динамически
let indicatorList = document.querySelectorAll(".slider__indicator")

// Сделать  активным первый индикатор 
indicatorList[0].classList.add("active");

//Функция подсветки активного индикатора
function addActiveIndicator(i) {
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
