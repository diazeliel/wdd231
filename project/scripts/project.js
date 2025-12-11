 // Mobile menu toggle
        document.getElementById('mobileMenuToggle').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.getElementById('mainNav').classList.remove('active');
                }
            });
        });

        // Course tab functionality
        const courseTabButtons = document.querySelectorAll('.course-tab-button');
        const courseTabContents = document.querySelectorAll('.course-tab-content');

        courseTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                courseTabButtons.forEach(btn => btn.classList.remove('active'));
                courseTabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Resources tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Save goals functionality
        document.getElementById('save-job-goals').addEventListener('click', function() {
            const journalPrompts = document.querySelectorAll('#job .journal-prompt');
            let goals = [];
            journalPrompts.forEach(prompt => {
                if (prompt.value.trim()) {
                    goals.push(prompt.value.trim());
                }
            });
            
            if (goals.length > 0) {
                localStorage.setItem('jobGoals', JSON.stringify(goals));
                showNotification('Your career goals have been saved!');
            } else {
                showNotification('Please write at least one goal before saving.');
            }
        });

        document.getElementById('save-finance-goals').addEventListener('click', function() {
            const journalPrompts = document.querySelectorAll('#finances .journal-prompt');
            let goals = [];
            journalPrompts.forEach(prompt => {
                if (prompt.value.trim()) {
                    goals.push(prompt.value.trim());
                }
            });
            
            if (goals.length > 0) {
                localStorage.setItem('financeGoals', JSON.stringify(goals));
                showNotification('Your financial goals have been saved!');
            } else {
                showNotification('Please write at least one goal before saving.');
            }
        });

        document.getElementById('save-education-goals').addEventListener('click', function() {
            const journalPrompts = document.querySelectorAll('#education .journal-prompt');
            let goals = [];
            journalPrompts.forEach(prompt => {
                if (prompt.value.trim()) {
                    goals.push(prompt.value.trim());
                }
            });
            
            if (goals.length > 0) {
                localStorage.setItem('educationGoals', JSON.stringify(goals));
                showNotification('Your education goals have been saved!');
            } else {
                showNotification('Please write at least one goal before saving.');
            }
        });

        // Form submission
        document.getElementById('emailForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Create a success message
            const successMessage = document.createElement('div');
            successMessage.style.backgroundColor = '#27ae60';
            successMessage.style.color = 'white';
            successMessage.style.padding = '15px';
            successMessage.style.borderRadius = '5px';
            successMessage.style.marginTop = '20px';
            successMessage.style.textAlign = 'center';
            successMessage.textContent = `Thank you for subscribing with ${email}! Check your inbox for confirmation.`;
            
            // Replace form with success message
            this.parentNode.replaceChild(successMessage, this);
            
            // In a real application, you would send the email to your server here
            console.log('Email submitted:', email);
        });

        // Notification function
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = '#27ae60';
            notification.style.color = 'white';
            notification.style.padding = '15px 20px';
            notification.style.borderRadius = '5px';
            notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            notification.style.zIndex = '1000';
            notification.style.transition = 'opacity 0.3s ease';
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Fade out after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Add animation on scroll
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.feature-card, .course-detail, .resource-card, .testimonial, .quote-container');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial styles for animation
        document.querySelectorAll('.feature-card, .course-detail, .resource-card, .testimonial, .quote-container').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Run animation on scroll
        window.addEventListener('scroll', animateOnScroll);
        // Run once on page load
        animateOnScroll();

//weather
const myKey = '36ace5d273812cc02556b82a21f1ff2e';

function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, handleError);
    } else {
        document.getElementById('weatherInfo').textContent = 'Geolocation is not supported by this browser.';
    }
}

function handleError(error) {
    console.error('Geolocation error:', error);
    document.getElementById('weatherInfo').textContent = 'Unable to retrieve your location.';
}

async function showWeather(position) {
    const myLat = position.coords.latitude;
    const myLong = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

    try {
        const response = await fetch(url);
        console.log('Fetch response:', response);
        const data = await response.json();
        console.log('Weather data:', data);
        
        if (response.ok) {
            // Extract info
            const temp = data.main.temp.toFixed(1);
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon; //get icon code
            const city = data.name;
            
            // Construct icon URL
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


            // Display
            document.getElementById('weatherInfo').innerHTML = `
                <h3>${city}</h3>
                <p>Temperature: ${temp}°F</p>
                <p>Conditions: ${description}</p>
                <img src="${iconUrl}" alt="${description}" style="vertical-align: middle; width: 50px; height: 50px;">
               
            `;
        } else {
            // API error, show message
            document.getElementById('weatherInfo').textContent = data.message || 'Error fetching weather data.';
            console.error('API error:', data);
        }
    } catch (error) {
        document.getElementById('weatherInfo').textContent = 'Error fetching weather data.';
        console.error('Fetch error:', error);
    }
}

// Call on page load
getWeather();


// copyright footer
const footer = document.getElementById('footer');
const lastModified = document.lastModified;
footer.innerHTML = `&copy; ${new Date().getFullYear()} Cristhian Diaz. WDD231. link video https://www.youtube.com/watch?v=ffduFopYe8A <br>
  Last modified: ${lastModified}`;




 