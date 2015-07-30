'use strict';

/* First login controller responsible for searching sources */

ritoApp.controller('ChampionController', [
  'ChampionsService',
  '$stateParams',
  function (ChampionsService, $stateParams) {

    var self = this;
    self.loading = false;
    self.champion_id = $stateParams.championId;
    self.champion = {};

    self.getChampionDetails = function CC_getChampionDetails (champion_id) {
      //TODO check if integer
      if (champion_id === undefined) {
        champion_id = '';
      }
      self.loading = true;
      ChampionsService.getChampionsData(champion_id)
        .then(function (data) {
          self.champion = data;
          self.loading = false;
          console.log(data);
        }, function (reason) {
          self.loading = false;
        });
    }

    self.getChampionDetails(self.champion_id);

}])
