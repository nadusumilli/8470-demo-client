import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/feedling-ui', 'Integration | Component | ui/feedling ui', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/feedling-ui}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/feedling-ui}}
      template block text
    {{/ui/feedling-ui}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
