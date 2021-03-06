$(document).ready(function() {

    $('.welcome-link a').click(function(e) {
        $.scrollTo($('.order'), 500);
        e.preventDefault();
    });

    $.validator.addMethod('maskPhone',
        function(value, element) {
            return /^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/.test(value);
        },
        'Не соответствует формату'
    );

    $('input.maskPhone').mask('+7 (999) 999-99-99');

    $('form').validate({
        ignore: '',
        invalidHandler: function(form, validatorcalc) {
            validatorcalc.showErrors();
            checkErrors();
        }
    });

    $('.form-input input').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('focus');
        }
    });

    $('.form-input input').focus(function() {
        $(this).parent().addClass('focus');
    });

    $('.form-input input').blur(function() {
        if ($(this).val() == '') {
            $(this).parent().removeClass('focus');
        }
    });

    $('.thanks-link-share').click(function(e) {
        $('.copy-button').click();
        e.preventDefault();
    });

    $('.drop_down_link').click(function(e) {
        e.preventDefault();
    });

    $('.menu_button').click(function() {
        $('html').toggleClass('mobile-menu-open');
    });

    $('.close_btn').click(function() {
        $('html').removeClass('mobile-menu-open');
    });

});

function checkErrors() {
    $('.form-checkbox').each(function() {
        var curField = $(this);
        if (curField.find('input.error').length > 0) {
            curField.addClass('error');
        } else {
            curField.removeClass('error');
        }
    });
}

$(window).on('load resize scroll', function() {
    if ($('.colorists-header').length > 0) {
        var curScroll = $(window).scrollTop();
        var curHeight = $(window).height();
        if ($('.colorists-header').offset().top - curScroll <= 0) {
            if (($('.location').offset().top - $('.colorists-header').height()) - curScroll <= 0) {
                $('.colorists-header').removeClass('fixed');
            } else {
                $('.colorists-header').addClass('fixed');
            }
        } else {
            $('.colorists-header').removeClass('fixed');
        }
        if ($('.colorists-list').offset().top - curHeight - 75 - curScroll <= 0) {
            if ($('.location').offset().top - (curScroll + curHeight) <= 0) {
                $('.tags').hide();
            } else {
                $('.tags').show();
            }
        } else {
            $('.tags').hide();
        }
    }

    if ($(window).scrollTop() > 0) {
        $('header').addClass('fixed')
    } else {
        $('header').removeClass('fixed');
	}
});