# Lottie Animation

## Работает только элементами (элементы/основные/блок-секция-контейнер)

## Генератор кода для Lottie анимаций

Этот генератор позволяет быстро получить код для вставки Lottie-анимации в ваш проект, которая запускаются при скролле страницы. Просто укажите ссылку на `.json` или `.lottie` файл, имя класса для контейнера и ID для canvas — и получите готовый фрагмент для вставки.

Для корректной работы Lottie-анимации с использованием скрипта необходимо в HTML-разметке добавить:

<!-- markdownlint-disable MD040 -->

```
<div class="js-lottie"></div>

```
<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->
<figure>
  <img src="../assets/create-lottie-div.png" class="lottie1" alt="div" />
  <figcaption>В конструкторе в навигационной панели слева необходимо во вкладке Слои создать Элемент DivBlock.</figcaption>
</figure>

<figure>
  <img src="../assets/add-lottie-class.png" class="lottie2" alt="class" />
  <figcaption>В конструкторе в навигационной панели справа необходимо во вкладке Дизайн -> Источники
  стилей задать название класса `js-lottie` Элемента DivBlock.</figcaption>
  <figcaption>Также необходимо задать селектору класса `js-lottie` `width` и `height` в пикселях (`px`)</figcaption>
</figure>

## Как использовать

Инструмент для создания кода вставки Lottie-анимаций, которые запускаются при скролле страницы.

1. **Введите ссылку на анимацию**  
   Поддерживаются прямые ссылки на `.json` или `.lottie` файлы.

   Пример: <https://lottie.host/3b708674-ffd6-4a3b-90b4-4d926c311ff5/tRKFgr4YCB.lottie>

2. **Укажите имя класса для контейнера**  
Это класс элемента, внутри которого появится анимация.  
Пример:  `js-lottie`

3. **Укажите имя для canvas**  
Это будет идентификатор элемента `<canvas>`, где будет рендериться анимация.  
Пример:  canvas

4. **Нажмите "Сгенерировать код"**  
Внизу появится готовый код для вставки.

5. **Скопируйте код**  
Нажмите "Копировать код", чтобы скопировать сгенерированный фрагмент.

6. **Вставка сгенерированного кода**

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

<!-- ## Пример сгенерированного кода -->
## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="dotlottie_generator">
  <label for="lottie_url" style="font-weight:bold;">URL анимации (.json или .lottie):</label>
  <input type="text" id="lottie_url" value="https://lottie.host/3b708674-ffd6-4a3b-90b4-4d926c311ff5/tRKFgr4YCB.lottie">
  <label for="lottie_div" style="font-weight:bold;">Имя класса для div-контейнера Lottie:</label>
  <input type="text" id="lottie_div" value="js-lottie">
  <label for="lottie_canvas" style="font-weight:bold;">Имя для canvas-контейнера Lottie:</label>
  <input type="text" id="lottie_canvas" value="canvas">

  <button id="generate_dotlottie">Сгенерировать код</button>
  <button id="copy_dotlottie">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="dotlottie_output"></pre>
</div>
