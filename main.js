
const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

/* Verify the localstorage object for the previous state */
if (theme === "dark") {
  document.body.classList.add("dark");
  document.getElementById("toggle").checked = 'true';
}

// event listener for the toggle checkbox slider object
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});
