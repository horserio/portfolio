'use strict'

// 💡Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {header.classList.add('header--dark');
    } else { header.classList.remove('header--dark');
}
});

// 💡Home 섹션 아래로 스크롤링에 따라 투명도 적용
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 화살표 숨기기
const arrowUP = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
    if (window.scrollY > homeHeight / 2) {
        arrowUP.style.opacity = 1;
    } else {
        arrowUP.style.opacity = 0;
    }
});

// Navbar 토글 버튼 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open')
});

//Navbar 클릭시 메뉴를 자동으로 닫아줌

navbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.remove('open');
});