'use strict';

angular.module('csViewApp.adminView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/adminView', {
            templateUrl: 'adminView/adminView.html',
            controller: 'adminViewController'
        });
}])
.controller('adminViewController', ['$http','$location','$rootScope','$scope','$routeParams','shareDataService','shareConstantService',function ($http,$location,$rootScope,$scope,$routeParams,shareDataService,shareConstantService) {

        $scope.hostUrl=shareConstantService.hostUrl;
        $scope.isAdmin=true;
        if($rootScope.loggedInUserRole==2){

            $scope.isAdmin=true;
            $scope.tag="add";
            getUserList();
            $scope.deleteUser=function(userid){
                $http.delete('http://'+$scope.hostUrl+':8080/login/user/'+userid+'/deleteuser').
                success(function (data, status, headers, config) {
                   getUserList();
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });
            }
            $scope.editUser=function(userid){
                $scope.tag="edit";
                $http.get('http://'+$scope.hostUrl+':8080/login/user/'+userid+'/getuserdetails').
                success(function (data, status, headers, config) {
                    data.userId=userid;
                    shareDataService.set(data);
                    console.log(data);
                    $location.url('/adminTeamCreateView/'+$scope.tag);
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });               
            }
            $scope.activateUser=function(userid){
                $http.put('http://'+$scope.hostUrl+':8080/login/user/'+userid+'/activateuser').
                success(function (data, status, headers, config) {
                     getUserList();
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });
                
               
            }
            $scope.inactivateUser=function(userid){
                $http.put('http://'+$scope.hostUrl+':8080/login/user/'+userid+'/inactivateuser').
                success(function (data, status, headers, config) {
                     getUserList();
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });
                
               
            }
            $scope.logout=function(){
                 $http.get('http://'+$scope.hostUrl+':8080/login/user/logout')
            .success(function (data, status, headers, config) {
               
                    $location.url("/login");
                
                
            })
            .error(function (data, status, headers, config) {
                console.log("error");
            });
            }
            function getUserList(){
                $http.get('http://'+$scope.hostUrl+':8080/login/user/viewuserslist')
            .success(function (data, status, headers, config) {
                $scope.viewUserMap=data;
            })
            .error(function (data, status, headers, config) {
                console.log("error");
            });
            }
        }
        else if($rootScope.loggedInUserRole==1){
            $scope.isSuperAdmin=true;
            $scope.userTitle="Super Admin";
            $scope.userName=$rootScope.userName;
        }
        else if($rootScope.loggedInUserRole==3){
            $scope.isAdmin=false;
            $scope.userTitle="USER";
            $scope.userName=$rootScope.userName;
            $scope.userDataReset=function(){
                if($scope.password1==$scope.password2){
                    $scope.isActive=true;
                }
                else{
                    $scope.isActive=false;
                }
            }
        }
        else{
            $location.url('/login');
        }
        
}]);
