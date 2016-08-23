import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    subcommitteeLookup() {
      this.sendAction('subcommitteeLookup');
    }
  }
});
