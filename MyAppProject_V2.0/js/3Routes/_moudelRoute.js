/**
 * 建立moudelRoute
 */
define(['angular'], function (angular) {
	//确定依赖关系
    var moudelRoute = angular.module('myapp.route', ["ui.router", 'myapp.service','myapp.controller']);    
    return moudelRoute;
});
