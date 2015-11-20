angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'src/js/templates/home.html',
    controller: 'home',
    controllerAs: 'homeCtrl',
  });

}]);