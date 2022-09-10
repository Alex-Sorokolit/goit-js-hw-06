const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

// Variant 1 ______________________________________
// const items = [];
// for (let i = 0; i < ingredients.length; i+=1) {
// const itemEl = document.createElement('li');
// itemEl.textContent = ingredients[i];
// itemEl.classList.add('item')
// items.push(itemEl);
// };

// Variant 2 ______________________________________
const items = ingredients.map(option => {
  const item = document.createElement('li');
  item.textContent = option;
  item.classList.add('item')
  return item;
})
listEl.append(...items);