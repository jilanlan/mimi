// 引导页路由模块
angular.module('home.route', ['home.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'www/areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
  });
