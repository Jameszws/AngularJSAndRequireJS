/*
 * 学生信息控制器
 */
define(['moudelController','studentService'], function(moudelController) {
	
	moudelController.register.controller("student_Ctrl", ["$rootScope", "$scope", "studentsvc",
		function($rootScope, $scope ,studentsvc) {
			var pageOp={
				//无需身份验证
				initRender:function(){
					$rootScope.headTitle = "学生信息";
				},
				//需要身份验证
				show:function(){					
					$scope.showCourse=false;
					$scope.showStudent=false;
					this.showMyInfoclick();
					this.showStudentInfoclick();
					this.getstudentbyid();
					this.getstudents();
				},
				showMyInfoclick:function(){
					$scope.showMyInfo=function(){
						$scope.showCourse=true;
						$scope.showStudent=false;
					};
				},
				showStudentInfoclick:function(){					
					$scope.showStudentInfo=function(){
						$scope.showCourse=false;
						$scope.showStudent=true;
					};					
				},
				getstudentbyid:function(){
					//获取我的课程信息
					studentsvc.getstudentbyid().then(function(result){				
						$scope.name=result.name;
						$scope.sex=result.sex;
						$scope.age=result.age;
						$scope.courses=result.mycourse;
					},function(error){
						
					},function(progress){
						
					});
				},
				getstudents:function(){
					//获取课程
					studentsvc.getstudents().then(function(result){				
						$scope.students=result;				
					},function(error){
						
					},function(progress){
						
					});
				}
			};				
			pageOp.initRender();
			pageOp.show();
		}
	]);
});