// 配置模块，控制不同平台的兼容性
angular.module('config', [])
  .config(function($ionicConfigProvider){

    $ionicConfigProvider.platform.android.tabs.position("buttom");
    $ionicConfigProvider.platform.ios.tabs.position("buttom");

  })


