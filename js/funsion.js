jQuery(document).ready(listo);

function listo() {
    jQuery(".hamb").click(function (e) {
        e.preventDefault();
        jQuery("nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-bars").toggleClass(" fa-x");
    });

    jQuery("nav a").click(function (e) {
        e.preventDefault();
        jQuery("nav").removeClass("open");
        jQuery(".hamb i").removeClass(" fa-x").addClass("fa-bars");

        var dev = jQuery(this).attr("href");

        jQuery("html, body").animate({
            "scrollTop": jQuery(dev).offset().top
        }, 500);


    });
}