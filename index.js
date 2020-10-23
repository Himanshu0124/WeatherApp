const weatherApi = {
    key : "dd481e93752b46d8a6076a0eac3d2bec",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}


const InputCity = document.getElementById("city2");

InputCity.addEventListener('keypress' , (event)=> {
         if(event.keyCode == 13){   
        console.log(InputCity.value);
        getWeatherReport(InputCity.value);
         }
});

//======Get Weather Report==========//
function getWeatherReport(city){
     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`)
     .then(weather => {
         return weather.json();
     }).then(showWeatherReport)
}

//======Show Weather Report==========//
function showWeatherReport(weather){
     console.log(weather);

     let city = document.getElementById("city3");
     city.innerText = `${weather.name} , ${weather.sys.country}`;
   let temprature = document.getElementById("temp");
temprature.innerHTML = `${Math.round((weather.main.temp)-273.15)}&deg;C`;

let todayWeather = document.getElementById("weather");
todayWeather.innerText = `${weather.weather[0].main}`;

let minMaxtemp = document.getElementById("min-max");
minMaxtemp.innerHTML = `${Math.floor((weather.main.temp_min)-273.15)}&deg;C (min)/ ${Math.ceil((weather.main.temp_max)-273.15)}&deg;C (max)`;

let todayDate = document.getElementById("date2");
todayDate.innerText = `${Date()}`;

if(todayWeather.textContent =='Clear'){
     document.body.style.backgroundImage= "url('Clear.jpg')";
}
else if(todayWeather.textContent =='Haze'){
    document.body.style.backgroundImage= "url('Haze.jpg')";
}
else if(todayWeather.textContent =='Clouds'){
    document.body.style.backgroundImage= "url('Cloudy.jpg')";
}
else if(todayWeather.textContent =='Rain'){
    document.body.style.backgroundImage= "url('Rains.jpg')";
}
else if(todayWeather.textContent =='Sunny'){
    document.body.style.backgroundImage= "url('Sunny.jpg')";
}
else if(todayWeather.textContent =='Smoke'){
    document.body.style.backgroundImage= "url('Smoke.jpg')";
}
else if(todayWeather.textContent =='Mist'){
    document.body.style.backgroundImage= "url('Mist.jpg')";
}
}












