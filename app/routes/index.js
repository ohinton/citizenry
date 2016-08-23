import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    committeeLookup(){
      this.transitionTo('committees');
    },
    subcommitteeLookup(){
      this.transitionTo('house-subcommittee');
    },
    activebillLookup(){
      this.transitionTo('bills');
    }
  }
});
