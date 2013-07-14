PSYM.app = (function() {
  'use strict';

  return {
    init: function() {
      PSYM.templateManager.init();

      PSYM.documentManager.init();

      PSYM.app.updateSize();

      $(window).on({
        resize: function() {
          PSYM.app.updateSize();
        }
      });

      PSYM.app.textAreas.markdown.on({
        keyup: function() {
          PSYM.documentManager.convert( $(this).val() );
        }
      });

      $('#js-save-document').on({
        click: function() {
          PSYM.documentManager.saveDocument();

          return false;
        }
      });

      $('body').on({
        click: function() {
          PSYM.documentManager.loadDocument( $(this).data('key') );

          return false;
        }
      }, '.js-load-document');

      $('#js-clear-localstorage').on({
        click: function() {
          localStorage.clear();

          PSYM.documentManager.loadAllDocuments();

          return false;
        }
      });
    },

    textAreas: {
      markdown: $('#markdown'),
      html: $('#html'),
      renderedHtml: $('#rendered-html')
    },

    updateSize: function() {
      $('#js-app-wrapper').height( $(window).height() - 62 );
    }
  };
}());
