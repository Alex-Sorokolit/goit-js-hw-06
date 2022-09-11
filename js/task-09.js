function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color')
console.log(buttonEl);

const textEl = document.querySelector('.color')
console.log(textEl);


const changeColor = () => {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  textEl.textContent = color;
}

buttonEl.addEventListener('click', changeColor)
