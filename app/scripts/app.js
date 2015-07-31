'use strict';

var piccaApp = angular.module('picca.app', [
  'ngRoute'
  ])
.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/homePageTpl.html',
        controller: 'HomeController',
        controllerAs: 'HC'
      })
      .when('/licz_popek', {
        templateUrl: 'partials/popekPageTpl.html',
        controller: 'PopekController',
        controllerAs: 'PC'
      })
      .otherwise({
        redirectTo: '/'
      });
}])
.run([function () {
  console.log('run');
}]);
