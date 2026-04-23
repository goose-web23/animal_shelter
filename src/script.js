const burgerMenu = document.getElementById('burger-menu')
const burgerBtn = document.getElementById('burger-btn')
const closeBtn = document.getElementById('close-btn')

const header = document.querySelector('.mobile-header')

burgerBtn.addEventListener('click', function(){
    burgerMenu.classList.add('active')
    if (window.innerWidth <= 767) {
        header.style.display = 'none';
    }
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', function(){
    burgerMenu.classList.remove('active')
    if (window.innerWidth <= 767) {
        header.style.display = 'flex';
    }
    document.documentElement.style.overflow = '';
})