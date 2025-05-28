function initFullpageGenerator() {
  const container = document.getElementById('fullpage-generator')
  if (!container) return

  const generateBtn = container.querySelector('#generate-fullpage')
  const copyBtn = container.querySelector('#copy-fullpage')
  const title = container.querySelector('#title')
  const maxCountPagesInput = container.querySelector('#fullpage-count')
  const output = container.querySelector('#fullpage-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const maxCountPages = parseInt(maxCountPagesInput.value) || 1
      if (maxCountPages < 1) {
        alert('Количество страниц должно быть не менее 1')
        return
      }

      const code = `<style defer>
  body, html {
    overflow: hidden;
  }

  .container {
    height: 100vh;
    width: 100vw;
    will-change: transform;
    transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
  }

  .js-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    will-change: transform, opacity;
    transition: transform 0.9s ease-in-out, opacity 0.7s ease-in-out;
    transform: scale(1.2, 1.2);
  }

 ${Array.from(
   { length: maxCountPages },
   (_, i) => `[data-page='${i + 1}'] .section_${i + 1}`
 ).join(',\n  ')} {
    opacity: 1;
    transform: scale(1, 1);
  }
</style>

<script defer>
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.js-container');
    const MIN_PAGE = 1;
    const MAX_PAGE = ${maxCountPages};
    let activePage = 1;
    let animatingPage = false;
    let width = window.innerWidth;

    function updateTransform() {
      if (width >= 320) {
        container.style.transform = \`translateY(\${(activePage - 1) * -100}vh)\`;
      } else {
        container.style.transform = 'none';
      }
      container.setAttribute('data-page', activePage);
    }

    function setActivePage(page) {
      if (page < MIN_PAGE || page > MAX_PAGE) return;
      if (animatingPage || page === activePage) return;
      activePage = page;
      animatingPage = true;
      updateTransform();
    }

    function handleScroll(deltaY) {
      if (animatingPage) return;
      
      if (deltaY > 0 && activePage < MAX_PAGE) {
        setActivePage(activePage + 1);
      } else if (deltaY < 0 && activePage > MIN_PAGE) {
        setActivePage(activePage - 1);
      }
    }

    let touchStartY = 0;
    
    container.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (animatingPage) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchY - touchStartY;
      
      if (Math.abs(deltaY) > 50) {
        handleScroll(deltaY * -1);
        touchStartY = touchY;
      }
    }, { passive: true });

    window.addEventListener('wheel', (e) => {
      handleScroll(e.deltaY);
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        handleScroll(1);
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        handleScroll(-1);
        e.preventDefault();
      }
    });

    container.addEventListener('transitionend', () => {
      animatingPage = false;
    });

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      updateTransform();
    });

    updateTransform();
  });
<\/script>`

      output.textContent = code
      output.style.display = 'block'
      copyBtn.style.display = 'inline-block'
      title.style.display = 'block'
    })
    generateBtn.hasListener = true
  }

  if (!copyBtn.hasListener) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard
        .writeText(output.textContent)
        .then(() => {
          copyBtn.textContent = 'Скопировано!'
          setTimeout(() => (copyBtn.textContent = 'Копировать код'), 1500)
        })
        .catch(() => {
          alert('Ошибка копирования')
        })
    })
    copyBtn.hasListener = true
  }
}
