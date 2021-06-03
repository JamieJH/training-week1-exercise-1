const toggleBtn = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("close");
});
