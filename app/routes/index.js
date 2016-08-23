import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    committeeLookup(){
      this.transitionTo('committees');
    },
    committeeLookup2(){
      this.transitionTo('committees2');
    },
    subcommitteeLookup(){
      this.transitionTo('house-subcommittee');
    }
  }
});
