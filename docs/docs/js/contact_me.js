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


    $("#service-graphicdesign").click(function(){
        $("ul").append("<li>Graphic Design $100</li>");
        total += 100;
        $(".totalPrice").val(total);
    });
    
     $("#service-webdesign").click(function(){
        $("ul").append("<li>Web Design $500</li>");
        total += 500; 
        $(".totalPrice").val(total);
 
    });
});
