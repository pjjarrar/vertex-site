// changes icon on navbar depending on the state of aria-expanded - used for collapse navbar

// document.addEventListener("DOMContentLoaded", function() {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarIcon = document.getElementById('navbar-icon');
    
//     navbarToggler.addEventListener('click', function() {
//         const isCollapsed = navbarToggler.getAttribute('aria-expanded') === 'false';
        
//         if (isCollapsed) {
//             navbarIcon.classList.remove('bi-x');
//             navbarIcon.classList.add('bi-list');  // Change back to original icon when closed
//         } else {
//             navbarIcon.classList.remove('bi-grid');
//             navbarIcon.classList.add('bi-x');  // Change this to whatever icon you want when open
//         }
//     });
// });

// closes the navbar when a link is clicked
document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
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
            var offcanvasElement = document.getElementById('offcanvasNavbar');
            // var offcanvas = bootstrap.Collapse.getInstance(offcanvasElement);
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        }, 100); // Adjust delay timing if necessary
    });
});

