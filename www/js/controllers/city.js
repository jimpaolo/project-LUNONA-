angular.module('city.controller',[])
.controller('cityCtrl',function($scope,$ionicPlatform,$ionicHistory){
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