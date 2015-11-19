angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
    $stateProvider.state('/home',{
      url: '',
      views:{
        "":{ templateUrl: './templates/layout.html', controller: 'home' },
        "sidebar@home": {tempalteUrl: './templates/sidebar.html'},
        "content@home": {templateUrl: './templates/home.html'}
      }
    })
})