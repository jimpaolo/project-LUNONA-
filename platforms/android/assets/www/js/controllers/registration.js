angular.module('registration.controller',[])
.controller('registrationCtrl',function($scope,$ionicPlatform,$ionicHistory,$http,$ionicPopup,$state,$ionicLoading){
	$ionicPlatform.ready(function(){
		try{ 
			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			// $scope.datevalue1;

			$scope.data=[];
			$scope.data.fname="";
			$scope.data.lname="";
			$scope.data.email="";
			$scope.data.username="";
			$scope.data.pass="";
			$scope.data.confpass="";
			$scope.data.phone="";
			$scope.data.add="";
			$scope.data.postcode="";
			$scope.data.gender="";
			$scope.data.datevalue1="";
			$scope.data.nric="";

		$scope.Register=function(){
	        var f_name=$scope.data.fname;
	        var l_name=$scope.data.lname;
	        var emailadd=$scope.data.email;
	        var userlogin=$scope.data.username;
	        var password=$scope.data.pass;
	        var phoneno=$scope.data.phone;
	        var address=$scope.data.add;
	        var postalcode=$scope.data.postcode;
	        var gendr=$scope.data.gender;
	        var date=$scope.data.datevalue1;
	        var nriccode=$scope.data.nric;


		        if($scope.data.username=='' || $scope.data.username=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter User Name'
		           		});
		            	return false;
		         } 
		         if($scope.data.pass=='' || $scope.data.pass=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Your Password'
		           		});
		            	return false;
		         }
		         if($scope.data.confpass=='' || $scope.data.confpass=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Confirm Password'
		           		});
		            	return false;
		         }
		         if($scope.data.confpass!=$scope.data.pass) {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Confirm Password Not Match'
		           		});
		            	return false;
		         }       
		        
		         if($scope.data.fname=='' || $scope.data.fname=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter First Name'
		           		});
		            	return false;
		         }
		         if($scope.data.lname=='' || $scope.data.lname=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Last Name'
		           		});
		            	return false;
		         }
		         if($scope.data.email=='' || $scope.data.email=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Email'
		           		});
		            	return false;
		         }
			          var reg = new RegExp('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
		              var email = $scope.data.email;
	              if (!reg.test(email)) {
	                   $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Valid Email'
		           		});
		                return false;
		          }          
		          
		         if($scope.data.phone=='' || $scope.data.phone=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Your Phone'
		           		});
		            	return false;
		         }
			         var reg = new RegExp('^[0-9]{1,7}$');
		              var phoneno = $scope.data.phone;
		          if (!reg.test(phoneno)) {
		               $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Numeric Phone number'
		           		});
		                return false;
		          }
		          if($scope.data.add=='' || $scope.data.add=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Your Address'
		           		});
		            	return false;
		         }

		          if($scope.data.nric=='' || $scope.data.nric=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter NRIC / FIN'
		           		});
		            	return false;
		         }
		          var reg = new RegExp('^[0-9]{1,7}$');
		              var nriccodeno = $scope.data.nric;
	              if (!reg.test(nriccodeno)) {
	                   $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Numeric Nric Code'
		           		});
		                return false;
		          }
		         if($scope.data.postcode=='' || $scope.data.postcode=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Postal Code'
		           		});
		            	return false;
		         }
			         var reg = new RegExp('^[0-9]{1,7}$');
		              var postcodeno = $scope.data.postcode;
	              if (!reg.test(postcodeno)) {
	                   $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Enter Numeric Postal Code'
		           		});
		                return false;
		          }
		         if($scope.data.gender=='' || $scope.data.gender=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Select Gender'
		           		});
		            	return false;
		         }
		         if($scope.data.datevalue1=='' || $scope.data.datevalue1=='undefined') {
		              $ionicPopup.alert({
		            	title : 'Required Feild',
		             	template: 'Please Select Date of Birth'
		           		});
		            	return false;
		         }
	         
	         else{

	         $ionicLoading.show({template: '<ion-spinner icon="spiral"></ion-spinner>'});
	         var dataset = "http://www.astitch-works.com/old/wp-content/themes/astitchwork/api/api.php?method=6&user_login="+userlogin+"&email="+emailadd+"&password="+password+"&gender="+gendr+"&phone="+phoneno+"&address="+address+"&first_name="+f_name+"&last_name="+l_name+"&birth_date="+date+"&postal_code="+postalcode+"&nric="+nriccode;
	         console.log(dataset);
	          $http({
	              method: 'GET',
	              url: dataset
	          }).
	          success(function(data) {
	          if(data.msg=="Email Already Exist."){
		            var alertPopup = $ionicPopup.alert({
		             template: 'This Email Already Exist'
		           });
		             $ionicLoading.hide(); 
	          }else{
	            $state.go("login");
	             $ionicLoading.hide(); 
	          } 
	            $ionicLoading.hide();                               
	           }).error(function(data, status, headers, config) {              
	          })
	        }
	    }

		
		}catch(err){
			console.log(err.message);
		}
	});
});