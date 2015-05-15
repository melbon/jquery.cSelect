/*
 * December 2013
 * customSelect 2.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
 */
$.fn.cSelect = function(options) {
    var settings = $.extend({
        class: "cSelect"
    }, options);

    var container = this.selector,
        wrapper = "<div class='" + settings.class + "' data-id='cSelect'></div>";

    $(container).wrap(wrapper);
    $(container).parent().prepend("<div />");

    $(container).parent().find("div").text(function(){
        return $(this).siblings('select').find('option:selected').text();
    });

    $(container).parent().find("select").on("change", function(){
        $(this).siblings('div').text($(this).children('option:selected').text());
    });
}