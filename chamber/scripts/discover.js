import {places} from '../data/discover.mjs'
console.log(places)

const showHere = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div')
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo_url}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)

        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.className = 'address'
        theaddress.innerHTML = `<strong>Address:</strong> ${x.address}`
        thecard.appendChild(theaddress)

        const thecost = document.createElement('h')
        thecost.className = 'cost'
        thecost.innerHTML = `<strong>Cost:</strong> ${x.cost}`
        thecard.appendChild(thecost)
        
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        showHere.appendChild(thecard)


    })
}
displayItems(places)

    // Visitor message functionality
    function displayVisitorMessage() {
        const visitorMessageContainer = document.getElementById('visitor-message-container');
        
        // Get the current time in milliseconds
        const now = Date.now();
        
        // Get the last visit from localStorage
        const lastVisit = localStorage.getItem('lastVisit');
        
        let message;
        let iconClass = 'fas fa-info-circle';
        
        if (!lastVisit) {
            // First visit
            message = "Welcome! Let us know if you have any questions.";
            iconClass = 'fas fa-smile';
        } else {
            // Calculate days between visits
            const lastVisitTime = parseInt(lastVisit);
            const daysSinceLastVisit = Math.floor((now - lastVisitTime) / (1000 * 60 * 60 * 24));
            
            if (daysSinceLastVisit < 1) {
                // Less than a day
                message = "Back so soon! Awesome!";
                iconClass = 'fas fa-thumbs-up';
            } else {
                // More than a day
                const dayText = daysSinceLastVisit === 1 ? "day" : "days";
                message = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
                iconClass = 'fas fa-calendar-check';
            }
        }
        
        // Create the message element
        const messageElement = document.createElement('div');
        messageElement.className = 'visitor-message';
        messageElement.innerHTML = `
            <div>
                <i class="${iconClass}"></i>
                <p>${message}</p>
            </div>
            <button class="close-message" aria-label="Close message">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add the message to the container
        visitorMessageContainer.appendChild(messageElement);
        
        // Add close button functionality
        const closeButton = messageElement.querySelector('.close-message');
        closeButton.addEventListener('click', function() {
            messageElement.style.animation = 'slideDown 0.5s ease-out reverse';
            setTimeout(() => {
                visitorMessageContainer.removeChild(messageElement);
            }, 500);
        });
        
        // Update the last visit time in localStorage
        localStorage.setItem('lastVisit', now.toString());
    }
    
    // Call the function to display the visitor message
    displayVisitorMessage();

    const navbarToggler = document.getElementById('navbarToggler');
                const navbarNav = document.getElementById('navbarNav');
                const navlinks = document.querySelectorAll('.nav-link');
                
                // Custom navbar toggle functionality
                navbarToggler.addEventListener('click', function() {
                    if (navbarNav.classList.contains('show')) {
                        navbarNav.classList.remove('show');
                        navbarNav.setAttribute('aria-expanded', 'false');
                    } else {
                        navbarNav.classList.add('show');
                        navbarNav.setAttribute('aria-expanded', 'true');
                    }
                });
                
