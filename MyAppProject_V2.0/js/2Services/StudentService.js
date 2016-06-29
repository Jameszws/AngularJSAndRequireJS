/*
 * student服务
 */
define(["moudelService"], function(moudelService) {

	moudelService.register.factory("studentsvc", ['$q','$http','$location',function($q,$http,$location) {
		var studentSvc = {
			getstudentbyid: function() {
				var deferred = $q.defer();
		        var promise = deferred.promise;		        
				$http({
					url:"../jsondata/studentcourse.json",
					method:"GET",
					params:{
						'id':'123'
					}
				}).success(function(data,header,config,status){
					 deferred.resolve(data);
				}).error(function(data,header,config,status){
					 deferred.reject(data);
				});
				return promise;
			},
			getstudents: function() {
				var deferred = $q.defer();
		        var promise = deferred.promise;		        
				$http({
					url:"../jsondata/students.json",
					method:"GET",
					params:{
						'id':'123'
					}
				}).success(function(data,header,config,status){
					 deferred.resolve(data);
				}).error(function(data,header,config,status){
					 deferred.reject(data);
				});
				return promise;
			}
		};
		return studentSvc;
	}]);
});