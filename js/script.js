document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    const path = window.location.pathname.split('/').pop();

    if (path) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } else {
        // Assume que a página inicial é index.html
        document.querySelector('header nav a[href="index.html"]').classList.add('active');
    }
});