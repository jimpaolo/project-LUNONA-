angular.module('gender.controller',[])
.controller('genderCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage, $ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();


			$scope.select={};
			$scope.select.gender="";


			$scope.Gonext = function(){
				if($scope.select.gender==""){
					alert("Please Select Gender");
					return false;
				}else{
					var gender=$scope.select.gender;
						console.log(gender);
					$localstorage.set("GenderID", gender);	
					$state.go("displayname");

				}				
			}

			

		}catch(err){
			console.log(err.message);
		}
	});
});