/*
 * 学生信息控制器
 */
define(['moudelController', 'studentService'], function(moudelController) {

	moudelController.register.controller("student_Ctrl", ["$rootScope", "$scope", "studentsvc", 'ENV',
		function($rootScope, $scope, studentsvc, ENV) {
			var pageOp = {
				//无需身份验证
				initRender: function() {
					$rootScope.headTitle = "学生信息";
				},
				//需要身份验证
				show: function() {					
					$scope.showCourse = false;
					$scope.showStudent = false;
					this.showMyInfoclick();
					this.showStudentInfoclick();
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
					var current = this;
					//获取我的课程信息
					var student=studentsvc(ENV._api.studentcourse);
					student.getstudentbyid().then(function(result) {
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
					var student=studentsvc(ENV._api.students);
					student.getstudents().then(function(result) {
						$scope.students = result;
						$scope.showCourse = false;
						$scope.showStudent = true;
					}, function(error) {

					}, function(progress) {

					});
				}
			};
			pageOp.initRender();
			pageOp.show();
		}
	]);
});