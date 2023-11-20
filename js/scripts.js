window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", subNumber);
  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  })
})

function subNumber(e) {
  e.preventDefault();

}