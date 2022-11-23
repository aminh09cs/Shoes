let bars__button = document.querySelector('#header__shoes__bars');
let bars__mobile = document.querySelector('.bars-mobile');
bars__button.onclick = () => {
    bars__mobile.classList.toggle('active');
}