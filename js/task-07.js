const sliderEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

// default value
textEl.style.fontSize = `${sliderEl.value}px`;

// changed value
const changeFontSize = (event) => {
 // console.log(event.currentTarget.value);
 textEl.style.fontSize = `${event.currentTarget.value}px`;
}

sliderEl.addEventListener('change', changeFontSize)