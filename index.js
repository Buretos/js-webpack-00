import "./index.css"; // Импорт файла стилей

import formattedDate from "./utils/formattedDate"; // Импорт функции formattedDate из файла utils/formattedDate

const donateForm = document.querySelector(".donate-form"); // Получение ссылки на форму с классом "donate-form"
const donateList = document.querySelector(".donates-container__donates"); // Получение ссылки на контейнер с классом "donates-container__donates"
const totalAmount = document.querySelector("#total-amount"); // Получение ссылки на элемент с id "total-amount"

donateForm.addEventListener("submit", (event) => {
  // Добавление обработчика события "submit" на форму
  event.preventDefault(); // Предотвращение отправки формы

  const amountInput = document.querySelector(".donate-form__donate-input"); // Получение ссылки на поле ввода с классом "donate-form__donate-input"
  const amount = parseInt(amountInput.value); // Получение числового значения из поля ввода

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    // Проверка на корректность введенного значения
    const currentDate = new Date(); // Создание объекта текущей даты и времени

    const donateItem = document.createElement("div"); // Создание нового элемента <div>
    donateItem.classList.add("donate-item"); // Добавление класса "donate-item" к новому элементу
    donateItem.innerHTML = `${formattedDate(currentDate)}  - <b>${amount}$</b>`; // Установка содержимого нового элемента с использованием форматированной даты и введенного значения

    donateList.appendChild(donateItem); // Добавление нового элемента в контейнер

    amountInput.value = ""; // Очистка поля ввода

    updateTotalAmount(); // Вызов функции для обновления общей суммы пожертвований
  }
});

function updateTotalAmount() {
  // Объявление функции updateTotalAmount
  const donateItems = document.querySelectorAll(".donate-item"); // Получение списка элементов с классом "donate-item"
  let total = 0; // Инициализация переменной total с начальным значением 0

  donateItems.forEach((donateItem) => {
    // Итерация по всем элементам списка
    const amount = parseInt(donateItem.querySelector("b").textContent); // Получение числового значения из элемента <b> внутри текущего элемента списка

    if (!isNaN(amount)) {
      // Проверка на корректность полученного значения
      total += amount; // Увеличение общей суммы на полученное значение
    }
  });

  totalAmount.textContent = `${total}$`; // Обновление текстового содержимого элемента с общей суммой
}
