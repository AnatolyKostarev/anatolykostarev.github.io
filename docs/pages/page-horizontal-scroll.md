# Page Scroll Animation

## Работает только элементами (элементы/основные/блок-секция-контейнер)

## Генератор кода для анимации вертикального скролла нечетных секций и горизонтального скролла четных секций с эффектом скейлинга

## Как использовать

Для корректной работы текстовой анимации с использованием скрипта необходимо в HTML-разметке добавить:
<!-- markdownlint-disable MD040 -->
```
<div class="scroll-container">
  <div class="scroll-page">Page 1</div>
  <div class="scroll-page">Page 2</div>
  <div class="scroll-page">Page 3</div>
  <div class="scroll-page">Page 4</div>
</div>
```

1. **Максимальное количество страниц**

  В поле "Максимальное количество страниц" необходимо указать количество страниц, которые будут отображаться на экране. В данном случае это 4 страниц.

   Родительский элемент обязательно должен иметь класс с названием `scroll-container`.

  Дочерний элемент обязательно должен иметь класс с названием `scroll-page`.

  Если блок будет включать большее количество страниц, например, 10, то необходимо в поле "Максимальное количество страниц" указать 10.
  В таком случае, в HTML-разметке предварительно нужно будет сформировать блок со следующей структурой:

  ```
  <div class="scroll-container">
    <div class="scroll-page">Page 1</div>
    <div class="scroll-page">Page 2</div>
    <div class="scroll-page">Page 3</div>
    <div class="scroll-page">Page 4</div>
    <div class="scroll-page">Page 5</div>
    <div class="scroll-page">Page 6</div>
    <div class="scroll-page">Page 7</div>
    <div class="scroll-page">Page 8</div>
    <div class="scroll-page">Page 9</div>
    <div class="scroll-page">Page 10</div>
  </div>

  ```
<!-- markdownlint-disable MD029 -->

1. **Вставка сгенерированного кода**

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->
<figure>
  <img src="../assets/insert-code-1.png" class="lottie" alt="div" />
  <figcaption>В конструкторе в навигационной панели слева необходимо во вкладке Страницы выбрать страницу для вставки кода.
  При наведении на название страницы появляется шестеренка, по которой необходимо кликнуть, чтобы открыть вкладку для настройки страницы</figcaption>
</figure>

<figure>
  <img src="../assets/insert-code-2.png" class="lottie" alt="class" />
  <figcaption>Во вкладке настройки страницы в разделе Пользовательский код нужно вставить сгенерированный код</figcaption>
</figure>

---

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="hor-fullpage-generator">
 <label for="hor-fullpage-count" style="font-weight:bold;">Максимальное количество страниц</label>
<input type="number" id="hor-fullpage-count" value="2">
 <button id="hor-generate-fullpage">Сгенерировать код</button>
  <button id="hor-copy-fullpage">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="hor-fullpage-output"></pre>
</div>
