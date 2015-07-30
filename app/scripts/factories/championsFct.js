'use strict';

ritoApp.factory('ChampionsFactory', [
  '$http',
  '$q',
  'EnvironmentService',
  function ($http, $q, Env) {

    var getChampions = function CF_getChampions (champion_id) {
      var champion_params = "";
      if (champion_id) {
        champion_params = "champData=all&"
      }
      var deferred = $q.defer();
      $http({
        method: 'get',
        url: Env.domainName + '/static-data/' + Env.serverLocalisation + '/v1.2/champion/' + champion_id + '?' + champion_params + 'api_key=' + Env.apiKey,
        cache: true
      })
        .success(function (data, status) {
          deferred.resolve(data);
          return data;
        })
        .error(function (data, status, headers, config) {
          console.log(data);
          console.log(status);
          console.log(headers);
          console.log(config);
          console.error('ChampionsFactory error', data);
          deferred.reject(data);
        })
      return deferred.promise;
    }

    return {
      getChampions: getChampions
    }

}]);
