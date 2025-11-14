function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  changeBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

refs.changeBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  refs.spanColor.textContent = randomColor;
  refs.body.style.backgroundColor = randomColor;
}
