$(document).ready(function() {
    $('.tab div img').click(function() {
        $('.pic img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    });

});
