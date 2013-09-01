$(function() {
    $('#personNumber').mask("9");
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