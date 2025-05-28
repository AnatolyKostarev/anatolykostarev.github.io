# Text Animation

## Работает только с текстовыми элементами (элементы/типографика/текст)

## Генератор кода для анимации текста c обратным фейдом (исчезновение)

## Как использовать

Для корректной работы текстовой анимации с использованием скрипта необходимо в HTML-разметке добавить:
<!-- markdownlint-disable MD040 -->
```
<p class="js-text-animation-fade-rl js-script">Loremipsum</p>
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
  стилей задать название класса `js-text-animation-fade-rl js-script` Элемента Text.</figcaption>
</figure>

1. **Введите идентификатор анимацию**

   В поле "Идентификатор анимации" укажите `js-script`, что должно соответствовать классу элемента, который вы хотите анимировать. В данном случае это `js-text-animation-fade-rl` и `js-script`.

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

<div id="fadeRL-generator">
  <label for="fadeRL-animationID" style="font-weight:bold; color: #000;">Идентификатор анимации</label>
  <input type="text" id="fadeRL-animationID" value="" placeholder="js-script">
  <label for="fadeRL-delayBeforeStart" style="font-weight:bold; color: #000;">Задержка перед началом всей анимации</label>
  <input type="text" id="fadeRL-delayBeforeStart" value="0s" placeholder="0s">
   <label for="fadeRL-animationDalay" style="font-weight:bold; color: #000;">Скорость задержки анимации</label>
  <input type="text" id="fadeRL-animationDalay" value="0.1" placeholder="0.01">
  <label for="fadeRL-animationSpeed" style="font-weight:bold; color: #000;">Скорость анимации</label>
  <input type="text" id="fadeRL-animationSpeed" value="0.3s" placeholder="0.3s">
  <div class="checkbox">
    <div class="checkbox_wrapper">
        <input type="checkbox" id="fadeRL-slowdownEffect" value="true">
        <label for="fadeRL-slowdownEffect" style="font-weight:bold; color: #000;">Не применять эффект замедления в середине анимации</label>
    </div>
    <div class="checkbox_wrapper">
        <input type="checkbox" id="fadeRL-endSlowdownEffect" value="false">
        <label for="fadeRL-endSlowdownEffect" style="font-weight:bold; color: #000;">Применить эффект замедления в конце анимации</label>
    </div>
  </div>

  <button id="generate-fadeRL">Сгенерировать код</button>
  <button id="copy-fadeRL">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="fadeRL-output"></pre>
</div>
