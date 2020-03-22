$(document).ready(function () {

   /* Cart Step 1 responsive changing content in cells*/

    if (window.matchMedia('(max-width: 767.98px)').matches) {

        var spis = $('.table-cart-row').length;

        for (var i = 0; i < spis; i++) {
            var row,
                place,
                price,
                price_tr,
                time,
                remove_btn;

            row = $(".table-cart-row").eq(i);
            place = row.find(".cart-desc p");
            price = row.find('.cart-rate p');
            price_tr = row.find('.cart-price');
            remove_btn = row.find('.cart-remove .remove-btn');
            time = row.find('.cart-date time');
            place.after(price);
            price.after(time);
            price_tr.find('p').after(remove_btn);

            row.find('.cart-date').remove();
            row.find('.cart-rate').remove();
            row.find('.cart-remove').remove();
        }

        var total_text = $('.total-tr .total-text'),
            total_price = $('.total-tr .total-info-wrapper');

        total_text.after(total_price);

        $('.total-tr td:nth-child(2)').remove();
    }

    /* Cart Step 1 responsive changing content in cells - End*/


   /* Step 2*/
    /*Choose city*/

    $("#select_сity").select2({
        placeholder: "Выберите город"
    });

    /*Choose city - End*/

    $('.to-apply-btn').addClass('js-apply-btn');

    $('body').on('click', '.js-apply-btn', function() {
        $('.table-cart').hide(0, function() {
                $('.t-step2').fadeIn(function() {
                    $('.js-apply-btn').addClass('js-apply-btn2');
                    $('.buy-next-btn').addClass('prev-btn');
                }).css({'display':'flex'});
        });
        $('.total-tr').hide();
        $('.gap-bottom').hide();

        $('.table-cart-header h5').text('Личные данные');
        $('.buy-next-btn').text('К списку товаров');
        $('.to-apply-btn').text('Выберите форму оплаты');
    });

    $('body').on('click', '.prev-btn', function() {
        $('.t-step2, .t-step3').hide(0, function() {
            $('.buy-next-btn').removeClass('prev-btn');
            $('.to-apply-btn').addClass('js-apply-btn');
            $('.js-apply-btn').removeClass('js-apply-btn2');
            $('.js-apply-btn').removeClass('make-order');

            $('.table-cart').fadeIn();
            $('.total-tr').show();
            $('.gap-bottom').show();
        });

        $('.table-cart-header h5').text('Товары в корзине');
        $('.buy-next-btn').text('Продолжить покупки');
        $('.to-apply-btn').text('Перейти к оформлению');

    });

    /*Card button open*/

    if (window.matchMedia('(max-width: 767.98px)').matches) {

        $('.st2-btn').eq(0).addClass('st2-btn-closed');
        $('.t-step2-card-body').eq(0).hide();

        var third_card;
        third_card = $('.st2-btn').eq(2).removeClass('st2-btn-closed');
        third_card.closest('.card-slider').find('.card-body').show();

        $('.st2-btn').bind('click', function() {
            $(this).closest('.t-step2-col').find('.t-step2-card-body').slideToggle();

            if (!($(this).hasClass('st2-btn-closed'))) {
                $(this).addClass('st2-btn-closed');
            } else {
                $(this).removeClass('st2-btn-closed');
            }
        });
    }

    /*Button-open - End*/
    /* Step 2 - End*/

    /* Step 3 */

    $('body').on('click', '.js-apply-btn2', function() {

        $('.t-step2').hide(0, function() {
                $('.t-step3').fadeIn();
                $('.total-tr').css({'display':'flex'});
        });

        $('.table-cart-header h5').text('Оплата заказа');
        $('.to-apply-btn').text('Подтвердить заказ');

        $('.js-apply-btn2').addClass('make-order');
        $('.to-apply-btn').removeClass('js-apply-btn2');
        $('.to-apply-btn').removeClass('js-apply-btn');
    });

    /* Step 3 - End*/

 /*  Step 3 - switching radio buttons*/
    $('.st3-card-btn').bind('click', function() {
        $('.st3-card-btn').removeClass('active');
        $('.st3-card-radio').removeClass('active');
        $(this).addClass('active');
        $(this).find('.st3-card-radio').addClass('active');

    });
    /*  Step 3 - switiching radio buttons - end */
});
