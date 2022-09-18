var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

// 카드 박스 연습
// for(let i = 0; i < products.length; i++) {
//   document.querySelector('.title').innerHTML = `${products[i].title}`
//   document.querySelector('.price').innerHTML = ` 가격 : ${products[i].price}`
// }

// products 내용을 가져와서 보여주기
products.forEach((data) => {
  document.querySelector('.row').innerHTML += 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5 class="mt-2">${data.title}</h5>
    <p>가격 : ${data.price}</p>
    <button class="btn btn-secondary mb-2 buy"> 구매 </button>
  </div>`
})

// 더보기 버튼 누르면 data가져오기
let moreBtn = document.getElementById('more');
let priceBtn = document.getElementById('priceArr');
let danagaBtn = document.getElementById('danaga');
let under6Btn = document.getElementById('under6');
let buyBtn = document.querySelectorAll('.buy');

function showCard(data) {
  data.forEach((data) => {
    document.querySelector('.row').innerHTML += 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5 class="mt-2">${data.title}</h5>
      <p>가격 : ${data.price}</p>
      <button class="btn btn-secondary mb-2 buy"> 구매 </button>
    </div>`;
})}


let count = 0;
moreBtn.addEventListener('click', (data) => {
  count += 1;
  if(count % 2 == 0)
    fetch('https://codingapple1.github.io/js/more1.json')
    .then(res => res.json())
    .then((data) => {
      showCard(data)
      document.getElementById('more').style.display = 'none'
      let count = 0;
    }) .catch((err) => {throw err})

    else if (count % 2 != 0) {
      fetch('https://codingapple1.github.io/js/more2.json')
      .then(res => res.json())
      .then((data) => {
        showCard(data)
        let count = 0;
      }) .catch((err) => {throw err})
    }
  })

  // 가격순으로 보기 버튼 누르면 정렬 순서 바꾸기
  priceBtn.addEventListener('click', () => {
    products.sort((a,b) => {
      return a.price - b.price;
    });

    document.querySelector('.row').innerHTML = '';

    products.forEach((data) => {
      document.querySelector('.row').innerHTML += 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5 class="mt-2">${data.title}</h5>
        <p>가격 : ${data.price}</p>
        <button class="btn btn-secondary mb-2 buy"> 구매 </button>
      </div>`
    })
  })

  // 다나가순 버튼 누르면 다나가순으로 정렬하기
  // 내가 한 방법 
  // danagaBtn.addEventListener('click', () => {
  //   products.reverse();
  //   document.querySelector('.row').innerHTML = '';
  //   products.forEach((data) => {
  //     document.querySelector('.row').innerHTML +=
  //     `<div class="col-sm-4">
  //     <img src="https://via.placeholder.com/600" class="w-100">
  //     <h5 class="mt-2">${data.title}</h5>
  //     <p>가격 : ${data.price}</p>
  //   </div>`
  //   })
  // })

  //수업에서 한 방법
  danagaBtn.addEventListener('click', () => {
    products.sort((a, b) => {
      if( a.title < b.title ) {
        return 1
      } else if ( a.title == b.title ){
        return 0
      }else {
        return -1
      }
    })

    document.querySelector('.row').innerHTML = '';
    products.forEach((data) => {
      document.querySelector('.row').innerHTML +=
      `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5 class="mt-2">${data.title}</h5>
      <p>가격 : ${data.price}</p>
      <button class="btn btn-secondary mb-2 buy"> 구매 </button>
    </div>`
    })
  })

  // 6만원 이하 상품 보기 
  under6Btn.addEventListener('click', () => {
    let newProducts = products.filter((ele) => ele.price <= 60000);
    console.log(newProducts);
    document.querySelector('.row').innerHTML = '';
    newProducts.forEach((data) => {
      document.querySelector('.row').innerHTML +=
      `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5 class="mt-2">${data.title}</h5>
      <p>가격 : ${data.price}</p>
      <button class="btn btn-secondary mb-2 buy"> 구매 </button>
    </div>`
    })
  })

  // ⁉️ 자바스크립트로 어떻게..) 구매 버튼 누르면 해당 상품 데이터가 local storage 저장하기
    buyBtn[0].addEventListener('click', (e) => {
      let title = e.target.previousElementSibling.previousElementSibling.innerHTML

      if(localStorage.getItem('cart') != null) {
        let cartEle = JSON.parse(localStorage.cart);
        cartEle.push(title)
        localStorage.setItem('cart', JSON.stringify(cartEle))
      } else {
        localStorage.setItem('cart', JSON.stringify([title]))
      }
    })