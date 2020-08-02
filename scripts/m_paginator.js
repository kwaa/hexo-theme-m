'use strict';

function paginatorHelper(options = {}) {
  const current = options.current || this.page.current || 0;
  const total = options.total || this.page.total || 1;
  const endSize = options.hasOwnProperty('end_size') ? +options.end_size : 1;
  const midSize = options.hasOwnProperty('mid_size') ? +options.mid_size : 2;
  const { space = '&hellip;', transform } = options;
  const base = options.base || this.page.base || '';
  const format = options.format || `${this.config.pagination_dir}/%d/`;
  const prevText = options.prev_text || 'Prev';
  const nextText = options.next_text || 'Next';
  const prevNext = options.hasOwnProperty('prev_next') ? options.prev_next : true;

  if (!current) return '';

  const currentPage = `<span class="page-number current">${transform ? transform(current) : current}</span>`;

  const link = i => this.url_for(i === 1 ? base : base + format.replace('%d', i));

  const pageLink = i => `<a class="page-number" href="${link(i)}">${transform ? transform(i) : i}</a>`;

  let result = '';
  // Display the link to the previous page
  //if (prevNext && current > 1) {
  //  result += `<a class="extend prev" rel="prev" href="${link(current - 1)}">${prevText}</a>`;
  //}
  if (prevNext) {
    if (current > 1) {
      result += '<div class="mdui-col-xs-12 mdui-col-sm-6"><a class="extend prev mdui-btn mdui-ripple mdui-float-left" rel="prev" href="' + link(current - 1) + '">' + prevText + '</a></div>';
    }
    else  result += '<div class="mdui-col-xs-12 mdui-col-sm-6"><span disabled class="extend prev mdui-btn mdui-ripple mdui-float-left" rel="prev">' + prevText + '</span></div>'
}

  if (options.show_all) {
    // Display pages on the left side of the current page
    for (let i = 1; i < current; i++) {
      result += pageLink(i);
    }

    // Display the current page
    result += currentPage;

    // Display pages on the right side of the current page
    for (let i = current + 1; i <= total; i++) {
      result += pageLink(i);
    }
  } else {
    // It's too complicated. May need refactor.
    const leftEnd = current <= endSize ? current - 1 : endSize;
    const rightEnd = total - current <= endSize ? current + 1 : total - endSize + 1;
    const leftMid = current - midSize <= endSize ? leftEnd + 1 : current - midSize;
    const rightMid = current + midSize + endSize > total ? rightEnd - 1 : current + midSize;
    const spaceHtml = `<span class="space">${space}</span>`;

    // Display pages on the left edge
    for (let i = 1; i <= leftEnd; i++) {
      result += pageLink(i);
    }

    // Display spaces between edges and middle pages
    if (space && current - endSize - midSize > 1) {
      result += spaceHtml;
    }

    // Display left middle pages
    if (leftMid > leftEnd) {
      for (let i = leftMid; i < current; i++) {
        result += pageLink(i);
      }
    }

    // Display the current page
    result += currentPage;

    // Display right middle pages
    if (rightMid < rightEnd) {
      for (let i = current + 1; i <= rightMid; i++) {
        result += pageLink(i);
      }
    }

    // Display spaces between edges and middle pages
    if (space && total - endSize - midSize > current) {
      result += spaceHtml;
    }

    // Dispaly pages on the right edge
    for (let i = rightEnd; i <= total; i++) {
      result += pageLink(i);
    }
  }

  // Display the link to the next page
  // if (prevNext && current < total) {
  //   result += '<a class="extend next" rel="next" href="' + link(current + 1) + '">' + nextText + '</a>';
  // }
  if (prevNext) {
    if (current < total) {
      result += '<div class="mdui-col-xs-12 mdui-col-sm-6"><a class="extend next mdui-btn mdui-ripple mdui-float-right" rel="next" href="' + link(current + 1) + '">' + nextText + '</a></div>';
    }
    else  result += '<div class="mdui-col-xs-12 mdui-col-sm-6"><span disabled class="extend next mdui-btn mdui-ripple mdui-float-right" rel="next">' + nextText + '</span></div>'
}

  return result;
}

hexo.extend.helper.register('m_paginator', paginatorHelper);