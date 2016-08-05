angular.module('selectlaunguage.controller',[])
.controller('selectlaunguageCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage,$ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 
			
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$scope.langauges = [];

			$scope.loadLanguages = function(){
				$ionicLoading.show();
				var languageURL = API.getLanguage();
				service.Get(languageURL).then(function (data) {
					if(data.OperationResult=="1"){
						$scope.langauges = data.SiteLanguages;
					}else{
						alert(data.DataValue);
					}
					$ionicLoading.hide();
				});	
			}
			$scope.loadLanguages();

			$scope.selectValue = function(lang){
				$localstorage.set('language', lang);
				$state.go('login');
			}
		
		}catch(err){
			console.log(err.message);
		}
	});
});