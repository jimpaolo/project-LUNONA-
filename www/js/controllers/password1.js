angular.module('password1.controller',[])
.controller('password1Ctrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage,$ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			  $scope.password = 'password';
			  $scope.hideShowPassword = function(){
			    if ($scope.password == 'password')
			      $scope.password = 'text';
			    else
			      $scope.password = 'password';
			  };

			
			$scope.data = {
				password: '',
			}

			$scope.Gonext = function(){
				if($scope.data.password==""){
					alert("Enter Password");
					return false;
				}else{
					var getpassword=$scope.data.password;
						console.log(getpassword);
					$localstorage.set("Password", getpassword);	
					$state.go("gender");

				}
				
			}
		
		}catch(err){
			console.log(err.message);
		}
	});
});