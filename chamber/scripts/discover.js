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
            
            // Close navbar when clicking on a link (mobile)
            var navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 991.98) {
                        navbarNav.classList.remove('show');
                        navbarNav.setAttribute('aria-expanded', 'false');
                    }
                });
            });
            
            // Close navbar when clicking outside (mobile)
            document.addEventListener('click', function(event) {
                if (window.innerWidth <= 991.98 && 
                    !navbarNav.contains(event.target) && 
                    !navbarToggler.contains(event.target)) {
                    navbarNav.classList.remove('show');
                    navbarNav.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 991.98) {
                    navbarNav.classList.remove('show');
                    navbarNav.setAttribute('aria-expanded', 'false');
                }
            });
