// 分类页面路由模块
angular.module('category.route', ['category.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'www/areas/category/category.html',
            controller: 'CategoryCtrl'
          }
        }
      })
  });
