var leftSide = document.querySelector('.left');
var rightSide = document.querySelector('.right');
var container = document.querySelector('.container');

// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event - mouseenter event - i.e. hover
leftSide.addEventListener('mouseenter', () =>{
  container.classList.add('hover-left');
})
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
leftSide.addEventListener('mouseleave', () =>{
  container.classList.remove('hover-left');
})
rightSide.addEventListener('mouseenter', () =>{
  container.classList.add('hover-right');
})
rightSide.addEventListener('mouseleave', () =>{
  container.classList.remove('hover-right');
})