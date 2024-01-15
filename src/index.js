let apiKey = "a867e25f2d83db579421a57fd8e937ec";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let sentance = document.querySelector("h1");
  sentance.innerHTML = `It is ${temperature} degrees in ${city}`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
