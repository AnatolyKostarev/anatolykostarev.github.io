function initSegmentScrollLottie() {
  const container = document.querySelector('#dotlottieGenerator')
  if (!container) return

  const input = container.querySelector('#lottie__url')
  const inputClass = container.querySelector('#lottie__div')
  const inputId = container.querySelector('#lottie__canvas')
  const inputWidth = container.querySelector('#lottie__width')
  const inputHeight = container.querySelector('#lottie__height')
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
    const width = inputWidth.value.trim() || '300'
    const height = inputHeight.value.trim() || '300'

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

    // Конфигурация сегментов
    const segments = [
      { duration: 2 },  // Первый сегмент - 2 секунды
      { duration: 2 },  // Второй сегмент - 2 секунды
      { duration: 0 }   // Третий сегмент - до конца
    ];
    let currentSegment = 0;
    let segmentStartTime = 0;
    let segmentEndTime = 0;

    // Функция воспроизведения текущего сегмента
    const playCurrentSegment = () => {
      if (currentSegment >= segments.length) return;
      
      const segment = segments[currentSegment];
      
      // Для последнего сегмента просто воспроизводим до конца
      if (currentSegment === segments.length - 1) {
        animation.play();
        return;
      }
      
      // Рассчитываем время окончания сегмента
      segmentStartTime = animation.currentTime;
      segmentEndTime = segmentStartTime + segment.duration;
      
      animation.play();
      
      // Устанавливаем таймер для паузы в конце сегмента
      setTimeout(() => {
        if (animation.isPlaying) {
          animation.pause();
          currentSegment++;
        }
      }, segment.duration * 1000);
    };

    // Проверка прогресса анимации
    const checkAnimationProgress = () => {
      if (currentSegment < segments.length - 1 && 
          animation.currentTime >= segmentEndTime) {
        animation.pause();
        currentSegment++;
      }
    };

    // Обработчик для анимации
    animation.addEventListener('frame', checkAnimationProgress);

    // Воспроизведение первого сегмента
    playCurrentSegment();

    // Обработчик скролла
    let scrollDebounce;
    const handleScroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        if (!animation.isPlaying && currentSegment < segments.length) {
          playCurrentSegment();
          
          // Если все сегменты воспроизведены, удаляем обработчик
          if (currentSegment >= segments.length) {
            window.removeEventListener('scroll', handleScroll);
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  if (document.readyState === 'complete') {
    initLottieAnimation();
  } else {
    window.addEventListener('load', initLottieAnimation);
  }
<\/script>

<style>
  .${className} {
    width: ${width}px;
    height: ${height}px;
  }
</style>`

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
