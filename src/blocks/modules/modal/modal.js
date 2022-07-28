$(function() {
    const { $body } = window;

    $body.on("click", ".js-modal-close", function() {
        $.magnificPopup.close();
    })

    $body.on("click", ".js-modal-btn", function() {
        const that = $(this);
        const dataSrc = that.data("src");

        $.magnificPopup.open({
            items: {
                src: `#${dataSrc}`
            },
            type:'inline',
            
        });
    })
})