// Toggle menu mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Tutup menu saat link diklik (mobile)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Animasi angka statistik saat terlihat
const statCards = document.querySelectorAll('.stat-num');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'popIn 0.5s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statCards.forEach(card => observer.observe(card));

// Tambahkan keyframe popIn via JS
const style = document.createElement('style');
style.textContent = `
  @keyframes popIn {
    0% { transform: scale(0.5); opacity: 0; }
    70% { transform: scale(1.15); }
    100% { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(style);
