const nav = document.querySelector('.navLinks')
const hamburger = document.querySelector('.hamburger')

function toggleMeny() {
    nav.classList.toggle('navActive')
    hamburger.classList.toggle('is-active')
}

hamburger.addEventListener('click', toggleMeny)

smoothScroll.init();