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




/* 
    JavaScript for 
     - Collapse and Expand the Menu in Mobile Devices By Swiping Left and Right
     - Collapse and Expand the Header in Mobile Devices By wiping Up and Down
*/

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            // Right Swipe
            if(aside.classList.contains('active')) 
              aside.classList.remove('active');
        } else {
          // Left Swipe
          if(!aside.classList.contains('active')) 
            aside.classList.add('active');
        }                       
    } else {
        if ( yDiff > 0 ) {
          // Down Swipe
          // $('header').slideUp();
        } else { 
          // Up Swipe
          // $('header').slideDown();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


// Animate On Scroll Initialization

AOS.init({
  offset: 200,
  duration: 600,
  once: true,
  mirror: true,
  easing: 'ease-in-out',
});

