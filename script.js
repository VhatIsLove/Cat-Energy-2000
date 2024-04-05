var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
  
navMain.classList.remove('main-nav--nojs');
  
navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
});


initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),
        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [30.32285967962233, 59.93832533227361],
                // Уровень масштабирования
                zoom: 15
            }
        }
    );
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}