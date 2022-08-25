const items = document.querySelector('.items')
const form= document.querySelector('.new-form')
const input = document.querySelector('.inputbox')
const addBtn = document.querySelector('.inputplus') 
console.log(addBtn);

//form태그로 받은 내용 submit 이벤트 걸어주기
form.addEventListener('submit', (e) => {
  e.preventDefault(); // 이벤트 submit은 제출 후 자동으로 페이지가 재로딩되기 때문에 함수 걸어줘야함
  onAdd();
});

function onAdd() {
  // 1.사용자가 입력한 텍스트를 받아오기
  const text = input.value;
  console.log(text);
  if(text === '') {
    input.focus(); //btn을 누르는 순간 focus가 btn으로 옮겨오기 때문에 다시 임의로 지정해주는 것이 좋음
    return; //text없으면 나가버리기
  }

  // 2.새로운 아이템을 만들기(텍스트 + 삭제 아이콘)
  const item = createItem(text);
  
  // 3.items 컨테이너안에 새로 만든 아이템 추가
  items.appendChild(item);
  // 4.새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block:'center'});
  // 5.인풋을 초기화 시키고 focus 시키기
  input.value ='';
  input.focus();
}

let id = 0; //UUID
//부모요소, event.target을 통해 더 효율적으로 수정한 코드
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.innerHTML = `
      <div class="item" data-id=${id}>
        <span class="item_name" >${text}</span>
        <button class="item_delete">
          <i class="fa-solid fa-xmark" data-id=${id}></i>
        </button>
      </div>`;
  id++;
  return itemRow;
}


/* <아래 + 추가, key로 enter하는 코드를 지우고 간단하게 form태그로 기능 추가하는 법>
1) 사용자의 입력받는 정보 가공을 시멘틱하게 사용하는 방법은 해당 html태그를 form태그 안에 넣어준다 
2) 위의 form.addEventListener의 submit이벤트를 넣어준다
*/

//+를 누르면 작성한 내용이 추가
addBtn.addEventListener('click', () => {
  onAdd();
});

//enter를 누르면 작성한 내용이 추가하는 법 3가지 

/* 1) keypress는 곧 없어질 event라서 keydown, keyup event를 사용하는 것을 권장 */

// input.addEventListener('keypress', (e) => {
//   if(e.key === 'Enter') {
//     onAdd();
//   }
// });

// 2) keyup : 사용자가 key를 눌렀다가 손을 떼면 작동하게하는 event
input.addEventListener('keyup', (e) => {
  if(e.key === 'Enter') {
    onAdd();
  }
});

/* 3) keydown : 사용자가 key를 누르는 순간 작동하게하는 event
- 영어는 문제없으나 한국어는 2번 출려되는 문제가 있어서 아직 만들어지는 중이라면 return되도록 코드 추가해줌*/
// input.addEventListener('keydown', (e) => {
//   if(e.isComposint) {
//     return;
//   }
//   if(e.key === 'Enter') {
//     onAdd();
//   }
// });


//x를 누르면 추가된 내용이 삭제
items.addEventListener('click', e => {
  const id = e.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

// //이벤트를 하나씩 다 넣어준 코드(Bad)
// function createItem(text) {
//   const itemRow = document.createElement('li');
//   itemRow.setAttribute('class', 'item_row');

//   const item = document.createElement('div');
//   item.setAttribute('class', 'item');

//   const name = document.createElement('span');
//   name.setAttribute('class', 'item_name')
//   name.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item_delete');
  // deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow)
  // })

//   const itemDivider = document.createElement('div');
//   itemDivider.setAttribute('class', 'item_divider');

//   item.appendChild(name);
//   item.appendChild(deleteBtn);

//   itemRow.appendChild(item);
//   itemRow.appendChild(itemDivider);
//   return itemRow;
// }

