angular.module('app').service('API', ['$http', 'API_URL', 'YQL', function($http, API_URL, YQL) {
  function Api(){
    this.currentCatagoryUrl = "";
    this.catagories = {};

    createselectQuery = function(url, options) {
      var options = options || {},
        page="";

      if(options.page){
        page += "&page="+options.page;
      }
      var query =  YQL+'?q='+encodeURIComponent('select * from json where url="'+url+page+'"')+'&format=json';
      return query;
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

    this.getTOIData = function(url, options) {
      $('#global-loader').show()

      var request = "";
      if(url){
        request = createselectQuery(url, options);
      }
      return $.getJSON(request);
    };
  }
  return new Api();
}]);