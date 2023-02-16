const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "unset";
});
popup.addEventListener("click", () => (popup.style.display = "none"));

closeBtn.addEventListener("click", () => (popup.style.display = "none"));
