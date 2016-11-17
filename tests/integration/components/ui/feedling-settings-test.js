import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/feedling-settings', 'Integration | Component | ui/feedling settings', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/feedling-settings}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/feedling-settings}}
      template block text
    {{/ui/feedling-settings}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
