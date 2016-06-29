/*
 * 注册全局的事件监听器
 */
define(['moudelRoute'], function(moudelRoute) {

	moudelRoute.run(["$rootScope", "$state",'$location','indexservice','authservice' ,function($rootScope, $state,$location,indexservice,authservice) {
		
		indexservice.InitEvent();
		
		$rootScope.$on('$stateChangeError', function(event, toState, fromState) {
			
		});
		
		//当路由改变的时候执行
		$rootScope.$on('$stateChangeStart', function(event, toState, fromState) {
			if(authservice.checkAuth(true)){
				console.log("current url : " + $location.absUrl());	
			}			
		});
					
		$rootScope.$on('$stateChangeSuccess', function(event, toState, fromState) {
			
		});
					
		$rootScope.$on('$stateNotFound', function(event, toState, fromState) {
			
		});
		
	}]);
	
});