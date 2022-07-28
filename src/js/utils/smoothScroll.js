$(() => {
    $(document).on('click', '.js-anchor', function (event) {
        event.preventDefault();
        const that = $(this)
        if (!that.hasClass("js-anchor")) return

        $('body').css('overflow', 'visible');
        
        $('html, body').stop(true, true).delay(200).animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 300);   
    });
})