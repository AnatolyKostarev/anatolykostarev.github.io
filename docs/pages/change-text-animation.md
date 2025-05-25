# Text Animation

## Генератор кода для анимации текста

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="change-generator">
  <label for="change-text" style="font-weight:bold;">Текст для анимации:</label>
  <input type="text" id="change-text" value="" placeholder="текст для анимации">
  <label for="change-animationID" style="font-weight:bold;">Идентификатор анимации:</label>
  <input type="text" id="change-animationID" value="" placeholder="js-script-01">
  <label for="change-animationSpeed" style="font-weight:bold;">Скорость анимации:</label>
  <input type="text" id="change-animationSpeed" value="0.3s" placeholder="0.3s">
  <label for="change-colorFrom" style="font-weight:bold;">Цвет текста в начале анимации</label>
  <input type="text" id="change-colorFrom" value="#ffffff" placeholder="#ffffff">
  <label for="change-colorTo" style="font-weight:bold;">Цвет текста в конце анимации</label>
  <input type="text" id="change-colorTo" value="#43a268" placeholder="#43a268">
  <label for="change-blurAmount" style="font-weight:bold;">Значение размытия текста в начале анимации</label>
  <input type="text" id="change-blurAmount" value="0px" placeholder="0px">
  <button id="generate-change">Сгенерировать код</button>
  <button id="copy-change">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="change-output"></pre>
</div>
