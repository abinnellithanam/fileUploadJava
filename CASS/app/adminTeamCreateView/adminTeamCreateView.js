'use strict';

angular.module('csViewApp.adminTeamCreateView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/adminTeamCreateView/:tag', {
            templateUrl: 'adminTeamCreateView/adminTeamCreateView.html',
            controller: 'adminTeamCreateViewController'
        });
}])

    .controller('adminTeamCreateViewController', ['$http','$location', '$scope','$routeParams','shareDataService','shareConstantService',function ($http,$location,$scope,$routeParams,shareDataService,shareConstantService) {

        $scope.hostUrl=shareConstantService.hostUrl;
        
        if($routeParams.tag=="edit"){
            $scope.tag=true;
            // console.info($routeParams.tag);
            var dataMap=shareDataService.get();
            $scope.userId=dataMap.userId;
            $scope.email=dataMap.email;
            $scope.fname=dataMap.fname;
            $scope.lname=dataMap.lname;
            $scope.password=dataMap.password;
        }
        else{
             $scope.tag=false;
            // console.info($routeParams.tag);
        }

        $scope.addusers=function(){
            var parameter = JSON.stringify({
                email: $scope.email,
                fname: $scope.fname,
                lname: $scope.lname,
                password: $scope.password
            });
            $http.post('http://'+$scope.hostUrl+':8080/login/user/addnewuser', parameter).
            success(function (data, status, headers, config) {
                $location.url("/adminView");
            }).
            error(function (data, status, headers, config) {
                console.log("error");
            });

        }
        $scope.updateusers=function(){
            var parameter = JSON.stringify({
                email: $scope.email,
                fname: $scope.fname,
                lname: $scope.lname,
                password: $scope.password
            });
            $http.put('http://'+$scope.hostUrl+':8080/login/user/'+ $scope.userId+'/edituser', parameter).
            success(function (data, status, headers, config) {
                $location.url("/adminView");
            }).
            error(function (data, status, headers, config) {
                console.log("error");
            });

        }

        
}]);
