angular.module('welcome.controller',[])
.controller('welcomeCtrl',function($scope,$ionicPlatform,$localstorage){
	$ionicPlatform.ready(function(){
		try{ 
			$localstorage.set('language', 'EN');
		
		}catch(err){
			console.log(err.message);
		}
	});
});