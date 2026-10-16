(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const dots = [...document.querySelectorAll('.dot')];
  const count = document.getElementById('pageCount');
  const video = document.getElementById('loveVideo');
  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.classList.toggle('active', i === current); });
    dots.forEach((dot, i) => { dot.classList.toggle('active', i === current); });
    count.textContent = `0${current + 1} / 0${slides.length}`;
    if (current !== 2 && !video.paused) video.pause();
  }

  document.getElementById('prevBtn').addEventListener('click', () => show(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => show(current + 1));
  document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => show(current + 1)));
  document.querySelectorAll('[data-prev]').forEach(button => button.addEventListener('click', () => show(current - 1)));
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.go))));
  document.getElementById('heartBtn').addEventListener('click', event => {
    const button = event.currentTarget;
    button.textContent = 'Terkirim sepenuh hati ♥';
    button.style.background = 'rgba(232,93,117,.14)';
    button.style.borderColor = 'rgba(232,93,117,.45)';
  });
  document.getElementById('replayBtn').addEventListener('click', () => { show(0); video.currentTime = 0; });
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') show(current + 1);
    if (event.key === 'ArrowLeft') show(current - 1);
  });
})();
