angular.module('app').controller('home', ['$scope', '$state', '$filter', 'API', 'localStorageService', function($scope, $state, $filter, API, localStorageService) {
  var vm = this;
  vm.catagories = {};

  vm.getSubCatagories = function(newsUrl, catagory) {
    API.currentCatagoryUrl = newsUrl;
    var catagoryName = $filter('formatTxt')(catagory);
    $state.transitionTo('catagory', {name: catagoryName});
  };

  // remove all catagories from localstorage and fetch all
  if(localStorageService.length()){
    localStorageService.remove('catagories');
  }
  API.getData('feedurllist.cms',{'catagory':'city'}).then(function(catagories) {
    angular.forEach(catagories.data.Item, function(catagory){
      var catagoryName = $filter('formatTxt')(catagory.name);
      API.catagories[catagoryName] = catagory.defaulturl;
    });

    // save catagory:sectionUrl to localStorage, so we have quick reference of sectionUrl for a catagory
    localStorageService.set("catagories", API.catagories );

    vm.catagories = catagories;
  });

}]);