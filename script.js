// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.id = 'scrollToTopButton';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px';
    scrollToTopButton.style.fontSize = '1.5em';
    scrollToTopButton.style.background = '#333';
    scrollToTopButton.style.color = '#fff';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '5px';
    document.body.appendChild(scrollToTopButton);

    // Show or hide button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
