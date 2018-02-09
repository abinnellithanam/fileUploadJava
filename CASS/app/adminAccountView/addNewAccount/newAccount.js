'use strict';

angular.module('csViewApp.adminAccountView.adminAccountAddModule', ['ngRoute', 'angularCSS', '720kb.datepicker', 'ngTable'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/adminAccountPageAddView/:tag', {
            templateUrl: 'adminAccountView/addNewAccount/newAccount.html',
            controller: 'adminAccountPageAddController',
            css: 'adminAccountView/addNewAccount/newAccount.css'
        });
    }])
    .controller('adminAccountPageAddController', ['$scope', 'NgTableParams', '$routeParams', '$location', '$http', 'shareDataService', 'shareConstantService', function ($scope, NgTableParams, $routeParams, $location, $http, shareDataService, shareConstantService) {
        console.log("adminAccountPageViewController");
        $http.get('http://' + shareConstantService.hostUrl + ':8080/login/places/getcountry').
        success(function(data, status, headers, config){
            $scope.countries=data;
        }).
        error(function(data, status, headers, config){
            console.error("loading country");
        });
        if ($routeParams.tag == "add") {
            $scope.isAddAccount = true;
        }
        else if($routeParams.tag == "edit") {
            $scope.isAddAccount = false;
            console.log("inaccount edit");
            var accountDetails = shareDataService.get();
             console.log(accountDetails);
            $scope.accountDetails=accountDetails;
        }
        $scope.addAccount = function () {
            console.log("Add Account Click");
            console.log($scope.accountDetails);
            var parameter = JSON.stringify($scope.accountDetails);
            $http.post('http://' + shareConstantService.hostUrl + ':8080/login/user/addaccnt', parameter).
            success(function (data, status, headers, config) {
                console.log("Success");
                $location.url("/adminAccountView");
            }).
            error(function () {
                console.log("error");
                console.log(data);
            });
        }
        $scope.addAccount = function () {
            console.log("Add Account Click");
            console.log($scope.accountDetails);
            var parameter = JSON.stringify($scope.accountDetails);
            $http.post('http://' + shareConstantService.hostUrl + ':8080/login/user/addaccnt', parameter).
            success(function (data, status, headers, config) {
                console.log("Success");
                $location.url("/adminAccountView");
            }).
            error(function () {
                console.log("error");
                console.log(data);
            });
        }
        $scope.getCity =function(stateid){
             $http.get('http://' + shareConstantService.hostUrl + ':8080/login/places/' + stateid + '/getcity').
                     success(function (data, status, headers, config) {
                         $scope.cities = data;
                     }).error(function (data, status, headers, config) {
                         console.error("loading City");
                     });
            
        }
        $scope.getState = function(countryId){
            console.log(countryId);
            $http.get('http://' + shareConstantService.hostUrl + ':8080/login/places/'+countryId+ '/getstate').
                     success(function (data, status, headers, config) {
                         $scope.states = data;
                     }).error(function (data, status, headers, config) {
                         console.error("loading states");
                     });
        }
        $scope.updateAccount =function(){
             console.log($scope.accountDetails);
            var parameter = JSON.stringify($scope.accountDetails);
            $http.post('http://' + shareConstantService.hostUrl + ':8080/login/user/addaccnt', parameter).
            success(function (data, status, headers, config) {
                console.log("Success");
                $location.url("/adminAccountView");
            }).
            error(function () {
                console.log("error");
                console.log(data);
            });
        }
    }]);
