'use strict';

/* First login controller responsible for searching sources */

piccaApp.controller('HomeController', [
  '$scope',
  '$rootScope',
  function ($scope, $rootScope) {

    $scope.home = "domowy";
    $rootScope.page = "home";
}])
