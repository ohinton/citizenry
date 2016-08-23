import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('house-subcommittee', 'Integration | Component | house subcommittee', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{house-subcommittee}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#house-subcommittee}}
      template block text
    {{/house-subcommittee}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
