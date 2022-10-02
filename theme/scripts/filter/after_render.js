hexo.extend.filter.register('after_render:html', (str) =>
  str
    .replace(
      /<p>(<img [^>]*src="([^"]+)"[^>]*)><\/p>/g,
      '<figure class="mdui-img-fluid">' +
        '$1' +
        'class="mdui-img-rounded" loading="lazy"></figure>'
    )
    .replace(/\bvideo-container\b/g, 'mdui-video-container')
    .replace(
      /(?<!<figure class="[a-zA-Z0-9:;\.\s\(\)\-\,]*">)<table>/g,
      '<div class="mdui-table-fluid mdui-shadow-0"><table class="mdui-table mdui-table-hoverable">'
    )
    .replace(/<\/table>(?!<\/figure>)/g, '</table></div>')
    .replace(
      /<h1 id="([^"]*)">([^<]*)<\/h1>/g,
      '<h1 class="mdui-valign" id="' +
        '$1' +
        '"><span>' +
        '$2' +
        '&nbsp;&nbsp;</span><a aria-hidden="true" class="mdui-btn mdui-btn-icon mdui-ripple" href="#' +
        '$1' +
        '"><i class="mdui-icon material-icons">link</i></a></h1>'
    )
    .replace(
      /<h2 id="([^"]*)">([^<]*)<\/h2>/g,
      '<h2 class="mdui-valign" id="' +
        '$1' +
        '"><span>' +
        '$2' +
        '&nbsp;&nbsp;</span><a aria-hidden="true" class="mdui-btn mdui-btn-icon mdui-ripple" href="#' +
        '$1' +
        '"><i class="mdui-icon material-icons">link</i></a></h2>'
    )
    .replace(
      /<h3 id="([^"]*)">([^<]*)<\/h3>/g,
      '<h3 class="mdui-valign" id="' +
        '$1' +
        '"><span>' +
        '$2' +
        '&nbsp;&nbsp;</span><a aria-hidden="true" class="mdui-btn mdui-btn-icon mdui-ripple" href="#' +
        '$1' +
        '"><i class="mdui-icon material-icons">link</i></a></h3>'
    )
)
