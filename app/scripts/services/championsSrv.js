'use strict';

ritoApp.service('ChampionsService', [
  '$q',
  'ChampionsFactory',
  function ($q, ChampionsFactory) {

    var self = this;

    self.getChampionsData = function CS_getChampionsData (champion_id) {
      var deferred = $q.defer();
      ChampionsFactory.getChampions(champion_id)
        .then(function (data) {
          deferred.resolve(data);
          return deferred;
        }, function (reason) {
          deferred.reject(reason)
        })
      return deferred.promise;
    }
}]);
