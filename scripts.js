// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



// Initialize testimonial carousel
const carousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 4000,
    wrap: true
});

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

