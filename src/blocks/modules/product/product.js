$(function() {
    const $productFilterToggle = $(".js-product-filter-toggle");
    const $productFilter = $(".js-product-filter");

    $productFilterToggle.on("click", function() {
        $productFilter.toggleClass("is-show");
    })
});