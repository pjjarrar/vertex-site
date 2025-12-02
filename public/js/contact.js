document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Clear previous status
            formStatus.textContent = 'Sending...';
            formStatus.className = 'mt-3 text-center text-primary';

            // Gather form data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const subject = contactForm.querySelector('input[name="subject"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            // Combine name
            const fullName = `${firstName} ${lastName}`.trim();

            const formData = {
                name: fullName,
                email: email,
                subject: subject,
                message: message
            };

            try {
                const response = await fetch('/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.className = 'mt-3 text-center text-success';
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                formStatus.textContent = 'Error sending message. Please try again later.';
                formStatus.className = 'mt-3 text-center text-danger';
            }
        });
    }
});
