// tab路由模块
angular.module('tab.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'www/areas/tab/tabs.html'
      })
  });
