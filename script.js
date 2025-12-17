const linkedinBtn = document.querySelector('.linkedin-btn');
const githubBtn = document.querySelector('.github-btn');



linkedinBtn.addEventListener('click', (e) => {
    e.preventDefault();
window.open('https://www.linkedin.com/in/camille-lebigot-pro/', '_blank', 'noopener');
});

githubBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://github.com/Camille-lt', '_blank');
});

const cards = document.querySelectorAll('.Skills-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});