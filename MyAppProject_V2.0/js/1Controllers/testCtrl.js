/*
 * 
 */

define(['moudelController'], function(moduleCtrl) {
	moduleCtrl.register.controller('test_Ctrl', ['$scope', '$rootScope', '$http', '$location', 'authservice',
		function($scope, $rootScope, $http, $location, authservice) {
			$rootScope.headTitle = "test";			
		}
	]);
});