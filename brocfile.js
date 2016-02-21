var vulcanize   = require('broccoli-vulcanize');
var pickFiles   = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');
var Funnel  = require('broccoli-funnel');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

var polymerVulcanize = vulcanize('app', {
  input: 'elements.html',
  output: 'assets/vulcanized.html',
  csp: true,
  inline: true,
  strip: false,
  excludes: {
    imports: ["(^data:)|(^http[s]?:)|(^\/)"],
    scripts: ["(^data:)|(^http[s]?:)|(^\/)"],
    styles: ["(^data:)|(^http[s]?:)|(^\/)"]
  }
});

var polymer = pickFiles('bower_components/', {
  srcDir: '',
  files: [
    'webcomponentsjs/webcomponents.js',
    'polymer/polymer.html',
    'github-card/webcomponent/*'
  ],
  destDir: '/assets'
});

var jsCookies = pickFiles('bower_components/js-cookie/src/', {
    srcDir: '',
    files: [
        'js.cookie.js'
    ],
    destDir: '/assets'
});

var ownAssets = new Funnel('public/assets', {
  destDir: '/'
});
module.exports = mergeTrees([polymerVulcanize, polymer, jsCookies, app.toTree(ownAssets)]);
