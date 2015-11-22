angular.module('app').controller('home', ['$scope', '$state', '$filter', 'API', function($scope, $state, $filter, API) {
  var vm = this;
  vm.catagories = {};

  vm.getSubCatagories = function(newsUrl, catagory) {
    API.currentCatagoryUrl = newsUrl;
    var catagoryName = $filter('formatTxt')(catagory);
    $state.transitionTo('catagory', {name: catagoryName});
    debugger;
  };

  API.getData('feedurllist.cms',{'catagory':'city'}).then(function(catagories) {
    angular.forEach(catagories.Item, function(catagory){
      var catagoryName = $filter('formatTxt')(catagory);

      API.catagories[catagoryName] = API.catagories.sectionurl
      debugger
    });

    vm.catagories = catagories;
  });

}]);