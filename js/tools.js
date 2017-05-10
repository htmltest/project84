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

    $('form').validate();

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

});