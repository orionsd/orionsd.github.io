$(document).ready(function() {
    $('.has-sub__1 > a').bind('click', function() {
            $(this).next('ul').slideToggle();
    });

    if (window.matchMedia('(max-width: 767.98px)').matches) {
        $('<div class="col-12 news_after"></div>').appendTo('.about');
        $('.other').appendTo('.news_after');

        $('<div class="col-12 check_after"></div>').prependTo('.content_catalog .row');
        $('.section-count').appendTo('.check_after');
        $('.check_after').insertAfter('.col-parts-block')


    }

    /*Nmenu*/
    $(function () {
        $('#my-menu').mmenu({
            extensions: ['effect-menu-slide', 'pagedim-black', "position-right", "position-front"],
            navbar: {
                title: 'Меню'
            },
            offCanvas: {
                position: 'right'
            }
        });
        var api = $('#my-menu').data('mmenu');
        api.bind('opened', function () {
            $('.hamburger').addClass('is-active');
        }).bind('closed', function () {
            $('.hamburger').removeClass('is-active');
        });
    });
    /*Nmenu - End*/

});
