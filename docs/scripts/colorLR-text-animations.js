function initColorLRGenerator() {
  const container = document.getElementById('colorLR-generator')
  if (!container) return

  const animationIdInput = container.querySelector('#colorLR-animationID')
  const delayBeforeStartInput = container.querySelector(
    '#colorLR-delayBeforeStart'
  )
  const animationDelayInput = container.querySelector('#colorLR-animationDalay')
  const speedInput = container.querySelector('#colorLR-animationSpeed')
  const colorFromInput = container.querySelector('#colorLR-colorFrom')
  const colorToInput = container.querySelector('#colorLR-colorTo')
  const slowdownEffectCheckbox = container.querySelector(
    '#colorLR-slowdownEffect'
  )
  const endSlowdownEffectCheckbox = container.querySelector(
    '#colorLR-endSlowdownEffect'
  )
  const generateBtn = container.querySelector('#generate-colorLR')
  const copyBtn = container.querySelector('#copy-colorLR')
  const title = container.querySelector('#title')
  const output = container.querySelector('#colorLR-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const animationIdentifier = animationIdInput.value.trim() || 'js-script'
      const animationSpeed = speedInput.value.trim() || '0.3s'
      const animationDelay = animationDelayInput.value.trim() || '0.01'
      const slowdownEffect = slowdownEffectCheckbox.checked ? false : true
      const endSlowdownEffect = endSlowdownEffectCheckbox.checked
      const delayBeforeStart = delayBeforeStartInput.value.trim() || '0s'
      const colorFrom = colorFromInput.value.trim() || '#ffffff'
      const colorTo = colorToInput.value.trim() || '#43a268'

      const code = `<script defer>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
    const textElements = document.querySelectorAll(\`[class*="js-text-animation"][class*="\${animationIdentifier}"]\`);
    
    const getChildClassName = (className) => {
      const animationClassName = className.split(' ').find((cls) => cls.includes('js-text-animation'));
      return animationClassName ? \`\${animationClassName}-child-${animationIdentifier}\` : '';
    };

    const animationSettings = {
      colorFrom: '${colorFrom}',
      colorTo:  '${colorTo}',
      blurAmount: '5px',
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
          const isSequentialAnimation = className.includes('color-lrrl');
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
    99% { opacity: 0; }
    100% { opacity: 1; }
  }

   /* Стили для разных типов анимации */
  .js-text-animation-fade-lr-child-${animationIdentifier} {
    display: inline-block;
    opacity: 0;
    animation: js-text-animation-fade-lr-${animationIdentifier} ${animationSpeed} forwards;
    transition: all ${animationSpeed} ease;
    will-change: opacity;
  }

   @keyframes js-text-animation-fade-lr-${animationIdentifier} {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .js-text-animation-fade-rl-child-${animationIdentifier} {
    display: inline-block;
    opacity: 1;
    animation: js-text-animation-fade-rl-${animationIdentifier} ${animationSpeed} forwards;
    transition: all ${animationSpeed} ease;
  }

  @keyframes js-text-animation-fade-rl-${animationIdentifier} {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .js-text-animation-color-lr-child-${animationIdentifier} {
    display: inline-block;
    color: ${colorFrom};
    animation: js-text-animation-color-lr-${animationIdentifier} ${animationSpeed} forwards;
    transition: all ${animationSpeed} ease;
  }

  @keyframes js-text-animation-color-lr-${animationIdentifier} {
    from { color: ${colorFrom}; }
    to { color: ${colorTo}; }
  }

  .js-text-animation-blure-lr-child-${animationIdentifier} {
    display: inline-block;
    filter: blur(5px);
    animation: js-text-animation-blure-lr-${animationIdentifier} ${animationSpeed} forwards;
    transition: all ${animationSpeed} ease;
  }

  @keyframes js-text-animation-blure-lr-${animationIdentifier} {
    from { filter: blur(5px); }
    to { filter: blur(0px); }
  }

 .js-text-animation-color-lrrl-child-${animationIdentifier} {
    display: inline-block;
    color: ${colorFrom};
    transition: all ${animationSpeed} ease;
  }

 .js-text-animation-color-lrrl-child-${animationIdentifier}.first-animation {
    animation: js-text-animation-color-lrrl-f-${animationIdentifier} ${animationSpeed} forwards;
  }

  .js-text-animation-color-lrrl-child-${animationIdentifier}.second-animation {
    animation: js-text-animation-color-lrrl-s-${animationIdentifier} ${animationSpeed} forwards;
    color: ${colorTo};
  }

   @keyframes js-text-animation-color-lrrl-s-${animationIdentifier} {
    0% { color: ${colorFrom}; }
    100% { color: ${colorTo}; }
  }

  @keyframes js-text-animation-color-lrrl-f-${animationIdentifier} {
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
