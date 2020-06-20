// let productPage = document.querySelector('.product_page')
let productPage = document.querySelector('.nav')
let hamburgerMenu = document.querySelector('.hamburger_menu')

hamburgerMenu.addEventListener('click', function () {
  productPage.classList.toggle('menu_open')
})
