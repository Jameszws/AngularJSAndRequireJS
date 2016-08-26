/*
 * 首页控制器
 */
define(['moudelController', 'zPageView'], function(moduleCtrl, zPageView) {
	moduleCtrl.register.controller("login_Ctrl", ["$rootScope", "$scope", "$location", '$cookieStore', 'authservice', function($rootScope, $scope, $location, $cookieStore, authservice) {
		var pageView = zPageView.extend({

			onShow: function() {
				$rootScope.headTitle = "登陆";
				this.eventHandler();
			},

			eventHandler: function() {
				$scope.login = function() {
					var userInfo = {
						userName: "zws",
						userId: "1",
						token: "sidr$%^879"
					};
					$rootScope.UserInfo = userInfo;					
					Horse.zCookieStorage.setCookie("UserInfo", userInfo, "h1");
					window.location.href="../#/index";
				};
			}
		});
	}]);
});