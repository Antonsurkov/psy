// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.card, .stat, .price-card, .outcome, .split-col, .contact-link'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// inject fade-in styles dynamically so CSS file stays clean
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
