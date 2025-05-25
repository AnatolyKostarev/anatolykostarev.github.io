function initCounterGenerator() {
  const container = document.getElementById('counter-generator')
  if (!container) return

  const animationIdInput = container.querySelector('#counter-animationID')
  const speedInput = container.querySelector('#counter-animationSpeed')
  const opacityT1Input = container.querySelector('#counter-startOpacityT1')
  const opacityT2Input = container.querySelector('#counter-opacityT2')
  const generateBtn = container.querySelector('#generate-counter')
  const copyBtn = container.querySelector('#copy-counter')
  const title = container.querySelector('#title')
  const output = container.querySelector('#counter-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const animationIdentifier =
        animationIdInput.value.trim() || 'js-script-03'
      const animationSpeed = speedInput.value.trim() || '2.5s'
      const startOpacityT1 = opacityT1Input.value.trim() || '0'
      const opacityT2 = opacityT2Input.value.trim() || '0.5'

      const code = `<script>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
    const textElements = document.querySelectorAll(\`[class*="js-counter-text-animation"][class*="\${animationIdentifier}"]\`);
    
    const getChildClassName = (className) => {
      const animationClassName = className.split(' ').find((cls) => cls.includes('js-counter-text-animation'));
      return animationClassName ? \`\${animationClassName}-child\` : '';
    };

    document.documentElement.style.setProperty('--animation-speed', '${animationSpeed}');
    document.documentElement.style.setProperty('--start-opacity-t1', '${startOpacityT1}');
    document.documentElement.style.setProperty('--opacity-t2', '${opacityT2}');

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
      let delay = 0;

      characters.forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.className = childClassName;

        const firstChar = document.createElement('span');
        firstChar.className = \`\${childClassName}-first\`;
        firstChar.textContent = char;
        firstChar.style.animationDelay = \`\${delay}s\`;

        const secondChar = document.createElement('span');
        secondChar.className = \`\${childClassName}-second\`;
        secondChar.textContent = char;
        secondChar.style.animationDelay = \`\${delay}s\`;

        charSpan.appendChild(firstChar);
        charSpan.appendChild(secondChar);
        element.appendChild(charSpan);
        
        delay += 0.1;
      });
    }

    textElements.forEach((element) => observer.observe(element));
  });
</script>

<style>
    .js-counter-text-animation-t1,
  .js-counter-text-animation-t2 {
    width: 100%;
    flex-wrap: wrap;
  }

  .js-counter-text-animation-t1-child,
  .js-counter-text-animation-t2-child {
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    vertical-align: bottom;
    height: 1.02em;
    line-height: 100%;
  }

  .js-counter-text-animation-t1-child-first {
    animation: counter-first ${animationSpeed} forwards;
    transform: translateY(103%);
  }

  @keyframes counter-first {
    0% { transform: translateY(103%); }
    20% { transform: translateY(0); }
    50% { transform: translateY(0); }
    100% { transform: translateY(-110%); }
  }

  .js-counter-text-animation-t1-child-second {
    animation: js-counter-text-animation-t1 ${animationSpeed} forwards;
    transform: translateY(100%);
    opacity: ${startOpacityT1};
  }

  @keyframes js-counter-text-animation-t1 {
    0% { transform: translateY(100%); opacity: ${startOpacityT1}; }
    20% { transform: translateY(0); opacity: ${startOpacityT1}; }
    50% { transform: translateY(0); opacity: ${startOpacityT1}; }
    100% { transform: translateY(-110%); opacity: 1; }
  }

  .js-counter-text-animation-t2-child-second {
    animation: js-counter-text-animation-t2 ${animationSpeed} forwards;
    transform: translateY(0);
    opacity: ${opacityT2};
  }

  @keyframes js-counter-text-animation-t2 {
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
