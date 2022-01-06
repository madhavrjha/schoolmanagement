// Click on Bars and Times

const headerBars = document.querySelector('header .container > i.fas.fa-bars');
const headerTimes = document.querySelector('aside .close-btn');
const aside = document.querySelector('aside');

headerBars.addEventListener('click', () => {
  aside.classList.add('active');
});

headerTimes.addEventListener('click', () => {
  aside.classList.remove('active');
})


// Alumni Description Hide / Show Effect

const alumniToggleButtons = document.querySelectorAll('#alumni-people .alumni-box i');

alumniToggleButtons.forEach( toggleBtn => {
  toggleBtn.parentElement.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate-180');
    toggleBtn.nextElementSibling.classList.toggle('alumni-box-visible');
    toggleBtn.parentElement.classList.toggle('card');
  })
})

// Wall Of Fame Description Hide / Show Effect

const wofToggleButtons = document.querySelectorAll('#wof-people .wof-card i');

wofToggleButtons.forEach( toggleBtn => {
  toggleBtn.parentElement.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate-180');
    toggleBtn.nextElementSibling.classList.toggle('wof-card-visible');
    toggleBtn.parentElement.classList.toggle('card');
  })
})