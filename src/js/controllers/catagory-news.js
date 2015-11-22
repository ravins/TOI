angular.module('app').controller('catagoryNews', ['API', '$stateParams', 'localStorageService','$scope', function(API, $stateParams, localStorageService, $scope){
  console.log('catagory controller'+ API.currentCatagoryUrl);
  var vm = this;

  vm.newsItems = [];
  vm.result_not_found = false;
  vm.totalPages = 0;
  vm.perPage = 20;
  vm.pageNo = 0;

  // get catagory secitonUrl from localstorage
  var catagories = localStorageService.get("catagories"),
    catagoryUrl = catagories[$stateParams.name];

  API.getTOIData(catagoryUrl).then(function(news){
    $('#global-loader').hide();
    var results = news.query.results;
    if(results){
      var data = results.json;
      vm.totalPages = data.Pagination.TotalPages;
      vm.pageNo = data.Pagination.PageNo;

        vm.newsItems =  news.query.results.json.NewsItem;
    }
    else{
      vm.result_not_found = true;
    }
    $scope.$apply();
  });

}]);