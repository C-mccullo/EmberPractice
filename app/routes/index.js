import Ember from 'ember';

export default Ember.Route.extend({
	// if you do not create your own controller for a template, Ember will implicitly create one for you
	// (templates will never talk directly to models and controllers are used to create a link between the two)
	// A CONTROLLER ACTS AS A PROXY BETWEEN A Template and a Model

	// controllerName : 'posts',
	// renderTemplate: function() {
	// 	this.render('post');
	// },
	
	// will return the model data from var posts in store.js
	// will need to access model not posts in handlebars syntax
	model: function() {
		return this.store.findAll('post');
	}
});
