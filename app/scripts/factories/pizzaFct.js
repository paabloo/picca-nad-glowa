'use strict';

piccaApp.factory('PizzaFactory', [
  '$http',
  function ($http) {

    var getPizzas = function PF_getPizzas () {
      return $http.get('scripts/factories/json/picce.json').success(function (data) {
        return data;
      })
      .error(function (data) {
        return data;
      })
    }

    return {
      getPizzas: getPizzas
    }

}]);
