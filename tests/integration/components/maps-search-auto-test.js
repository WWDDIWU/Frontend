import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('maps-search-auto', 'Integration | Component | maps search auto', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{maps-search-auto}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#maps-search-auto}}
      template block text
    {{/maps-search-auto}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
