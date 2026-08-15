// Highlight input when focused
const searchInput = document.querySelector('.hero input[type="text"]');

searchInput.addEventListener('focus', () => {
  searchInput.style.boxShadow = '0 0 10px #e57373';
});

searchInput.addEventListener('blur', () => {
  searchInput.style.boxShadow = 'none';
});

// Scroll animation for cards
const cards = document.querySelectorAll('.card');

const revealCards = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealCards);

// Initial state
cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
});

window.onload = revealCards;
