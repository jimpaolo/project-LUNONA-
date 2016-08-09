angular.module('displayname.controller',[])
.controller('displaynameCtrl',function($scope,$ionicPlatform, API, service, $ionicLoading, $localstorage, $ionicHistory, $state){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$scope.checkhide = false;
            $scope.Nexthide = true;
            $scope.hidecheckbutton= function () {
                if($scope.Nexthide==true){
                    $scope.Nexthide = false;
                    $scope.checkhide = true;
                }
            }


			$scope.name = {
				nickname:'',
				language: $localstorage.get('language')
			};


			$scope.Gocheck = function(){
				if($scope.name.nickname==""){
					alert("Enter Nick Name");
					return false;
				}else{
					$ionicLoading.show();
					var loginURL = API.checkLogin($scope.name.nickname, $scope.name.language);
					service.Get(loginURL).then(function (data) {
						if(data.d.OperationResult == "0" || data.d.OperationResult == "0"){
	                  		$scope.getdata=data.d;
	                  		console.log($scope.getdata);
	                  		                 		 
	                  		$ionicLoading.hide();
	                  		$scope.hidecheckbutton();
	                  		$scope.showerroe="";
	                  		
	                  	}else{
	                  		$scope.showerroe=data.d;
	                  		console.log($scope.showerroe);
	                  		$scope.getdata="";
	                  		$ionicLoading.hide();
	                  	} 
					});
				}				
			}

			
			$scope.Gonext=function(){
				$localstorage.set("Nickname",$scope.name.nickname);
      		 	$state.go("country");
			}

			// $scope.choosename=$localstorage.get("LoginName");
			// 	console.log($scope.choosename);

			// $scope.name={};
			// $scope.name.nickname="";


			// $scope.loadnamesugget= function(){
			// 	$ionicLoading.show();
			// 	var namesugg = API.loginnamesuggestions($scope.choosename);
			// 	service.Get(namesugg).then(function (data) {
			// 		console.log(namesugg);
			// 		if(data.d.OperationResult=="1" || data.d.OperationResult==1){
			// 			$scope.getdata = data.d;
			// 			console.log($scope.getdata);
			// 			$scope.showerror="";
			// 		}else{
			// 			$scope.showerror=data.OperationResult;
			// 		}
			// 		$ionicLoading.hide();
			// 	});	
			// }
			// $scope.loadnamesugget();

			

			

		}catch(err){
			console.log(err.message);
		}
	});
});