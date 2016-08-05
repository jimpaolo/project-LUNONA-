angular.module('register.controller',[])
.controller('registerCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage, $ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			// $scope.data = {
			// 	login:'',
			// 	language: $localstorage.get('language')
			// };

			// $scope.doLogin = function(){
			// 	if($scope.data.login==""){
			// 		alert("Username is required.");
			// 		return false;
			// 	}
			// 	$ionicLoading.show();
			// 	var loginURL = API.checkLogin($scope.data.login, $scope.data.language);
			// 	service.Get(loginURL).then(function (data) {
			// 		if(data.d.OperationResult=="1"){
			// 			$localstorage.set('username', $scope.data.login);
			// 			$state.go('password');
			// 		}else{
			// 			alert(data.d.DataValue);
			// 		}
			// 		$ionicLoading.hide();
			// 	});	
			// }

		}catch(err){
			console.log(err.message);
		}
	});
});