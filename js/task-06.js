const inputEl = document.querySelector('input')

const onInputBlur = (event) => {
 const requiredLength = Number(event.target.dataset.length)
 console.log(requiredLength);
 console.log(event.target.value.length);
 
 if (event.target.value.length === requiredLength) {
  event.target.classList.remove('invalid')
  event.target.classList.add('valid')
  
 } else {
  event.target.classList.remove('valid')
  event.target.classList.add('invalid')
 }
};

inputEl.addEventListener('blur', onInputBlur);