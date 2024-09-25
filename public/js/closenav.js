// document.querySelectorAll('#top-navbar .nav-link').forEach(link => {
//     link.addEventListener('click', function() {
//         // Get the offcanvas element
//         var offcanvasElement = document.getElementById('top-navbar');
//         // Hide the offcanvas after click
//         var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); 
//         offcanvas.hide();
//     });
// });

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