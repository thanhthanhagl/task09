$(document).ready(function () {
  //----------slick slider------------
  $('.c-mainnvisual__imgs').slick({
    fade: true,
    autoplay: true,
    autoplayspeed: 6000,
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
  //popup lightbox
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
  });

  $(closeBtn).on("click", function () {
    popup.removeClass("is-open");
    $('body').removeClass('is-fixed');
  });
  $(overlay).on("click", function () {
    popup.removeClass("is-open");
    $('body').removeClass('is-fixed');
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
  //popup interview
  $(".c-interview__item").on("click", function () {
    var popup_name = '#popup' + $(this).attr("data-open");
    $(popup_name).parent().find('.c-popup__box').hide();
    $('.c-popup').addClass('is-open');
    $(popup_name).fadeIn(300);
    $('body').addClass('is-fixed');
  });
  //Click button to close popup
  $(".c-popup__close").on("click", function () {
    $('.c-popup__box').fadeOut(300);
    $('.c-popup').removeClass('is-open');
    $('body').removeClass('is-fixed');
  });
//Click overlay to close popup
  $(".c-popup__overlay").on("click", function (e) {
    var popup= $(this).find('.c-popup__inner');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.c-popup').removeClass('is-open');
      $('body').removeClass('is-fixed');
      $('.c-popup__box').fadeOut(300);
    };
  });
});