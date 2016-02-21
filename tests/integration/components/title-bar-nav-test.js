import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('title-bar-nav', 'Integration | Component | title bar nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{title-bar-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#title-bar-nav}}
      template block text
    {{/title-bar-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
