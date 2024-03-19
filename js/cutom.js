$(function () {

    feather.replace()

    $('#main').fullpage({
        anchors: ["p1", "p2", "p3", "p4", "p5"],
        menu: '#custom_nav',
        scrollOverflow: false,
        responsiveWidth: 1200,
        responsiveHeight: 800,
        navigation: true,
        afterLoad: function (anchorLink, index) {
            console.log(anchorLink, index);
            if (index == 2 || index == 3) {
                if (!$('.Gnb').hasClass('on')) {
                    $('.Header').addClass('on')
                }
            } else {
                $('.Header').removeClass('on')
            }

            if (index == 4) {
                $('.Header').hide();
            } else {
                $('.Header').show();
            }
            $('#custom_nav li').removeClass('active');
            $('#custom_nav li[data_menuanchor="' + anchorLink + '"]').addClass('active');
        },
    });

        $('.Header .mopen').on('click', function () {
        $('.Header').toggleClass('m_active');
        if ($('.Header').hasClass('m_active')) {
            document.getElementById(".Header h1 a").src =  "./images/logo_white.png";

        } else {
            document.getElementById(".Header h1 a").src = "./images/logo_black.png";
        }
    })

    $('.Header').on('wheel touchmove', function (e) {
        if ($('.Header').hasClass('m_active')) {
            e.preventDefault();
        }
    })


    $('.MainVisual .VisualSlide').slick({
        pauseOnHover: false,
        autoplaySpeed: 4000,
        arrows: false,
        autoplay: true,
    });


    $('.tab_menu li a').on('click', function (e) {
    e.preventDefault();
    const idx = $(this).parent().index();
         $('.tab_content li')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    

    // 첫 슬라이드에서 alt 텍스트를 즉시 표시
    const altText = $('.tab_content li').eq(idx).find('.swiper-slide').eq(0).find('img').attr('alt');
    $('.tab_content li').eq(idx).find('.txt').text(altText);

    // 슬라이드가 변경될 때마다 이름 업데이트
    const mm = $('.tab_content li').eq(idx).find('.mm')[0].swiper;
    mm.on('slideChange', function () {
        const currentSlideIndex = mm.activeIndex;
        const txtDiv = $('.tab_content li').eq(idx).find('.txt');
        const altText = $('.tab_content li').eq(idx).find('.swiper-slide').eq(currentSlideIndex).find('img').attr('alt');
        txtDiv.text(altText);
        
    });

});

$('.tab_menu li a').on('click', function () {
    $('.tab_menu li').removeClass('on');
    $(this).parent().addClass('on');
});


const mm = new Swiper('.mm', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    initialSlide: 0,
    navigation: {
        nextEl: '.page .next',
        prevEl: '.page .prev',
    },
});


    $('.toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 200) {
            $('.toTop').addClass('on');
        } else {
            $('.toTop').removeClass('on');
        }
    });
});



