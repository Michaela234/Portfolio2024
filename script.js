document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content__container");
    const navLinks = document.querySelectorAll(".scrollSpy__link");

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.25 // Trigger when 25% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add 'active' class to the corresponding link
                const activeLink = document.querySelector(`.scrollSpy__link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});