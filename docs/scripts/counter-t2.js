function initCounterT2Generator() {
  const container = document.getElementById('t2-generator')
  if (!container) return

  const animationIdInput = container.querySelector('#t2-animationID')
  const animationDelayInput = container.querySelector('#t2-animationDalay')
  const speedInput = container.querySelector('#t2-animationSpeed')
  const opacityT2Input = container.querySelector('#t2-startOpacityt2')
  const slowdownEffectCheckbox = container.querySelector('#t2-slowdownEffect')
  const endSlowdownEffectCheckbox = container.querySelector(
    '#t2-endSlowdownEffect'
  )
  const generateBtn = container.querySelector('#generate-t2')
  const copyBtn = container.querySelector('#copy-t2')
  const title = container.querySelector('#title')
  const output = container.querySelector('#t2-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const animationIdentifier = animationIdInput.value.trim() || 'js-script'
      const animationSpeed = speedInput.value.trim() || '2.5s'
      const startOpacityT2 = opacityT2Input.value.trim() || '0.5'
      const animationDelay = animationDelayInput.value.trim() || '0.1'
      const slowdownEffect = slowdownEffectCheckbox.checked
      const endSlowdownEffect = endSlowdownEffectCheckbox.checked

      const code = `<script>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
     const textElements = document.querySelectorAll(\`[class*="js-counter-text-animation"][class*="\${animationIdentifier}"]\`);
        const getChildClassName = (className) => {
          const animationClassName = className.split(' ').find((cls) => cls.includes('js-counter-text-animation'));

          if (!animationClassName) return '';
          return \`\${animationClassName}-child-${animationIdentifier}\`;
        };

        const animationSettings = {
          animationSpeed: '${animationSpeed}',
          startOpacityT1: 0,
          opacityT2: ${startOpacityT2},
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

            const firstChar = document.createElement('span');
            firstChar.className = \`\${childClassName}-first\`;
            firstChar.textContent = char;

            const secondChar = document.createElement('span');
            secondChar.className = \`\${childClassName}-second\`;
            secondChar.textContent = char;

            charSpan.appendChild(firstChar);
            charSpan.appendChild(secondChar);

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
            firstChar.style.animationDelay = \`\${delay}s\`;
            secondChar.style.animationDelay = \`\${delay}s\`;
            element.appendChild(charSpan);
          });
        }

        textElements.forEach((element) => {
          observer.observe(element);
        });
  });
</script>

<style>
    .js-counter-text-animation-t1,
  .js-counter-text-animation-t2 {
    width: 100%;
    flex-wrap: wrap;
  }

  .js-counter-text-animation-t1-child-${animationIdentifier},
  .js-counter-text-animation-t2-child-${animationIdentifier} {
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    vertical-align: bottom;
    height: 1.04em;
    line-height: 100%;
  }

  .js-counter-text-animation-t1-child-${animationIdentifier}-first {
    animation: js-counter-text-animation-t1-child-${animationIdentifier}-first ${animationSpeed} forwards;
    transform: translateY(103%);
  }

  @keyframes js-counter-text-animation-t1-child-${animationIdentifier}-first {
    0% { transform: translateY(103%); }
    20% { transform: translateY(0); }
    50% { transform: translateY(0); }
    100% { transform: translateY(-110%); }
  }

  .js-counter-text-animation-t1-child-${animationIdentifier}-second {
    animation: js-counter-text-animation-t1-child-${animationIdentifier}-second ${animationSpeed} forwards;
    transform: translateY(100%);
    opacity: 0;
  }

  @keyframes js-counter-text-animation-t1-child-${animationIdentifier}-second {
    0% { transform: translateY(100%); opacity: 0; }
    20% { transform: translateY(0); opacity: 0; }
    50% { transform: translateY(0); opacity: 0; }
    100% { transform: translateY(-100%); opacity: 1; }
  }

  .js-counter-text-animation-t2-child-${animationIdentifier}-second {
    animation: js-counter-text-animation-t2-child-${animationIdentifier}-second ${animationSpeed} forwards;
    transform: translateY(0);
    opacity: ${startOpacityT2};
  }

  @keyframes js-counter-text-animation-t2-child-${animationIdentifier}-second {
    0% { transform: translateY(0); }
    20% { transform: translateY(-100%); }
    50% { transform: translateY(-100%); }
    100% { transform: translateY(-210%); }
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
