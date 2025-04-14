/** add library moment */
/** add id for each city next to class="city" in HTML */

/** we want to update the date and time */
/** 
Option 1:
let berlinDateElement = document.querySelector("#berlin" .date ); 

.date here means: it's going to look for the element as the id of "berlin" 
and inside it's going to look for the element that has the class of date */

/** Option 2
 * i wanna find the element "date" and "time" which are inside the element "berlin"
 */

function updateTime() {
  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Seoul
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");
    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Hanoi

  let HanoiElement = document.querySelector("#hanoi");
  if (HanoiElement) {
    let HanoiDateElement = HanoiElement.querySelector(".date");
    let HanoiTimeElement = HanoiElement.querySelector(".time");
    let HanoiTime = moment().tz("Asia/Ho_Chi_Minh");
    HanoiDateElement.innerHTML = HanoiTime.format("MMMM Do YYYY");
    HanoiTimeElement.innerHTML = HanoiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

/** make the drop down work: When choosing a city from drop down,
 * that city will be displayed */

function updateCity(event) {
  let cityTimeZone = event.target.value;

  //create local time zone
  if (cityTimeZone == "current") {
    cityTimeZone = moment.tz.guess();
  }

  //replace(): replace underscore of the city name with space (example New_York => New York)
  //split(): string: 'continent/city' => 'continent','city' => then take the [1] is city
  let cityName = cityTimeZone.replace("_", "").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html"> All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
