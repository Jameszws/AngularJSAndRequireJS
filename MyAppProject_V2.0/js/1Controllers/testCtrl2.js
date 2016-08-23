/*
 * 
 */
define(['moudelController','zPageView'], function(moduleCtrl,zPageView) {
	moduleCtrl.register.controller('test_Ctrl2', ['$scope', '$rootScope', '$location',  function($scope, $rootScope, $location) {
		var pageView = zPageView.extend({
			onShow:function(){
				$rootScope.headTitle = "2test";			
			}
		});
	}]);
});