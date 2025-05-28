# Text Animation

## Работает только с текстовыми элементами (элементы/типографика/текст)

## Генератор кода для анимации текста c побуквенным фейдом (появление)

## Как использовать

Для корректной работы текстовой анимации с использованием скрипта необходимо в HTML-разметке добавить:
<!-- markdownlint-disable MD040 -->
```
<p class="js-text-animation-fadeLR js-script">Loremipsum</p>
```
<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->
<figure>
  <img src="../assets/add-text-element-1.png" class="lottie1" alt="div" />
  <figcaption>В конструкторе в навигационной панели слева необходимо во вкладке Слои создать Элемент - Типографика - Текст</figcaption>
</figure>

<figure>
  <img src="../assets/add-text-element-2.png" class="lottie2" alt="class" />
  <figcaption>В конструкторе в навигационной панели справа необходимо во вкладке Дизайн -> Источники
  стилей задать название класса `js-text-animation-fadeLR js-script` Элемента Text.</figcaption>
</figure>

1. **Введите идентификатор анимацию**

   В поле "Идентификатор анимации" укажите `js-script`, что должно соответствовать классу элемента, который вы хотите анимировать. В данном случае это `js-text-animation-fadeLR` и `js-script`.

2. **Задайте значение задержки перед началом анимации**

   В поле "Задержка перед началом всей анимации" укажите значение в секундах в формате `0.3s`, которое должно быть задано для начала анимации. В данном случае это 0 сек.

3. **Задайте значение скорости задержки анимации**

   В поле "Скорость задержки анимации" укажите значение в формате `0.5`, которое должно быть задано для задержки анимации. По умолчание значение равно 0.1.

4. **Задайте значение скорости анимации**
    В поле "Скорость анимации" укажите значение в формате `0.5s`, которое должно быть задано для скорости анимации. По умолчание значение равно 0.3s.

5. **Отметьте  эффект замедления в середине анимации**

   В поле "Отметить эффект замедления в середине анимации" нужно поставить галочку, если вы хотите, чтобы анимация не замедлялась в середине. По умолчанию анимация имеет эффект замедления.

6. **Отметьте  эффект замедления в конце анимации**

    В поле "Отметить эффект замедления в конце анимации" нужно поставить галочку, если вы хотите, чтобы анимация замедлялась в конце. По умолчанию анимация не имеет эффект замедления.

---

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="fadeLR-generator">
  <label for="fadeLR-animationID" style="font-weight:bold; color: #000;">Идентификатор анимации</label>
  <input type="text" id="fadeLR-animationID" value="" placeholder="js-script">
  <label for="fadeLR-delayBeforeStart" style="font-weight:bold; color: #000;">Задержка перед началом всей анимации</label>
  <input type="text" id="fadeLR-delayBeforeStart" value="0s" placeholder="0s">
   <label for="fadeLR-animationDalay" style="font-weight:bold; color: #000;">Скорость задержки анимации</label>
  <input type="text" id="fadeLR-animationDalay" value="0.1" placeholder="0.01">
  <label for="fadeLR-animationSpeed" style="font-weight:bold; color: #000;">Скорость анимации</label>
  <input type="text" id="fadeLR-animationSpeed" value="0.3s" placeholder="0.3s">
  <div class="checkbox">
    <div class="checkbox_wrapper">
        <input type="checkbox" id="fadeLR-slowdownEffect" value="true">
        <label for="fadeLR-slowdownEffect" style="font-weight:bold; color: #000;">Не применять эффект замедления в середине анимации</label>
    </div>
    <div class="checkbox_wrapper">
        <input type="checkbox" id="fadeLR-endSlowdownEffect" value="false">
        <label for="fadeLR-endSlowdownEffect" style="font-weight:bold; color: #000;">Применить эффект замедления в конце анимации</label>
    </div>
  </div>

  <button id="generate-fadeLR">Сгенерировать код</button>
  <button id="copy-fadeLR">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="fadeLR-output"></pre>
</div>
