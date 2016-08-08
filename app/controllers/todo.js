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

      // Clear the "New Todo" text field
      this.set('newTodo', '');
      todo.save();
    }
  }
});
