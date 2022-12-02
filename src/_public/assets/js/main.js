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
});