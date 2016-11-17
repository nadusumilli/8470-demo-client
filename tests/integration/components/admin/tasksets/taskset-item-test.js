import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/tasksets/taskset-item', 'Integration | Component | admin/tasksets/taskset item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/tasksets/taskset-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/tasksets/taskset-item}}
      template block text
    {{/admin/tasksets/taskset-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
