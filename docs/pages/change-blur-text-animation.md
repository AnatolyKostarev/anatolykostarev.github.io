# Text Animation

## Работает только с текстовыми элементами (элементы/типографика/текст)

## Генератор кода для анимации текста c побуквенным блюр-эффектом

## Как использовать

Для корректной работы текстовой анимации с использованием скрипта необходимо в HTML-разметке добавить:
<!-- markdownlint-disable MD040 -->
```
<p class="js-text-animation-blureLR js-script">Loremipsum</p>
```

1. **Введите идентификатор анимацию**

   В поле "Идентификатор анимации" укажите `js-script`, что должно соответствовать классу элемента, который вы хотите анимировать. В данном случае это `js-text-animation-blureLR` и `js-script`.

2. **Задайте значение размытия текста перед началом анимации**

   В поле "Значение размытия текста" укажите значение в пикселях в формате `6px`, которое должно быть задано для начала анимации. По умолчание значение равно `5px`.

3. **Задайте значение задержки перед началом анимации**

   В поле "Задержка перед началом всей анимации" укажите значение в секундах в формате `0.3s`, которое должно быть задано для начала анимации. В данном случае это `0` сек.

4. **Задайте значение скорости задержки анимации**

   В поле "Скорость задержки анимации" укажите значение в формате `0.5`, которое должно быть задано для задержки анимации. По умолчание значение равно `0.1`.

5. **Задайте значение скорости анимации**
    В поле "Скорость анимации" укажите значение в формате `0.5s`, которое должно быть задано для скорости анимации. По умолчание значение равно `0.3s`.

6. **Отметьте  эффект замедления в середине анимации**

   В поле "Отметить эффект замедления в середине анимации" нужно поставить галочку, если вы хотите, чтобы анимация не замедлялась в середине. По умолчанию анимация имеет эффект замедления.

7. **Отметьте  эффект замедления в конце анимации**

    В поле "Отметить эффект замедления в конце анимации" нужно поставить галочку, если вы хотите, чтобы анимация замедлялась в конце. По умолчанию анимация не имеет эффект замедления.

---

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="blureLR-generator">
  <label for="blureLR-animationID" style="font-weight:bold; color: #000;">Идентификатор анимации</label>
  <input type="text" id="blureLR-animationID" value="" placeholder="js-script">
  <label for="blureLR-blurAmount" style="font-weight:bold; color: #000;">Значение размытия текста</label>
  <input type="text" id="blureLR-blurAmount" value="" placeholder="5px">
  <label for="blureLR-delayBeforeStart" style="font-weight:bold; color: #000;">Задержка перед началом всей анимации</label>
  <input type="text" id="blureLR-delayBeforeStart" value="0s" placeholder="0s">
   <label for="blureLR-animationDalay" style="font-weight:bold; color: #000;">Скорость задержки анимации</label>
  <input type="text" id="blureLR-animationDalay" value="0.1" placeholder="0.01">
  <label for="blureLR-animationSpeed" style="font-weight:bold; color: #000;">Скорость анимации</label>
  <input type="text" id="blureLR-animationSpeed" value="0.3s" placeholder="0.3s">
  <div class="checkbox">
    <div class="checkbox_wrapper">
        <input type="checkbox" id="blureLR-slowdownEffect" value="true">
        <label for="blureLR-slowdownEffect" style="font-weight:bold; color: #000;">Не применять эффект замедления в середине анимации</label>
    </div>
    <div class="checkbox_wrapper">
        <input type="checkbox" id="blureLR-endSlowdownEffect" value="false">
        <label for="blureLR-endSlowdownEffect" style="font-weight:bold; color: #000;">Применить эффект замедления в конце анимации</label>
    </div>
  </div>

  <button id="generate-blureLR">Сгенерировать код</button>
  <button id="copy-blureLR">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="blureLR-output"></pre>
</div>
