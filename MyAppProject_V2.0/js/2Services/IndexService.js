/*
 * index服务
 */
define(["moudelService"], function(moudelService) {

	moudelService.factory("indexservice", ["$rootScope","$location",'restservice','ENV',function($rootScope,$location,restservice,ENV) {
		var indexSvc=function(){
			restservice.call(this,indexSvc,false);
		};
		indexSvc.prototype={
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
			}
		};		
		return function(){
			return new indexSvc();
		}		
	}]);
});