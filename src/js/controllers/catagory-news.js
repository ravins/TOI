angular.module('app').controller('catagoryNews', ['API', '$stateParams', 'localStorageService','$scope', function(API, $stateParams, localStorageService, $scope){
  console.log('catagory controller'+ API.currentCatagoryUrl);
  var catagoryNews = this;

  catagoryNews.newsItems = [];
  catagoryNews.result_not_found = false;
  catagoryNews.totalPages = 0;
  catagoryNews.perPage = 20;
  catagoryNews.current = 1;

  // get catagory secitonUrl from localstorage
  var catagories = localStorageService.get("catagories"),
    catagoryUrl = catagories[$stateParams.name];
    catagoryNews.catagory = $stateParams.name;

    function fetchNews() {
      catagoryNews.newsItems = [];
      API.getTOIData(catagoryUrl, {page: catagoryNews.current}).then(function(news){
        $('#global-loader').hide();
        var results = news.query.results;
        if(results){
          var data = results.json;
          catagoryNews.totalPages = data.Pagination.TotalPages;
          catagoryNews.newsItems =  news.query.results.json.NewsItem;
        }
        else{
          fetchNews();
          // catagoryNews.result_not_found = true;
        }
        $scope.$apply();
      });
    }

  fetchNews();

  // check if navigation changes
  $scope.$watch('catagoryNews.current', function(newVal, oldVal){
    if(newVal !== oldVal){
      fetchNews();
    }
  });

}]);