angular.module('app').service('API', ['$http', 'API_URL', 'YQL', function($http, API_URL, YQL) {
  function Api(){
    this.currentCatagoryUrl = "";
    this.catagories = {};

    createselectQuery = function(url) {
      return YQL+'?q='+encodeURIComponent('select * from json where url="'+url+'"')+'&format=json';
    };

    this.getData = function(url, options) {
      options = options || {};
      var request = "";
      if(url){
        request += url;
      }
      if(options.catagory){
        request += "?catagory="+options.catagory;
      }
      // return promise object
      return $http.get(API_URL+"/"+request);
    };

    this.getTOIData = function(url) {
      $('#global-loader').show()

      var request = "";
      if(url){
        request = createselectQuery(url);
      }
      return $.getJSON(request);
    };
  }
  return new Api();
}]);