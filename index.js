function toggleIframe(id) {
  const target = document.getElementById(id);
  target.style.display = (target.style.display === 'block') ? 'none' : 'block';
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

const observers = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

observers.forEach(el => observer.observe(el));

function filterProjects(type) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function goFullscreen(id) {
  const iframe = document.getElementById(id);
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}

const modal = document.getElementById("modal");
const modalFrame = document.getElementById("modalFrame");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");
    modalFrame.src = url;
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalFrame.src = "";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    modalFrame.src = "";
  }
});

document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    const type = button.dataset.type;
    document.querySelectorAll('.project-card').forEach(card => {
      const cardType = card.dataset.type;
      if (type === 'all' || cardType === type) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", e => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  outline.style.left = e.clientX + "px";
  outline.style.top = e.clientY + "px";
});

const interactiveElements = document.querySelectorAll("button, a");
interactiveElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");
  });
});

const startBtn = document.querySelector('.btn');
startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation(); 

  const hero = document.querySelector('.hero-text');
  hero.style.transition = 'opacity 1.2s ease';
  hero.style.opacity = 0;
  hero.style.pointerEvents = 'none';

  const container = document.getElementById('bubble-container');
  for (let i = 0; i < 30; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.width = b.style.height = Math.random() * 20 + 10 + 'px';
    b.style.animationDuration = 3 + Math.random() * 5 + 's';
    container.appendChild(b);
    setTimeout(() => container.removeChild(b), 5000);
  }

  const bubbles = document.querySelectorAll('#main-bubbles .bubble');
  const positions = [
    { top: '-30%', left: '-10%' },
    { top: '-15%', left: '40%' },
    { top: '40%', left: '5%' },
    { top: '45%', left: '65%' },
    { top: '100%', left: '35%' },
  ];

  bubbles.forEach((b, i) => {
    b.style.opacity = '0';
    b.style.transition = 'none';
    b.style.top = '110vh';
    b.style.left = '50%';

    setTimeout(() => {
      b.style.transition = 'top 2s ease-out, left 1.2s ease-out, opacity 1.2s ease';
      b.style.top = positions[i].top;
      b.style.left = positions[i].left;
      b.style.opacity = '1';
    }, 500 + i * 300);
  });

  document.getElementById('main-bubbles').classList.remove('hidden');
  setTimeout(() => {
  document.querySelectorAll('.bubble.big').forEach(b => {
    b.style.pointerEvents = 'auto';
  });
}, 2000);

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

setInterval(() => generatePeripheralBubbles(4), 3000);

const mainBubbleLinks = document.querySelectorAll('#main-bubbles a');
mainBubbleLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetURL = link.getAttribute('href');
    const rect = link.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const overlay = document.createElement('div');
    overlay.className = 'bubble-transition-overlay';
    overlay.style.left = `${centerX}px`;
    overlay.style.top = `${centerY}px`;
    document.body.appendChild(overlay);

    setTimeout(() => {
      window.location.href = targetURL;
    }, 700);
  });
});

