# Text Animation работает только с текстовыми элементами (элементы/типографика/текст)

## Генератор кода для анимации текста

## Как использовать

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="stairs-generator">
  <label for="animationIdentifier" style="font-weight:bold; color: #000;">Идентификатор анимации:</label>
  <input type="text" id="animationIdentifier" value="" placeholder="js-script">
  <label for="animationDalay" style="font-weight:bold; color: #000;">Скорость задержки анимации:</label>
  <input type="text" id="animationDalay" value="0.1" placeholder="0.1">
  <label for="animationSpeed" style="font-weight:bold; color: #000;">Скорость анимации:</label>
  <input type="text" id="animationSpeed" value="0.3s" placeholder="0.3s">
  <label for="start-opacity" style="font-weight:bold; color: #000;">Начальная прозрачность анимации:</label>
  <input type="text" id="start-opacity" value="1" placeholder="1">
  <div class="checkbox">
    <div class="checkbox_wrapper">
      <input type="checkbox" id="slowdownEffect" value="false">
      <label for="slowdownEffect" style="font-weight:bold; color: #000;">Применить эффект замедления в середине анимации</label>
    </div>
    <div class="checkbox_wrapper">
      <input type="checkbox" id="endSlowdownEffect" value="false">
      <label for="endSlowdownEffect" style="font-weight:bold; color: #000;">Применить эффект замедления в конце анимации</label>
    </div>
  </div>

  <button id="generate-stairs">Сгенерировать код</button>
  <button id="copy-stairs">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="stairs-output"></pre>
</div>
