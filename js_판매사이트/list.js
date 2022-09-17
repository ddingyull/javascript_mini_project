var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

for(let i = 0; i < products.length; i++) {
  document.querySelector('.title').innerHTML = `${products[i].title}`
  document.querySelector('.price').innerHTML = ` 가격 : ${products[i].price}`
}