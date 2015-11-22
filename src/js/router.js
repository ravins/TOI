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
          controller: 'catagoryNews',
          controllerAs: 'catagoryNews',
        },
      'sidebar@catagory':{templateUrl: 'src/js/templates/sidebar.html'},
      'content@catagory':{templateUrl: 'src/js/templates/catagory-news.html'}
    }
  });

  $stateProvider.state('news', {
    url: '/news/:catagory/:id',
    views: {
      '':{
          templateUrl: 'src/js/templates/layout.html',
          controller: 'news',
          controllerAs: 'newsCtrl',
        },
      'sidebar@news':{templateUrl: 'src/js/templates/sidebar.html'},
      'content@news':{templateUrl: 'src/js/templates/news.html'}
    }
  });

}]);