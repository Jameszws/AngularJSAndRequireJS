/*
 * 
 */
define(['moudelController','zPageView'], function(moduleCtrl,zPageView) {
	moduleCtrl.register.controller('test_Ctrl2', ['$scope', '$rootScope', '$location',  function($scope, $rootScope, $location) {
		var pageView = zPageView.extend({
			onShow:function(){
				$rootScope.headTitle = "2test";	
				
				var date=new Date();
    	  		var minDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    	  
				Horse.ui.datepicker.init({
					id: "testdp", //显示时间div的id
					mindate: minDate, //最小日期（可以为空）
					maxdate: "" //最大日期（可以为空）
				});
			}
		});
	}]);
});