/*
 * 
 */
define(['moudelController'], function(moduleCtrl) {
	moduleCtrl.register.controller('test_Ctrl2', ['$scope', '$rootScope', '$location',  function($scope, $rootScope, $location) {

		$rootScope.headTitle ="test2";	
		
		console.log($location.absUrl())
	}]);
});