const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__lit');
const menuColor = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__lit--open');
    menuColor.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__lit--open');
    menuColor.classList.remove('menu--open');
});
