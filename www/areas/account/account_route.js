// 购物车页路由模块
angular.module('account.route', ['account.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'www/areas/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      })
  });
