function refreshWeather(response){
    let cityElement=document.querySelector("#city") ;
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let temperatureElement=document.querySelector("#temperature");
    let iconElement=document.querySelector("#icon");
    let dateElement=document.querySelector("#date");
    let currentDate=new Date(response.data.time);

    dateElement.innerHTML=formatDate(currentDate)
    iconElement.innerHTML=`<img src=${response.data.condition.icon_url} alt="icons">`
    temperatureElement.innerHTML=Math.round(response.data.temperature.current)
    windElement.innerHTML=Math.round(response.data.wind.speed);
    humidityElement.innerHTML=response.data.temperature.humidity;
    descriptionElement.innerHTML=response.data.condition.description;
    cityElement.innerHTML=response.data.city;
}

function formatDate(currentDate){
    let day= currentDate.getDay()
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=days[currentDate.getDay()];
    let hours=currentDate.getHours();
    if(hours<10){
      hours=`0${hours}`;
    }
    let minutes=currentDate.getMinutes();
    if(minutes<10){
      minutes=`0${minutes}`;
    }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(myCity){
  let apiKey="4b80ffa1514bb3fdcc613oata4f03d95"
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${myCity}&key=${apiKey}`
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearch(){
    event.preventDefault();
  let searchCityElement=document.querySelector("#search-city") ;
  searchCity(searchCityElement.value);
}


  let searchElement=document.querySelector("#search-form");
  searchElement.addEventListener("submit",handleSearch);
  searchCity("Paris")