$( document ).ready(function() { 
    $("form[name='registration']").validate({
        rules: {
            name: "required",
            email: "required",
            msg: "required"
        },
        messages: {
            name: "Please provide your name.",
            email: "Please provide and email.",
            msg: "Enter a message please"
        }
    })
});