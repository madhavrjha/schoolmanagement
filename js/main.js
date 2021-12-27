
// Sticky Header

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


// Alumni Description Hide / Show Effect

const alumniToggleButtons = document.querySelectorAll('#alumni-people .alumni-box i');

alumniToggleButtons.forEach( toggleBtn => {
  toggleBtn.parentElement.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate-180');
    console.log(toggleBtn.nextElementSibling);
    toggleBtn.nextElementSibling.classList.toggle('alumni-box-visible');
    toggleBtn.parentElement.classList.toggle('card');
  })
})

// Wall Of Fame Description Hide / Show Effect

const wofToggleButtons = document.querySelectorAll('#wof-people .wof-card i');

wofToggleButtons.forEach( toggleBtn => {
  toggleBtn.parentElement.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate-180');
    console.log(toggleBtn.nextElementSibling);
    toggleBtn.nextElementSibling.classList.toggle('wof-card-visible');
    toggleBtn.parentElement.classList.toggle('card');
  })
})