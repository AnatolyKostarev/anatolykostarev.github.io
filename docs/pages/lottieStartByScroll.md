# Lottie Animation

## Генератор кода для Lottie анимаций

Этот генератор позволяет быстро получить код для вставки Lottie-анимации в ваш проект, которая запускаются при скролле страницы. Просто укажите ссылку на `.json` или `.lottie` файл, имя класса для контейнера и ID для canvas — и получите готовый фрагмент для вставки.

---

## Как использовать

Инструмент для создания кода вставки Lottie-анимаций, которые запускаются при скролле страницы.

1. **Введите ссылку на анимацию**  
   Поддерживаются прямые ссылки на `.json` или `.lottie` файлы.
   Пример: <https://lottie.host/3b708674-ffd6-4a3b-90b4-4d926c311ff5/tRKFgr4YCB.lottie>

2. **Укажите имя класса для контейнера**  
Это класс элемента, внутри которого появится анимация.  
Пример:  js-lottie

3. **Укажите ширину для контейнера Lottie**  
Ширина контейнера будет принимать значение в px.  
Пример:  300

4. **Укажите высоту для контейнера Lottie**  
Высота контейнера будет принимать значение в px.  
Пример:  300

5. **Укажите ID для canvas**  
Это будет идентификатор элемента `<canvas>`, где будет рендериться анимация.  
Пример:  canvas

6. **Нажмите "Сгенерировать код"**  
Внизу появится готовый код для вставки.

7. **Скопируйте код**  
Нажмите "Копировать код", чтобы скопировать сгенерированный фрагмент.

---

<!-- ## Пример сгенерированного кода -->
## Форма для генерации кода

<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<div id="dotlottie_generator">
  <label for="lottie_url" style="font-weight:bold;">URL анимации (.json или .lottie):</label>
  <input type="text" id="lottie_url" value="https://assets5.lottiefiles.com/packages/lf20_bb9b6cdf.json">
  <label for="lottie_div" style="font-weight:bold;">Имя класса для div-контейнера Lottie:</label>
  <input type="text" id="lottie_div" value="js-lottie">
  <label for="lottie_width" style="font-weight:bold;">Ширина для div-контейнера Lottie:</label>
  <input type="number" id="lottie_width" value="300">
  <label for="lottie_height" style="font-weight:bold;">Высота для div-контейнера Lottie:</label>
  <input type="number" id="lottie_height" value="300">
  <label for="lottie_canvas" style="font-weight:bold;">Имя id для canvas-контейнера Lottie:</label>
  <input type="text" id="lottie_canvas" value="canvas">

  <button id="generate_dotlottie">Сгенерировать код</button>
  <button id="copy_dotlottie">Копировать код</button>
  <h2 id="title" style="display: none">Пример сгенерированного кода</h2>
  <pre id="dotlottie_output"></pre>
</div>
