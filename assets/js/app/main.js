var psychicMeme = {

  updateAppSize: function() {
    $('#js-app-wrapper').height( $(window).height() - 62 );
  },

  converter: new Showdown.converter(),

  convert: function( val ) {
    this.convertedMarkdown = this.converter.makeHtml( val );

    $('#html').html( this.convertedMarkdown );

    $('#rendered-html').val( this.convertedMarkdown );
  },

  convertedMarkdown: ''
}

psychicMeme.updateAppSize();

psychicMeme.convert( $('#markdown').val() );

$(window).on({
  resize: function() {
    psychicMeme.updateAppSize();
  }
});

$('#markdown').on({
  keyup: function() {
    psychicMeme.convert( $(this).val() );
  }
});
