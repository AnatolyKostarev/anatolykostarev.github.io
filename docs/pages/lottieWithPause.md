# Lottie - скролл с паузами

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="dotlottieGenerator">
  <label for="lottie__url" style="font-weight:bold;">URL анимации (.json или .lottie):</label>
  <input type="text" id="lottie__url" value="https://assets5.lottiefiles.com/packages/lf20_bb9b6cdf.json">
  <label for="lottie__div" style="font-weight:bold;">Имя класса для div-контейнера Lottie:</label>
  <input type="text" id="lottie__div" value="js-lottie">
  <label for="lottie__width" style="font-weight:bold;">Ширина для div-контейнера Lottie:</label>
  <input type="number" id="lottie__width" value="300">
  <label for="lottie__height" style="font-weight:bold;">Высота для div-контейнера Lottie:</label>
  <input type="number" id="lottie__height" value="300">
  <label for="lottie__canvas" style="font-weight:bold;">Имя id для canvas-контейнера Lottie:</label>
  <input type="text" id="lottie__canvas" value="canvas">

  <button id="generate__dotlottie">Сгенерировать код</button>
  <button id="copy__dotlottie">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="dotlottie__output"></pre>
</div>
