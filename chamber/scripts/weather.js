// select html elements in the document
  const myTown = document.querySelector('#town');
  const myDescription = document.querySelector('#description');
  const myTemperature = document.querySelector('#temperature');
  const myGraphic = document.querySelector('#graphic');

  //variables for the URL   
  const myKey = "36ace5d273812cc02556b82a21f1ff2e"
  const myLat = "15.60597737680402"
  const myLong = "-87.95549721113105"

  //construc a path
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

  //weather data
  async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  myTown.innerHTML = data.name
  myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute(`SRC`, iconsrc)
  myGraphic.setAttribute(`alt`, data.weather[0].description)

}

apiFetch();
