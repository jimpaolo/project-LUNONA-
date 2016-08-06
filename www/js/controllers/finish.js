angular.module('finish.controller',[])
.controller('finishCtrl',function($scope,$ionicPlatform,$ionicHistory){
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