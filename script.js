const linkedinBtn = document.querySelector('.linkedin-btn');
const githubBtn = document.querySelector('.github-btn');
const linkedinBtnOne = document.querySelector('.linkedin-btn-one');
const githubBtnOne = document.querySelector('.github-btn-one');
const links = document.querySelectorAll('.nav-items a');



links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

linkedinBtnOne.addEventListener('click', (e) => {
    e.preventDefault();
window.open('https://www.linkedin.com/in/camille-lebigot-pro/', '_blank', 'noopener');
});

githubBtnOne.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://github.com/Camille-lt', '_blank');
});



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