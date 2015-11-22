angular.module('app').controller('news', ['API', '$scope', function(API, $scope){
  console.log('catagory controller'+ API.currentCatagoryUrl);
  var vm = this;
  vm.newsItems = [];
  vm.result_not_found = false;

  API.getTOIData(API.currentCatagoryUrl).then(function(news){
    $('#global-loader').hide();

    if(news.query.results){
      vm.newsItems =  news.query.results.json.NewsItem;
    }
    else{
      vm.result_not_found = true;
    }
    $scope.$apply();
  });

}]);