angular.module('app').controller('home', ['$scope', 'API', function($scope, API) {
  var vm = this;
  vm.catagories = {}
  vm.name = "ravins"

  vm.getSubCatagories = function(url) {
    API.getTOIData(url).then(function(news) {
      vm.newsItems = news.query.results.json.NewsItem
      debugger
    });
  }

  API.getData('feedurllist.cms',{'catagory':'city'}).then(function(catagories) {
    vm.catagories = catagories;
  });

}])