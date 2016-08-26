/*
 * TODO rest 基础服务
 */
define(["moudelService"], function(moudelService) {

	moudelService.constant('ENV', {
		'_timeout': 5000,
		'_baseurl': '../jsondata/',
		'_type': "POST",
		'_params': {},
		'_api': {
			studentcourse: "studentcourse.json",
			students: "students.json"
		}
	});

	moudelService.factory("authservice", function($rootScope, $location, $cookieStore) {
			/*
			 *	TODO 基础服务：身份验证服务
			 * 	 checkAuth:异步验证，需要传入回调函数
			 *   checkAuthSync:同步验证
			 */
			var authSvc = {
				checkAuth: function(event, callback) {					
					var userInfo = Horse.zCookieStorage.getCookie("UserInfo");
					$rootScope.UserInfo = userInfo;
					if (Horse.validate.objIsNull(userInfo) || Horse.validate.isNull(userInfo.token)) {
						if ($location.absUrl().toLowerCase().indexOf("login") >= 0) {
							return;
						}
						!Horse.validate.objIsNull(event) && event.preventDefault();
						Horse.alert.init({
							title: "登录失败",
							content: "您目前为非登陆状态，请登录~",
							callback: function() {
								Horse.validate.isFunction(callback) && callback(false);
							},
							cancelCallBack: function() {
								Horse.validate.isFunction(callback) && callback(false);
							}
						});
						return;
					}
					Horse.validate.isFunction(callback) && callback(true);
					return;
				},
				checkAuthSync: function() {					
					var userInfo = Horse.zCookieStorage.getCookie("UserInfo");
					$rootScope.UserInfo = userInfo;
					if (Horse.validate.objIsNull(userInfo) || Horse.validate.isNull(userInfo.token)) {
						return false;
					}
					return true;
				}
			};
			return authSvc;
		})
		/*
		 *	TODO 基础服务：rest服务
		 * 	@params 说明： 
		 * 	url：请求地址（如果是内部服务，通过配置ENV参数实现，如果是外部服务，直接赋值）
		 * 	另：提供get，post请求，以后可扩展
		 */
		.factory("restservice", ['$rootScope', '$location', '$q', '$http', 'ENV', 'authservice', function($rootScope, $location, $q, $http, ENV, authservice) {
			function restservice(svc, isNeedCheckAuth) {
				Horse.validate.isFunction(svc) && Horse.util.extend(svc.prototype, restservice.prototype);
				var current = this;
				//isNeedCheckAuth ：服务是否需要判断登陆态    
				//	true : 需要    
				//	false ：不需要
				if (isNeedCheckAuth === true) {
					authservice.checkAuth(null, function(ret) {
						if (ret) {
							return;
						}
						window.location.href = "../#/login";
					});
				}
			}
			restservice.prototype = {
				get: function() {
					var deferred = $q.defer(); //声明延后执行
					var promise = deferred.promise;
					//判断登陆态
					if (!authservice.checkAuthSync()) {
						Horse.alert.init({
							title: "登录失败",
							content: "您目前为非登陆状态，请登录~",
							callback: function() {
								window.location.href = "../#/login";
							},
							cancelCallBack: function() {
								window.location.href = "../#/login";
							}
						});
						return promise;
					}
					if (Horse.validate.isNull(this.url)) {
						return promise;
					}
					$http({
						method: 'GET',
						url: this.url,
						params: ENV._params,
						timeout: ENV._timeout
					}).success(function(data, header, config, status) {
						deferred.resolve(data); //声明执行成功
					}).error(function(data, header, config, status) {
						deferred.reject(data); //声明执行失败
					});
					return promise; //返回承诺，返回获取数据的API
				},
				post: function() {
					var deferred = $q.defer(); //声明延后执行
					var promise = deferred.promise;
					//判断登陆态
					if (!authservice.checkAuthSync()) {
						Horse.alert.init({
							title: "登录失败",
							content: "您目前为非登陆状态，请登录~",
							callback: function() {
								window.location.href = "../#/login";
							},
							cancelCallBack: function() {
								window.location.href = "../#/login";
							}
						});
						return promise;
					}
					if (Horse.validate.isNull(this.url)) {
						return promise;
					}
					$http({
						method: 'POST',
						url: this.url,
						params: ENV._params,
						timeout: ENV._timeout
					}).success(function(data, header, config, status) {
						deferred.resolve(data); //声明执行成功
					}).error(function(data, header, config, status) {
						deferred.reject(data); //声明执行失败
					});
					return promise; //返回承诺，返回获取数据的API
				}
			};
			return restservice;
		}]);
});