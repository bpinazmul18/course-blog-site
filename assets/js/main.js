(function(){
    // Initiate one page nav
    $('#navTab').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 100,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    // Initiate code editor
    // initAddedDCLightExercises()
    hightLight ()

})(jQuery);

$(function() {
    var template = "<div data-datacamp-exercise data-lang=\"python\" data-height=\"{{height}}\"><code data-type=\"sample-code\">{{code}}</div></div>",
        LINEHEIGHT = 14,
        EXTRA = 100;

    $("#inner-text pre").each(function(){
        var code = $(this).text();
        var nrLines = code.split(/\r\n|\r|\n/).length + 3;
        var height = nrLines * LINEHEIGHT + EXTRA;

        height = (nrLines > 7 && nrLines < 14) ? 300 : height;

        $(this).replaceWith(template
            .replace('{{code}}', code)
            .replace('{{height}}', height)
        );
    });
});

