
define(['validate','util','popupAlert','popupConfirm','popupLoad'],function(validate,util,popupAlert,popupConfirm,popupLoad){
	
	/*
	 * TODO 说明：alert弹出 五种状态 "error"、"info"、"question"、"warning"、"alert"
	 */
	var popupEnumType = {
		Error: 1,
		Info: 2,
		Question: 3,
		Warning: 4,
		Alert: 5
	};
	/*
	 * TODO Horse 框架 定义 可扩展
	 * (1)version 版本信息控制
	 * (2)validate 验证信息
	 * (3)util 基础操作
	 */	
	Horse=typeof Horse !='undefined' ? Horse :{
		version:"1.0",
		validate:validate,
		util:util,
		alert:new popupAlert(popupEnumType.Alert),
		error:new popupAlert(popupEnumType.Error),
		info:new popupAlert(popupEnumType.Info),
		question:new popupAlert(popupEnumType.Question),
		warning:new popupAlert(popupEnumType.Warning),
		confirm:new popupConfirm(),
		popupLoad:new popupLoad()
	};

	window.Horse = Horse;
	
});