const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const container = document.querySelector(".card");
const header = container.querySelector("h1");

let yesSize = 1;
let noScale = 1; // Начальный масштаб кнопки "Нет"

function moveNoButton() {
  // Расчет границ по всему контейнеру карточки
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Уменьшаем размер кнопки "Нет", но не меньше 0.2
  if (noScale > 0.2) {
    noScale -= 0.1; 
  }

  // Применяем позицию и уменьшение
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.bottom = "auto";
}

function growYes() {
  yesSize += 0.2; 
  yesBtn.style.transform = `translateX(-50%) scale(${yesSize})`;
}

const runAway = (e) => {
  e.preventDefault();
  moveNoButton();
  growYes();
};

noBtn.addEventListener("mouseenter", runAway);
noBtn.addEventListener("touchstart", runAway);

yesBtn.addEventListener("click", () => {
  header.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  result.textContent = "Еще бы я тебя не любил ❤️\nС днем святого Валентина, Дашуля!";
  result.classList.add("show");

  container.style.minHeight = "auto";
  container.style.padding = "40px 20px";
});