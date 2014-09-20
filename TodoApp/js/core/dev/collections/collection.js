define(["core/core", "backbone"], function(Core, Backbone){
	Core.Collection = Backbone.Collection.extend({
		initialize: function() {
			console.log("Core Collection Initialize");
			Backbone.Collection.prototype.initialize.call(this);
		},

		sync: function(method, model, options) {
			var url;

			if (!options.url) {
		      url = _.result(model, 'url') || urlError();
		    }

		    var models = localStorage[url];

		    if(method === "read") {
		    	options.success(JSON.parse(models));
		    }
		}
	});

	return Core.Collection;
});