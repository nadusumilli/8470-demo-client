import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/feedlings/feedling-item', 'Integration | Component | admin/feedlings/feedling item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/feedlings/feedling-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/feedlings/feedling-item}}
      template block text
    {{/admin/feedlings/feedling-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
