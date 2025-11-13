const categories = document.querySelector('#categories');
console.log('Number of categories:', categories.childElementCount);

const categoriesItems = document.querySelectorAll('.item');

categoriesItems.forEach(item => {
  const itemTitle = item.firstElementChild;
  const itemListCount = item.lastElementChild.childElementCount;
  console.log('Category:', itemTitle.textContent);
  console.log('Elements:', itemListCount);
});
