import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.routerRootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('admin', function() {
    this.route('users');
    this.route('user', {path: "/users/:user_id"});
  });
  this.route('home');
});

export default Router;
