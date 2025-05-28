function initBlurLRGenerator() {
  const container = document.getElementById('blureLR-generator')
  if (!container) return

  const animationIdInput = container.querySelector('#blureLR-animationID')
  const blurAmountInput = container.querySelector('#blureLR-blurAmount')
  const delayBeforeStartInput = container.querySelector(
    '#blureLR-delayBeforeStart'
  )
  const animationDelayInput = container.querySelector('#blureLR-animationDalay')
  const speedInput = container.querySelector('#blureLR-animationSpeed')
  const slowdownEffectCheckbox = container.querySelector(
    '#blureLR-slowdownEffect'
  )
  const endSlowdownEffectCheckbox = container.querySelector(
    '#blureLR-endSlowdownEffect'
  )
  const generateBtn = container.querySelector('#generate-blureLR')
  const copyBtn = container.querySelector('#copy-blureLR')
  const title = container.querySelector('#title')
  const output = container.querySelector('#blureLR-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const animationIdentifier = animationIdInput.value.trim() || 'js-script'
      const animationSpeed = speedInput.value.trim() || '0.3s'
      const animationDelay = animationDelayInput.value.trim() || '0.01'
      const slowdownEffect = slowdownEffectCheckbox.checked ? false : true
      const endSlowdownEffect = endSlowdownEffectCheckbox.checked
      const delayBeforeStart = delayBeforeStartInput.value.trim() || '0s'
      const blurAmount = blurAmountInput.value.trim() || '5px'

      const code = `<script defer>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
    const textElements = document.querySelectorAll(\`[class*="js-text-animation"][class*="\${animationIdentifier}"]\`);
    
    const getChildClassName = (className) => {
      const animationClassName = className.split(' ').find((cls) => cls.includes('js-text-animation'));
      return animationClassName ? \`\${animationClassName}-child-${animationIdentifier}\` : '';
    };

    const animationSettings = {
      colorFrom: '#fff',
      colorTo:  '#43a268',
      blurAmount: '${blurAmount}',
      animationSpeed: '${animationSpeed}',
      delayBeforeStart: '${delayBeforeStart}'
    };

    // Установка CSS переменных
    document.documentElement.style.setProperty('--color-from', animationSettings.colorFrom);
    document.documentElement.style.setProperty('--color-to', animationSettings.colorTo);
    document.documentElement.style.setProperty('--blur-amount', animationSettings.blurAmount);
    document.documentElement.style.setProperty('--animation-speed', animationSettings.animationSpeed);

    const slowdownEffect = ${slowdownEffect};
      const endSlowdownEffect = ${endSlowdownEffect};

      const originalTexts = new Map();
      const animatedElements = new Map();
      const lastTopPositions = new Map();

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!animatedElements.get(entry.target)) {
                animateElement(entry.target);
                animatedElements.set(entry.target, true);
              }
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      function resetElement(element) {
        const originalText = originalTexts.get(element);
        if (originalText) {
          element.innerHTML = originalText;
        }
      }
        
      function animateElement(element) {
        const className = element.className;
        if (!className) return;
        if (!originalTexts.has(element)) {
          originalTexts.set(element, element.textContent.trim());
        }

        const text = element.textContent.trim();
        element.innerHTML = '';

        if (animationSettings.delayBeforeStart !== '0s') {
         element.style.animation = 'js-text-animation-parent-' + animationIdentifier + ' ' + animationSettings.delayBeforeStart + ' forwards';

          element.addEventListener(
            'animationend',
            function () {
              createAndAnimateCharacters();
            },
            { once: true }
          );
        } else {
          createAndAnimateCharacters();
        }

        function createAndAnimateCharacters() {
          const characters = text.split('');
          const childClassName = getChildClassName(className);
          const animationDalay = ${animationDelay};
          let delay = 0;

          const totalChars = characters.length;
          const isSequentialAnimation = className.includes('colorLRRL');
          const charElements = [];

          characters.forEach((char, index) => {
            const charSpan = document.createElement('span');
            charSpan.className = childClassName;

            if (isSequentialAnimation) {
              charSpan.classList.add('first-animation');
            }

            charSpan.textContent = char;

            const position = index / (totalChars - 1 || 1);
            let totalSlowdownFactor = 0;

            if (slowdownEffect) {
              if (position < 0.33) {
              } else if (position < 0.5) {
                const normalizedPos = (position - 0.33) / (0.5 - 0.33);
                totalSlowdownFactor += Math.pow(normalizedPos, 2) * 5;
              } else if (position < 0.7) {
                const normalizedPos = 1 - (position - 0.5) / (0.7 - 0.5);
                totalSlowdownFactor += Math.pow(normalizedPos, 2) * 5;
              }
            }

            if (endSlowdownEffect && position >= 0.6) {
              const normalizedEndPos = (position - 0.6) / (1 - 0.6);
              totalSlowdownFactor += Math.pow(normalizedEndPos, 2) * 3;
            }

            delay += animationDalay * (1 + totalSlowdownFactor);
            charSpan.style.animationDelay = delay + 's';
            element.appendChild(charSpan);
            charElements.push(charSpan);
          });

          if (isSequentialAnimation) {
            const firstAnimationDuration = 0.3;
            const totalFirstAnimationTime = delay + firstAnimationDuration + 0.1;

            setTimeout(() => {
              let secondDelay = 0;

              charElements.forEach((charSpan, index) => {
                const position = index / (totalChars - 1 || 1);
                let totalSlowdownFactor = 0;

                secondDelay += animationDalay * (0.5 + totalSlowdownFactor);

                charSpan.classList.remove('first-animation');
                charSpan.classList.add('second-animation');
                charSpan.style.animationDelay = secondDelay + 's';
              });
            }, totalFirstAnimationTime * 1000);
          }

          requestAnimationFrame(() => {
            element.style.visibility = 'visible';
          });
        }
      }

      textElements.forEach((element) => {
        observer.observe(element);
      });   
  });
<\/script>

<style>
    p[class*="js-text-animation"] {
    visibility: hidden;

  }

  @keyframes js-text-animation-parent-${animationIdentifier} {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* Стили для разных типов анимации */
  .js-text-animation-blureLR-child-${animationIdentifier} {
    display: inline-block;
    opacity: 0;
    animation: js-text-animation-blureLR-${animationIdentifier} ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-blureLR-${animationIdentifier} {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .js-text-animation-blureLR-child-${animationIdentifier} {
    display: inline-block;
    opacity: 1;
    animation: js-text-animation-blureLR-${animationIdentifier} ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-blureLR-${animationIdentifier} {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .js-text-animation-colorLR-child-${animationIdentifier} {
    display: inline-block;
    color: #ffffff;
    animation: js-text-animation-colorLR-${animationIdentifier} ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-colorLR-${animationIdentifier} {
    from { color: #ffffff; }
    to { color: #43a268; }
  }

  .js-text-animation-blureLR-child-${animationIdentifier} {
    display: inline-block;
    filter: blur(${blurAmount});
    animation: js-text-animation-blureLR-${animationIdentifier} ${animationSpeed} forwards;
  }
  @keyframes js-text-animation-blureLR-${animationIdentifier} {
    from { filter: blur(${blurAmount}); }
    to { filter: blur(0px); }
  }

  .js-text-animation-colorLRRL-child-${animationIdentifier} {
    display: inline-block;
    color: #ffffff;
  }
  .js-text-animation-colorLRRL-child-${animationIdentifier}.first-animation {
    animation: js-text-animation-colorLRRL01-${animationIdentifier} ${animationSpeed} forwards;
  }
  .js-text-animation-colorLRRL-child-${animationIdentifier}.second-animation {
    animation: js-text-animation-colorLRRL02-${animationIdentifier} ${animationSpeed} forwards;
    color: #43a268;
  }
  @keyframes js-text-animation-colorLRRL01-${animationIdentifier} {
    0% { color: #ffffff; }
    100% { color: #43a268; }
  }
  @keyframes js-text-animation-colorLRRL02-${animationIdentifier} {
    0% { color: #ffffff; }
    100% { color: #43a268; }
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
