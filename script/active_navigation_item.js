document.addEventListener("DOMContentLoaded", function () {
    const url = document.location.href;
    const navLinks = document.querySelectorAll('.hotel_navigation_item a');

    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === url) {
            navLinks[i].parentNode.classList.add('current-menu-item');
            break;
        }
    }
});
