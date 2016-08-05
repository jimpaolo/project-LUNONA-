angular.module('displayname.controller',[])
.controller('displaynameCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage, $ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			

		}catch(err){
			console.log(err.message);
		}
	});
});