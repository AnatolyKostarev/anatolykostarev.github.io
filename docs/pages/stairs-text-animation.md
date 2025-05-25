# Text Animation

## Генератор кода для анимации текста

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="stairs-generator">
  <label for="text" style="font-weight:bold;">Текст для анимации:</label>
  <input type="text" id="text" value="" placeholder="текст для анимации">
  <label for="animationIdentifier" style="font-weight:bold;">Идентификатор анимации:</label>
  <input type="text" id="animationIdentifier" value="" placeholder="js-script">
  <label for="animationSpeed" style="font-weight:bold;">Скорость анимации:</label>
  <input type="text" id="animationSpeed" value="0.3s" placeholder="0.3s">
  <label for="start-opacity" style="font-weight:bold;">Начальная прозрачность анимации:</label>
  <input type="text" id="start-opacity" value="1" placeholder="1">
  <button id="generate-stairs">Сгенерировать код</button>
  <button id="copy-stairs">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="stairs-output"></pre>
</div>
