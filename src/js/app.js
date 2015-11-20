angular.module('app', ['ui.router']);

// Run phase
angular.module('app').run(['$http', function($http){


  $http.defaults.headers.common.Accept = 'application/json';

  $http.defaults.headers.get = {'X-Mashape-Key': 'geSCWZkl7qmshvzcNYECQpmSeepVp1LqLqdjsnDAY28pLt9wBl'}

}]);

// config phase
angular.module('app').config(['$httpProvider', function($httpProvider){
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];

  // global loader for all $http calls
  $httpProvider.interceptors.push('myInterceptor')

}]);

angular.module('app').factory('myInterceptor', function(){
  return {
    request: function(config){
      // $('#global-loader').show()
      return config;
    },
    response: function(response) {
      // $('#global-loader').hide()
      return response;
    },
  }
});


angular.module('app').value('API_URL', 'https://devru-times-of-india.p.mashape.com/feeds');
angular.module('app').constant('API_KEY', 'geSCWZkl7qmshvzcNYECQpmSeepVp1LqLqdjsnDAY28pLt9wBl');