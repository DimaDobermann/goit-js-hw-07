const categories = document.querySelector('#categories');
const categoryItems = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
