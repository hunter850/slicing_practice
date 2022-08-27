$(function () {
    var $win = $(window);
    var $backtotop = $('.js-back-to-top');
    $win.scroll(function () {
        if ($win.scrollTop() > 2400) {
            $backtotop.show();
        } else {
            $backtotop.hide();
        }
    });
});