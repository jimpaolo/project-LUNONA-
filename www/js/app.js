// Ionic Starter App
// var airlines = [{"fs":"LCI","iata":"LF","icao":"LCI","name":"Lao Central Airlines ","active":true},{"fs":"TGU","iata":"5U","icao":"TGU","name":"TAG","active":true},{"fs":"BT","iata":"BT","icao":"BTI","name":"Air Baltic","active":true},{"fs":"9J","iata":"9J","icao":"DAN","name":"Dana Airlines","active":true},{"fs":"2O","iata":"2O","icao":"RNE","name":"Island Air Service","active":true},{"fs":"NPT","icao":"NPT","name":"Atlantic Airlines","active":true},{"fs":"C8","iata":"C8","icao":"ICV","name":"Cargolux Italia","active":true},{"fs":"FK","iata":"FK","icao":"WTA","name":"Africa West","active":true},{"fs":"8K","iata":"8K","icao":"EVS","name":"EVAS Air Charters","active":true},{"fs":"W8","iata":"W8","icao":"CJT","name":"Cargojet","active":true},{"fs":"JBW","iata":"3J","icao":"JBW","name":"Jubba Airways (Kenya)","active":true},{"fs":"TNU","iata":"M8","icao":"TNU","name":"TransNusa","active":true},{"fs":"HCC","iata":"HC","icao":"HCC","name":"Holidays Czech Airlines","active":true},{"fs":"APJ","iata":"MM","icao":"APJ","name":"Peach Aviation","active":true},{"fs":"TUY","iata":"L4","icao":"TUY","name":"LTA","active":true},{"fs":"LAE","iata":"L7","icao":"LAE","name":"LANCO","active":true},{"fs":"L5*","iata":"L5","icao":"LTR","name":"Lufttransport","active":true},{"fs":"QA","iata":"QA","icao":"CIM","name":"Cimber","active":true},{"fs":"KBZ","iata":"K7","icao":"KBZ","name":"Air KBZ","active":true},{"fs":"L2","iata":"L2","icao":"LYC","name":"Lynden Air Cargo","active":true},{"fs":"MPK","iata":"I6","icao":"MPK","name":"Air Indus","active":true},{"fs":"CAO","icao":"CAO","name":"Air China Cargo ","active":true},{"fs":"BEK","iata":"Z9","icao":"BEK","name":"Bek Air","active":true},{"fs":"IAE","iata":"IO","icao":"IAE","name":"IrAero","active":true},{"fs":"GL*","iata":"GL","name":"Airglow Aviation Services","active":true},{"fs":"ATN","iata":"8C","icao":"ATN","name":"ATI","active":true},{"fs":"GU","iata":"GU","icao":"GUG","name":"Aviateca Guatemala","active":true},{"fs":"GHY","icao":"GHY","name":"German Sky Airlines ","active":true},{"fs":"SS","iata":"SS","icao":"CRL","name":"Corsair","active":true},{"fs":"XK","iata":"XK","icao":"CCM","name":"Air Corsica","active":true},{"fs":"W9*","iata":"W9","icao":"JAB","name":"Air Bagan","active":true},{"fs":"Z8*","iata":"Z8","icao":"AZN","name":"Amaszonas","active":true},{"fs":"D2","iata":"D2","icao":"SSF","name":"Severstal Aircompany","active":true},{"fs":"SNC","iata":"2Q","icao":"SNC","name":"Air Cargo Carriers","active":true},{"fs":"PST","iata":"7P","icao":"PST","name":"Air Panama","active":true},{"fs":"VV","iata":"VV","icao":"AEW","name":"Aerosvit Airlines","active":true},{"fs":"UJ","iata":"UJ","icao":"LMU","name":"AlMasria","active":true},{"fs":"9U","iata":"9U","icao":"MLD","name":"Air Moldova","active":true},{"fs":"NF","iata":"NF","icao":"AVN","name":"Air Vanuatu","phoneNumber":"678 238 48","active":true},{"fs":"NJS","iata":"NC","icao":"NJS","name":"Cobham Aviation","active":true}];

// airlines = airlines.sort(function(a, b) {

//   var airlineA = a.name.toLowerCase();
//   var airlineB = b.name.toLowerCase();

//   if(airlineA > airlineB) return 1;
//   if(airlineA < airlineB) return -1;
//   return 0;
// });

// console.log(airlines);
angular.module('Lunona', ['ionic','ngCordova','ion-pickers','pascalprecht.translate', 'welcome.controller','nav.controller','password.controller','password1.controller','country.controller','selectlaunguage.controller','login.controller','username.controller','register.controller','gender.controller','displayname.controller','city.controller','birthdate.controller','finish.controller' ,'state.controller','city1.controller'])

.config(function($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider) {
     for(lang in translations){
          $translateProvider.translations(lang, translations[lang]);
      }
     $translateProvider.preferredLanguage("EN");
     $translateProvider.fallbackLanguage("EN");


 })


.run(function($ionicPlatform, $rootScope, $translate, $location) {

  $ionicPlatform.ready(function() {

    var langauge = localStorage.getItem('language');
    $translate.use(langauge).then(function(data) {
    }, function(error) {
        console.log("ERROR -> " + error);
    });

    $ionicPlatform.registerBackButtonAction(function () {
        var hashvalue = $location.url();
        if(hashvalue=="/welcome" || hashvalue=="/register"){
            navigator.app.exitApp();
        } else {
            navigator.app.backHistory();
        }
    }, 100);


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

  });
})
.factory('FlightDataService', function($q, $timeout) {

    var searchAirlines = function(searchFilter) {
         
        console.log('Searching airlines for ' + searchFilter);

        var deferred = $q.defer();

      var matches = airlines.filter( function(airline) {
        if(airline.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
      })

        $timeout( function(){
        
           deferred.resolve( matches );

        }, 100);

        return deferred.promise;

    };

    return {

        searchAirlines : searchAirlines

    }
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
    cache:false,
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })
  .state('nav', {
    cache:false,
    url: '/nav',
    templateUrl: 'templates/nav.html',
    controller: 'navCtrl'
  })
  .state('password', {
    cache:false,
    url: '/password',
    templateUrl: 'templates/password.html',
    controller: 'passwordCtrl'
  })
  .state('password1', {
    cache:false,
    url: '/password1',
    templateUrl: 'templates/password1.html',
    controller: 'password1Ctrl'
  })
  .state('selectlaunguage', {
    cache:false,
    url: '/selectlaunguage',
    templateUrl: 'templates/selectlaunguage.html',
    controller: 'selectlaunguageCtrl'
  })
  .state('username', {
    cache:false,
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

  .state('register', {
    url: '/register',
    cache:false,
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })
  .state('country', {
    url: '/country',
    cache:false,
    templateUrl: 'templates/country.html',
    controller: 'countryCtrl'
  })
  .state('gender', {
    url: '/gender',
    cache:false,
    templateUrl: 'templates/gender.html',
    controller: 'genderCtrl'
  })

  .state('displayname', {
    url: '/displayname',
    cache:false,
    templateUrl: 'templates/displayname.html',
    controller: 'displaynameCtrl'
  })

  .state('city', {
    url: '/city',
    cache:false,
    templateUrl: 'templates/city.html',
    controller: 'cityCtrl'
  })
  .state('birthdate', {
    url: '/birthdate',
    cache:false,
    templateUrl: 'templates/birthdate.html',
    controller: 'birthdateCtrl'
  })

  .state('finish', {
    url: '/finish',
    cache:false,
    templateUrl: 'templates/finish.html',
    controller: 'finishCtrl'
  })
  .state('state', {
    url: '/state',
    cache:false,
    templateUrl: 'templates/state.html',
    controller: 'stateCtrl'
  })
   .state('city1', {
    url: '/city1',
    cache:false,
    templateUrl: 'templates/city1.html',
    controller: 'city1Ctrl'
  })
  ;

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
