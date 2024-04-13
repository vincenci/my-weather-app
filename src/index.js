
function handleSearch(){
    event.preventDefault();
 let searchCityElement=document.querySelector("#search-city") ;
  let cityElement=document.querySelector("#city") ;
  cityElement.innerHTML=searchCityElement.value;
}

let searchElement=document.querySelector("#search-form");
searchElement.addEventListener("submit",handleSearch);