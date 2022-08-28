document.addEventListener('DOMContentLoaded', function() {
  let stream = document.querySelector('.gallery__stream');
  let items = document.querySelectorAll('.gallery__item');
  
  let prev = document.querySelector('.gallery__prev');
  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
  });
  
  let next = document.querySelector('.gallery__next');
  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
  });
});