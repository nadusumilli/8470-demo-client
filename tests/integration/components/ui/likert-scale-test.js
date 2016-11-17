import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/likert-scale', 'Integration | Component | ui/likert scale', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/likert-scale}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/likert-scale}}
      template block text
    {{/ui/likert-scale}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
