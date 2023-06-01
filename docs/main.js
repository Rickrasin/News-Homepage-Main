const menuButton = document.querySelector(".n-burguer");

const menuButtonClose = document.querySelector(".n-burguer-close");

const menuModal = document.querySelector(".n-menu-modal");

menuButton.addEventListener("click", function () {
  menuModal.classList.toggle("is-active");
});

menuButtonClose.addEventListener("click", function () {
  menuModal.classList.toggle("is-active");
});
