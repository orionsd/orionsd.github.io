$(document).ready(function () {

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });

    if (window.matchMedia('(max-width: 767.98px)').matches) {

        $('.card-btn').addClass('btn-closed');
        $('.card-body').hide();

        var third_card;
        third_card = $('.card-btn').eq(2).removeClass('btn-closed');
        third_card.closest('.card-slider').find('.card-body').show();

        $('.card-btn').bind('click', function() {
            $(this).closest('.card-slider').find('.card-body').slideToggle();

            if (!($(this).hasClass('btn-closed'))) {
                $(this).addClass('btn-closed');
            } else {
                $(this).removeClass('btn-closed');
            }
        });
    }

});



