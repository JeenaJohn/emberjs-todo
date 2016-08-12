import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editTodoItem(value) {
      this.sendAction('editTodo', value, this.get('todo'));
    },
    setEditModeItem() {
      this.sendAction('setEditMode', this.get('todo'));
    }
  }
});
