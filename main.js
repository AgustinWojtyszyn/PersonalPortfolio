// Page transition functionality
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const transitionLayer = document.createElement('div');
    transitionLayer.className = 'page-transition';
    document.body.appendChild(transitionLayer);

    links.forEach(link => {
        if (link.href && link.href.includes('.html')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                transitionLayer.style.opacity = '1';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500);
            });
        }
    });
});

// Back to top button functionality
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
