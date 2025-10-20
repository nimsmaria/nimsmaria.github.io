// Feedback Form Handling
const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Create feedback card
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded shadow';
    card.innerHTML = `<h3 class="font-bold">${name}</h3><p>${message}</p>`;

    feedbackList.prepend(card); // Show newest feedback first
    // Clear form
    feedbackForm.reset();
});

// Contact Form Handling (Simulation)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
});
