hexo.extend.filter.register('after_post_render', function (data) {
    data.content = data.content.replace(/(<img [^>]*src="([^"]+)"[^>]*)/g, '$1' + 'class="mdui-img-rounded" loading="lazy"')
    return data;
});