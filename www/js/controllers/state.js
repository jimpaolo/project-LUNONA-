angular.module('state.controller',[])
.controller('stateCtrl',function($scope,$ionicPlatform,$ionicHistory,$ionicLoading,service,API,$state,$localstorage){
	$ionicPlatform.ready(function(){
		try{ 
			
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$scope.countnm=$localstorage.get("country_nm");
			console.log($scope.countnm);


			$scope.loaddata= function(){
				$ionicLoading.show();
				var namesugg = API.getstates($scope.countnm);
				service.Get(namesugg).then(function (data) {
					console.log(namesugg);
					if(data.d.OperationResult=="1" || data.d.OperationResult==1){
						$scope.statelist = data.d.Strings;
						console.log($scope.statelist);
						$ionicLoading.hide();
					}else{
					}
					$ionicLoading.hide();
				});	
			}
			$scope.loaddata();


			$scope.select={};
			$scope.select.state="";

			$scope.Gonext=function(){
				var statename=$scope.select.state;
				console.log(statename);
				if ($scope.select.state==""){
					alert("Select State");
					return false;
				}else{
					$localstorage.set("Region",statename);
					$state.go("city");
				}
				
			}
		
		}catch(err){
			console.log(err.message);
		}
	});
});