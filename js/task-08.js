// get Form
const formEl = document.querySelector('.login-form')
// get mail input
const mailEl = formEl.firstElementChild
// get password input
const passwordEl = mailEl.nextElementSibling
// get Button
const loginBtnEl = document.querySelector('button')
console.log(loginBtnEl);


function handleSubmit(event){
 event.preventDefault();
 console.log('event', event);

 if (event.target.email.value === "" || event.target.password.value === "") {
  alert('Bсі поля повинні бути заповнені')
  return
 }

 const userData = {
  email: event.target.email.value,
  password: event.target.password.value,
 }

 console.log(userData);
 formEl.reset();
};
formEl.addEventListener('submit', handleSubmit);

