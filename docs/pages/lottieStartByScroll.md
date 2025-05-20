# Lottie Animation - Запуск по скроллу

## Генератор кода для Lottie анимаций

Инструмент для создания кода вставки Lottie-анимаций, которые запускаются при скролле страницы.

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="dotlottie_generator">
  <label for="lottie_url" style="font-weight:bold;">URL анимации (.json или .lottie):</label>
  <input type="text" id="lottie_url" value="https://assets5.lottiefiles.com/packages/lf20_bb9b6cdf.json">
    <label for="lottie_div" style="font-weight:bold;">Имя класса для div-контейнера Lottie:</label>
  <input type="text" id="lottie_div" value="js-lottie">
    <label for="lottie_canvas" style="font-weight:bold;">Имя id для canvas-контейнера Lottie:</label>
  <input type="text" id="lottie_canvas" value="canvas">
  <button id="generate_dotlottie">Сгенерировать код</button>
  <button id="copy_dotlottie">Копировать код</button>
  <pre id="dotlottie_output"></pre>
</div>
