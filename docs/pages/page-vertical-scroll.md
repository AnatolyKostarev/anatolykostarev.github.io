# Page Scroll Animation

## Работает только элементами (элементы/основные/блок-секция-контейнер)

## Генератор кода для анимации вертикального скролла секций с эффектом скейлинга

## Как использовать

Для корректной работы текстовой анимации с использованием скрипта необходимо в HTML-разметке добавить:
<!-- markdownlint-disable MD040 -->
```
<div class="container js-container" data-page="1">
    <div class="js-page section_1">Page 1</div>
</div>
```

1. **Максимальное количество страниц**

  В поле "Максимальное количество страниц" необходимо указать количество страниц, которые будут отображаться на экране. В данном случае это 1 страниц.

  Родительский элемент обязательно должен иметь класс с названием `container js-container` и атрибут `data-page="1"` с указанием номера страницы.

  Дочерний элемент обязательно должен иметь класс с названием `js-page section_1`.
  
  Если дочерних элементов более одного, то необходимо указать название класса для каждого элемента в порядке возрастания, а именно: `js-page section_2`, `js-page section_3` и т. д.

  Если блок будет включать большее количество страниц, например, 10, то необходимо в поле "Максимальное количество страниц" указать 10.
  В таком случае, в HTML-разметке предварительно нужно будет сформировать блок со следующей структурой:

  ```
  <div class="container js-container" data-page="1">
      <div class="js-page section_1">Page 1</div>
      <div class="js-page section_2">Page 2</div>
      <div class="js-page section_3">Page 3</div>
      <div class="js-page section_4">Page 4</div>
      <div class="js-page section_5">Page 5</div>
      <div class="js-page section_6">Page 6</div>
      <div class="js-page section_7">Page 7</div>
      <div class="js-page section_8">Page 8</div>
      <div class="js-page section_9">Page 9</div>
      <div class="js-page section_10">Page 10</div>
  </div>

  ```

---

## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="fullpage-generator">
 <label for="fullpage-count" style="font-weight:bold;">Максимальное количество страниц</label>
<input type="number" id="fullpage-count" value="1">
 <button id="generate-fullpage">Сгенерировать код</button>
  <button id="copy-fullpage">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="fullpage-output"></pre>
</div>
