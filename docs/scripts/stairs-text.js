function initStairsTextGenerator() {
  const container = document.getElementById('stairs-generator')
  if (!container) return

  const animationIdInput = container.querySelector('#animationIdentifier')
  const animationDelayInput = container.querySelector('#animationDalay')
  const animationSpeedInput = container.querySelector('#animationSpeed')
  const initialOpacityInput = container.querySelector('#start-opacity')
  const slowdownEffectCheckbox = container.querySelector('#slowdownEffect')
  const endSlowdownEffectCheckbox =
    container.querySelector('#endSlowdownEffect')
  const generateBtn = container.querySelector('#generate-stairs')
  const copyBtn = container.querySelector('#copy-stairs')
  const title = container.querySelector('#title')
  const output = container.querySelector('#stairs-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const animationIdentifier = animationIdInput.value.trim() || 'js-script'
      const animationSpeed = animationSpeedInput.value.trim() || '0.3s'
      const initialOpacity = initialOpacityInput.value.trim() || '1'
      const animationDelay = animationDelayInput.value.trim() || '0.1'
      const slowdownEffect = slowdownEffectCheckbox.checked
      const endSlowdownEffect = endSlowdownEffectCheckbox.checked

      const code = `<script defer>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
    
    const textElements = document.querySelectorAll(\`[class*="js-stairs-text-animation"][class*="${animationIdentifier}"]\`);
        const getChildClassName = (className) => {
          const animationClassName = className.split(' ').find((cls) => cls.includes('js-stairs-text-animation'));

          if (!animationClassName) return '';
          return \`\${animationClassName}-child-${animationIdentifier}\`;
        };

    const animationSettings = {
      startOpacity: ${initialOpacity},
      animationSpeed: '${animationSpeed}',
    };

    const slowdownEffect = ${slowdownEffect};
    const endSlowdownEffect = ${endSlowdownEffect};

    const originalTexts = new Map();
    const animatedElements = new Map();

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
          const characters = text.split('');
          const childClassName = getChildClassName(className);

          const animationDalay = ${animationDelay};
          let delay = 0;

          const totalChars = characters.length;

          characters.forEach((char, index) => {
            const charSpan = document.createElement('span');
            charSpan.className = childClassName;

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
            charSpan.style.animationDelay = \`\${delay}s\`;
            element.appendChild(charSpan);
          });
        }

        textElements.forEach((element) => {
          observer.observe(element);
        });
    
  });
<\/script>

<style>
  .js-stairs-text-animation-steps-child-${animationIdentifier} {
    display: inline-block;
    overflow: hidden;
    height: 0;
    opacity: ${initialOpacity};
    line-height: normal;
    vertical-align: bottom;
    animation: js-stairs-text-animation-steps-${animationIdentifier} ${animationSpeed} forwards;
    transition: all ${animationSpeed} ease;
    text-transform: uppercase;
  }

  .js-stairs-text-animation-steps-child-${animationIdentifier} span {
        display: block;
        transform: translateY(0);
      }

  @keyframes js-stairs-text-animation-steps-${animationIdentifier} {
    0% {
      height: 0;
      opacity: 1;
    }
    100% {
      height: 1.02em;
      opacity: 1;
    }
  }
</style>
`

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
