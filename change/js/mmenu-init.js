var datepicker, config;
config = {
    locale: 'ru-ru',
    uiLibrary: 'bootstrap4'
};

$(document).ready(function() {
    /*Nmenu*/
    $(function() {
        $('#my-menu').mmenu({
            extensions: [ 'effect-menu-slide', 'pagedim-black', "position-right", "position-front" ],
            navbar: {
                title: ''
            },
            offCanvas: {
                position  : 'right'
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


   /* nav menu*/

    $('.n-menu-services li').bind('click', function() {
       $('.nv ul > li > ul').toggle();
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".nv ul > li").length) {
            $('.nv ul > li > ul').hide();
        }
        e.stopPropagation();
    });

    $('.city-list li').bind('click', function() {
        $('.city-list > li > ul').toggle();
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".city-list > li").length) {
            $('.city-list > li > ul').hide();
        }
        e.stopPropagation();
    });

    $('.city-list li ul li a').bind('click', function(e) {
        var text_li = $(this).text();
        $('.city-list > li > a > span').text(text_li);
        $('.city-list > li > ul').hide();
        e.stopPropagation();
    });

    /* nav menu - end*/

    /*Modal choose city*/

    $("#select_сity_modal").select2({
        placeholder: "Выберите город"
    });

    /*Modal choose city - End*/

    datepicker = $('.datepicker').datepicker(config);
    $('.ddlLanguage').on('change', function () {
        var newLang = $(this).val();
        config.locale = newLang;
        datepicker.destroy();
        datepicker = $('.datepicker').datepicker(config);
    });



});


