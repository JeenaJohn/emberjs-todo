import Ember from 'ember';

export default Ember.Controller.extend({

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

    editTodo() {
      var todo = this.get('model');
      todo.save();

    },

    deleteTodo(todo) {

      todo.destroyRecord();

    },

    completeTodo(todo) {

      todo.set('complete', true);
      todo.save();

    }
  }

});
