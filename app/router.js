import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Sets this route (posts) as the "home page" renders posts template
  this.route('posts', {path: '/'});
  // 
  this.route('about');
  // Nested route for the "phone" and "email" template
  this.route('contact', function() {
      this.route('phone', {resetNamespace: true});
      this.route('email', {resetNamespace: true});
  });
  this.route('recent-comments');
  this.route('post', {path: '/posts/:post_id'});
  this.route('map');
});

export default Router;
