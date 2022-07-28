$(function() {
    const { $body } = window;

    
    const regex = '\\+7 \\([0-6,9]{1}[0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}';
    
    $(".js-input-phone").inputmask({regex}).on("input", changeNumberInputsState)

    $(".js-single-select").select2({
        dropdownAutoWidth : true,
        width: '100%',
    });

    $body.on("input", ".js-form-input", function() {
        const that = $(this)
        observeInputState(that.val(), that, 3)
    })

    $body.on("change", "select", function() {
        const that = $(this)
        observeInputState(that.val(), that, 0)
    })

    $body.on("submit", ".js-form", function(e) {
        e.preventDefault();
        const $form = $(this);

        const validation = fieldValidation($form)
    
        if (validation === "valid") {
            postForm($form)
        }
    })
})

function postForm($form) {
    const formData = new FormData($form[0])
    const data = {}

    for (const [key, value] of formData) {
        if (key === "phone") {
            data[key] = replaceOnlyNumber(value.toString())
        } else if (key !== "policy") {
            data[key] = value
        }
    }

    const action = $form.attr("action");

    $form.addClass("is-loading")
        .find("input, select, button")
        .attr("disabled", true)
    
    $.post(action, data)
    .done(function() {
        $form.addClass("is-success").removeClass("is-loading").remove()
        setTimeout(()=> $.magnificPopup.close(), 3000);
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "finished" );
    });
}

function replaceOnlyNumber(value) {
    return value.replace(/[^0-9\\.]+/g, '')
}

function fieldValidation($form) {
    const fields = $form.find("input, select")

    fields.each(function(i, item) {
        const field = $(item);
        
        if (field.val() === "") {
            field.addClass("is-error")
        }

        if (field.attr("type") === "checkbox") {
            checkboxValidation(field)
        }

        if (field.attr("name") === "phone") {
            phoneValidation(field)
        }

        if (field.attr("name") === "name") {
            nameValidation(field)
        }
    })

    const errors = $form.find(".is-error") 
    const invalid = $form.find(".is-invalid");

    if (errors.length > 0 || invalid.length > 0) {
        errors.eq(0).focus();
        invalid.eq(0).focus();
        return "invalid";
    } else {
        return "valid"
    }
}

function phoneValidation(phone) {
    const val = replaceOnlyNumber(phone.val().toString())

    if (val.length > 0 && val.length < 11) {
        phone.addClass("is-invalid")
    }
}

function nameValidation(name) {
    const val = name.val().toString()

    if (val.length > 0 && val.length < 3) {
        name.addClass("is-invalid")
    }
}

function checkboxValidation(input) {
    const val = !input.is(":checked");

    if (val) {
        input.addClass("is-error")
    }

    input.on("change", function() {
        input.removeClass("is-error")
    })
}

function changeNumberInputsState() {
    const that = $(this)
    const val = replaceOnlyNumber(that.val().toString())
    observeInputState(val, that, 10)
}

function observeInputState(val, that, invalidLength) {
    if (val.length > 0) {
        that.addClass("is-valid").removeClass("is-error is-invalid")
    } else {
        that.removeClass("is-valid ")
    }

    if (val.length > invalidLength) {
        that.addClass("is-success")
    }  else {
        that.removeClass("is-success")
    }
}