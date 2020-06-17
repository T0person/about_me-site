$(function () {

    $(".works__list").slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            // {
            //     breakpoint: 321,
            //     settings: {
            //         slidesToShow: 1,
            //         arrows: false,
            //         dots: true
            //     }
            // }
        ]
    });

    // Скролл header
    $(".header__item a").on('click', Scroll);

    // Скролл вверх
    $(".go-up").on('click', Scroll);

    // Появление кнопки при прокрутке
    $(window).on("scroll", Button_up);

    // Изменяется шапка
    $(window).on("scroll", Active_section);

    Active_section;

    // Появление кнопки при загрузки страницы
    Button_up;

    // Открытие формы кнопками
    $(".request-call").on("click", Popup_open);
    $(".learn-more").on("click", Popup_open);

    // Закрытие формы
    $(".popup").on("click", Popup_close);
    $(".popup__back span").on("click", Popup_close);
    $(".popup__back").on("click", Popup_close);

});

// Открытие формы
function Popup_open() {
    $("body, html").css("overflow", "hidden");
    $(".popup").addClass("target");
}

// Закрытие формы
function Popup_close(event) {
    if (event.target == this) {
        $("body, html").css("overflow", "");
        $(".popup").removeClass("target");
    }
}

// Видимая часть
function Active_section() {
    if ($("#about-me").offset().top < $(window).scrollTop() && $("#I-do").offset().top - 400 > $(window).scrollTop() && $(".header__menu > .header__item:nth-child(2) a").attr("class") != "active") {
        $("*").removeClass("active");
        $(".header__menu > .header__item:nth-child(2) a").addClass("active");
    }
    else if ($("#I-do").offset().top - 400 < $(window).scrollTop() && $("#price").offset().top - 400 > $(window).scrollTop() && $(".header__menu > .header__item:nth-child(1) a").attr("class") != "active") {
        $("*").removeClass("active");
        $(".header__menu > .header__item:nth-child(1) a").addClass("active");
    }
    else if ($("#price").offset().top - 400 < $(window).scrollTop() && $(".header__menu > .header__item:nth-child(3) a").attr("class") != "active") {
        $("*").removeClass("active");
        $(".header__menu > .header__item:nth-child(3) a").addClass("active");
    }
}

// Кнопка вверх
function Button_up() {
    if ($(window).scrollTop() > 756) {
        $(".go-up").css("display", "block");
    } else {
        $(".go-up").css("display", "none");
    }
}

// Скролл
function Scroll(event) {
    event.preventDefault();

    let href = $(this).attr('href');

    // console.log($("#I-do").offset().top);

    let offset = $(href).offset().top - 127;

    $("body, html").animate({
        scrollTop: offset,
    }, 700);
}