$(function() {
    window.$window = $(window);
    window.$document = $(document);
    window.$body = $("body");

    Object.defineProperty(window, "$window", {
        writable: false
    });

    Object.defineProperty(window, "$document", {
        writable: false
    });

    Object.defineProperty(window, "$body", {
        writable: false
    });
})