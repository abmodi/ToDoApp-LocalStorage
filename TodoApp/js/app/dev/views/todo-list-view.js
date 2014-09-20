define(["core/core", "app/app", "app/templates/todo-list-template", "core/views/view", "app/views/todo-view"],
	function(Core, App, TodoListTemplate){
		App.TodoListView = Core.View.extend({
			initialize: function() {
				Core.View.prototype.initialize.call(this);
				this._addEventListeners();
				this.collection.fetch();
			},

			events:{
				"keypress #new-todo":"_createOnEnter",
				"click #toggle-all":"toggleAll",
				"click #clear-completed":"deleteAllCompleted",
			},

			template : _.template(TodoListTemplate),

			render: function() {
				this.setElement(".content-page");
				//if(this.$el.children().length === 0) {
					this.$el.html(this.template());
					this._initWrappers();
				//}

				this.collection.each(_.bind(function(todo){
						//todo.fetch();
						var todoView = new App.TodoView({model: todo});
						this.$todoList.append(todoView.render().$el);
				}, this));
				//var newModel = new App.TodoModel({task: "OMG!"});
				//newModel.save();
			}, 

			_initWrappers: function() {
				this.$todoList = this.$("#todo-list");
			},

			_addEventListeners: function() {
				this.collection.on('add', this.render, this)
							   .on('destroy', this.render, this)
							   .on('reset', this.render, this)
							   .on('change', this.render, this);
			},

			_createOnEnter:function(e){
				console.log("Create On Enter");
				if(e.which == 13 && $("#new-todo").val().trim())
				{
					//this.collection.create({"title":$("#new-todo").val(),"completed":false,"starred":false,"id":(this.collection.length+1)});
					//var newModel = new app.Todo();
					//newModel.save();
					this.collection.create({"title":$("#new-todo").val(),"completed":false,"starred":false});
					$("#new-todo").val("");
				}
			}
		});

		return App.TodoListView;
});