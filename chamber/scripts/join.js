document.addEventListener('DOMContentLoaded', function() {
            //Initialize Bootstrap components
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
       
            // Set timestamp to current date and time
            const timestampField = document.getElementById('timestamp');
            const now = new Date();
            timestampField.value = now.toLocaleString();
            
            // Modal functionality
            const modals = {
                'np': document.getElementById('npModal'),
                'bronze': document.getElementById('bronzeModal'),
                'silver': document.getElementById('silverModal'),
                'gold': document.getElementById('goldModal')
            };
            
            // Membership links
            const membershipLinks = document.querySelectorAll('.membership-link');
            membershipLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const level = this.getAttribute('data-level');
                    modals[level].style.display = 'flex';
                });
            });
            
            // Close modals
            const closeButtons = document.querySelectorAll('.close-modal');
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    Object.values(modals).forEach(modal => {
                        modal.style.display = 'none';
                    });
                });
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target.classList.contains('modal')) {
                    event.target.style.display = 'none';
                }
            });
            
            // Form validation
            const form = document.getElementById('membershipForm');
            form.addEventListener('submit', function(e) {
                // Check if organizational title meets pattern requirements
                const orgTitle = document.getElementById('orgTitle');
                if (orgTitle.value && !orgTitle.checkValidity()) {
                    e.preventDefault();
                    orgTitle.focus();
                    alert('Organizational title must contain at least 7 characters and only letters, spaces, or hyphens.');
                }
            });
});

// Set last modified date in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lastModified').textContent = document.lastModified;
});