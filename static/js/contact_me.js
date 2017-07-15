$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

/*Add the module that lets the user select their custom package. */
$(document).ready(function(){
    
    var total = 0;


    $("#{{ with .Site.Params.contact.form.service.website.id }}{{.}}{{ end }}").click(function(){
        $(".shoppingCart").append("<dt>{{ with .Site.Params.contact.form.service.website.text }}{{.}}{{ end }}</dt><dd>${{ with .Site.Params.contact.form.service.website.price }}{{.}}{{ end }}</dd>");
        total += {{ with .Site.Params.contact.form.service.website.price }}{{.}}{{ end }};
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    

});