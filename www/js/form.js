$(function() {
    $('#personNumber').mask("9");
    $('#personNumber').parent().find('div.clickers a.arrow-up').click(function(e) {
        e.preventDefault();
        var number = $('#personNumber').val();
        if (number == 'undefined' || number == 9) return;
        $('#personNumber').val(parseInt(number)+1);
    });
    $('#personNumber').parent().find('div.clickers a.arrow-down').click(function(e) {
        e.preventDefault();
        var number = $('#personNumber').val();
        if (number == 'undefined' || number == 1) return;
        $('#personNumber').val(number-1);
    });

    $('#phoneNumber').mask("+7 (999) - 999 - 99 - 99");

    $('#desiredDate').attachDatepicker({
        rangeSelect: true,
        yearRange: '2013:2020',
        firstDay: 1
    });
    $('#desiredDate').parent().find('div.clickers a').click(function(e) {
        e.preventDefault();
        $('#desiredDate').showDatepicker();
    });
});