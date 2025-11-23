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

const container = document.getElementById('memberContainer');

let members = [];
let currentView = 'grid';

async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');
    members = await response.json();
    displayMembers();
  } catch (error) {
    container.innerHTML = `<p>Error loading data: ${error.message}</p>`;
  }
}


function getMembershipLabel(level) {
  switch(level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Member';
  }
}

function displayMembers() {
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card';

    if (currentView === 'list') {
      card.classList.add('list');
    }

    const img = document.createElement('img');
    img.src = member.image;
    img.alt = member.name;

    const infoDiv = document.createElement('div');

    const nameEl = document.createElement('h3');
    nameEl.textContent = member.name;

    const addressEl = document.createElement('p');
    addressEl.innerHTML = `<strong>Address:</strong> ${member.address}`;

    const phoneEl = document.createElement('p');
    phoneEl.innerHTML = `<strong>Phone:</strong> ${member.phone}`;

    const websiteEl = document.createElement('p');
    websiteEl.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;

    const membershipEl = document.createElement('p');
    membershipEl.innerHTML = `<strong>Membership:</strong> ${getMembershipLabel(member.membership_level)}`;

    const otherInfoEl = document.createElement('p');
    otherInfoEl.innerHTML = `<em>${member.other_info}</em>`;

    infoDiv.appendChild(nameEl);
    infoDiv.appendChild(addressEl);
    infoDiv.appendChild(phoneEl);
    infoDiv.appendChild(websiteEl);
    infoDiv.appendChild(membershipEl);
    infoDiv.appendChild(otherInfoEl);

    card.appendChild(img);
    card.appendChild(infoDiv);

    container.appendChild(card);
  });
}