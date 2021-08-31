const buttons = document.querySelectorAll('.plan__button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if(modal)
        modal.classList.remove('open');
    
        backdrop.classList.remove('open');    
}
if(modalNoButton)
    modalNoButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function(){
    closeModal();
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
});


toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});