
        document.addEventListener('DOMContentLoaded', function() {
            // Get URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Membership level mapping
            const membershipLevels = {
                'np': 'NP Membership (Non-Profit)',
                'bronze': 'Bronze Membership',
                'silver': 'Silver Membership',
                'gold': 'Gold Membership'
            };
            
            // Create HTML for application details
            let detailsHTML = '';
            
            // First Name
            if (urlParams.has('firstName')) {
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">First Name:</div>
                        <div class="info-value">${urlParams.get('firstName')}</div>
                    </div>
                `;
            }
            
            // Last Name
            if (urlParams.has('lastName')) {
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">Last Name:</div>
                        <div class="info-value">${urlParams.get('lastName')}</div>
                    </div>
                `;
            }
            
            // Email
            if (urlParams.has('email')) {
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">Email:</div>
                        <div class="info-value">${urlParams.get('email')}</div>
                    </div>
                `;
            }
            
            // Phone
            if (urlParams.has('phone')) {
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">Mobile Phone:</div>
                        <div class="info-value">${urlParams.get('phone')}</div>
                    </div>
                `;
            }
            
            // Business Name
            if (urlParams.has('businessName')) {
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">Business Name:</div>
                        <div class="info-value">${urlParams.get('businessName')}</div>
                    </div>
                `;
            }
            
            // Membership Level
            if (urlParams.has('membershipLevel')) {
                const level = urlParams.get('membershipLevel');
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">Membership Level:</div>
                        <div class="info-value">${membershipLevels[level] || level}</div>
                    </div>
                `;
            }
            
            // Timestamp
            if (urlParams.has('timestamp')) {
                detailsHTML += `
                    <div class="info-item">
                        <div class="info-label">Application Date:</div>
                        <div class="info-value">${urlParams.get('timestamp')}</div>
                    </div>
                `;
            }
            
            // Add the HTML to the page
            document.getElementById('applicationDetails').innerHTML = detailsHTML;
        });
