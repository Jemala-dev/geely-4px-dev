$(function() {
    const $modelColor =  $(".js-model-color");

    $modelColor.on("click", function() {
        const that = $(this);
        const dataColor = that.data("color");
        const dataPath = that.data("path");

        that.addClass("model__color_active").siblings().removeClass("model__color_active")

        that.closest(".js-modal-catalog").find(".js-model-img").attr("src", `${dataPath}/${dataColor}.png`)
    })
})