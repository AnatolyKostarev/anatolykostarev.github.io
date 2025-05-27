# Text Animation

## Работает только с текстовыми элементами (элементы/типографика/текст)

## Генератор кода для анимации текста c обратным фейдом (исчезновение)

## Как использовать

Для корректной работы текстовой анимации с использованием скрипта необходимо в HTML-разметке добавить:
<!-- markdownlint-disable MD040 -->
```
<p class="js-stairs-text-animation-steps js-script">Loremipsum</p>
```

1. **Введите идентификатор анимацию**

   В поле "Идентификатор анимации" укажите `js-script`, что должно соответствовать классу элемента, который вы хотите анимировать. В данном случае это `js-stairs-text-animation-steps` и `js-script`.

2. **Задайте значение скорости задержки анимации**

   В поле "Скорость задержки анимации" укажите значение в формате `0.5`, которое должно быть задано для задержки анимации. По умолчание значение равно `0.1`.

3. **Задайте значение скорости анимации**

    В поле "Скорость анимации" укажите значение в формате `0.5s`, которое должно быть задано для скорости анимации. По умолчание значение равно `0.3s.`

4. **Задайте значение прозрачности анимации**

    В поле "Начальная прозрачность анимации" укажите значение прозрачности `0.5`, которое должно быть задано для начальной прозрачности анимации. По умолчание значение равно `1`

5. **Отметьте  эффект замедления в середине анимации**

   В поле "Отметить эффект замедления в середине анимации" нужно поставить галочку, если вы хотите, чтобы анимация замедлялась в середине. По умолчанию анимация не имеет эффект замедления.

6. **Отметьте  эффект замедления в конце анимации**

    В поле "Отметить эффект замедления в конце анимации" нужно поставить галочку, если вы хотите, чтобы анимация замедлялась в конце. По умолчанию анимация не имеет эффект замедления.

---

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
      <label for="endSlowdownEffect" style="font-weight:bold; color: #000;">Применить Эффект замедления в конце анимации</label>
    </div>
  </div>

  <button id="generate-stairs">Сгенерировать код</button>
  <button id="copy-stairs">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="stairs-output"></pre>
</div>
