const categoryItemEl = document.querySelectorAll('.item')
console.log('Number of categories: ', categoryItemEl.length);

categoryItemEl.forEach((item) => {
 console.log('Category: ', item.firstElementChild.textContent);
 const countItemEl = item.querySelectorAll('li')
 console.log('Elements: ', countItemEl.length);
})