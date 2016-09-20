import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;

export default DS.Model.extend({
  isEditing: false,
  text: attr('string'),
  complete: attr('boolean'),

  completedClass: Ember.computed('complete', function() {
    if (this.get('complete') === true) {
      return `completed`;
    } else {
      return ' ';
    }
  }),

  editingClass: Ember.computed('isEditing', function() {

    if (this.get('isEditing') === true) {
      return `editing`;
    } else {
      return ' ';
    }

  })


});
