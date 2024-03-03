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

    $('#someform').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            company: {
                required: true,
                minlength: 2
            },
            phone: "required",
            checkbox: "required"
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите min {0} символов!")
            },
            company: {
                required: "Пожалуйста, введите название своей компании",
                minlength: jQuery.validator.format("Введите min {0} символов!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            checkbox: "Подтвердите!"
        },
        errorPlacement: function (error, element) {
            if (element.prop('type') ==='checkbox') {
                error.insertAfter(element.parent())
            } else {
                error.insertAfter(element)
            }
        }
    });
    $('#someform-footer').validate(
        {
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                company: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                checkbox: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите min {0} символов!")
                },
                company: {
                    required: "Пожалуйста, введите название своей компании",
                    minlength: jQuery.validator.format("Введите min {0} символов!")
                },
                phone: "Пожалуйста, введите свой номер тееофона",
                checkbox: "Подтвердите!"
            },
            errorPlacement: function (error, element) {
                if (element.prop('type') ==='checkbox') {
                    error.insertAfter(element.parent())
                } else {
                    error.insertAfter(element)
                }
            }
        }
    );

    $('input[name="phone"]').mask("+7 (999) 999-99-99");


    $('form').submit(function(e) {
        var empty = $(this).parent().find("input").filter(function() {
          return this.value === "";
        });
        if (!empty.length) {
          //Если все графы заполнены, то показываем popup
            $('.overlay, #consultation').fadeIn('slow');
            //очищаем все данные текстовых полей, кроме кнопок
            // $('form input').not(':button, :submit').val('');
        }
        e.preventDefault();
      });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow') 
        location.reload()
    })
});


// $('[data-modal=consultation]').on('click', function() {
//     $('.overlay, #consultation').fadeIn('slow');
// });



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
let galleryTop = new Swiper('.mySwiper2', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    // slidesPerVieloop: 1,
    grabCursor: true,
    spaceBetween: 20,
    // tion arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
    autoplay: {
            delay:5000,
        },
});



let mobileSlider = new Swiper('.swiperPhone', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    // loop: true,
    observer: true,
    observeParents: true,
    observesSlideChildren: true,
});


