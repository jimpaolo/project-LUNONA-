angular.module('password.controller',[])
.controller('passwordCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage, $state){
	$ionicPlatform.ready(function(){
		try{ 
			
			$scope.data = {
				email: $localstorage.get('username'),
				password: '',
				isRemember: false,
				language: $localstorage.get('language')
			}

			$scope.doLogin = function(){

				if($scope.data.password==""){
					alert("Password is required.");
					return false;
				}
				var loginURL = API.doLogin();
				var dataset = {
					"LoginName": $scope.data.email, 
					"Password": $scope.data.password, 
					"LanguageISO": $scope.data.language
				}
				$ionicLoading.show();
				service.Post(loginURL, dataset).then(function (data) {
					if(data.d.OperationResult=="0" || data.d.OperationResult==0){
						alert(data.d.DataValue);
					}else{
						
						$localstorage.set('isLogin', '1');
						$localstorage.set('isRemember', $scope.data.isRemember);
						$localstorage.set('token', data.d.Token);
						$localstorage.set('loginname', data.d.LoginName);
						$localstorage.set('ProfileID', data.d.ProfileID);
						$localstorage.set('GenderId', data.d.GenderId);
						$localstorage.set('Email', data.d.Email);
						$localstorage.set('City', data.d.City);
						$localstorage.set('Region', data.d.Region);
						$localstorage.set('Country', data.d.Country);
						$localstorage.set('Zip', data.d.Zip);
						$localstorage.set('AvatarUrl', data.d.AvatarUrl);
						$localstorage.set('LanguageISO', data.d.LanguageISO);

						$state.go('username');

					}
					$ionicLoading.hide();
				});	
			}
		
		}catch(err){
			console.log(err.message);
		}
	});
});