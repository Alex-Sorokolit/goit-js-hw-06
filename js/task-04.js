let counterValue = 0;

//Value
const valueEl = document.querySelector('#value') 

// -
const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
decrementBtnEl.addEventListener('click', () => {
 counterValue -= 1;
 valueEl.textContent = counterValue;
});
// +
const incrementBtnEl = document.querySelector('button[data-action="increment"]')
incrementBtnEl.addEventListener('click', () => {
 counterValue += 1;
 valueEl.textContent = counterValue;
});
