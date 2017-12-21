/*
 * December 2013
 * customSelect 2.1.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
 */
$.fn.cSelect = function(options) {
    var settings = $.extend({
        class: "cSelect"
    }, options);

    return this.each(function() {
        var container = this,
            id = $(this).attr("id") || "",
            isDisabled =  "";
        if ($(this).prop("disabled")) {
            isDisabled = "select-is-disabled";
        }
        var wrapper = "<div class='" + settings.class + isDisabled + "' data-id='" + id + "' data-type='cSelect'></div>";

        $(container).wrap(wrapper);

        var $parent = $(container).parent();
        $parent.prepend("<div />");

        $parent.find("div").text(function(){
            return $(this).siblings('select').find('option:selected').text();
        });

        $parent.find("select").on("change", function(){
            $(this).siblings('div').text($(this).find('option:selected').text());
        });

        $(this).on('change', function() {
            var firstOption = $('option', this).first();
            var selectedOption = $('option:selected', this);
            if ($(this).prop("disabled")) {
                $parent.addClass("select-is-disabled");
            } else {
                $parent.removeClass("select-is-disabled");
            }
            if (firstOption.val() === selectedOption.val() && firstOption.text() === selectedOption.text()) {
                $parent.addClass("first-option-selected");
            } else {
                $parent.removeClass("first-option-selected");
            }
        }).change();
    });
}
