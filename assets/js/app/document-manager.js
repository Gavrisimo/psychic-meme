PSYM.documentManager = (function() {
  'use strict';

  var DOC_NAME_MSG = 'How are you going to name this document?';

  return {
    init: function() {
      this.getDummyMarkdown();

      this.loadAllDocuments();

      this.converter = new Showdown.converter();

      this.convertedMarkdown = '';
    },

    getDummyMarkdown: function() {
      $.get('assets/dummy-markdown.txt', function( data ) {
        PSYM.documentManager.convert( data );
      });
    },

    convert: function( val ) {
      PSYM.app.textAreas.markdown.val( val );

      this.convertedMarkdown = this.converter.makeHtml( val );

      PSYM.app.textAreas.html.html( PSYM.documentManager.convertedMarkdown );
      PSYM.app.textAreas.renderedHtml.val( PSYM.documentManager.convertedMarkdown );
    },

    loadAllDocuments: function() {
      var $localDocuments = $('#js-local-documents');

      $localDocuments.empty();

      for ( var key in localStorage ) {
        $localDocuments.append( PSYM.templateManager.localDocumentsDropdown({ 'documentName': key }) );
      }
    },

    loadDocument: function( key ) {
      this.convert( localStorage.getItem( key ) );
    },

    saveDocument: function() {
      localStorage.setItem( prompt( DOC_NAME_MSG ), PSYM.app.textAreas.markdown.val() );

      this.loadAllDocuments();
    }
  };
}());
