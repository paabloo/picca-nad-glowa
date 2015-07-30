'use strict';

var ritoApp = angular.module('rito.app', [
  'ui.router'
])
.config(['$stateProvider',
         '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('homeState', {
          url: '/',
          templateUrl: 'partials/homePageTpl.html',
          controller: 'HomeController',
          controllerAs: 'HC'
        })
        .state('championsState', {
          url: '/champions',
          templateUrl: 'partials/championsPageTpl.html',
          controller: 'ChampionsController',
          controllerAs: 'CSC'
        })
        .state('championState', {
          url: '/champion/{championId}',
          templateUrl: 'partials/championPageTpl.html',
          controller: 'ChampionController',
          controllerAs: 'CC'
        })
}])
.run(['$state',
  function ($state) {
    $state.go('homeState');
}]);
