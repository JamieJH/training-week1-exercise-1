const toggleBtns = document.querySelector(".toggle-btns");
const sidebar = document.querySelector(".sidebar");

toggleBtns.addEventListener("click", function () {
  sidebar.classList.toggle("close");
  toggleBtns.classList.toggle("close")
});
