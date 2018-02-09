'use strict';

angular.module('csViewApp.adminAccountView.adminAccountViewModule', ['ngRoute', 'angularCSS', '720kb.datepicker', 'ngTable'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/adminAccountPageView/:accId', {
            templateUrl: 'adminAccountView/adminAccountPageView/adminAccountPageView.html',

            css: 'adminAccountView/adminAccountPageView/adminAccountPageView.css'
        });
    }])
    .controller('adminAccountPageViewController', ['$scope', 'NgTableParams', '$routeParams', '$http', '$location', 'shareDataService', 'shareConstantService', function ($scope, NgTableParams, $routeParams, $http, $location, shareDataService, shareConstantService) {

        $scope.selectedTab = 1;
        $scope.selectedPill = 1;
        console.log("adminAccountPageViewController");

    }])
    .controller('accountDetailsController', ['$scope', 'NgTableParams', '$routeParams', '$http', '$location', 'shareDataService', 'shareConstantService', function ($scope, NgTableParams, $routeParams, $http, $location, shareDataService, shareConstantService) {
        console.log("accountDetailsController");
        console.log($routeParams.accId);
        $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/basicInfo/' + $routeParams.accId).
        success(function (data, status, headers, config) {
            $scope.accountDetails = data.accountDetails;
            shareDataService.set(data.accountDetails);
        }).
        error(function (data, status, headers, config) {
            console.log("error");
        });
        $scope.accountEdit = function (accountDetails) {
            console.log("account Edit click");
            console.log($scope.accountDetails)
            shareDataService.set($scope.accountDetails);
            $location.url("/adminAccountPageAddView/edit");
        }
}])
    .controller('accountDocumentsController', ['$scope', 'NgTableParams', '$routeParams', '$http', '$location', '$rootScope', 'shareDataService', 'shareConstantService', function ($scope, NgTableParams, $routeParams, $http, $location, $rootScope, shareDataService, shareConstantService) {
        console.log("dddd");
        console.log('docTypes');
        console.log($rootScope.docTypes);
        $scope.secLevel = {
            1: 'Highh',
            2: 'Medium',
            3: 'Low'
        };
        $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/' + $routeParams.accId + '/doc/basicInfo').
        success(function (data, status, headers, config) {
            $scope.documentsInfos = data.documentBasicInfoList;
            console.info($scope.docTypes);
        }).
        error(function (data, status, headers, config) {
            console.log("error");
        });

        $scope.addDocument = function () {
            console.info("aaaaaaaaaaaa");
            var uploadElement = document.getElementById('fileInput');
            var fileName = uploadElement.files.item(0).name;
            console.info('fileName : ' + fileName);
            var accountDetails = shareDataService.get();
            console.log(accountDetails);
            $scope.documentMap.accId = accountDetails.accId;
            $scope.documentMap.fileName = fileName;
            console.info($scope.documentMap);
            var parameter = JSON.stringify($scope.documentMap);
            $http.post('http://' + shareConstantService.hostUrl + ':8080/login/account/adddoc', parameter).
            success(function (data, status, headers, config) {
                console.info(data);
                $('#addDocument').modal('hide');
                $scope.documentMap = {};
                $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/' + $routeParams.accId + '/doc/basicInfo').
                success(function (data, status, headers, config) {
                    $scope.documentsInfos = data.documentBasicInfoList;
                    console.info($scope.docTypes);
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });
            }).
            error(function (data, status, headers, config) {
                console.info("error");
                console.info(data);
            });
        }
        $scope.docEdit = function (docId) {
            $rootScope.docId = docId;
            $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/doc/' + docId + '/detailsedit').
            success(function (data, status, headers, config) {
                $scope.documentDetails = data.docDetailsMap;

                var secLevel = $scope.documentDetails.securityLevel;
                $scope.documentDetails.securityLevel = '' + secLevel;

                var finYear = $scope.documentDetails.finYearId;
                $scope.documentDetails.finYearId = '' + finYear;

                var Type = $scope.documentDetails.docTpeId;
                $scope.documentDetails.docTpeId = '' + Type;

                var grp = $scope.documentDetails.grpId;
                $scope.documentDetails.grpId = '' + grp;

                $('#editDocument').modal('show');
            }).
            error(function (data, status, headers, config) {
                console.log("error");
            });
        }
        $scope.updateDocument = function () {
            var parameter = JSON.stringify($scope.documentDetails);
            console.log($scope.documentDetails);
            $http.post('http://' + shareConstantService.hostUrl + ':8080/login/account/updatedoc/' + $rootScope.docId, parameter).
            success(function (data, status, headers, config) {
                console.info(data);
                $('#editDocument').modal('hide');
                $http.get('http://' + shareConstantService.hostUrl + ':8080/login/account/' + $routeParams.accId + '/doc/basicInfo').
                success(function (data, status, headers, config) {
                    $scope.documentsInfos = data.documentBasicInfoList;
                    console.info($scope.docTypes);
                }).
                error(function (data, status, headers, config) {
                    console.log("error");
                });
            }).
            error(function (data, status, headers, config) {
                console.info("error");
                console.info(data);
            });
        }
}]);
