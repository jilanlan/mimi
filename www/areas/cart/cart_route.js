// 购物车页路由模块
angular.module('cart.route', ['cart.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.cart', {
        url: '/cart',
        views: {
          'tab-cart': {
            templateUrl: 'www/areas/cart/cart.html',
            controller: 'CartCtrl'
          }
        }
      })
  });
