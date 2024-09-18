const servicesDropdown = document.querySelector('.dropdown-toggle');

servicesDropdown.addEventListener('click', (event) => {
    // event.preventDefault();
    // servicesDropdown.click(); // Open the dropdown menu
    window.location.href = '#services'; // Navigate to the services section
});

