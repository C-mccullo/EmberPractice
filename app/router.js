import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  
  // Nested route for the "phone" and "email" template
  this.route('contact', function() {
      this.route('phone', {resetNamespace: true});
      this.route('email', {resetNamespace: true});
  });

  this.route('recent-comments');

  this.route('posts', {resetNamespace: true}, function(){
    this.route('post', {path: '/:post_id'});
  });

  this.route('map');
});

export default Router;
