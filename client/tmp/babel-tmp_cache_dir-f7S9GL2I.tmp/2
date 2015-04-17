import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editTodo: function editTodo() {
            this.set('isEditing', true);
        },
        acceptChanges: function acceptChanges() {
            // Remove isEditing property
            this.set('isEditing', false);

            // If the todo is empty, delete it
            // otherwise save it with the new title
            if (Ember.isEmpty(this.get('model.title'))) {
                this.send('removeTodo');
            } else {
                this.get('model').save();
            }
        },
        removeTodo: function removeTodo() {
            var todo = this.get('model');
            todo.deleteRecord();
            todo.save();
        }
    },

    isEditing: false
});