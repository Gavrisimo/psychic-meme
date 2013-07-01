var documentManager = {
  converter: new Showdown.converter(),

  getDummyMarkdown: function() {
    $.get('assets/dummy-markdown.txt', function( data ) {
      documentManager.convert( data );
    });
  },

  convert: function( val ) {
    app.textAreas.markdown.val( val );

    this.convertedMarkdown = this.converter.makeHtml( val );

    app.textAreas.html.html( this.convertedMarkdown );
    app.textAreas.renderedHtml.val( this.convertedMarkdown );
  },

  convertedMarkdown: '',

  loadAllDocuments: function() {
    var $localDocuments = $('#js-local-documents');

    $localDocuments.empty();

    for ( var key in localStorage ) {
      $localDocuments.append( '<li><a href="#" class="js-load-document" data-key="' + key + '"><i class="icon-folder-open"></i> ' + key + '</a></li>' );
    }
  },

  loadDocument: function( key ) {
    this.convert( localStorage.getItem( key ) );
  },

  saveDocument: function() {
    localStorage.setItem( prompt( 'How are you going to name this document?' ), app.textAreas.markdown.val() );

    this.loadAllDocuments();
  }
};

documentManager.getDummyMarkdown();
documentManager.loadAllDocuments();

app.textAreas.markdown.on({
  keyup: function() {
    documentManager.convert( $(this).val() );
  }
});

$('#js-save-document').on({
  click: function() {
    documentManager.saveDocument();

    return false;
  }
});

$('body').on({
  click: function() {
    documentManager.loadDocument( $(this).data('key') );

    return false;
  }
}, '.js-load-document');

$('#js-clear-localstorage').on({
  click: function() {
    localStorage.clear();

    documentManager.loadAllDocuments();

    return false;
  }
});
