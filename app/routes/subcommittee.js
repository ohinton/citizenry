import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=1ebfb5c5410443a98603a0fef81d2f29&parent_committee_id=' + params.committee_id +'&subcommittee=true&per_page=all=';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
   }
 });
