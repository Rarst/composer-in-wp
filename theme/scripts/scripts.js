head.ready(function () {

    var makeToc = function () {
        if (document.body.clientHeight > 1.5 * window.innerHeight) {
            var $toc = $("#toc");
            $toc.tableOfContents(null, { "startLevel": 2, "depth": 1});
            $toc.affix({ "offset": { "top": 180 } });

//                $('[data-spy="scroll"]').each(function () {
//                   var $spy = $(this).scrollspy('refresh')
//                });
        }
    };

    makeToc();
    hljs.initHighlightingOnLoad();

    $(document).pjax('a[href!=#]', '#pjax-container');
    $(document).on('pjax:end', function () {
        makeToc();

        // fixes anchor-only links in Opera
        $('a[href^=#][href!=#]').each(function () {
            var $link = $(this);
            var $anchor = $link.attr('href');
            $link.attr('href', window.location.href + $anchor);
        });

        $('pre code').each(function (i, e) {
            hljs.highlightBlock(e)
        });
    });
    $(document).on("pjax:success", function () {
        if (window.ga) {
            var location = window.location.pathname + window.location.search;
            ga('send', 'pageview', {
                'page' : location,
                'title': document.title
            });
        }
    });
});