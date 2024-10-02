// document.querySelectorAll('#top-navbar .nav-link').forEach(link => {
//     link.addEventListener('click', function() {

//         const targetSection = this.getAttribute('href');

//         // Get the offcanvas element
//         var offcanvasElement = document.getElementById('top-navbar');
//         // Hide the offcanvas after click

//         if(targetSection === "#about") {
//             console.log(offcanvasElement);
//         } else {
//             var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); 
//             offcanvas.hide();
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarIcon = document.getElementById('navbar-icon');
    
    navbarToggler.addEventListener('click', function() {
        const isCollapsed = navbarToggler.getAttribute('aria-expanded') === 'false';
        
        if (isCollapsed) {
            navbarIcon.classList.remove('bi-x');
            navbarIcon.classList.add('bi-list');  // Change back to original icon when closed
        } else {
            navbarIcon.classList.remove('bi-grid');
            navbarIcon.classList.add('bi-x');  // Change this to whatever icon you want when open
        }
    });
});

document.querySelectorAll('#top-navbar .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Smooth scroll to the target section
        const target = this.getAttribute('href');
        if (target && target.startsWith('#')) {
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Delay closing the offcanvas menu to ensure scrolling happens
        setTimeout(() => {
            var offcanvasElement = document.getElementById('top-navbar');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        }, 300); // Adjust delay timing if necessary
    });
});

