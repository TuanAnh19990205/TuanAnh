$(function () {
    // $(".s-slide-1").slick({
    //     autoplay: true,
    //     fade: true,
    // });

    $(".product-slide").slick({
        slidesToShow: 4,
    });
    $(".light").click(function () {
        $(".product").toggleClass("active");
    });
});
