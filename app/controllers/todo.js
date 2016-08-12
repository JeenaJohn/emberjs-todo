import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['option'],
  option: 'all',

  viewModel: Ember.computed('model', 'option', function() {
    switch (this.get('option')) {
      case 'complete':
        return this.get('model').filterBy('complete', true);

      case 'active':
        return this.get('model').filterBy('complete', false);
      default:
        return this.get('model');
    }
  }),

  actions: {
    createTodo() {
      var newTodo = this.get('newTodo');

      if (!newTodo.trim()) {
        return;
      }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        text: newTodo,
        complete: false
      });
      todo.save();

      // Clear the "New Todo" text field
      this.set('newTodo', '');

    },

    setEditMode(todo) {

      todo.set('isEditing', true);

    },

    editTodo(value, todo) {
            var text = todo.get('text');
      console.log("in edittodo");
     console.log('value: ' + value);
      console.log(text);
      todo.set('text',value);
      todo.save();

    },

    deleteTodo(todo) {

      todo.destroyRecord();

    },

    completeTodo(todo) {

      todo.set('complete', true);
      todo.save();

    },

    completeAll() {

      this.get('model').forEach((todo) => {
        todo.set('complete', true);
        todo.save();
      });

    },

    filter(option) {
      this.set('option', option);
    }
  }

});
