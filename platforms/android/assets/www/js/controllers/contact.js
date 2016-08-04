angular.module('contact.controller',[])
.controller('contactCtrl',function($scope,$ionicPlatform,$ionicHistory,$http,$ionicPopup,$state,$ionicLoading){
	$ionicPlatform.ready(function(){
		try{ 
			$ionicHistory.nextViewOptions({
				disableBack: true
				});
				$ionicHistory.clearHistory();


				$scope.send={};
				$scope.send.name="";
				$scope.send.email="";
				$scope.send.subject="";
				$scope.send.message="";

				$scope.Senddata=function(){
					var usernm=$scope.send.name;
					var emailadd=$scope.send.email;
					var sujct=$scope.send.subject;
					var msg=$scope.send.message;
					if ($scope.send.name=='' || $scope.send.name=='undefined') {
						$ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter User Name'
		           		});
		            	return false;
					}
					if ($scope.send.email=='' || $scope.send.email=='undefined' || $scope.send.email==undefined) {
						$ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Valid Email'
		           		});
		            	return false;
					} 
					if ($scope.send.subject=='' || $scope.send.subject=='undefined') {
						$ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Subject'
		           		});
		            	return false;
					}
					if ($scope.send.message=='' || $scope.send.message=='undefined') {
						$ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Message'
		           		});
		            	return false;
					}else{
			         $ionicLoading.show({template: '<ion-spinner icon="spiral"></ion-spinner>'});
			         var dataset = "http://www.astitch-works.com/old/wp-content/themes/astitchwork/api/api.php?method=7&name="+usernm+"&email="+emailadd+"&subject="+sujct+"&message="+msg;
			         console.log(dataset);
			          $http({
			              method: 'GET',
			              url: dataset
			          	}).
			            success(function(data){
				          	console.log(data);
				          if(data.results=="NO"){
				            console.log("Some Credential");
				            $ionicPopup.alert({
				            	title : 'Error',
				             	template: 'Please Fill All Field Correctly'
				           		});
		                     $ionicLoading.hide();
			            }else{
				          	   $ionicPopup.alert({
				            	title : 'Thankyou',
				             	template: 'Send Successfully'
				           		});	
				           		$scope.send={};	
				           		$ionicLoading.hide();		           
				          	} 				                                           
				           }).error(function(data, status, headers, config) { 
				           $ionicLoading.hide();             
				          })
			         }
				}

		
		}catch(err){
			console.log(err.message);
		}
	});
});