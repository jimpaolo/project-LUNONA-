angular.module('login.controller',[])
.controller('loginCtrl',function($scope,$ionicPlatform,$ionicHistory,$http,$ionicPopup,$state,$ionicLoading){
	$ionicPlatform.ready(function(){
		try{ 
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();


			$scope.login=[];
			$scope.login.username="";
			$scope.login.pass="";

			$scope.Login=function(){
	        var userlogin=$scope.login.username;
	        var password=$scope.login.pass;	        
	        
	         if($scope.login.username=='' || $scope.login.username=='undefined') {
	              $ionicPopup.alert({
	            	title : 'Login',
	             	template: 'Please Enter User Name'
	           		});
	            	return false;
	         }
	          if($scope.login.pass=='' || $scope.login.pass=='undefined') {
	              $ionicPopup.alert({
	            	title : 'Login',
	             	template: 'Please Enter Your Password'
	           		});
	            	return false;
	         }
	         
	         else{
	         $ionicLoading.show({template: '<ion-spinner icon="spiral"></ion-spinner>'});
	         var dataset = "http://www.astitch-works.com/old/wp-content/themes/astitchwork/api/api.php?method=4&user_login="+userlogin+"&password="+password;
	         console.log(dataset);
	          $http({
	              method: 'GET',
	              url: dataset
	          }).
		          success(function(data) {
		          	console.log(data);
		          if(data.msg=="Credential Not Mached."){
		            console.log("Some Credential");
		            $ionicPopup.alert({
		            	title : 'Login',
		             	template: 'Enter Valid Username & Password'
		           		});
                     $ionicLoading.hide();
		          }else{

		           $state.go("nav.home");
		          } 
		            $ionicLoading.hide();                               
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