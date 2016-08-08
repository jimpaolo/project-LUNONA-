angular.module('country.controller',[])
.controller('countryCtrl',function($scope,$ionicPlatform,$ionicHistory,$ionicLoading,service,API,$state,$localstorage){
	$ionicPlatform.ready(function(){
		try{ 
			
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$scope.loadcountry= function(){
				$ionicLoading.show();
				var namesugg = API.getcountries();
				service.Get(namesugg).then(function (data) {
					console.log(namesugg);
					if(data.d.OperationResult=="1" || data.d.OperationResult==1){
						$scope.countrylist = data.d.Strings;
						console.log($scope.countrylist);
					}else{
					}
					$ionicLoading.hide();
				});	
			}
			$scope.loadcountry();


			$scope.select={};
			$scope.select.getcountry="";

			$scope.Gonext=function(){
				var countname=$scope.select.getcountry;
				console.log(countname);
				if ($scope.select.getcountry==""){
					alert("Select Country");
				}else{
					$localstorage.set("country_nm",countname);
					$state.go("city");
				}
				
			}
		
		}catch(err){
			console.log(err.message);
		}
	});
});