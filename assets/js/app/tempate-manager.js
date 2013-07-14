PSYM.templateManager = (function() {
  'use strict';

  return {
    init: function() {
      this.localDocumentsDropdown = _.template( '<li><a href="#" class="js-load-document" data-key="<%= documentName %>"><i class="icon-folder-open"></i> <%= documentName %></a></li>' );
    }
  };
}());
