/*
 * 学生信息控制器
 */
define(['moudelController','zPageView'], function(moudelController,zPageView) {

	moudelController.register.controller("student_Ctrl", ["$rootScope", "$scope", "studentsvc", 'ENV',
		function($rootScope, $scope, studentsvc, ENV) {
			var page=zPageView.extend({
				//无需身份验证
				onInitView: function() {
					$rootScope.headTitle = "学生信息";
				},
				//需要身份验证
				onShow: function() {					
					$scope.showCourse = false;
					$scope.showStudent = false;
					this.getPageParams();
					this.showMyInfoclick();
					this.showStudentInfoclick();
					this.GetQQChannelInfo();
				},
				showMyInfoclick: function() {
					var current = this;
					$scope.showMyInfo = function() {
						current.getstudentbyid();						
					};
				},
				showStudentInfoclick: function() {
					var current = this;
					$scope.showStudentInfo = function() {
						current.getstudents();
					};
				},
				
				getstudentbyid: function() {					
					//获取我的课程信息
					this.studentsvc.getstudentbyid().then(function(result) {
						$scope.name = result.name;
						$scope.sex = result.sex;
						$scope.age = result.age;
						$scope.courses = result.mycourse;
						$scope.showCourse = true;
						$scope.showStudent = false;
					}, function(error) {
						console.log(err);
					}, function(progress) {
						console.log(progress);
					});
				},
				getstudents: function() {
					//获取课程
					this.studentsvc.getstudents().then(function(result) {
						$scope.students = result;
						$scope.showCourse = false;
						$scope.showStudent = true;
					}, function(error) {

					}, function(progress) {

					});
				},
				GetQQChannelInfo:function(){
					var current=this;
					$scope.GetQQChannelInfo=function(){						
						current.studentsvc.GetQQChannelInfo().then(function(ret){
							console.log(ret);
						},function(error){
							console.log(error);
						},function(progress){
							console.log(progress);
						});
					};					
				},
				getPageParams:function(){
					this.studentsvc=studentsvc();
				}
			});
		}
	]);
});