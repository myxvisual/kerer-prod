var mermaidRegex = /^```mermaid((.*[\r\n]+)+?)?```$/im;

function processMermaidBlockList(page) {

  var match;

  while ((match = mermaidRegex.exec(page.content))) {
    var rawBlock = match[0];
    var mermaidContent = match[1];
    page.content = page.content.replace(rawBlock, '<pre class="mermaid">' +
      mermaidContent + '</pre>');
  }

  return page;
}

module.exports = {
  website: {
    assets: './dist',
    css: [
      'mermaid/mermaid.css'
    ],
    js: [
      'book/plugin.js'
    ]
  },
  hooks: {
    'page:before': processMermaidBlockList
  }
};
