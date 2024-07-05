document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted:', { name, email, message });
            
            // Clear the form
            contactForm.reset();
            
            // Show a success message
            alert('Thank you for your message. We will get back to you soon!');
        });
    }
});