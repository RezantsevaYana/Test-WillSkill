headerPopup = document.querySelector('.popup-header-container');

function openHeaderPopup(evt) {
    document.addEventListener('keydown', closePopupOnEsc);
    evt.preventDefault();
    headerPopup.classList.add('popup-header_open');
}

const burgerMenu = document.querySelector('.burger');
burgerMenu.addEventListener('click', openHeaderPopup);


function closeHeaderPopup() {
    headerPopup.classList.remove('popup-header_open');
    const popupHeaderCloseButton = headerPopup.querySelector('.popup-header__close');
    popupHeaderCloseButton.addEventListener('click', function () {
        headerPopup.classList.remove('popup-header_open')
    })
    document.removeEventListener('keydown', closePopupOnEsc);
};

closeHeaderPopup();


function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
        closeHeaderPopup();
    }
};


function closePopupHeaderOnOverlay() {
    headerPopup.addEventListener('click', (evt) => { 
        if (evt.target.classList.contains('popup-header_open')) { 
            closeHeaderPopup();
        } 
        if (evt.target.classList.contains('popup-header__close')) { 
            closeHeaderPopup();
        } 
    }); 
}
closePopupHeaderOnOverlay();


const navigationMobilePopup = document.querySelectorAll('.popup-header__item')

navigationMobilePopup.forEach((element) => {
    element.addEventListener('click', function (evt) {
        evt.target.classList.toggle('popup-header__item_activ');
        element.querySelector('.popup-header__li').classList.toggle('popup-header__li_activ')
    })
});