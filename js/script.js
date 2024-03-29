document.querySelector('#submit').addEventListener("click", displayLocation);
document.querySelector('#location').addEventListener("change", displayLocation);
document.querySelector('#login').addEventListener("click", checkLogin);
document.querySelector("#location").addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    displayLocation();
  }
});
document.querySelector("#login").addEventListener("submit", function(event) {
  validateForm(event); // Ensure validateForm function is defined elsewhere in your code
});

async function displayLocation() {
  let locationValue = document.querySelector("#location").value;
  console.log(locationValue);
  let url = `https://api.weatherapi.com/v1/current.json?key=7b49d29a623b41c7906172426230711&q=${locationValue}&aqi=no`;

  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    let data = await response.json();

    console.log(data);
    console.log(data.current.temp_f);

    let furl = `https://api.weatherapi.com/v1/forecast.json?key=7b49d29a623b41c7906172426230711=${locationValue}&days=7`;
    let fresponse = await fetch(furl);
    if (!fresponse.ok) throw new Error('Network response was not ok');
    let fdata = await fresponse.json();
    console.log(fdata);
    const forecastDays = fdata.forecast.forecastday;

    // Loop through days
    for (let i = 0; i < forecastDays.length; i++) {
      const day = forecastDays[i];
      document.querySelector(`#date${i+1}`).innerHTML = getDayOfWeek(day.date);
      document.querySelector(`#high${i+1}`).innerHTML = "High of: " + day.day.maxtemp_f + " °F";
      document.querySelector(`#low${i+1}`).innerHTML = "Low of: " + day.day.mintemp_f + " °F";
      document.querySelector(`#chance${i+1}`).innerHTML = "Chance of Rain: " + day.day.daily_chance_of_rain + "%";
      document.querySelector(`#cond${i+1}`).innerHTML = "Conditions: " + day.day.condition.text + ` <img src="https:${day.day.condition.icon}" alt="condition">`;
    }

    // Update current weather display
    document.querySelector("#dispLocation").innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country;
    document.querySelector("#dispTemp").innerHTML = data.current.temp_f + " °F";
    if (data.current.is_day == 0) {
      document.querySelector("#currentBG").style.backgroundImage = "url('night_sky_image_url')";
      document.querySelector("#currentBG").style.color = "white";
    } else {
      document.querySelector("#currentBG").style.backgroundImage = "url('day_sky_image_url')";
      document.querySelector("#currentBG").style.color = "black";
    }
    document.querySelector("#dispCond").innerHTML = data.current.condition.text + ` <img src="https:${data.current.condition.icon}" alt="condition">`;

  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

function getDayOfWeek(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
}
