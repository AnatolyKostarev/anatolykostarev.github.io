function initHorFullpageGenerator() {
  const container = document.getElementById('hor-fullpage-generator')
  if (!container) return

  const generateBtn = container.querySelector('#hor-generate-fullpage')
  const copyBtn = container.querySelector('#hor-copy-fullpage')
  const title = container.querySelector('#title')
  const maxCountPagesInput = container.querySelector('#hor-fullpage-count')
  const output = container.querySelector('#hor-fullpage-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const maxCountPages = parseInt(maxCountPagesInput.value) || 1
      if (maxCountPages < 1) {
        alert('Количество страниц должно быть не менее 1')
        return
      }

      const evenPagesSelector = Array.from(
        { length: Math.floor(maxCountPages / 2) },
        (_, i) => `.section_${(i + 1) * 2}`
      ).join(', ')

      const code = `<style>
  body, html {
    overflow: hidden;
  }

  .scroll-container {
    height: 100vh;
    width: 100vw;
    will-change: transform;
    transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
  }

  .scroll-page {
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

  /* Horizontal scroll sections */
  ${evenPagesSelector} {
    transform: translateX(-100%);
  }
</style>

<script defer>
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');
    const MIN_PAGE = 1;
    const MAX_PAGE = ${maxCountPages};
    let activePage = 1;
    let animatingPage = false;
    let width = window.innerWidth;

    container.setAttribute('data-page', '1');
    const pages = container.querySelectorAll('.scroll-page');
    pages.forEach((page, index) => {
      page.classList.add(\`section_\${index+1}\`);
    });

    const evenSectionsSelector = '${evenPagesSelector}';

    function updateTransform() {
      if (width >= 320) {
        container.style.transform = \`translateY(\${(activePage - 1) * -100}vh)\`;
        
        document.querySelectorAll(evenSectionsSelector).forEach(section => {
          section.style.transform = 'translateX(-100%)';
        });

        if (activePage % 2 === 0) {
          const currentSection = container.querySelector(\`.section_\${activePage}\`);
          if (currentSection) {
            currentSection.style.transform = 'translateX(0)';
          }
        }
      } else {
        container.style.transform = 'none';
         document.querySelectorAll(evenSectionsSelector).forEach(section => {
          section.style.transform = 'translateX(0)';
        });
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

    function getDirection(deltaY) {
      if (deltaY > 0) return 'down';
      if (deltaY < 0) return 'up';
      return null;
    }

    function onWheel(event) {
      if (animatingPage) return;
      const direction = getDirection(event.deltaY);
      if (!direction) return;
      if (direction === 'up' && activePage === MIN_PAGE) return;
      if (direction === 'down' && activePage === MAX_PAGE) return;
      setActivePage(direction === 'up' ? activePage - 1 : activePage + 1);
    }

    container.addEventListener('transitionend', event => {
      if (event.target !== container) return;
      setTimeout(() => {
        animatingPage = false;
      }, 500);
    });

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      updateTransform();
    });

    window.addEventListener('wheel', onWheel, { passive: true });

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
