angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'src/js/templates/home.html',
    controller: 'home',
    controllerAs: 'homeCtrl',
  });

  $stateProvider.state('catagory', {
    url: '/catagory/:name',
    views: {
      '':{
          templateUrl: 'src/js/templates/layout.html',
          controller: 'catagory',
          controllerAs: 'catagoryCtrl'
        },
      'sidebar@catagory':{templateUrl: 'src/js/templates/sidebar.html'},
      'content@catagory':{templateUrl: 'src/js/templates/catagory.html'}
    }
  })

}]);