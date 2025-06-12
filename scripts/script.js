document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".main__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Спасибо за ваше сообщение!");
      console.log("Форма отправлена");
    });
  }
});
