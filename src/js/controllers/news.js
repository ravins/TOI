angular.module('app').controller('news', ['API', '$stateParams', 'localStorageService','$scope', function(API, $stateParams, localStorageService, $scope){
  console.log('catagory controller'+ API.currentCatagoryUrl);
  var vm = this,

    // get catagory secitonUrl from localstorage
    catagories = localStorageService.get("catagories"),
    catagoryUrl = catagories[$stateParams.catagory],
    newsId = $stateParams.id;


  function getNews() {
    vm.newsItems = [];
    API.getTOIData(catagoryUrl).then(function(news){
      $('#global-loader').hide();
      var results = news.query.results;
      if(results){
        var data = results.json;
        angular.forEach(news.query.results.json.NewsItem, function(item) {
            if(newsId === item.NewsItemId){
              vm.news = item;
            }
        });
      }
      else{
        vm.result_not_found = true;
      }
      $scope.$apply();
    });
  }

  getNews();

}]);