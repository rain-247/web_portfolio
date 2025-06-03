let isScrolling = false;
let currentIndex = 0;

document.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (isScrolling) return;

  const sections = document.querySelectorAll(".page");
  const direction = event.deltaY > 0 ? 1 : -1;

  const targetIndex = currentIndex + direction;
  if (targetIndex < 0 || targetIndex >= sections.length) return;

  isScrolling = true;
  currentIndex = targetIndex;

  window.scrollTo({
    top: currentIndex * window.innerHeight,
    behavior: "smooth"
  });

  setTimeout(() => {
    isScrolling = false;
  }, 800); 
}, { passive: false });

window.scrollTo({
  top: Math.round(currentIndex * window.innerHeight),
  behavior: "smooth"
});

  const imageGroups = {
    group1: ['img/img1.jpg', 'img/img2.jpg', 'img/design1.jpg'],
    group2: ['img/2 (1).jpg', 'img/2 (2).jpg', 'img/2 (3).jpg', 'img/2 (4).jpg', 'img/2 (5).jpg']
  };

  const currentIndexes = {
    group1: 0,
    group2: 0
  };

  document.querySelectorAll('.image-slider').forEach(slider => {
    const group = slider.dataset.slider;
    const img = slider.querySelector('img');
    const left = slider.querySelector('.arrow.left');
    const right = slider.querySelector('.arrow.right');

    function updateImage() {
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = imageGroups[group][currentIndexes[group]];
        img.style.opacity = 1;
      }, 150);
    }

    left.addEventListener('click', () => {
      currentIndexes[group] = (currentIndexes[group] - 1 + imageGroups[group].length) % imageGroups[group].length;
      updateImage();
    });

    right.addEventListener('click', () => {
      currentIndexes[group] = (currentIndexes[group] + 1) % imageGroups[group].length;
      updateImage();
    });
  });

  function generatePeripheralBubbles(count = 10) {
  const container = document.getElementById('bubble-container');
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'bubble peripheral';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.bottom = Math.random() * 30 + '%';
    b.style.width = b.style.height = Math.random() * 8 + 6 + 'px';
    b.style.animationDuration = 6 + Math.random() * 6 + 's';
    container.appendChild(b);
    setTimeout(() => container.removeChild(b), 12000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => generatePeripheralBubbles(4), 3000);
});

