/**
 *  TODO 入口文件
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
				"text":"libs/require-text",
				"jquery": "libs/jquery203",
				"angular": "libs/angular.min",
				"angular-ui-router": "libs/angular-ui-router",
				//"angular-route": "libs/angular-route.min",
				"angular-sanitize": "libs/angular-sanitize.min",
				"angular-cookies": "libs/angular-cookies.min",
				//"oclazyload": "libs/oclazyload/dist/ocLazyLoad",					
				//"oclazyload": "libs/oclazyload/dist/ocLazyLoad.require",

				"moudelRoute": "4Modules/MoudelRoute",
				"moudelService": "4Modules/MoudelService",
				"moudelController": "4Modules/MoudelController",

				"restservice": "2Services/_RestService",	//基础服务
				"indexservice": "2Services/IndexService",
				"studentService": "2Services/StudentService",				
				
				"appRoute": "3Routes/appRoute",
				"appRun": "3Routes/appRun",

				"util": "Util/util",
				"validate": "Util/validate",
				
				/***************(Horse配置 begin)********************/
				
				'zPageView': "Horse/app/z.page.view",
				'Horse': "Horse/horse.seed",
				'zUiPopuplayerCommon': "Horse/ui/z.ui.popuplayer/z.ui.popuplayer._common",
				'popupAlert': "Horse/ui/z.ui.popuplayer/z.ui.popuplayer.alert",
				'popupConfirm': "Horse/ui/z.ui.popuplayer/z.ui.popuplayer.confirm",
				'popupLoad': "Horse/ui/z.ui.popuplayer/z.ui.popuplayer.load",
				'datepicker': "Horse/ui/z.ui.datepicker/z.ui.datepicker",
				'citydata':'Horse/ui/z.ui.citylinkage/z.ui.citydata',
				'citylinkage':'Horse/ui/z.ui.citylinkage/z.ui.citylinkage',
				'uploadImg':'Horse/ui/z.ui.uploadImg/z.ui.uploadImg',
				'virtualKey':'Horse/ui/z.ui.virtualkey/z.ui.virtualkey',
				'virtualKeyTempl':'Horse/ui/z.ui.virtualkey/html/z.ui.virtualkey.html',
				
				'securitycode':"Horse/ui/z.ui.securitycode/z.ui.securitycode.new",
				'securitycodeTempl':"Horse/ui/z.ui.securitycode/html/z.ui.securitycode.new.html",
				
				'zCookieStorage':"Horse/data/storage/z.cookie.storage",
				'zLocalStorage':"Horse/data/storage/z.local.storage",
				'zSessionStorage':"Horse/data/storage/z.session.storage"
				
				/***************(Horse配置 end)********************/
			},
			map: {
				'*': {
					'css': 'libs/require-css'
				}
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
				'angular-cookies': {
					deps: ["angular"],
					exports: 'angular-cookies'
				},
				'oclazyload': {
					deps: ["angular"],
					exports: 'oclazyload'
				},
				'zUiPopuplayerCommon':{
					deps: [						
						'css!../js/Horse/ui/z.ui.popuplayer/css/z.ui.popuplayer.css'
					]
				},
				'datepicker':{
					deps:[
						'css!../js/Horse/ui/z.ui.datepicker/css/datepicker'
					]
				},
				'citylinkage':{
					deps:[
						'css!../js/Horse/ui/z.ui.citylinkage/css/citylinkage'
					]
				},
				'uploadImg':{
					deps:[
						'css!../js/Horse/ui/z.ui.uploadImg/css/uploadImg'
					]
				},
				'virtualKey':{
					deps:[
						'css!../js/Horse/ui/z.ui.virtualkey/css/virtualkey'
					]
				},
				'securitycode':{
					deps:[
						"css!../js/Horse/ui/z.ui.securitycode/css/securitycode.new"
					]
				}
			}
		});
	},

	loadMustRequireModule: function() {
		require(["jquery", 'angular', 'angular-sanitize', 'angular-cookies', 'angular-ui-router',
			'moudelRoute', 'moudelService', 'moudelController',
			'appRoute', 'appRun',
			'restservice', 'indexservice','Horse', 'zPageView'
		], function($, angular) {
			$(function() {
				angular.bootstrap(document, ["myapp.route"]);
			});
		});
	}
};

config.init();