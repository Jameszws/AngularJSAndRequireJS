define(['moudelRoute'], function(moudelRoute) {
	moudelRoute.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
		function($stateProvider, $locationProvider, $urlRouterProvider) {

			var ctrlPath = "../js/1Controllers/";
			var svcPath = "../js/2Services/";

			$locationProvider.html5Mode(false);
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('login', {
					url: '/login',
					controller: 'login_Ctrl',
					templateUrl: '../view/login.html',
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([ctrlPath + 'loginCtrl'], function() {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				.state('student', {
					url: '/student',
					controller: 'student_Ctrl',
					templateUrl: '../view/student/student.html',
					resolve: {

						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([svcPath + 'StudentService',ctrlPath + 'studentCtrl'], function() {
								deferred.resolve();
							});
							return deferred.promise;
						}]

					}
				})
				.state('test', {
					url: '/test',
					templateUrl: '../view/Test/test.html',
					controller: 'test_Ctrl',
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							require([ctrlPath + 'testCtrl'], function() {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				.state('test2', {
					url: '/test2/:id',
					templateUrl: '../view/Test/test2.html',
					controller: 'test_Ctrl2',
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							require([ctrlPath + 'testCtrl2'], function() {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				.state("index", {
					url: "/",
					controller: "index_Ctrl",
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							require([ctrlPath + 'indexCtrl'], function() {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				.state("index2", {
					url: "/index",
					controller: "index_Ctrl",
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							require([ctrlPath + 'indexCtrl'], function() {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				});

		}
	]);

});