/*
 * 
 */

define(['moudelController','zPageView','citylinkage','uploadImg'], function(moduleCtrl,zPageView,citylinkage,uploadImg) {
	moduleCtrl.register.controller('test_Ctrl', ['$scope', '$rootScope', '$http', '$location', 'authservice',
		function($scope, $rootScope, $http, $location, authservice) {			
			var pageView = zPageView.extend({
				onShow:function(){
					$rootScope.headTitle = "1test";			
					new citylinkage().init({
					    contentId: "cityselect"  //接收容器的id
					});
					
					new uploadImg().init({
						fileAreaId:"aa",//显示file控件的区域id
						showNameAreaId: "bb",  //显示文件名称容器id         
						maxUploadCount: 5    //最大上传数量
					});
				}				
			});
		}
	]);
});