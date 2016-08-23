import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('committee-lookup2', 'Integration | Component | committee lookup2', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{committee-lookup2}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#committee-lookup2}}
      template block text
    {{/committee-lookup2}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
