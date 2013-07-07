PSYM.app = {

  textAreas: {
    markdown: $('#markdown'),
    html: $('#html'),
    renderedHtml: $('#rendered-html')
  },

  updateSize: function() {
    $('#js-app-wrapper').height( $(window).height() - 62 );
  }
};

PSYM.app.updateSize();

$(window).on({
  resize: function() {
    PSYM.app.updateSize();
  }
});
