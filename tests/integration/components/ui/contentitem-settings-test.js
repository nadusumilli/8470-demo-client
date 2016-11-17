import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/contentitem-settings', 'Integration | Component | ui/contentitem settings', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/contentitem-settings}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/contentitem-settings}}
      template block text
    {{/ui/contentitem-settings}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
