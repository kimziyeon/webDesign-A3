$(function () {
    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.x').click(function () {
        $('.popup').hide();
    })

    $('.tab>li').click(function () {
        $('.tab>li').removeClass('on');
        $(this).addClass('on');
        var i = $(this).index();
        // console.log('i', i)

        $('.tabcon').hide();
        $('.tabcon').eq(i).show();
    })
})