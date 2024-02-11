document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const indicator = document.getElementById('indicator');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            updateIndicator(this);
            // Navigate to the page after a short delay to allow the indicator to move
            setTimeout(() => {
                window.location.href = this.href;
            }, 400);
        });
    });

    // Initialize the indicator position for the new page
    // It first find the that has an href attribute equal
    // to the current URL and stores it in activeLink.
    // The spread operator (...) is used to create an array
    // from the navLinks NodeList, which allows the use of the find method.
    const activeLink = [...navLinks].find(link => link.href === window.location.href);
    if (activeLink) {
        updateIndicator(activeLink);
    }
    // This function get the size of the menu to set the size of the indicator to match
    function updateIndicator(linkElement) {
        const linkRect = linkElement.getBoundingClientRect();
        const navRect = linkElement.closest('nav').getBoundingClientRect();
        indicator.style.left = (linkRect.left - navRect.left) + 'px';
        indicator.style.width = linkRect.width + 'px';
    }
});