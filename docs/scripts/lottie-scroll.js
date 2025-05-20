function initCodeByScrollLottie() {
  const container = document.getElementById('dotlottie_generator')
  if (!container) return

  const input = container.querySelector('#lottie_url')
  const inputClass = container.querySelector('#lottie_div')
  const inputId = container.querySelector('#lottie_canvas')
  const generateBtn = container.querySelector('#generate_dotlottie')
  const copyBtn = container.querySelector('#copy_dotlottie')
  const output = container.querySelector('#dotlottie_output')

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
      const code = `<canvas id="${canvasId}" style="width: 100%; height: 100%;"></canvas>
<script type="module">
  import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

  const initLottieAnimation = () => {
    const lottieContainer = document.querySelector(".${className}");
    const canvas = document.getElementById("${canvasId}");
    if (!lottieContainer || !canvas) return;

    lottieContainer.appendChild(canvas);
    const animation = new DotLottie({
      canvas: canvas,
      src: "${url}",
      autoplay: false,
      loop: true
    });

    // Play animation on any scroll event
    const playOnAnyScroll = () => {
      if (!animation.isPlaying) {
        animation.play();
      }
    };

    // Add scroll listener with debounce
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(playOnAnyScroll, 100);
    }, { passive: true });

    // Also play on initial load
    playOnAnyScroll();
  };

  if (document.readyState === 'complete') {
    initLottieAnimation();
  } else {
    window.addEventListener('load', initLottieAnimation);
  }
<\/script>`
      output.textContent = code
      output.style.display = 'block'
      copyBtn.style.display = 'inline-block'
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
