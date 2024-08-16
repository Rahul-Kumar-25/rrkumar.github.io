window.navigateToPage = function(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        switch (page) {
            case 1:
                window.location.href = 'index.html';
                break;
            case 2:
                window.location.href = 'page2.html';
                break;
            case 3:
                window.location.href = 'page3.html';
                break;
            case 4:
                window.location.href = 'page4.html';
                break;
        }
    }, 500); // Delay to allow fade out effect
};
