define(["core/core", "app/app", "app/templates/todo-template", "core/views/view"],
	function(Core, App, TodoTemplate) {
	App.TodoView = Core.View.extend({
		initialize: function() {
			console.log("ToDo-view initialized");
			Core.View.prototype.initialize.call(this);
			this._addEventListeners();
		},

		events : {
			"click #star" : 	"_toggleStar",
			"click .toggle" : 	"_toggleStatus",
			"click .destroy": 	"_destory" 
		},

		template : _.template(TodoTemplate),

		tagName : 'li',

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		_addEventListeners: function() {
			this.model.on("change", this.render, this);
		},

		_toggleStar: function() {
			this.model.set('starred', !this.model.get('starred'));
			this.model.save();
		}, 

		_toggleStatus: function() {
			this.model.set('completed', !this.model.get('completed'));
			this.model.save();
		},

		_destory: function() {
			this.model.destroy();
		}


	});

	return App.TodoView;
});