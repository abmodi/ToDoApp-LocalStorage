define(["core/core", "backbone"], function(Core, Backbone){
	Core.Model = Backbone.Model.extend({
		initialize: function() {
			console.log("Core Model Initialize");
			Backbone.Model.prototype.initialize.call(this);
		},

		sync: function(method, model, options) {
			var url, urlSplit, baseUrl, id;

			if (!options.url) {
		      url = _.result(model, 'url') || urlError();
		    }

		    var urlSplit = url.split("/");
		    if(urlSplit[0]) {
		    	baseUrl = urlSplit[0];
		    }
		    else
		    	urlError();

		    id = urlSplit[1];

		    var models = JSON.parse(localStorage[baseUrl]);

		    if(method === "read") {
		    	options.success(models[id-1]);
		    }

		    if(method === "create") {
		    	var newModel = model.toJSON();
		    	newModel.id = models.length + 1;
		    	models.push(newModel);
		    	window.localStorage[baseUrl] = JSON.stringify(models);
		    	options.success(newModel);
		    }

		    if(method === "update") {
		    	var newModel = model.toJSON();
		    	models[id-1] = newModel;
		    	window.localStorage[baseUrl] = JSON.stringify(models);
		    	options.success(newModel);
		    }

		    if(method === "delete") {
		    	var index = id -1;
		    	models.splice(index, 1);
		    	window.localStorage[baseUrl] = JSON.stringify(models);
		    	options.success(model);
		    }
		}
	});

	return Core.Model;
});