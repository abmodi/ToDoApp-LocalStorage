define(["core/core", "app/app", "core/collections/collection", "app/models/todo-model"], function(Core, App){
	App.TodoListCollection = Core.Collection.extend({
		initialize: function() {
			var i, todoModel;
			Core.Collection.prototype.initialize.call(this);
			/*for(i=0; i<5; ++i) {
				todoModel = new App.TodoModel();
				this.add(todoModel);
			}
			*/
		}, 
		model : App.TodoModel, 
		url : "todos"
	});

	return App.TodoListCollection;
});