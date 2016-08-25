/*
 * student服务
 */
define(["moudelService"], function(moudelService) {
	
	moudelService.register.factory("studentsvc", ['$q', '$http', '$location', 'authservice','ENV','restservice',function($q, $http, $location, authservice,ENV,restservice) {
		var studentSvc=function(){			
			restservice.call(this,studentSvc,true);
		};
		
		studentSvc.prototype = {
			getstudentbyid: function() {
				this.url = ENV._baseurl + ENV._api.studentcourse;
				ENV._params={ 'id': '1'};
				return this.get();
			},
			getstudents: function() {				
				this.url = ENV._baseurl + ENV._api.students;
				ENV._params={ 'id': '123'};
				return this.get();
			},
			GetQQChannelInfo:function(){
				this.url="http://ws.union.open.uat.qa.nt.ctripcorp.com/amservice/api/amcommonsoaservice/json/GetQQChannelInfo";
				ENV._params={"UID":'shouq_test_idqq1'};
				return this.post();
			}
		};
		
		return function(){
			return new studentSvc();
		}
	}]);
});