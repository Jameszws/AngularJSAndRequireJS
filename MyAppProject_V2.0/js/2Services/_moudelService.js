/**
 * 建立angular.module
 */
define(['angular'], function (angular) {
    var moduleService = angular.module('myapp.service', []);
    moduleService.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
		moduleService.register = {
			service: $provide.service,
			factory: $provide.factory
		};
	});
    return moduleService;
});
