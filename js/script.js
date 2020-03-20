const nav = document.querySelector('.navLinks')
const hamburger = document.querySelector('.hamburger')

function toggleMeny() {
    nav.classList.toggle('navActive')
    hamburger.classList.toggle('is-active')
}

hamburger.addEventListener('click', toggleMeny)

smoothScroll.init();

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelectorAll(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classlist.add('active')
    overlay.classList.add('active')
}