require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    deck: '../bower_components/deck.js',
    'deck.core': '../bower_components/deck.js/core/deck.core',
    'deck.js-codemirror': 'vendor/deck.js-codemirror',
    'codemirror': 'vendor/deck.js-codemirror/codemirror',
    'deck.codemirror': 'vendor/deck.js-codemirror/deck.codemirror',
  },
  shim: {
    'deck.core': {
      deps: [
        'jquery',
      ],
      exports: 'jquery'
    },
    app: [
      'deck/extensions/hash/deck.hash',
      'deck/extensions/menu/deck.menu',
      'deck/extensions/goto/deck.goto',
      'deck/extensions/navigation/deck.navigation',
      'deck/extensions/scale/deck.scale',
      'deck.codemirror'
    ],
    'deck/extensions/hash/deck.hash': ['deck.core'],
    'deck/extensions/menu/deck.menu': ['deck.core'],
    'deck/extensions/goto/deck.goto': ['deck.core'],
    'deck/extensions/navigation/deck.navigation': ['deck.core'],
    'deck/extensions/scale/deck.scale': ['deck.core'],
    'deck.js-codemirror/mode/javascript/javascript': ['codemirror'],
    'deck.codemirror': [
      'codemirror',
      'deck.js-codemirror/mode/javascript/javascript'
    ]
  }
});

require(['deck.core', 'app'], function() {
  'use strict';
  // use app here
  // console.log(app);
  // console.log('Running jQuery %s', $().jquery);
});
