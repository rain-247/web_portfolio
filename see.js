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

function scrollToNextSection(button) {
  const currentSection = button.closest('.page');
  const allSections = Array.from(document.querySelectorAll('.page'));
  const currentIndex = allSections.indexOf(currentSection);
  const nextSection = allSections[currentIndex + 1];
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
    
    window.isScrolling = true;
    window.currentIndex = currentIndex + 1;

    setTimeout(() => {
      window.isScrolling = false;
    }, 800);
  }
}

const pages = [
  {
    title: "首頁",
    img: "img/image.png",
    content: {
     定位: "入口頁面，展示「本週暢銷書籍」與「推薦書籍」，吸引用戶點擊進入書籍詳情。",
     設計: "書籍以卡片形式呈現，圖文整齊排列，點擊可查看書籍內容。",
     技術: "使用 JavaScript 動態生成 DOM 書卡、圖片延遲載入優化，提升載入效率。"
    }
  },
  {
    title: "書籍大全",
    img: "img/5.png",
    content: {
     定位: "顯示網站所有書籍，是主力瀏覽與收藏的區域。",
     設計: "書籍卡片清楚排列，支援書名與作者展示，可直接點入詳情或收藏。",
     技術: "使用 JSON 載入書籍資料並動態渲染，支援點擊收藏與加入購物車。"
    }
  },
  {
    title: "收藏",
    img: "img/3.png",
    content: {
     定位: "集中顯示使用者已收藏的書籍。",
     設計: "卡片較大，搭配書名、作者與取消收藏按鈕，方便回顧與操作。",
     技術: "使用 localStorage 儲存收藏資料，跨頁與重新整理後依然保留。"
    }
  },
  {
    title: "購物車",
    img: "img/1.png",
    content: {
     定位: "管理已加入購物車的書籍。",
     設計: "支援數量調整、價格動態計算與刪除操作，結帳模擬流程清楚。",
     技術: "使用 JavaScript 計算總價與同步資料變更，綁定 DOM 控制邏輯。"
    }
  },
  {
    title: "搜尋",
    img: "img/6.png",
    content: {
     定位: "使用者可輸入關鍵字快速查找書籍。",
     設計: "畫面即時更新結果，顯示符合書名或作者的結果。",
     技術: "使用 JS 字串比對與過濾書卡資料陣列，更新 DOM。"
    }
  },
  {
    title: "書籍詳情",
    img: "img/2.png",
    content: {
     定位: "顯示書籍完整資訊與操作功能。",
     設計: "左右圖文結構清晰，支援收藏與加入購物車按鈕。",
     技術: "資料由 JS 插入並同步狀態，控制按鈕樣式與行為。"
    }
  }
];

let currentPage = 0;

function updatePageFeature() {
  const data = pages[currentPage];
  document.getElementById('page-img').src = data.img;
  document.getElementById('page-title').innerText = data.title;

  const descContainer = document.getElementById('page-desc');
  descContainer.innerHTML = `
    <p><strong>功能定位：</strong>${data.content.定位}</p>
    <p><strong>設計特點：</strong>${data.content.設計}</p>
    <p><strong>技術亮點：</strong>${data.content.技術}</p>
  `;
}

function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  updatePageFeature();
}

function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  updatePageFeature();
}

document.addEventListener("DOMContentLoaded", updatePageFeature);


