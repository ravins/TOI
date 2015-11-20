angular.module('app', ['ui.router']);

angular.module('app').run(['$http', function($http){
  $http.defaults.headers.common.Accept = 'application/json';
  $http.defaults.headers.get = {'X-Mashape-Key': 'geSCWZkl7qmshvzcNYECQpmSeepVp1LqLqdjsnDAY28pLt9wBl'}

}]);
angular.module('app').value('API_URL', 'https://devru-times-of-india.p.mashape.com/feeds');
angular.module('app').constant('API_KEY', 'geSCWZkl7qmshvzcNYECQpmSeepVp1LqLqdjsnDAY28pLt9wBl');