(function ($) {
    "use strict";



    // Sticky Navbar
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    //     } else {
    //         $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
    //     }
    // });
    
     // Initiate the wowjs
     new WOW().init();

       // Modal Video
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })


    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // $(document).ready(function(){
    //     $('.customer-logos').slick({
    //         slidesToShow: 6,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 1500,
    //         arrows: false,
    //         dots: false,
    //         pauseOnHover: false,
    //         responsive: [{
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         }, {
    //             breakpoint: 520,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         }]
    //     });
    // });
    
})(jQuery);

