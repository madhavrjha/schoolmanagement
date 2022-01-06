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
  once: false,
  mirror: false,
  easing: 'ease-in-out',
});

// Alumni JavaScript
// javaScript to Expand and Collapse the Description

const alumniToggleButtons = document.querySelectorAll('#alumni-people .alumni-box i');

alumniToggleButtons.forEach( toggleBtn => {
  toggleBtn.parentElement.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate-180');
    toggleBtn.nextElementSibling.classList.toggle('alumni-box-visible');
    toggleBtn.parentElement.classList.toggle('card');
  })
})

// Wall of Fame JavaScript
// javaScript to Expand and Collapse the Description

const wofToggleButtons = document.querySelectorAll('#wof-people .wof-card i');

wofToggleButtons.forEach( toggleBtn => {
  toggleBtn.parentElement.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate-180');
    toggleBtn.nextElementSibling.classList.toggle('wof-card-visible');
    toggleBtn.parentElement.classList.toggle('card');
  })
})