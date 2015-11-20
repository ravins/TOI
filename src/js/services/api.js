angular.module('app').service('API', ['$http', 'API_URL', function($http, API_URL) {
  function Api(){
    this.getData = function(url, options) {
      options = options || {};
      debugger
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
    console.log(API_URL)
  }

  return new Api()
}]);