$(document).ready(function () {
  //----------slick slider------------
  $('.c-mainnvisual__imgs').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplayspeed: 3000,
    speed: 2000,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  //-----------tab--------------------
  $('[name=tabs]').each(function (i, d) {
    var p = $(this).prop('checked');
    //   console.log(p);
    if (p) {
      $('.c-recruit__tab').eq(i)
        .addClass('active');
      $('.c-recruit__label').eq(i)
        .addClass('active');
    }
  });

  $('[name=tabs]').on('change', function () {
    var p = $(this).prop('checked');

    // $(type).index(this) == nth-of-type
    var i = $('[name=tabs]').index(this);

    $('.c-recruit__tab').removeClass('active');
    $('.c-recruit__tab').eq(i).addClass('active');
    $('.c-recruit__label').removeClass('active');
    $('.c-recruit__label').eq(i).addClass('active');
  });
  //----------popup lightbox-------------
  var popup = $(".c-lightbox");
  var img = $(".c-works__photo");
  var popupImage = $(".c-lightbox img");
  var overlay = $('.c-lightbox__overlay');
  var closeBtn = $(".c-lightbox__close");

  img.on("click", function () {
    var img_src = $(this).find("img").attr("src");
    popup.find("img").attr("src", img_src);
    popup.addClass("is-open");
    $('body').addClass('is-fixed');
    $('.c-backtotop').addClass("is-hidetop");
  });

  $(closeBtn).on("click", function () {
    popup.removeClass("is-open");
    $('body').removeClass('is-fixed');
    $('.c-backtotop').removeClass("is-hidetop");
  });
  $(overlay).on("click", function () {
    popup.removeClass("is-open");
    $('body').removeClass('is-fixed');
    $('.c-backtotop').removeClass("is-hidetop");
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
  //--------popup interview-----------
  $(".c-interview__item").on("click", function () {
    var popup_name = '#popup' + $(this).attr("data-open");
    $(popup_name).parent().find('.c-popup__box').hide();
    $('.c-popup').addClass('is-open');
    $(popup_name).fadeIn(300);
    $('body').addClass('is-fixed');
    $('.c-backtotop').addClass("is-hidetop");
  });
  //Click button to close popup
  $(".c-popup__close").on("click", function () {
    $('.c-popup__box').fadeOut(300);
    $('.c-popup').removeClass('is-open');
    $('body').removeClass('is-fixed');
    $('.c-backtotop').removeClass("is-hidetop");
  });
  //Click overlay to close popup
  $(".c-popup__overlay").on("click", function (e) {
    var popup = $(this).find('.c-popup__inner');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.c-popup').removeClass('is-open');
      $('body').removeClass('is-fixed');
      $('.c-popup__box').fadeOut(300);
      $('.c-backtotop').removeClass("is-hidetop");
    };
  });
  //---------menu mobile------------
  $(".c-header__iconmenu").click(function () {
    $(".c-header__gnavmb").toggleClass("is-open");
    $(this).toggleClass("is-open");
    $('body').toggleClass("is-fixed");
  });
  $(".c-header__navmb").click(function () {
    $(".c-header__gnavmb").toggleClass("is-open");
    $(".c-header__iconmenu").toggleClass("is-open");
    $('body').toggleClass("is-fixed");
  });
  $(".c-header__btninner").click(function () {
    $(".c-header__gnavmb").toggleClass("is-open");
    $(".c-header__iconmenu").toggleClass("is-open");
    $('body').toggleClass("is-fixed");
  });
  //----------- nav scroll ------------------
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    let sections = document.querySelectorAll(".c-section");
    let navLinks = document.querySelectorAll(".c-header__link");
    $('.c-section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
          $('.c-header__link').removeClass('is-active');
          $('.c-header__link').eq(i).addClass('is-active');
          $('.c-header__linkmb').removeClass('is-active');
          $('.c-header__linkmb').eq(i).addClass('is-active');
      }
  });
    if (scrollDistance > 80) {
      $('.c-header').addClass('is-scroll');
    }
    else {
      $('.c-header').removeClass('is-scroll');
    }
  }).scroll();
  //-------- plus header----------
  $('.c-header__link').click(function (e) {
    const headerHeight = $('.c-header').height();
    const hash = this.hash;
    const scrollToSection = $(hash).offset().top - headerHeight - 30;
    $('html, body').animate({
      scrollTop: scrollToSection,
    }, 300);
  });
  $('.c-header__linkmb').click(function (e) {
    const headerHeight = $('.c-header').height();
    const hash = this.hash;
    const scrollToSection = $(hash).offset().top - headerHeight - 30;
    document.querySelector(".c-header__linkmb[href*=" + id + "]").classList.add("is-active");
    $('html, body').animate({
      scrollTop: scrollToSection,
    }, 300);
  });
  //----------- Back to top------------
  $(".c-backtotop").addClass("is-hidetop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.c-backtotop').removeClass("is-hidetop");
    } else {
      $('.c-backtotop').addClass("is-hidetop");
    }
  });
  $('.c-backtotop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});