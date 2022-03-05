// Script for navbar (toggle)
const button = document.querySelector('.button')
const toggle = document.querySelector('.toggle')
button.addEventListener('click', () => {
  toggle.classList.toggle('hidden')
})
