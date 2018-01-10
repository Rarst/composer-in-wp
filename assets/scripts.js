jQuery(document).ready(function ($) {
    var makeToc = function () {
        if (document.body.clientHeight > 1.5 * window.innerHeight) {
            var $toc = $("#toc");
            $toc.affix({"offset": {"top": 180}});

//                $('[data-spy="scroll"]').each(function () {
//                   var $spy = $(this).scrollspy('refresh')
//                });
        }
    };

    makeToc();
});