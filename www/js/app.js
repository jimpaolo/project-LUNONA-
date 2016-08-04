// Ionic Starter App
angular.module('Lunona', ['ionic', 'welcome.controller','nav.controller','password.controller','country.controller','selectlaunguage.controller','login.controller','username.controller'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  } 
}])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })
  .state('nav', {
    url: '/nav',
    templateUrl: 'templates/nav.html',
    controller: 'navCtrl'
  })
  .state('password', {
    url: '/password',
    templateUrl: 'templates/password.html',
    controller: 'passwordCtrl'
  })
  .state('selectlaunguage', {
    url: '/selectlaunguage',
    templateUrl: 'templates/selectlaunguage.html',
    controller: 'selectlaunguageCtrl'
  })
  .state('username', {
    url: '/username',
    templateUrl: 'templates/username.html',
    controller: 'usernameCtrl'
  })
  .state('login', {
    url: '/login',
    cache:false,
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('country', {
    url: '/country',
    cache:false,
    templateUrl: 'templates/country.html',
    controller: 'countryCtrl'
  });

  var isLogin = localStorage.getItem('isLogin');
  var isRemember = localStorage.getItem('isRemember');
  if(isRemember==true || isRemember=="true"){
    if(isLogin=="1" || isLogin==1){
      $urlRouterProvider.otherwise('/username');
    }
  }else{
    $urlRouterProvider.otherwise('/welcome');
  }
  
});
