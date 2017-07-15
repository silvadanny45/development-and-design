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


    $("#service-website").click(function(){
        $(".shoppingCart").append("<dt>Website</dt><dd>$100</dd>");
        total += 100;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
     
    

});