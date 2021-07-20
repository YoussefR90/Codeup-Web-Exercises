"use strict";
$(document).ready(function() {
    var coord2 = [-95.3698, 29.4252]
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: weatherApi,
        lat: coord2[1],
        lon: coord2[0],
        units: "imperial"
    }).done(function (data) {
        for (let i = 0; i < 5; i++) {
            let day = new Date(data.daily[i].dt * 1000)
            $('#card-div').append(`
                          <div class="col ml-3">
                              <div class="card text-center" style="background-color: #ADD8e6; ">
                                  <div class="card-header bg-light" style="color: #c3d0dc">
                                          ` + (day.getMonth() + 1) + `/` + day.getDate() + `
                                  </div>
                                  <div class="" >
                                      <ul class="list-group list-group-flush">
                                          <li class="list-group-item" id="list"> ${data.daily[i].temp.max} / ${data.daily[i].temp.min}</li>
                                          <li class="list-group-item text-left" id="list">Description: <strong>${data.daily[i].weather[0].description}</strong></li>
                                          <li class="list-group-item text-left" id="list">Humidity: <strong>${data.daily[i].humidity}</strong></li>
                                          <li class="list-group-item text-left" id="list">Wind: <strong>${data.daily[i].wind_speed}</strong></li>
                                          <li class="list-group-item text-left" id="list">Pressure: <strong>${data.daily[i].pressure}</strong></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>`)
        }
    });

    mapboxgl.accessToken = mapboxAPIKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coord2,
        zoom: 10
    });
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }

    var newC = ""
    $('#find-button').click(function(){
        geocode(document.getElementById('input').value, mapboxAPIKey).then(function (value){
            $('#card-div').html("")
            coord2 = value,
                map.flyTo({
                    center: [
                        coord2[0],
                        coord2[1]
                    ],
                    essential: true
                });
            $.get(`https://api.openweathermap.org/data/2.5/onecall?`, {
                APPID: weatherApi,
                lat:coord2[1],
                lon:coord2[0],
                units: "imperial"
            }).done(function(data) {
                console.log(data)
                for (let i = 0; i < 5; i++) {
                    let day = new Date(data.daily[i].dt * 1000)
                    $('#card-div').append(`
                          <div class="col ml-3">
                              <div class="card text-center " style="background-color: #b326fa;">
                                  <div class="card-header bg-light" style="color: #8126fa">
                                      ` + (day.getMonth() + 1) + `/` + day.getDate() + `
                                  </div>
                                  <div class="" >
                                      <ul class="list-group list-group-flush">
                                          <li class="list-group-item" id="list"> ${data.daily[i].temp.max} / ${data.daily[i].temp.min}</li>
                                          <li class="list-group-item text-left" id="list">Description: <strong>${data.daily[i].weather[0].description}</strong></li>
                                          <li class="list-group-item text-left" id="list">Humidity: <strong>${data.daily[i].humidity}</strong></li>
                                          <li class="list-group-item text-left" id="list">Wind: <strong>${data.daily[i].wind}</strong></li>
                                          <li class="list-group-item text-left" id="list">Pressure: <strong>${data.daily[i].pressure}</strong></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>`)
                }

            });
            newC = document.getElementById('input').value
            $('#current-city').html(": " + newC)
        });
    });
});
// adds zoom controls on the map.

map.addControl(new mapboxgl.NavigationControl());
