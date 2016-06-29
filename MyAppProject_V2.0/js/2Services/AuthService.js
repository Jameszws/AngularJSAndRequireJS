/*
 * 身份验证服务
 */
define(["moudelService"],function(moudelService){
	
	moudelService.factory("authservice",function(){
		var authSvc={
			checkAuth:function(userInfo){
				if(userInfo){
					console.log("check result success!!!")
					return true;
				}
				console.log("check result fail!!!")
				return false;
			}
		};
		return authSvc;
	});	
});
