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

// ///////////////////
const slider = document.getElementById('slider')
const slides = document.querySelectorAll('.slide')
let current = 0;
if(slider){
    function showSlide(ind) {
        current = ind;
        if (window.innerWidth < 768) {
            slider.style.transform = `translateX(-${current * 90}vw)`;
        }else if (window.innerWidth < 1024){
            slider.style.transform = `translateX(-${current * 90}vw)`;
        }else{
            slider.style.transform = `translateX(-${current * 30}vw)`;
        }   
    }
    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length
        showSlide(current)
    }
    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current)
    }
    showSlide(0)
}

// //////////////////////////////////
const aboutCont = document.querySelector('.about-text');
const showMoreAbout = document.getElementById('get-more-about');

let isOpenAbout = false;

if(aboutCont){
    showMoreAbout.addEventListener('click', function () {
        if (!isOpenAbout) {
            aboutCont.innerHTML += `<p class="added-text">
            В вольерах созданы чистые и тёплые условия.
            Все животные социализированы — мы знаем характер каждого и честно рассказываем будущим владельцам. После усыновления не бросаем: консультируем по кормлению, воспитанию и лечению</p>`;

            showMoreAbout.textContent = 'Скрыть';
            isOpenAbout = true;
        } else {
            aboutCont.querySelector('.added-text').remove();
            showMoreAbout.textContent = 'Читать далее';
            isOpenAbout = false;
        }
    });
}
// ///////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    const petCards = document.querySelectorAll('.pet-card');
    const searchInputs = document.querySelectorAll('.search-input input, .mobile-search-input input');

    console.log(filters)
    
    function filterCards() {
        const activeFilter = document.querySelector('.filter.active');
        const filterValue = activeFilter ? activeFilter.textContent.trim() : 'Все';
        
        let searchText = '';
        searchInputs.forEach(input => {
            if (input.value) searchText = input.value.toLowerCase();
        });
        
        petCards.forEach(card => {
            let showByFilter = true;
            let showBySearch = true;
            
            if (filterValue !== 'Все') {
                let cardType = '';
                if (card.classList.contains('dog')) cardType = 'Собаки';
                else if (card.classList.contains('cat')) cardType = 'Кошки';
                else if (card.classList.contains('rodent')) cardType = 'Грызуны';
                
                showByFilter = (cardType === filterValue);
            }
            
            if (searchText !== '') {
                const petName = card.querySelector('.card-name-gender p').textContent.toLowerCase();
                showBySearch = petName.includes(searchText);
            }
            
            if (showByFilter && showBySearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            filterCards();
        });
    });
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            searchInputs.forEach(otherInput => {
                if (otherInput !== this) {
                    otherInput.value = this.value;
                }
            });
            filterCards();
        });
    });
});
