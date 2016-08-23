/*
 * 首页控制器
 */
define(['moudelController', 'zPageView'], function(moduleCtrl, zPageView) {
	moduleCtrl.register.controller("index_Ctrl", ["$rootScope", "$scope", "$location", function($rootScope, $scope, $location) {
		var pageView = zPageView.extend({
			onShow: function() {
				$rootScope.headTitle = "首页";
				Horse.confirm.init({
					title: "234",
					content: "jadfjk",
					isShowIcon: false, //是否显示图标  默认显示
					callback: function(){
						
					},
					cancelCallBack:function(){
						
					}
				});
			}
		});
	}]);
});