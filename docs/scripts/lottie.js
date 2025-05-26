function initCodeLottie() {
  const container = document.getElementById('dotlottie-generator')
  if (!container) return

  const input = container.querySelector('#lottie-url')
  const inputClass = container.querySelector('#lottie-div')
  const inputId = container.querySelector('#lottie-canvas')
  const generateBtn = container.querySelector('#generate-dotlottie')
  const copyBtn = container.querySelector('#copy-dotlottie')
  const title = container.querySelector('#title')
  const output = container.querySelector('#dotlottie-output')
  const clickBehaviorRadios = container.querySelectorAll(
    'input[name="click-behavior"]'
  )

  function isValidDirectLink(url) {
    if (!url) return false
    const lowerUrl = url.toLowerCase()
    const isFile = lowerUrl.endsWith('.lottie') || lowerUrl.endsWith('.json')
    const isEmbed = lowerUrl.includes('/embed/')
    return isFile && !isEmbed
  }

  if (!generateBtn.hasListener) {
    generateBtn.addEventListener('click', () => {
      const url = input.value.trim()
      const className = inputClass.value.trim()
      const canvasId = inputId.value.trim()

      if (!isValidDirectLink(url)) {
        alert(
          'Введите корректный прямой URL на .lottie или .json файл (без /embed/ в ссылке)'
        )
        return
      }

      // Определяем выбранное поведение
      let clickBehavior = 'none'
      clickBehaviorRadios.forEach(radio => {
        if (radio.checked) {
          clickBehavior = radio.value
        }
      })

      let clickHandlerCode = ''
      if (clickBehavior === 'toggle') {
        clickHandlerCode = `
          canvas.style.cursor = "pointer";
          canvas.addEventListener('click', () => {
            if (animation.isPlaying) {
              animation.pause();
            } else {
              animation.play();
            }
          });`
      }

      const code = `<script type="module" defer>
        import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

        document.addEventListener('DOMContentLoaded', () => {
          const lottieContainer = document.querySelector(".${className}");
          if (!lottieContainer) {
            console.error('Контейнер для Lottie не найден');
            return;
          }

          lottieContainer.style.opacity = '0';
          lottieContainer.style.transition = 'opacity 1s ease-in-out';

          const canvas = document.createElement('canvas');
          canvas.id = "${canvasId}";
          canvas.style.width = "100%";
          canvas.style.height = "100%";

          lottieContainer.innerHTML = '';
          lottieContainer.appendChild(canvas);

          try {
            const animation = new DotLottie({
              canvas: canvas,
              src: "${url}",
              autoplay: true,
              loop: true
            });

            animation.addEventListener('load', () => {
              lottieContainer.style.opacity = '1';
            });

            ${clickHandlerCode}
            window.lottieAnimation = animation;
          } catch (error) {
            console.error('Ошибка загрузки Lottie анимации:', error);
            lottieContainer.style.opacity = '1';
          }
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
