document.querySelectorAll('#top-navbar .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Get the offcanvas element
        var offcanvasElement = document.getElementById('top-navbar');
        // Hide the offcanvas after click
        var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); 
        offcanvas.hide();
    });
});