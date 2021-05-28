$(document).ready(function(){
    $('.slider-fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
    });

    $('.from-doctor-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.doctors-carousel'
    });

    $('.doctors-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.from-doctor-carousel',
        dots: false,
        prevArrow: $('.doctors-prev'),
        nextArrow: $('.doctors-next'),
        focusOnSelect: true,
        variableWidth: true,
    });

    $('.specialist-carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.spec-prev'),
        nextArrow: $('.spec-next'),
        variableWidth: true,
        loop: true,
    });

    $('.events-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.events-prev'),
        nextArrow: $('.events-next'),
        variableWidth: true,
        loop: true,
    });
    
    $('.trust-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        variableWidth: true,
    });

    $('.sertificate-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 550,
              settings: {
                ariableWidth: false,
                slidesToShow: 1,
                autoplay: false,
              }
            },
          ]
    });

    $('.photo-carousel').slick({
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        focusOnSelect: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '120px',
                slidesToShow: 1
            }
          }
        ]
    });

    $('.video-reviews-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.reviews-prev'),
        nextArrow: $('.reviews-next'),
        variableWidth: true,
        loop: true,
    });

    $('.clients-photo-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.clients-photo-prev'),
        nextArrow: $('.clients-photo-next'),
        variableWidth: true,
        loop: true,
    });
    
    $('.letters-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.letters-prev'),
        nextArrow: $('.letters-next'),
        variableWidth: false,
        loop: true,
    });
    
    $('.button-search').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().removeClass('active');
        }else{
            $(this).addClass('active');
            $(this).next().addClass('active');
        }
        e.preventDefault();
    });

    $('.button-lang').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
        }else{
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        e.preventDefault();
    });

    $('.accordion-item .accordion-button').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp('active');
        }else{
            $(this).addClass('active');
            $(this).next().slideDown('active');
        }
        e.preventDefault();
    });

    $('.lang-footer-button').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp('active');
        }else{
            $(this).addClass('active');
            $(this).next().slideDown('active');
        }
        e.preventDefault();
    });

    $('.burger').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
            $('body').removeClass('overflow');
        }else{
            $(this).addClass('active');
            $(this).next().slideDown();
            $('body').addClass('overflow');
        }
        e.preventDefault();
    });

    $('.services-menu-mobile').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.second-menu').slideUp();
        }else{
            $(this).addClass('active');
            $('.second-menu').slideDown();
        }
        e.preventDefault();
    });
    $('.services-menu-link').click(function(e) {
        $('body').addClass('menu-opened')
        $.fancybox.open({
            src  : '#service-open',
            type : 'inline',
            opts : {
                onComplete : function() {
                    console.info('done!');
                },
                afterClose : function() {
                    $('body').removeClass('menu-opened')
                }
            },
        });
    });

    $('.button-play').click(function(){
        $('.button-play').hide();
        $('.video-poster').hide();
        $('.video').get(0).play();
    });

    $('.price-accordion .accordion-button').click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp('active');
        }else{
            $(this).addClass('active');
            $(this).next().slideDown('active');
        }
        e.preventDefault();
    });



});