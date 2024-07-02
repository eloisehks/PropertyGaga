document.addEventListener('DOMContentLoaded', function() {
    function highlightSection(targetElement) {
        if (targetElement) {
            // Define the custom smooth scroll behavior
            const scrollOptions = {
                top: targetElement.offsetTop,
                left: 0,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);

            targetElement.classList.add('highlight');
            setTimeout(() => {
                targetElement.classList.remove('highlight');
                targetElement.classList.add('highlighted');
            }, 6000); // Duration of the animation
        }
    }

    // Check if there's a hash in the URL on page load
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            // Wait a bit for the browser to correctly jump to the anchor before highlighting
            setTimeout(() => {
                highlightSection(targetElement);
            }, 100);
        }
    }

    // Add click event listeners to nav links (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            highlightSection(targetElement);
        });
    });
});

