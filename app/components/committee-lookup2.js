import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup2() {
      this.sendAction('committeeLookup2');
    }
  }
});
