/*
 * 首页控制器
 */
define(['moudelController'], function(moduleCtrl) {	
	moduleCtrl.register.controller("index_Ctrl", ["$rootScope", "$scope", "$location",
		function($rootScope, $scope, $location) {
			$rootScope.headTitle = "首页";
		}
	]);
});