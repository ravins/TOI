angular.module('app').controller('home', ['$scope', 'API', function($scope, API) {
  var vm = this;
  vm.catagories = {}
  vm.name = "ravins"

  vm.getSubCatagories = function(url) {
    API.getTOIData(url).then(function(subCatagories) {
      debugger
    });
  }

  API.getData('feedurllist.cms',{'catagory':'city'}).then(function(catagories) {
    vm.catagories = catagories;
  });
Sorry for delay (as it's hard to get other work done while in/after JOB), I'm currently working on to make application with TOI API.


}])