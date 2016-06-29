/**
 * 入口文件
 * 2016-06-12 afternoon
 */
var config = {
	init: function() {
		this.requireConfigInit();
		this.loadMustRequireModule();		
	},
	
	requireConfigInit: function() {
		require.config({
			baseUrl: "../js",
			paths: {
				"jquery": "libs/jquery203",
				"angular": "libs/angular.min",
				"angular-ui-router": "libs/angular-ui-router",
				//"angular-route": "libs/angular-route.min",
				"angular-sanitize": "libs/angular-sanitize.min",
				//"oclazyload": "libs/oclazyload/dist/ocLazyLoad",					
				//"oclazyload": "libs/oclazyload/dist/ocLazyLoad.require",
				
				"moudelRoute": "3Routes/_moudelRoute",
				"moudelService":"2Services/_moudelService",
				"moudelController":"1Controllers/_moudelController",

				"authservice":"2Services/AuthService",
				"indexservice":"2Services/IndexService",
				"studentService":"2Services/StudentService",
				
				"appRoute": "3Routes/appRoute",
				"appRun": "3Routes/appRun",
				
				"commonJs": "commonJs/commonOp"
			},
			shim: {
				'angular': {
					exports: 'angular'
				},
				'angular-ui-router': {
					deps: ["angular"],
					exports: 'angular-ui-router'
				},
				'angular-sanitize': {
					deps: ["angular"],
					exports: 'angular-sanitize'
				},
				'oclazyload': {
					deps: ["angular"],
					exports: 'oclazyload'
				}
			}
		});
	},

	loadMustRequireModule: function() {		
		require(["jquery",'angular', 'angular-sanitize', 'angular-ui-router',
				 'commonJs',
				 //'oclazyload',
				 'moudelRoute','moudelService','moudelController',
				 'appRoute','appRun',
				 'authservice','indexservice'], function($,angular) {
			$(function(){
				angular.bootstrap(document, ["myapp.route"]);
			});
		});
	}
};

config.init();