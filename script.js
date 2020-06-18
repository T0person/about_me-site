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

    // Выпадающее меню
    $(".header__menu-2").on("click", Mob_menu_open);

    // Появление кнопки при прокрутке
    $(window).on("scroll", Button_up);

    // Изменяется шапка
    $(window).on("scroll", Active_section);

    // Скрыть меню
    $(window).on("resize", Menu_width);

    // Параллакс
    $(".about-me").on('mousemove', Parallax_letter);

    $(".price").on('mousemove', Parallax_price_letter);

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

// Буквы летают
function Parallax_letter(e) {
    let x = e.pageX / $(window).width();
    let y = e.pageY / $(window).height();

    $(".about-me__flight-letter-1").css("transform", "rotate(390deg) translate(" + x * 100 + 'px, ' + y * 100 + 'px)');
    $(".about-me__flight-letter-2").css("transform", "rotate(-374deg) translate(" + x * 100 + 'px, ' + y * 100 + 'px)');
    $(".about-me__flight-letter-3").css("transform", "rotate(375deg) translate(-" + x * 100 + 'px, -' + y * 100 + 'px)');
    $(".about-me__flight-letter-4").css("transform", "rotate(381deg) translate(-" + x * 100 + 'px, -' + y * 100 + 'px)');
    $(".about-me__flight-letter-5").css("transform", "rotate(-384deg) translate(" + x * 100 + 'px, ' + y * 100 + 'px)');
    $(".about-me__flight-letter-6").css("transform", "rotate(14deg) translate(" + x * 100 + 'px, ' + y * 100 + 'px)');
}

function Parallax_price_letter(e) {
    let x = e.pageX / $(window).width();
    let y = e.pageY / $(window).height();

    $(".price__flight-letter-1").css("transform", "rotate(388deg) translate(" + x * 100 + 'px, ' + y * 50 + 'px)');
    $(".price__flight-letter-2").css("transform", "rotate(-382deg) translate(" + x * 100 + 'px, ' + y * 100 + 'px)');
    $(".price__flight-letter-3").css("transform", "rotate(374deg) translate(-" + x * 100 + 'px, -' + y * 50 + 'px)');
    $(".price__flight-letter-4").css("transform", "rotate(380deg) translate(" + x * 100 + 'px, -' + y * 100 + 'px)');
    $(".price__flight-letter-5").css("transform", "rotate(-379deg) translate(-" + x * 100 + 'px, -' + y * 30 + 'px)');
}

// Скрыть меню при ширине
function Menu_width() {
    if ($(window).width() > 1043 && $(".header__menu-2").hasClass("active")) {
        $(".header__menu-2").removeClass("active");
        $(".header__mob-menu").slideUp(250);
    }
}

// Выпадающее меню
function Mob_menu_open() {
    if ($(".header__mob-menu").is(":hidden")) {
        $(".header__mob-menu").slideDown(400);
        $(this).addClass("active")
    }
    else {
        $(".header__mob-menu").slideUp(400);
        $(this).removeClass("active")
    }
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
    if ($("#about-me").offset().top < $(window).scrollTop() && $("#I-do").offset().top - 400 > $(window).scrollTop() && $(".header__item:nth-child(2) a").attr("class") != "active") {
        $("*").removeClass("active");
        $(".header__item:nth-child(2) a").addClass("active");
    }
    else if ($("#I-do").offset().top - 400 < $(window).scrollTop() && $("#price").offset().top - 400 > $(window).scrollTop() && $(".header__item:nth-child(1) a").attr("class") != "active") {
        $("*").removeClass("active");
        $(".header__item:nth-child(1) a").addClass("active");
    }
    else if ($("#price").offset().top - 400 < $(window).scrollTop() && $(".header__item:nth-child(3) a").attr("class") != "active") {
        $("*").removeClass("active");
        $(".header__item:nth-child(3) a").addClass("active");
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