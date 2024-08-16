document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu and Social Icons
    document.addEventListener('click', function (event) {
        const menuIcon = document.querySelector('.menu-icon');
        const socialText = document.querySelector('.social-text');
        const pagination = document.querySelector('.pagination');
        const socialIcons = document.querySelector('.social-icons');

        if (menuIcon.contains(event.target)) {
            const isHidden = window.getComputedStyle(pagination).display === 'none';
            pagination.style.display = isHidden ? 'flex' : 'none';
            socialIcons.style.display = 'none'; // Close social icons if open
        } else if (socialText.contains(event.target)) {
            const isHidden = window.getComputedStyle(socialIcons).display === 'none';
            socialIcons.style.display = isHidden ? 'flex' : 'none';
            pagination.style.display = 'none'; // Close menu if open
        } else {
            pagination.style.display = 'none';
            socialIcons.style.display = 'none';
        }
    });
});
