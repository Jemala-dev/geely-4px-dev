$(function() {
    const { $body } = window;

    $body.on("mouseover", ".js-product-card-dots-item", function() {
        const that = $(this);
        
        that.addClass("is-active").siblings().removeClass("is-active");
    
        changeImageOnHover(that)
    })

    function changeImageOnHover(that) {
        const dataSrc = that.data("src");
        const $imgContainer = that.parent().prev().find("img, source");

        $imgContainer.each(function(i, item) {
            const $item = $(item);
            const dataType = $item.data("type");

            if (dataType === "jpg") {
                detectImageTag(item, dataSrc + '.jpg')
            } else if (dataType === "png") {
                detectImageTag(item, dataSrc + ".png")
            } else if (dataType === "webp") {
                detectImageTag(item, dataSrc + ".webp")
            }
        })
    }

    function detectImageTag(item, dataSrc) {
        const $item = $(item);
        if (item.tagName === "IMG" ) {
            $item.attr("src", dataSrc)
        } else {
            $item.attr("srcset", dataSrc)
        }
    }
})