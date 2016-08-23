/*
 * student服务
 */
define(["moudelService"], function(moudelService) {
	
	moudelService.register.factory("studentsvc", ['$q', '$http', '$location', 'authservice','ENV','restservice',function($q, $http, $location, authservice,ENV,restservice) {
		var studentSvc=function(apiName){			
			restservice.call(this,ENV,apiName);
		}
		
		studentSvc.prototype = {
			getstudentbyid: function() {				
				ENV._type="GET";
				ENV._params={ 'id': '123'};
				return this.get();
			},
			getstudents: function() {
				ENV._type="GET";
				ENV._params={ 'id': '123'};				
				return this.get();				
			}
		};
		
		Horse.util.extend(studentSvc.prototype,restservice.prototype);
		
		return function(apiName){
			return new studentSvc(apiName);
		} 
		
	}]);
});