import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  
  text: attr('string'),
  complete: attr('boolean')

});