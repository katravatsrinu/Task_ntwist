document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    const newFormButton = document.getElementById('new-form');
    const timeSpentElement = document.getElementById('time-spent');
    
    let startTime = null;
    let formInteracted = false;
    let timerInterval = null;
    
    // Function to format time in minutes and seconds
    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        } else {
            return `${seconds}s`;
        }
    }
    
    // Function to update the time spent
    function updateTimeSpent() {
        if (startTime && formInteracted) {
            const currentTime = new Date();
            const elapsedTime = currentTime - startTime;
            timeSpentElement.textContent = formatTime(elapsedTime);
        }
    }
    
    // Start the timer when any form element receives focus
    contactForm.addEventListener('focusin', function(e) {
        if (!formInteracted && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
            formInteracted = true;
            startTime = new Date();
            
            // Update timer every second
            timerInterval = setInterval(updateTimeSpent, 1000);
        }
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear any interval if running
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Show success message
        contactForm.classList.add('hidden');
        formResponse.classList.remove('hidden');
        
        // Final time update
        updateTimeSpent();
    });
    
    // Reset form when clicking "Submit another form"
    newFormButton.addEventListener('click', function() {
        // Reset form and show it again
        contactForm.reset();
        contactForm.classList.remove('hidden');
        formResponse.classList.add('hidden');
        
        // Reset timing variables
        startTime = null;
        formInteracted = false;
        timeSpentElement.textContent = '0s';
    });
    
    // Star rating functionality
    const stars = document.querySelectorAll('.star-rating input');
    
    stars.forEach(function(star) {
        star.addEventListener('change', function() {
            // Visual feedback when a star is selected
            const rating = this.value;
            console.log(`Rating selected: ${rating} stars`);
        });
    });
});