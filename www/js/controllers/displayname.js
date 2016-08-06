angular.module('displayname.controller',[])
.controller('displaynameCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage, $ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$scope.choosename=$localstorage.get("LoginName");
				console.log($scope.choosename);


			$scope.loadnamesugget= function(){
				$ionicLoading.show();
				var namesugg = API.loginnamesuggestions();
				service.Get(namesugg).then(function (data) {
					console.log(namesugg);
					if(data.d.OperationResult=="1" || data.d.OperationResult==1){
						$scope.getdata = data.d;
						console.log($scope.getdata);
						$scope.showerror="";
					}else{
						$scope.showerror=data.OperationResult;
					}
					$ionicLoading.hide();
				});	
			}
			$scope.loadnamesugget();

			

		}catch(err){
			console.log(err.message);
		}
	});
});