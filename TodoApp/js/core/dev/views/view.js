define(["core/core", "backbone"], function(Core) {
	Core.View = Backbone.View.extend({
		initialize: function() {
			console.log("Core view initialize");
			Backbone.View.prototype.initialize.call(this);
		}

	});
	return Core.View;
});