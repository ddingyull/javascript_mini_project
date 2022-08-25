let width = document.querySelector('.width');
let height = document.querySelector('.height');
let dot = document.querySelector('img');
let position = document.querySelector('span');

dot.addEventListener('mousemove', (e) => {
  const x = e.clientX
  const y = e.clientY
  console.log(`${x} ${y}`)

  height.style.left = `${x}px`;
  width.style.top = `${y}px`;
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  position.style.left = `${x}px`;
  position.style.top = `${y}px`;
  position.innerHTML = `${x}, ${y}`;
})
