require([
    'gitbook'
  ], function (gitbook) {
    gitbook.events.bind('page.change', function () {
      mermaid.init({
        "theme":  "forest",
        "themeCSS": "foreignObject > div { display: block !important; text-align: center; }"
      });
    });
  });
