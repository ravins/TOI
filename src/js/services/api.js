angular.module('app').service('API', ['$http', 'API_URL', function($http, API_URL) {
  function Api(){
    this.currentCatagoryUrl = "";

    this.getData = function(url, options) {
      options = options || {};
      var request = "";
      if(url){
        request += url;
      }
      if(options.catagory){
        request += "?catagory="+options.catagory
      }
      // return promise object
      return $http.get(API_URL+"/"+request)
    }
    this.getTOIData = function(url) {
      return $http.get(url)
    }

    console.log(API_URL)
  }

  return new Api()
}]);