const API_KEY ="cc4d1da42a9457f6a10ae1bb3edb2229";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log(`You live in ${lat} ${lng}`);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response => Response.json())
    .then((data) => {
        let weather = document.querySelector("#weather i")
        const temp = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        changeIcons(data.weather[0].main);
        city.innerText = data.name;
        // weather.innerText = `${data.weather[0].main}`;
        temp.innerText = ` ${data.main.temp} ℃`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);

function changeIcons(data){
    const weathericon = document.querySelector("#weather i");
    if (data ==='Rain'){
        weathericon.classList.add('fas','fa-umbrella');
    } else if (data ==='Clear'){
        weathericon.classList.add('fas','fa-sun');
    } else if (data ==='Thunderstorm' ){
        weathericon.classList.add('fas','fa-bolt');
    } else if (data ==='Drizzle'){
        weathericon.classList.add('fas','fa-water');
    } else if (data ==='Snow'){
        weathericon.classList.add('fas','fa-snowflake');
    } else if (data ==='Atmosphere'){
        weathericon.classList.add('fas','fa-smog');
    } else if (data ==='Clouds'){
        weathericon.classList.add('fas','fa-cloud-sun');
    } else {
        weathericon.classList.add('fas','fa-sun');
    }
    console.log(weathericon);
}