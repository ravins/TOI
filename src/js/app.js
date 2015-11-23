angular.module('app', ['ui.router', 'LocalStorageModule']);

// Run phase
angular.module('app').run(['$http', function($http){

  delete $http.defaults.headers.common['X-Requested-With'];
  $http.defaults.headers.common.Accept = 'application/json';
  $http.defaults.headers = {'Access-Control-Allow-Origin' : '*'};

  $http.defaults.headers.get = {'X-Mashape-Key': 'geSCWZkl7qmshvzcNYECQpmSeepVp1LqLqdjsnDAY28pLt9wBl'};

}]);

// config phase
angular.module('app').config(['$httpProvider', function($httpProvider){
  // global loader for all $http calls
  $httpProvider.interceptors.push('myInterceptor');

}]);
angular.module('app').filter('formatTxt',function(){
  return function(str) {
    return str.replace(/\s/g, '');
  };

});

angular.module('app').factory('myInterceptor', function(){
  return {
    request: function(config){
      $('#global-loader').show();
      return config;
    },
    response: function(response) {
      if(response.data.Item){
        $('#global-loader').hide();
      }
      return response;
    },
  };
});


angular.module('app').value('API_URL', 'https://devru-times-of-india.p.mashape.com/feeds');
angular.module('app').value('YQL', 'https://query.yahooapis.com/v1/public/yql');
angular.module('app').constant('API_KEY', 'geSCWZkl7qmshvzcNYECQpmSeepVp1LqLqdjsnDAY28pLt9wBl');