import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}


Router.map(function () {
  // served at the /about URL by default
  this.route('about')
  this.route('contact', {path: '/getting-in-touch'});

});
