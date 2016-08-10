angular.module('city.controller',[])
.controller('cityCtrl',function($scope,$ionicPlatform,$ionicHistory,API, service, $ionicLoading,$ionicPopup, $localstorage,$state){
	$ionicPlatform.ready(function(){
		try{ 
			
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

		$scope.countnm=$localstorage.get("country_nm");
			console.log($scope.countnm);
		// $scope.state=$localstorage.get("Region");
		// 	console.log($scope.state);


			$scope.loaddata= function(){
				$ionicLoading.show();
				var namesugg = API.getcity($scope.countnm);
				service.Get(namesugg).then(function (data) {
					console.log(namesugg);
					if(data.d.OperationResult=="1" || data.d.OperationResult==1){
						$scope.citylist = data.d.Strings;
						console.log($scope.citylist);
						$ionicLoading.hide();
					}else{
					}
					$ionicLoading.hide();
				});	
			}
			$scope.loaddata();


			$scope.select={};
			$scope.select.city="";

			$scope.Gonext=function(){
				var cityname=$scope.select.city;
				console.log(cityname);
				if ($scope.select.city==""){
					$ionicPopup.alert({
		            title : 'Warning',
		            template: 'Please Select City'
		            });
					return false;
				}else{
					$localstorage.set("City",cityname);
					$state.go("birthdate");
				}
				
			}
		
		}catch(err){
			console.log(err.message);
		}
	});
});