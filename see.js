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

const path = window.location.pathname;
const currentFile = path.substring(path.lastIndexOf('/') + 1);

let pages = [];

if (currentFile === 'website2.html') {
  pages = [ 
    {
      title: "首頁",
      img: "img/web2.png",
      content: {
        定位: "主視覺與核心理念揭示平台宗旨，引導使用者理解水資源問題。",
        設計: "搭配圖像動畫與醒目標語，提升環境議題的感染力與導覽動線。",
        技術: "使用 CSS 動畫與 JavaScript 控制進場效果與互動區塊切換。"
      }
    },
    {
      title: "活動資訊",
      img: "img/11.png",
      content: {
        定位: "顯示近期舉辦的環保行動活動，提供報名與詳細說明。",
        設計: "活動卡片清晰展示時間、地點與主題，並提供報名按鈕。",
        技術: "透過表單送出資料並以 localStorage 儲存報名資訊。"
      }
    },
    {
      title: "報名追蹤",
      img: "img/1e.png",
      content: {
        定位: "顯示使用者已報名的活動，並於時間接近時提醒參加。",
        設計: "以列表方式整理活動，強調倒數天數與提醒提示。",
        技術: "使用 JavaScript 判斷日期差值，自動顯示提示訊息。"
      }
    },
    {
      title: "水資源小遊戲",
      img: "img/12.png",
      content: {
        定位: "透過遊戲讓使用者了解有害物質與水污染的關係。",
        設計: "使用者需點擊掉落的有害物品避免污染河流，寓教於樂。",
        技術: "JavaScript 控制遊戲邏輯、碰撞檢測與污染指數變化。"
      }
    }
  ];
} else if (currentFile === 'website1.html') {
  pages = [ 
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
}

else if (currentFile === 'game1.html') {
  pages = [
    {
      title: "開始介面",
      img: "img/Phaser Game Example - Google Chrome 2025_3_26 上午 07_19_57.png",
      content: {
        定位: "作為遊戲的進入起點，讓玩家選擇進入故事、開始遊戲或設定語言。",
        設計: "風格呼應遊戲主題，搭配互動式選單與閃爍提示按鈕。",
        技術: "以 Phaser UI 元件設計場景切換、按鈕動畫與語言選擇功能。"
      }
    },
    {
      
      title: "故事頁",
      img: "img/story.png",
      content: {
        定位: "說明遊戲背景與主角任務，協助玩家代入世界觀。",
        設計: "可切換中英文，簡潔畫面搭配敘述文字。",
        技術: "UI 中英語切換。"
      }
    },
    {
      title: "教學頁",
      img: "img/text.png",
      content: {
        定位: "引導新手快速學會基本操作。",
        設計: "圖文搭配展示移動、跳躍與敲擊功能。",
        技術: "排版美術。"
      }
    },
    {
      title: "關卡",
      img: "img/Phaser Game Example - Google Chrome 2025_3_26 上午 07_20_17.png",
      content: {
        定位: "主要遊玩介面。",
        設計: "含有機關與障礙，通過合作方可通過。",
        技術: "物理碰撞與角色獨立操作。"
      }
    }
  ];
}

else if (currentFile === 'game2.html') {
  pages = [
    {
      title: "主畫面",
      img: "img/start.png",
      content: {
        定位: "展示主角飛機與基本射擊機制。",
        設計: "畫面清楚、機體居中，強調玩家焦點。",
        技術: "Unity 角色移動與碰撞偵測基礎。"
      }
    },
    {
      title: "戰鬥畫面",
      img: "img/naka.png",
      content: {
        定位: "逐波出現敵人，考驗玩家反應與走位。",
        設計: "敵機種類簡單清楚，配色區分明顯。",
        技術: "隨機生成機制與碰撞處理。"
      }
    },
    {
      title: "遊戲結束",
      img: "img/end.png",
      content: {
        定位: "告知玩家遊戲結束。",
        設計: "簡約黑底白字 UI，集中注意。",
        技術: "場景重新載入。"
      }
    }
  ];
}


else if (currentFile === 'design1.html') {
  pages = [
    {
      title: "故事頁",
      img: "img/god_story.png",
      content: {
        定位: "說明遊戲背景與主角任務，協助玩家代入世界觀。",
        設計: "可自由切換語言，簡潔畫面搭配敘述文字。",
        技術: "UI 多語支援 + 玩家選擇儲存與故事解鎖機制。"
      }
    },
    {
      title: "教學頁",
      img: "img/god_tutorial.png",
      content: {
        定位: "引導新手快速學會基本操作。",
        設計: "圖文搭配展示移動、跳躍與敲擊功能。",
        技術: "按鍵綁定與角色動畫控制邏輯。"
      }
    },
    {
      title: "關卡一：Egypt",
      img: "img/god_level1.png",
      content: {
        定位: "熟悉基本操作與單人機關。",
        設計: "設置簡易機關與障礙，讓任一角色皆能通過。",
        技術: "物理碰撞與角色獨立操作。"
      }
    },
    {
      title: "關卡二：Mesopotamia",
      img: "img/god_level2.png",
      content: {
        定位: "導入角色分工，強調合作過關。",
        設計: "跳躍高度差與多條路徑機關並存。",
        技術: "雙人互動邏輯與角色配合事件。"
      }
    },
    {
      title: "開始介面",
      img: "img/god_startmenu.png",
      content: {
        定位: "作為遊戲的進入起點，讓玩家選擇進入故事、開始遊戲或設定語言。",
        設計: "風格呼應遊戲主題，搭配互動式選單與閃爍提示按鈕。",
        技術: "以 Phaser UI 元件設計場景切換、按鈕動畫與語言選擇功能。"
      }
    }
  ];
}

else if (currentFile === 'design2.html') {
  pages = [
    {
      title: "故事頁",
      img: "img/god_story.png",
      content: {
        定位: "說明遊戲背景與主角任務，協助玩家代入世界觀。",
        設計: "可自由切換語言，簡潔畫面搭配敘述文字。",
        技術: "UI 多語支援 + 玩家選擇儲存與故事解鎖機制。"
      }
    },
    {
      title: "教學頁",
      img: "img/god_tutorial.png",
      content: {
        定位: "引導新手快速學會基本操作。",
        設計: "圖文搭配展示移動、跳躍與敲擊功能。",
        技術: "按鍵綁定與角色動畫控制邏輯。"
      }
    },
    {
      title: "關卡一：Egypt",
      img: "img/god_level1.png",
      content: {
        定位: "熟悉基本操作與單人機關。",
        設計: "設置簡易機關與障礙，讓任一角色皆能通過。",
        技術: "物理碰撞與角色獨立操作。"
      }
    },
    {
      title: "關卡二：Mesopotamia",
      img: "img/god_level2.png",
      content: {
        定位: "導入角色分工，強調合作過關。",
        設計: "跳躍高度差與多條路徑機關並存。",
        技術: "雙人互動邏輯與角色配合事件。"
      }
    },
    {
      title: "開始介面",
      img: "img/god_startmenu.png",
      content: {
        定位: "作為遊戲的進入起點，讓玩家選擇進入故事、開始遊戲或設定語言。",
        設計: "風格呼應遊戲主題，搭配互動式選單與閃爍提示按鈕。",
        技術: "以 Phaser UI 元件設計場景切換、按鈕動畫與語言選擇功能。"
      }
    }
  ];
}

else if (currentFile === 'design3.html') {
  pages = [
    {
      title: "開始介面",
      img: "img/Phaser Game Example - Google Chrome 2025_3_26 上午 07_19_57.png",
      content: {
        定位: "作為遊戲的進入起點，讓玩家選擇進入故事、開始遊戲或設定語言。",
        設計: "風格呼應遊戲主題，搭配互動式選單與閃爍提示按鈕。",
        技術: "以 Phaser UI 元件設計場景切換、按鈕動畫與語言選擇功能。"
      }
    },
    {
      
      title: "故事頁",
      img: "img/story.png",
      content: {
        定位: "說明遊戲背景與主角任務，協助玩家代入世界觀。",
        設計: "可自由切換語言，簡潔畫面搭配敘述文字。",
        技術: "UI 多語支援 + 玩家選擇儲存與故事解鎖機制。"
      }
    },
    {
      title: "教學頁",
      img: "img/text.png",
      content: {
        定位: "引導新手快速學會基本操作。",
        設計: "圖文搭配展示移動、跳躍與敲擊功能。",
        技術: "按鍵綁定與角色動畫控制邏輯。"
      }
    },
    {
      title: "關卡",
      img: "img/Phaser Game Example - Google Chrome 2025_3_26 上午 07_20_17.png",
      content: {
        定位: "主要遊玩介面。",
        設計: "含有機關與障礙，通過合作方可通過。",
        技術: "物理碰撞與角色獨立操作。"
      }
    }
    
  ];
}








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



const animationPages = [
  {
    title: "打球",
    desc: "打球動畫主要呈現的為其靜至動的轉換，以下為動畫影格。",
    images: [
      "img/frame0002.png",
      "img/frame0003.png",
      "img/frame0004.png",
      "img/frame0005.png",
      "img/frame0006.png",
      "img/frame0007.png",
      "img/frame0008.png",
      "img/frame0009.png",
      "img/frame0010.png",
      "img/frame0011.png"
    ]
  },
  {
    title: "走路",
    desc: "此動畫練習著重於角色重心轉換，以下展示其片段影格。",
    images: [
      "img/walk0001.png",
      "img/walk0002.png",
      "img/walk0003.png",
      "img/walk0004.png",
      "img/walk0005.png",
      "img/walk0006.png",
      "img/walk0007.png",
      "img/walk0008.png",
      "img/walk0009.png",
      "img/walk0010.png"
    ]
  }
];

let currentAnimation = 0;

function updateAnimation() {
  const data = animationPages[currentAnimation];
  document.getElementById("animation-title").innerText = data.title;
  document.getElementById("animation-desc").innerHTML = `<p>${data.desc}</p>`;

  const frameRow = document.querySelector(".animation-frame-row");
  frameRow.innerHTML = data.images
    .map((src) => `<img src="${src}" class="frame-thumb">`)
    .join("");
}

function nextAnimation() {
  currentAnimation = (currentAnimation + 1) % animationPages.length;
  updateAnimation();
}

function prevAnimation() {
  currentAnimation = (currentAnimation - 1 + animationPages.length) % animationPages.length;
  updateAnimation();
}

document.addEventListener("DOMContentLoaded", updateAnimation);