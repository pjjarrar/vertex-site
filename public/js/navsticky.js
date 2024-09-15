window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const headerHeight = document.getElementById('header').offsetHeight;
    const scrollY = window.scrollY;
  
    if (scrollY >= headerHeight) {
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('navbar-sticky');
    }
  });