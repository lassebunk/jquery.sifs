(function($) {
  $.sifs = {
    containerSelector:  '.sifs-container',
    postSelector:       '.sifs-post',
    paginationSelector: '.sifs-pagination',
    nextSelector:       'a.sifs-next',
    loadingHtml:        'Loading...',
    show:               function(elems) { elems.show(); },
    nextPageUrl:        null,

    init: function(options) {
      for (var key in options) {
        $.sifs[key] = options[key];
      }

      $(function() {
        $.sifs.extractNextPageUrl($('body'));
        $(window).bind('scroll', $.sifs.scroll);
        $.sifs.scroll();
      });
    },
    
    scroll: function() {
      if ($.sifs.nearBottom() && $.sifs.shouldLoadNextPage()) {
        $.sifs.loadNextPage();
      }
    },
    
    nearBottom: function() {
      var scrollTop = $(window).scrollTop(),
          windowHeight = $(window).height(),
          lastPostTop = $($.sifs.containerSelector).find($.sifs.postSelector).last().offset().top;

      return (scrollTop > (lastPostTop - windowHeight));
    },

    shouldLoadNextPage: function() {
      return !!$.sifs.nextPageUrl;
    },
    
    loadNextPage: function() {
      var nextPageUrl = $.sifs.nextPageUrl;
      $.sifs.nextPageUrl = null;
      $($.sifs.containerSelector).append('<div class="wpifs-loading">' + $.sifs.loadingHtml + '</div>');
      $.get(nextPageUrl, function(html) {
        var dom = $(html),
            posts = dom.find($.sifs.containerSelector).find($.sifs.postSelector);
        $('.wpifs-loading').remove();
        $.sifs.show(posts.hide().appendTo($.sifs.containerSelector));
        $.sifs.extractNextPageUrl(dom);
        $.sifs.scroll();
      });
    },

    extractNextPageUrl: function(dom) {
      var pagination = dom.find($.sifs.paginationSelector);
      $.sifs.nextPageUrl = pagination.find($.sifs.nextSelector).attr('href');
      pagination.remove();
    }
  }
})(jQuery);