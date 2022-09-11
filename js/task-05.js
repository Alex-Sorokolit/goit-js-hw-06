const inputEl = document.querySelector('input')
const userNameEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
 userNameEl.textContent = event.currentTarget.value
  ? event.currentTarget.value 
  : 'Anonymous'; 
};