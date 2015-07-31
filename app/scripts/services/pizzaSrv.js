'use strict';

piccaApp.service('PizzaService', [
  'PizzaFactory',
  function (PizzaFactory) {

    var self = this;

    self.getPizzas = function PS_getPizzas () {
      return PizzaFactory.getPizzas();
    }
}]);
