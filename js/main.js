// Header JavaScript
// JavaScript for Expand and Collapse the Sidebar

const headerBars = document.querySelector('header .container > i.fas.fa-bars');
const headerTimes = document.querySelector('aside .close-btn');
const aside = document.querySelector('aside');

headerBars.addEventListener('click', () => {
  aside.classList.add('active');
});

headerTimes.addEventListener('click', () => {
  aside.classList.remove('active');
});


// Aside SubMenu JQuery
// Jquery for Toggle Sub Menus


$(document).ready(function () {
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate-90');
  });
});




// Animate On Scroll Initialization

AOS.init({
  offset: 200,
  duration: 600,
  once: true,
  mirror: true,
  easing: 'ease-in-out',
});

