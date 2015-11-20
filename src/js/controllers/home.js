angular.module('app').controller('home', ['$scope', 'API', function($scope, API) {
  var vm = this;
  vm.catagories = {}
  vm.name = "ravins"

  API.getData('feedurllist.cms',{'catagory':'city'}).then(function(catagories) {
    debugger
    vm.catagories = catagories;
    if(!$scope.$$phase) {
      $scope.$apply();
    }

  });
}])