function initChangeGenerator() {
  const container = document.getElementById('change-generator')
  if (!container) return

  const textInput = container.querySelector('#change-text')
  const animationIdInput = container.querySelector('#change-animationID')
  const speedInput = container.querySelector('#change-animationSpeed')
  const colorFromInput = container.querySelector('#change-colorFrom')
  const colorToInput = container.querySelector('#change-colorTo')
  const blurInput = container.querySelector('#change-blurAmount')
  const generateBtn = container.querySelector('#generate-change')
  const copyBtn = container.querySelector('#copy-change')
  const title = container.querySelector('#title')
  const output = container.querySelector('#change-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const text = textInput.value.trim()
      const animationIdentifier =
        animationIdInput.value.trim() || 'js-script-01'
      const animationSpeed = speedInput.value.trim() || '0.3s'
      const colorFrom = colorFromInput.value.trim() || '#ffffff'
      const colorTo = colorToInput.value.trim() || '#43a268'
      const blurAmount = blurInput.value.trim() || '5px'

      if (!text) {
        alert('Пожалуйста, введите текст для анимации')
        return
      }

      const code = `<script>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
    const textElements = document.querySelectorAll(\`[class*="js-text-animation"][class*="\${animationIdentifier}"]\`);
    
    const getChildClassName = (className) => {
      const animationClassName = className.split(' ').find((cls) => cls.includes('js-text-animation'));
      return animationClassName ? \`\${animationClassName}-child\` : '';
    };

    const animationSettings = {
      colorFrom: '${colorFrom}',
      colorTo: '${colorTo}',
      blurAmount: '${blurAmount}',
      animationSpeed: '${animationSpeed}',
      delayBeforeStart: '0s'
    };

    // Установка CSS переменных
    document.documentElement.style.setProperty('--color-from', animationSettings.colorFrom);
    document.documentElement.style.setProperty('--color-to', animationSettings.colorTo);
    document.documentElement.style.setProperty('--blur-amount', animationSettings.blurAmount);
    document.documentElement.style.setProperty('--animation-speed', animationSettings.animationSpeed);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    function animateElement(element) {
      const className = element.className;
      if (!className) return;
      
      const text = element.textContent.trim();
      element.innerHTML = '';
      const characters = text.split('');
      const childClassName = getChildClassName(className);
      const isSequentialAnimation = className.includes('colorLRRL');
      const charElements = [];
      let delay = 0;

      characters.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.className = childClassName;
        if (isSequentialAnimation) charSpan.classList.add('first-animation');
        charSpan.textContent = char;
        charSpan.style.animationDelay = \`\${delay}s\`;
        element.appendChild(charSpan);
        charElements.push(charSpan);
        delay += 0.05;
      });

      if (isSequentialAnimation) {
        setTimeout(() => {
          charElements.forEach((charSpan, idx) => {
            charSpan.classList.remove('first-animation');
            charSpan.classList.add('second-animation');
            charSpan.style.animationDelay = \`\${idx * 0.03}s\`;
          });
        }, (delay + 0.3) * 1000);
      }

      element.style.visibility = 'visible';
    }

    textElements.forEach((element) => observer.observe(element));
  });
<\/script>

<style>
    p[class*="js-text-animation"] {
    visibility: hidden;

  }

  @keyframes js-text-animation-parent {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* Стили для разных типов анимации */
  .js-text-animation-fadeLR-child {
    display: inline-block;
    opacity: 0;
    animation: js-text-animation-fadeLR ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-fadeLR {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .js-text-animation-fadeRL-child {
    display: inline-block;
    opacity: 1;
    animation: js-text-animation-fadeRL ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-fadeRL {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .js-text-animation-colorLR-child {
    display: inline-block;
    color: ${colorFrom};
    animation: js-text-animation-colorLR ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-colorLR {
    from { color: ${colorFrom}; }
    to { color: ${colorTo}; }
  }

  .js-text-animation-blureLR-child {
    display: inline-block;
    filter: blur(${blurAmount});
    animation: js-text-animation-blureLR ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-blureLR {
    from { filter: blur(${blurAmount}); }
    to { filter: blur(0px); }
  }

  .js-text-animation-colorLRRL-child {
    display: inline-block;
    color: ${colorFrom};
  }
  .js-text-animation-colorLRRL-child.first-animation {
    animation: js-text-animation-colorLRRL01 ${animationSpeed} forwards;
  }
  .js-text-animation-colorLRRL-child.second-animation {
    animation: js-text-animation-colorLRRL02 ${animationSpeed} forwards;
    color: ${colorTo};
  }
  @keyframes js-text-animation-colorLRRL01 {
    0% { color: ${colorFrom}; }
    100% { color: ${colorTo}; }
  }
  @keyframes js-text-animation-colorLRRL02 {
    0% { color: ${colorTo}; }
    100% { color: ${colorFrom}; }
  }
</style>`

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
