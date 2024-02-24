window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.header__hamburger');

        hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })

})

$(document).ready(function (e) {
    // Modal  
    $('#someform, #someform-footer').submit(function (e) {
        $('div.'+$(this).find('input[type="submit"]').attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        $('.modal').show()
        e.preventDefault()
    });
    $('.modal__close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        location.reload()
        return false;
    });
    

    // $('[data-modal=consultation]').on('click', function() {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });
    // $('.modal__close').on('click', function() {
    //     $('.overlay, #consultation').fadeOut('slow') 
    // })

})


let galleryThumbs = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 7,
    // loop: true,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

// let mainSlider = document.querySelector('.swiper');
let galleryTop = new Swiper ('.mySwiper2',  {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    // slidesPerVieloop: 1,
    grabCursor: true,
    spaceBetween: 10,
    // tion arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
    // autoplay: {
    //         delay:5000,
    //     },
  });



// galleryTop.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryTop;
 
// const sliderMomile = document.querySelector('.slider');
// console.log(sliderMomile);


let mobileSlider = new Swiper('.swiperPhone', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
    // loop: true,
    observer: true,
    observeParents: true,
    observesSlideChildren: true,
});
  

