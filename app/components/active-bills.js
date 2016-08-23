import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    activebillLookup() {
      this.sendAction('activebillLookup');
    }
  }
});
