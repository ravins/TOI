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
    vm.catagories = catagories;
  });

}]);