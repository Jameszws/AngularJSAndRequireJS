/*
 * 
 */

define(['moudelController','zPageView'], function(moduleCtrl,zPageView) {
	moduleCtrl.register.controller('test_Ctrl', ['$scope', '$rootScope', '$http', '$location', 'authservice',
		function($scope, $rootScope, $http, $location, authservice) {			
			var pageView = zPageView.extend({
				onShow:function(){
					$rootScope.headTitle = "1test";			
				}				
			});
		}
	]);
});