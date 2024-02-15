//Custom javascript

//Toggle header visibility on scroll down/up
let lastScrollTop = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll, hide header
        header.classList.add('hide-header');
    } else {
        // Upscroll, show header
        header.classList.remove('hide-header');
    }
    lastScrollTop = scrollTop;
});