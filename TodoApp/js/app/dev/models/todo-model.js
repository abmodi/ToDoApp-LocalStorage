define(["core/core", "app/app", "core/models/model"], function(Core, App) {
	
	App.TodoModel = Core.Model.extend({
		initialize: function() {
			Core.Model.prototype.initialize.call(this);
		},

		urlRoot: "todos",

		defaults: {
			title: "",
			completed: false,
			starred: false
		}

	});

	return App.TodoModel;

});