const container = document.getElementById('memberContainer');
const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');

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

document.getElementById('gridViewBtn').addEventListener('click', () => {
  currentView = 'grid';
  container.classList.add('grid');
  displayMembers();
});

document.getElementById('listViewBtn').addEventListener('click', () => {
  currentView = 'list';
  container.classList.remove('grid');
  displayMembers();
});

// Initialize
fetchMembers();

// Set last modified date in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lastModified').textContent = document.lastModified;
});

//hamburguer menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


