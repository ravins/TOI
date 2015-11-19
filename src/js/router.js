angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', {
    url: '/home',
    views:{
      "":{ templateUrl: 'src/js/templates/layout.html', controller: 'home' },
      "sidebar@home": {templateUrl: 'src/js/templates/sidebar.html'},
      "content@home": {templateUrl: 'src/js/templates/home.html'}
    }
  });

}]);