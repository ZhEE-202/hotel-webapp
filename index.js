new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',       // Shows all cards based on their CSS widths
  watchSlidesProgress: true,   // Prevents Swiper from messing with visibility layouts
  allowTouchMove: false,       // Disables swiping on desktop since all cards show
 

// Default (Desktop): pagination is disabled/hidden
//   pagination: false,
  
  breakpoints: {
    // When screen width is <= 768px (mobile view)
    0: {
        slidesPerView: 1,        // Only show 1 card at a time on mobile
        allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    },
    // When screen width is > 768px (desktop view)
    768: {
    //   pagination: false,
        slidesPerView: 2,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        

         navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    },

    1024: {
        slidesPerView: 'auto',   // Forces desktop to return to showing all cards
        allowTouchMove: false,   // Keeps desktop static

    }
  },
  
//   //  pagination bullets
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "none";
}