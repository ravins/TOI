angular.module('app').controller('news', ['API', function(API){
  console.log('catagory controller'+ API.currentCatagoryUrl);
  var vm = this;
  vm.newsItems = [];

  API.getTOIData(API.currentCatagoryUrl).then(function(news){
    if(news.query.results){
      vm.newsItems =  news.query.results.json.NewsItem;
    }
  });

}]);