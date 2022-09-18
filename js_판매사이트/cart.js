let cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart);

for(let i =0; i<cart.length; i++) {
  // if( cart[i] == JSON.parse(localStorage.getItem('cart'))) {
  //   console.log('이미 있는 상품입니다.');
  // } else {
    document.querySelector('.text-center').innerHTML +=
    `<p>${cart[i]}</p>`
  // }
}