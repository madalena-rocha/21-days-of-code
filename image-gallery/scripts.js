document.addEventListener('DOMContentLoaded', function() {
  let stream = document.querySelector('.gallery__stream')
  let items = document.querySelectorAll('.gallery__item')
  
  let prev = document.querySelector('.gallery__prev')
  let next = document.querySelector('.gallery__next')

  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0])
    // insere o items[9] antes do items[0] no stream, ou seja, pega a última imagem da galeria e insere no início da lista de imagens
    items = document.querySelectorAll('.gallery__item')
  })
  
  next.addEventListener('click', function() {
    stream.appendChild(items[0])
    // adiciona o items[0] ao final do stream, ou seja, pega a primeira imagem da galeria e manda para o final da lista de imagens
    items = document.querySelectorAll('.gallery__item')
  })
})