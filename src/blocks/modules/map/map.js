$(function() {
    let myMap = null;

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map('ymaps', {
            center: [55.76262156896451,37.52717499999993],
            zoom: 17,
            controls: []
        });

        setPlaceMarker()
    }

    function setPlaceMarker() {
        const placeMark = new ymaps.Placemark([55.76262156896451,37.52717499999993], {
            hintContent: "BorisHof Geely",
            balloonContent: "г. Москва, 2-я Магистральная ул., д. 18, стр. 22"
        }, {
            iconLayout: 'default#image',
            iconImageHref: "./img/content/location-map.png",
            iconImageSize: [50, 50],
            // iconImageOffset: [-10, -30]
        })

        myMap.geoObjects.add(placeMark);
    }
})