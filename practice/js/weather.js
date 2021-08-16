const API_KEY ="cc4d1da42a9457f6a10ae1bb3edb2229";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log(`You live in ${lat} ${lng}`);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&${lng}=126.780656&appid=${API_KEY}`;
    console.log(url);
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);