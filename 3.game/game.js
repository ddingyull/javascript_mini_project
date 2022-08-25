const timerBtn = document.getElementById('timer');
const playBtn = document.getElementById('play');
let time = 60; //기준 시간
let min = ""; // 분
let sec = ""; // 초  => ""부터 시작

let num = 1;
playBtn.addEventListener('click', () => {
  let x = setInterval(() => {
    min = parseInt(time/60); //원하는 시간을 60으로 나눈 몫 = min
    sec = time % 60; //60으로 나눴을 때 나머지 = sec
  
    timerBtn.innerHTML = `0${min} : ${sec}`;
    time--; //1씩 감소
  
    //0초가 되었을 때 clearinterval로 setInterval 기능을 없애기
    if(time < 0) {
      clearInterval(x);
      timerBtn.innerHTML = `finished`;
    }
  }, 1000);
})


  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`



