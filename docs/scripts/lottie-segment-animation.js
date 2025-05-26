function initSegmentScrollLottie() {
  const container = document.querySelector('#dotlottieGenerator')
  if (!container) return

  const input = container.querySelector('#lottie__url')
  const inputClass = container.querySelector('#lottie__div')
  const inputId = container.querySelector('#lottie__canvas')
  const generateBtn = container.querySelector('#generate__dotlottie')
  const copyBtn = container.querySelector('#copy__dotlottie')
  const title = container.querySelector('#title')
  const output = container.querySelector('#dotlottie__output')

  function isValidDirectLink(url) {
    if (!url) return false
    const lowerUrl = url.toLowerCase()
    const isFile = lowerUrl.endsWith('.lottie') || lowerUrl.endsWith('.json')
    const isEmbed = lowerUrl.includes('/embed/')
    return isFile && !isEmbed
  }

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

    const code = `<script type="module" defer>
  import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

  const initLottieAnimation = () => {
    const lottieContainer = document.querySelector(".${className}");
    if (!lottieContainer) return;

    const canvas = document.createElement('canvas');
    canvas.id = "${canvasId}";
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    lottieContainer.innerHTML = '';
    lottieContainer.appendChild(canvas);

    const animation = new DotLottie({
      canvas: canvas,
      src: "${url}",
      autoplay: false,
      loop: false
    });

    const segments = [
      { duration: 3 },
      { duration: 3 },
      { duration: 0 }
    ];

    let currentSegment = 0;
    let segmentStartTime = 0;
    let segmentEndTime = 0;

    const playCurrentSegment = () => {
      if (currentSegment >= segments.length) return;
      
      const segment = segments[currentSegment];
      
      if (currentSegment === segments.length - 1) {
        animation.play();
        return;
      }
      
      segmentStartTime = animation.currentTime;
      segmentEndTime = segmentStartTime + segment.duration;
      
      animation.play();
      
      setTimeout(() => {
        if (animation.isPlaying) {
          animation.pause();
          currentSegment++;
        }
      }, segment.duration * 1000);
    };

    const checkAnimationProgress = () => {
      if (currentSegment < segments.length - 1 && 
          animation.currentTime >= segmentEndTime) {
        animation.pause();
        currentSegment++;
      }
    };

    animation.addEventListener('frame', checkAnimationProgress);

    playCurrentSegment();

    let scrollDebounce;
    const handleScroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        if (!animation.isPlaying && currentSegment < segments.length) {
          playCurrentSegment();
          
          if (currentSegment >= segments.length) {
            window.removeEventListener('wheel', handleScroll);
          }
        }
      }, 100);
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
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
    title.style.display = 'block'
  })

  copyBtn.addEventListener('click', () => {
    navigator.clipboard
      .writeText(output.textContent)
      .then(() => {
        copyBtn.textContent = 'Скопировано!'
        setTimeout(() => (copyBtn.textContent = 'Копировать код'), 1500)
      })
      .catch(() => alert('Ошибка копирования'))
  })
}
