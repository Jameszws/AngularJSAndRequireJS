/*
 * TODO 注册全局的事件监听器
 */
define(['moudelRoute'], function(moudelRoute) {

	moudelRoute.run(["$rootScope", "$state", '$location', '$log', 'indexservice', 'authservice', function($rootScope, $state, $location, $log, indexservice, authservice) {

		indexservice.InitEvent();

		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			$log.error('An error occurred while changing states: ' + error);

			$log.debug('event', event);
			$log.debug('toState', toState);
			$log.debug('toParams', toParams);
			$log.debug('fromState', fromState);
			$log.debug('fromParams', fromParams);
		});

		/*
		 * TODO 当路由改变的时候执行
		 */
		$rootScope.$on('$stateChangeStart', function(event, toState, fromState) {
			authservice.checkAuth(event,function(ret) {
				if (ret) {
					if ($location.absUrl().toLowerCase().indexOf("login") >= 0) {
						event.preventDefault(); 
						window.location.href = "../#/index"; //跳转到首页	
						return;
					}
					console.log("current url : " + $location.absUrl());
					return;
				}
				console.log("login state is empty");
				if ($location.absUrl().toLowerCase().indexOf("login") >= 0) {					
					return;
				}
				event.preventDefault(); // 取消默认跳转行为
				window.location.href = "../#/login"; //跳转到登录界面	
			});	
		});
		/*
		 * TODO 路由状态改变成功
		 */
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			/*
			$log.debug('successfully changed states');
            
			$log.debug('event', event);
			$log.debug('toState', toState);
			$log.debug('toParams', toParams);
			$log.debug('fromState', fromState);
			$log.debug('fromParams', fromParams);
			*/
		});

		$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
			$log.error('The request state was not found: ' + unfoundState);
		});

	}]);

});