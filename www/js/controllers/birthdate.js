angular.module('birthdate.controller',[])
.controller('birthdateCtrl',function($scope,$ionicPlatform,$ionicHistory,$ionicPopup){
	$ionicPlatform.ready(function(){
		try{ 


			
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();



			// $scope.showAlert = function() {
			//    $ionicPopup.show({
			// 	  template: "<select  class='select_box' ng-model='data.onsetexp'><option value="">Select</option><option value='1'>1</option><option value='2'>2</option></select>",
			// 	  title: 'WHAT DAY YOU WERE BORN',
			// 	  subTitle: '',
			// 	  scope: $scope,
			// 	  buttons: [
			// 	   { text: 'Annuler' },
			// 	   {
			// 	     text: '<b>Save</b>',
			// 	     type: 'button-positive',
			// 	     onTap: function() { console.log('...') }
			// 	   }
			// 	  ]
			// 	});
			// }
			$scope.showAlert = function() {
			  $scope.data = {};

			  // An elaborate, custom popup
			  var myPopup = $ionicPopup.show({
			    template: '<style>.popup { width:1000px; border-radius: 30px !important;}</style><select  class="select_box" ng-model="data.onsetexp"><option value="">Select</option><option value="1">1</option><option value="2">2</option></select>',
			    title: 'Enter Wi-Fi Password',
			    subTitle: 'Please use normal things',
			    scope: $scope,
			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.data.wifi) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			            return $scope.data.wifi;
			          }
			        }
			      }
			    ]
			  });

			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			  });
			    
			};

			$scope.showAlert1 = function() {
			  $scope.data = {};

			  // An elaborate, custom popup
			  var myPopup = $ionicPopup.show({
			    template: '<style>.popup { width:1000px; border-radius: 30px !important;}</style><select  class="select_box" ng-model="data.onsetexp"><option value="">Select</option><option value="1">1</option><option value="2">2</option></select>',
			    title: 'Enter Wi-Fi Password',
			    subTitle: 'Please use normal things',
			    scope: $scope,
			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.data.wifi) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			            return $scope.data.wifi;
			          }
			        }
			      }
			    ]
			  });

			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			  });
			    
			};
			$scope.showAlert2 = function() {
			  $scope.data = {};

			  // An elaborate, custom popup
			  var myPopup = $ionicPopup.show({
			    template: '<style>.popup { width:1000px; border-radius: 30px !important;}</style><select  class="select_box" ng-model="data.onsetexp"><option value="">Select</option><option value="1">1</option><option value="2">2</option></select>',
			    title: 'Enter Wi-Fi Password',
			    subTitle: 'Please use normal things',
			    scope: $scope,
			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.data.wifi) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			            return $scope.data.wifi;
			          }
			        }
			      }
			    ]
			  });

			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			  });
			    
			};
		}catch(err){
			console.log(err.message);
		}
	});
});