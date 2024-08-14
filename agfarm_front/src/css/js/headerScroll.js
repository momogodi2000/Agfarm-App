window.onscroll = function () {
    // Use querySelector to select the header element
    const header = document.querySelector('.header');
    
    // Check if the header exists before accessing classList
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    } else {
        console.error('Header element not found');
    }
};
