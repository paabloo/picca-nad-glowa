'use strict';

/* First login controller responsible for searching sources */

ritoApp.controller('ChampionsController', [
  'ChampionsService',
  function (ChampionsService) {

    var self = this;
    self.champ = {};
    self.loading = false;
    self.champNameFilter = '';

    self.checkInput = function CSC_checkInput () {
      // console.log(self.champNameFilter);
    }

    self.checkForReturnKey = function CSC_checkForReturnKey (keyUpEvent) {
      if (keyUpEvent.keyCode === 13) {
        self.getChampionsList(self.champion_id);
      }
    };

    self.getChampionsList = function CSC_getChampionsList (champion_id) {
      //TODO check if integer
      if (champion_id === undefined) {
        champion_id = '';
      }
      self.loading = true;
      ChampionsService.getChampionsData(champion_id)
        .then(function (data) {
          self.champ = data;
          self.loading = false;
        }, function (reason) {
          self.loading = false;
        });
    }

    self.getChampionsList('');

}])
