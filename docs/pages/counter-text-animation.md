# Text Animation

## Генератор кода для анимации текста

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="counter-generator">
  <label for="counter-animationID" style="font-weight:bold;">Идентификатор анимации:</label>
  <input type="text" id="counter-animationID" value="" placeholder="js-script">
  <label for="counter-animationSpeed" style="font-weight:bold;">Скорость анимации:</label>
  <input type="text" id="counter-animationSpeed" value="2.5s" placeholder="2.5s">
  <label for="counter-startOpacityT1" style="font-weight:bold;">Начальная прозрачность анимации второго слоя:</label>
  <input type="text" id="counter-startOpacityT1" value="0" placeholder="0">
  <label for="counter-opacityT2" style="font-weight:bold;">Конечная прозрачность анимации второго слоя:</label>
  <input type="text" id="counter-opacityT2" value="0.5" placeholder="0.5">
  
  <button id="generate-counter">Сгенерировать код</button>
  <button id="copy-counter">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="counter-output"></pre>
</div>
