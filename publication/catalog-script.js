const container = document.getElementById('scroll-container');
const originalCards = Array.from(container.children);
originalCards.forEach(card => {
  const clone = card.cloneNode(true);
  container.appendChild(clone);
});
container.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollAmount = e.deltaX !== 0 ? e.deltaX : e.deltaY;
  container.scrollLeft += scrollAmount;
}, { passive: false });
container.addEventListener('scroll', () => {
  const scrollWidth = container.scrollWidth / 2;
  if (container.scrollLeft >= scrollWidth) {
    container.scrollLeft -= scrollWidth;
  }
});