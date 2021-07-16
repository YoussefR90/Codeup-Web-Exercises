"use strict";


mapboxgl.accessToken = mapboxAPIKeY;

var newMap = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/youssefr90/ckr6ea0mv0nhc18pfhzzckhj3', // style URL
    center: [-95.3698, 29.7604], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

var restaurants = [
    {
        name: 'Pho Saigon',
        location: '890 S Mason Rd, Katy TX',
        dishes: 'Soup'
    },
    {
        name: 'Ephesus Mediterranean Grill',
        location: '510 S Mason Rd, Katy TX',
        dishes: 'Greek and mediterranean'
    },
    {
        name: 'OMG Burger!',
        location: '1230 N Mason Rd, Katy Tx',
        dishes: 'Burgers'
    }
];

restaurants.forEach(function (restaurants){
    geocode( restaurants.location, mapboxAPIKeY).then(function (results){
        var popup = new mapboxgl.Popup()
            .setHTML('<h6>'
                + restaurants.name
                +'<br>'
                + restaurants.location
                +'<br>'
                + restaurants.dishes
                + '</h6>')

        new mapboxgl.Marker({color: "orange"})
            .setLngLat(results)
            .setPopup(popup)
            .addTo(newMap)
    })
})
var zoomSelect = document.getElementById("zoom-select");
$('#zoom-select').change(function(e){
    console.log(e.target.value);
    map.setZoom(e.target.value);
});

/**
<--
$('#zoom-select').change(function (){
    if(value=='5') {

    }
}
-->
     **/