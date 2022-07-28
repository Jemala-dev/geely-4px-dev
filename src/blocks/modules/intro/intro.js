$(function() {
    const $introSlider = $(".js-intro-slider");
    const $introCurrent =$(".js-intro-current")
    const icons = $introSlider.data("icons").split(",")

    $introSlider.on("beforeChange", function(e, slick, prev, next) {
        $introCurrent.text(`${next + 1}/`)
    })

    $introSlider.slick({
        appendArrows: $('.js-intro-nav'),
        prevArrow: `<button type="button" class="slick-prev"><svg><use xlink:href="${icons[0]}"></use></svg></button>`,
        nextArrow: `<button type="button" class="slick-next"><svg><use xlink:href="${icons[1]}"></use></svg></button>`,
        autoplay: true, 

        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true, 
              },
            },
        ],
    })
})