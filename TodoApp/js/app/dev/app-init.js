define(["app/app", "app/collections/todo-list-collection", "app/views/todo-list-view"], 
	function(App) {
		App.init = function() {
		alert("hello");
		var todoListCollection = new App.TodoListCollection(),
			todoListView = new App.TodoListView({collection: todoListCollection});
		todoListView.render();
	};
});