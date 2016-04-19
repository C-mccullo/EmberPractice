import Ember from 'ember';

export default Ember.Controller.extend({
	isPictureShowing : false,
	actions: {
		showName: function() {
			alert('draculas real name is George');
		},
		showPicture: function() {
			this.set('isPictureShowing', true);
		},
		hidePicture: function() {
			this.set('isPictureShowing', false);
		}
	}
});
