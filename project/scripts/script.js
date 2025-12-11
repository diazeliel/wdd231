const container = document.getElementById('jobsContainer');
const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');


let jobs = [];
let currentView = 'grid';

async function fetchjobs() {
  try {
    const response = await fetch('data/jobs.json');
    if (!response.ok) throw new Error('Network response was not ok');
    jobs = await response.json();
    displayjobs();
  } catch (error) {
    container.innerHTML = `<p>Error loading data: ${error.message}</p>`;
  }
}



function displayjobs() {
  container.innerHTML = '';

  jobs.forEach(jobs => {
    const card = document.createElement('div');
    card.className = 'jobs-card';

    if (currentView === 'list') {
      card.classList.add('list');
    }

   

    const infoDiv = document.createElement('div');

    const nameEl = document.createElement('h3');
    nameEl.textContent = jobs.position;

    const addressEl = document.createElement('p');
    addressEl.innerHTML = `<strong>Address:</strong> ${jobs.company}`;

    const phoneEl = document.createElement('p');
    phoneEl.innerHTML = `<strong>Phone:</strong> ${jobs.location}`;

    const websiteEl = document.createElement('p');
    websiteEl.innerHTML = `<a href="${member.website}" target="_blank">${jobs.salary_range}</a>`;

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
