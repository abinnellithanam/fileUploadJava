'use strict';

angular.module('csViewApp.adminAccountView', ['ngRoute', 'angularCSS'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/adminAccountView', {
            templateUrl: 'adminAccountView/adminAccountView.html',
            controller: 'adminAccountViewController',
            css: 'adminAccountView/adminAccountView.css'
        });
}])
    .controller('adminAccountViewController', ['$http', '$location', '$rootScope', '$scope', '$routeParams', 'shareDataService', 'shareConstantService', function ($http, $location, $rootScope, $scope, $routeParams, shareDataService, shareConstantService) {
        console.log("adminAccountViewController");
        $scope.hostUrl = shareConstantService.hostUrl;
        $scope.isAdmin = true;



        $http.get('http://' + $scope.hostUrl + ':8080/login/account/basicInfo').
        success(function (data, status, headers, config) {
            $scope.accountsInfo = data.accountBasicInfoList;
            //////////////////////////////////////////////////
            $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/doctypes/get').
            success(function (data, status, headers, config) {
                $rootScope.docTypes = data.docTypes;
                $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/docgroups/get').
                success(function (data, status, headers, config) {
                    $rootScope.docGroups = data.docGroups;
                    $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/finYear/get').
                    success(function (data, status, headers, config) {
                        $rootScope.financialYears = data.financialYear;
                    }).
                    error(function (data, status, headers, config) {
                        console.log("error");
                    });
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });
            }).
            error(function (data, status, headers, config) {
                console.log("error");
            });

            /////////////////////////////////////////////////////
        }).
        error(function (data, status, headers, config) {
            console.log("error");
        });
        //        $scope.addNewAccount = function () {
        //            console.log("addNewAccount Click");
        //            $location.url("/user_page")
        //        }
        $scope.accountView = function (data) {
            console.log("accountView Click");
            console.log(data);
            $location.url("/adminAccountPageView/" + data);
        }
        $scope.accountEdit = function (data) {
            console.log("accountEdit Click");
            console.log("data received : " + data);
            $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/basicInfo/' + data).
            success(function (data, status, headers, config) {
                //                $scope.accountDetails = data.accountDetails;
                shareDataService.set(data.accountDetails);
                console.log(data.accountDetails);
                $location.url("/adminAccountPageAddView/edit");

            }).
            error(function (data, status, headers, config) {
                console.log("error");
            });

        }
        $scope.addNewAccount = function () {
            $location.url("/adminAccountPageAddView/add");
        }
}]);
