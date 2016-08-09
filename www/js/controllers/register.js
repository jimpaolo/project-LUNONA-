angular.module('register.controller',[])
.controller('registerCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage,$ionicPopup, $ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$scope.Register = {
				email:'',
				language: $localstorage.get('language')
			};


			$scope.Gonext = function(){
				if($scope.Register.email==""){
					alert("Enter Email ");
					return false;
				}else{
					$ionicLoading.show();
					var loginURL = API.checkLogin($scope.Register.email, $scope.Register.language);
					service.Get(loginURL).then(function (data) {
						if(data.d.OperationResult == "1" || data.d.OperationResult == "1" == true){
	                  		$scope.getdata=data.d;
	                  		console.log($scope.getdata);
	                  		$localstorage.set("LoginName",$scope.getdata.DataValue);
	                  		$state.go("password1");
	                  		$ionicLoading.hide();
	                  		
	                  	}else{
	                  		$scope.showerroe=data.d;
	                  		console.log($scope.showerroe);
	                  		$ionicLoading.hide();
	                  	} 
					});	
				

				}
				
			}

		}catch(err){
			console.log(err.message);
		}
	});
});