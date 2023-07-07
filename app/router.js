import EmberRouter from '@ember/routing/router';
import config from 'conference-management/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('create-conference');
  this.route('manage-conference');
  this.route('register-attendees');
  this.route('manage-speakers');
  this.route('schedule-sessions');
  this.route('generate-report');
  this.route('manage-payment');
  this.route('login');
  this.route('register');
  this.route('navbar');
  this.route('conferences');
});
