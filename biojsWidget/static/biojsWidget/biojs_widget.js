var fasta_root = IPython.notebook.base_url + 'nbextensions/biojs-io-fasta/src'
var fasta_path = fasta_root + '/index'

//console.log(fasta_path);
require.config({
    urlArgs: "",
    waitSeconds: 6000000000,
    paths: {
        fasta: fasta_path
    },
    shim: {
        fasta: {
            exports: 'fasta'
        },
    }
});

//var p = require('biojs-io-parser');
//console.log(p);

define (
  ['jquery', 'jupyter-js-widgets', 'fasta'],
  function ($, widget, fasta){
    'use strict';

    console.log("fasta: " + fasta);
    var biojsView = widget.DOMWidgetView.extend({
      render: function(){
        biojsView.__super__.render.apply(this, arguments);
        console.log("Rendering the widget");
        //var p = Fasta.read("https://raw.githubusercontent.com/biojs-io/biojs-io-fasta/master/test/foo.fasta");
        //console.log(p);
        this.$el.text("Hello IPython");
      }
    });

    return {
      biojsView: biojsView
    }
  }
);
