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
        $(".shoppingCart").append("<dt>Website</dt><dd>$100 (one page)</dd>");
        total += 100;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-hosting").click(function(){
        $(".shoppingCart").append("<dt>Hosting</dt><dd>$100 (per year)</dd>");
        total += 100;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-domain").click(function(){
        $(".shoppingCart").append("<dt>Domain Name</dt><dd>$20 (per year)</dd>");
        total += 20;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-interactive").click(function(){
        $(".shoppingCart").append("<dt>Interactive Web Component</dt><dd>$100 (one calculation, animation, map, gallery, form, etc...)</dd>");
        total += 100;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-application").click(function(){
        $(".shoppingCart").append("<dt>Web App</dt><dd>$800 (user information is saved)</dd>");
        total += 800;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-cms").click(function(){
        $(".shoppingCart").append("<dt>Content Managed Website</dt><dd>$50 (ex: squarespace, wix, wordpress, shopify, weebly etc. plus cost of platform ($0 - $500/yr))</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-webrevision").click(function(){
        $(".shoppingCart").append("<dt>Web Revision</dt><dd>$50 (each)</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-touchup").click(function(){
        $(".shoppingCart").append("<dt>Photo Touch-up or Effect</dt><dd>$25</dd>");
        total += 25;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-replace").click(function(){
        $(".shoppingCart").append("<dt>Photo Remove/Replace Background</dt><dd>$10</dd>");
        total += 10;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-gif").click(function(){
        $(".shoppingCart").append("<dt>GIF Animation</dt><dd>$30</dd>");
        total += 30;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-resize").click(function(){
        $(".shoppingCart").append("<dt>Resize Photo</dt><dd>$10</dd>");
        total += 10;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-change").click(function(){
        $(".shoppingCart").append("<dt>Change File Type</dt><dd>$10 (ex: jpg logo to vector logo)</dd>");
        total += 10;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-photorevision").click(function(){
        $(".shoppingCart").append("<dt>Photo Revision</dt><dd>$5 (each)</dd>");
        total += 5;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-ad").click(function(){
        $(".shoppingCart").append("<dt>Advertisement</dt><dd>$50 (printing not included)</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-poster").click(function(){
        $(".shoppingCart").append("<dt>Poster</dt><dd>$50 (printing not included)</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-logo").click(function(){
        $(".shoppingCart").append("<dt>Logo</dt><dd>$50</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-invitation").click(function(){
        $(".shoppingCart").append("<dt>Invitation</dt><dd>$50 (printing not included)</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-businesscard").click(function(){
        $(".shoppingCart").append("<dt>Business Card</dt><dd>$25 (printing not included)</dd>");
        total += 25;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-letterhead").click(function(){
        $(".shoppingCart").append("<dt>Letterhead</dt><dd>$25 (printing not included)</dd>");
        total += 25;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-tshirt").click(function(){
        $(".shoppingCart").append("<dt>T-Shirt Design</dt><dd>$25 (screen printing not included)</dd>");
        total += 25;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-digitaldesign").click(function(){
        $(".shoppingCart").append("<dt>Web or App Design</dt><dd>$50 (one page. mocks/specs only. development not included)</dd>");
        total += 50;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-designrevision").click(function(){
        $(".shoppingCart").append("<dt>Design Revision</dt><dd>$10 (each)</dd>");
        total += 10;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-consultationemail").click(function(){
        $(".shoppingCart").append("<dt>Consultation via Email</dt><dd>$10 (unlimited)</dd>");
        total += 10;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-consultationperson").click(function(){
        $(".shoppingCart").append("<dt>Consultation in Person</dt><dd>$25 (one hour)</dd>");
        total += 25;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-bot").click(function(){
        $(".shoppingCart").append("<dt>Software Task Automation</dt><dd>$100 (content migration, social media auto posting, etc...)</dd>");
        total += 100;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
    
    $("#service-idea").click(function(){
        $(".shoppingCart").append("<dt>Idea Sketches</dt><dd>$5 (each)</dd>");
        total += 5;
        $(".totalPrice").val("Estimated Total: $" + total);
    });
     
    $( "button" ).click(function() {
        var allServices = $( ".shoppingCart" ).html();
        $( ".allservices").val( allServices );
});

});