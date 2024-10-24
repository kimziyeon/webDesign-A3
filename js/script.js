$(function () {

    // 팝업

    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.x').click(function () {
        $('.popup').hide();
    })

    //탭메뉴

    $('.tab>li').click(function () {
        $('.tab>li').removeClass('on');
        $(this).addClass('on');
        var i = $(this).index();
        // console.log('i', i)

        $('.tabcon').hide();
        $('.tabcon').eq(i).show();
    })

    //헤더메뉴

    $('nav>ul>li').mouseenter(function () {

        var i = $(this).index();
        // console.log('index', i);
        $('.sub').hide();
        $('.sub').eq(i).stop().slideDown();

        $('nav>ul>li').removeClass('on');
        $('nav>ul>li').eq(i).addClass('on');
    })

    $('nav>ul>li').mouseleave(function () {
        $('.sub').stop().slideUp();
        $('nav>ul>li').removeClass('on');
    })

    // 슬라이드

    var s = 0;

    function slide() {

        if (s < 2) {
            s++;
        } else {
            s = 0;
        }
        $('.slide ul li').fadeOut();
        $('.slide ul li').eq(s).fadeIn();
    }
    setInterval(slide, 3000)

})