'use strict';

piccaApp.controller('PopekController', [
  '$scope',
  '$rootScope',
  'PizzaService',
  function ($scope, $rootScope, PizzaService) {

    $scope.people_count = 1;
    $scope.picce = [];
    $scope.pizza_size = "medium";
    $scope.pizza_counted = undefined;
    $scope.total_price = undefined;
    $scope.actualPrice = 0;

    $rootScope.page = "popek";

    var getPizzas = function PC_getPizzas () {
        PizzaService.getPizzas().then(function (picce) {
            $scope.picce = picce.data.pizzas;
        })
    }

    $scope.pizzaCounter = function PC_pizzaCounter () {
        switch ($scope.pizza_size) {
            case "small":
                $scope.pizza_counted = Math.ceil($scope.people_count * 0.8);
                break;
            case "medium":
                $scope.pizza_counted = Math.ceil($scope.people_count * 0.6);
                break;
            case "big":
                $scope.pizza_counted = Math.ceil($scope.people_count * 0.4);
                break;
            default:
                $scope.pizza_counted = "ERROR";
        }
        $scope.total_price = $scope.pizza_counted * $scope.actualPrice;
    }

    $scope.$watch('choosen_pizza + pizza_size + people_count' ,function () {
        if ($scope.picce[$scope.choosen_pizza]) {
            $scope.actualPrice = $scope.picce[$scope.choosen_pizza].prices[$scope.pizza_size];
            $scope.pizzaCounter();
        } else {
            $scope.total_price = 0;
            $scope.pizza_counted = 0;
        }
    })

    getPizzas();

}])
