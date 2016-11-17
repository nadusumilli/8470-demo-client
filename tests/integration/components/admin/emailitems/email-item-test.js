import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/emailitems/email-item', 'Integration | Component | admin/emailitems/email item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/emailitems/email-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/emailitems/email-item}}
      template block text
    {{/admin/emailitems/email-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
