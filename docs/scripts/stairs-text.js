function initStairsGenerator() {
  const container = document.getElementById('stairs-generator')
  if (!container) return

  const textInput = container.querySelector('#text')
  const animationIdInput = container.querySelector('#animationIdentifier')
  const animationSpeedInput = container.querySelector('#animationSpeed')
  const initialOpacityInput = container.querySelector('#start-opacity')
  const generateBtn = container.querySelector('#generate-stairs')
  const copyBtn = container.querySelector('#copy-stairs')
  const title = container.querySelector('#title')
  const output = container.querySelector('#stairs-output')

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const text = textInput.value.trim()
      const animationIdentifier = animationIdInput.value.trim() || 'js-script'
      const animationSpeed = animationSpeedInput.value.trim() || '0.3s'
      const initialOpacity = initialOpacityInput.value.trim() || '1'

      if (!text) {
        alert('Пожалуйста, введите текст для анимации')
        return
      }

      const code = `<style>
  .js-stairs-text-animation-steps-child {
    display: inline-block;
    overflow: hidden;
    height: 0;
    opacity: ${initialOpacity};
    line-height: normal;
    vertical-align: bottom;
    animation: js-stairs-text-animation-steps ${animationSpeed} forwards;
    transition: all ${animationSpeed} ease;
  }

  .js-stairs-text-animation-steps-child span {
        display: block;
        transform: translateY(0);
      }

  @keyframes js-stairs-text-animation-steps {
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

<script defer>
  document.addEventListener('DOMContentLoaded', () => {
    const animationIdentifier = '${animationIdentifier}';
    
    // Добавляем идентификатор к существующим элементам
    const textElements = document.querySelectorAll('.js-stairs-text-animation-steps');
    textElements.forEach(el => {
      el.classList.add(animationIdentifier);
      el.textContent = '${text}';
    });

    const animatedElements = document.querySelectorAll(\`[class*="js-stairs-text-animation"][class*="\${animationIdentifier}"]\`);
    
    const getChildClassName = (className) => {
      const animationClassName = className.split(' ').find((cls) => cls.includes('js-stairs-text-animation'));
      return animationClassName ? \`\${animationClassName}-child\` : '';
    };

    // Настройки анимации
    const animationSettings = {
      startOpacity: '1',
      animationSpeed: '0.3s',
      delayBetweenChars: 0.1,
      slowdownEffect: false,
      endSlowdownEffect: false
    };

    document.documentElement.style.setProperty('--start-opacity', animationSettings.startOpacity);
    document.documentElement.style.setProperty('--animation-speed', animationSettings.animationSpeed);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    function animateElement(element) {
      const className = element.className;
      if (!className) return;

      const text = element.textContent.trim();
      element.innerHTML = '';
      
      const characters = text.split('');
      const childClassName = getChildClassName(className);
      let delay = 0;

      characters.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.className = childClassName;
        charSpan.textContent = char;

        let totalSlowdownFactor = 0;
        const position = index / (characters.length - 1 || 1);
        
        if (animationSettings.slowdownEffect && position >= 0.33 && position < 0.7) {
          const normalizedPos = position < 0.5 
            ? (position - 0.33) / (0.5 - 0.33)
            : 1 - (position - 0.5) / (0.7 - 0.5);
          totalSlowdownFactor += Math.pow(normalizedPos, 2) * 5;
        }
        
        if (animationSettings.endSlowdownEffect && position >= 0.6) {
          totalSlowdownFactor += Math.pow((position - 0.6) / 0.4, 2) * 3;
        }

        delay += animationSettings.delayBetweenChars * (1 + totalSlowdownFactor);
        charSpan.style.animationDelay = \`\${delay}s\`;
        element.appendChild(charSpan);
      });
    }

    animatedElements.forEach(element => observer.observe(element));
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
