let productPage = document.querySelector('.nav')
let hamburgerMenu = document.querySelector('.nav__icons')

hamburgerMenu.addEventListener('click', function () {
  productPage.classList.toggle('menu_open')
})
