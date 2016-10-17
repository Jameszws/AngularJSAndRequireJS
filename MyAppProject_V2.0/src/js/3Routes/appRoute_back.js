define(['moudelRoute'], function(moudelRoute) {

	moudelRoute.config(["$ocLazyLoadProvider", function($ocLazyLoadProvider) {

		$ocLazyLoadProvider.config({			
			events: true,
			jsLoader: requirejs, //使用requirejs去加载文件
			debug: false
		});

	}]);
	moudelRoute.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        var lazyDeferred;
        /**
         * 路由切换时调用
         * @param param.files 懒加载文件数组
         * @param tpl 子模块view视图
         * @param module 子模块名
         */
        function resovleDep(param,tpl,module){
            var resolves = {
                loadMyCtrl: ['$ocLazyLoad', '$templateCache', '$q', function($ocLazyLoad,$templateCache,$q) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : module,
                        //cache: false,
                        files: param.files
                    }).then(function() {
                        lazyDeferred.resolve($templateCache.get(tpl));
                    });
                }]
            };
            return resolves;
        };
 
        $urlRouterProvider.otherwise('/index');
        
        var ctrlPath = "../js/1Controllers/";
        //路由配置
        $stateProvider
            .state('test', {
                url:'/test',
                templateProvider: function() { 
                	return lazyDeferred.promise; 
                },
                controller: 'test_Ctrl',
                resolve : resovleDep({files:[ctrlPath + 'testCtrl.js']}, '../view/Test/test.html', 'test')
            })
            .state('test2', {                
                url: '/test2',
                templateProvider: function() { 
                	return lazyDeferred.promise; 
                },
                controller: 'test_Ctrl2',
                resolve : resovleDep({files:[ctrlPath + 'testCtrl2.js']}, null, 'test2')
            })
            .state('index', {                
                url: '/index',
                templateProvider: function() { 
                	return lazyDeferred.promise; 
                },
                controller: 'index_Ctrl',
                resolve : resovleDep({files:[ctrlPath + 'indexCtrl.js']}, null, 'index')
            });
    }]);
    
    /*
	moudelRoute.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {

		var ctrlPath = "../js/1Controllers/";		
		
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('test', {
				url: '/test',
				templateUrl: '../view/Test/test.html',
				controller: 'testCtrl',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load([ctrlPath + 'testCtrl.js']);
					}]
				}
			})
			.state('test2', {
				url: '/test2',
				templateUrl: '../view/Test/test2.html',
				controller: 'testCtrl',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load([ctrlPath + 'testCtrl2.js']);
					}]
				}
			})
			.state("index", {
				url: "/",
				controller: "index_Ctrl",
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load([ctrlPath + 'indexCtrl.js']);
					}]
				}
			})
			.state("index2", {
				url: "/index",
				controller: "index_Ctrl",
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load([ctrlPath + 'indexCtrl.js']);
					}]
				}
			});

	}]);
	*/
});