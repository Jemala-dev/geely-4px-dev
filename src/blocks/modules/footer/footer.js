$(function() {
    const $footerTerm = $(".js-footer-term");
    const $footerTerms = $(".js-footer-terms");


    $footerTerm.on("click", function() {
        $(this).toggleClass("is-open");
        $footerTerms.fadeToggle()
    })
})