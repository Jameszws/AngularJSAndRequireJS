/*
 * index服务
 */
define(["moudelService"], function(moudelService) {

	moudelService.factory("indexservice", function($rootScope,$location) {
		var indexSvc = {
			InitEvent: function() {
				$rootScope.GoToIndex=function(){
					$location.path("/index");					
				};
				
				$rootScope.GoToTest1 = function() {
					$location.path("/test");					
				};

				$rootScope.GoToTest2 = function() {
					$location.path("/test2/3");
				};
				
				$rootScope.GoToStudent=function(){
					$location.path("/student");
				};
				
				$rootScope.exit=function(){
					$rootScope.UserInfo = null;					
					Horse.util.delCookie("UserInfo");
					window.location.href="../#/login";
				};
			},
			setPageTitle:function(){
				
			}
		};
		return indexSvc;
	});
});