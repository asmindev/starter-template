// Script for login
const error = document.querySelector('.msg')
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  console.log(error.classList)
  if (!error.classList.contains('hidden')) {
    error.classList.add('hidden')
  }
})
