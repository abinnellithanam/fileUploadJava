'use strict';

angular.module('cassApp.addSoilTestResult', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addSoilTestResult', {
            templateUrl: 'add/addSoilTestResult.html',
            controller: 'addSoilTestResultCtrl'
        });
}])
    .controller('addSoilTestResultCtrl', ['$scope', 'HttpDataService', '$location', function ($scope, HttpDataService, $location) {
        HttpDataService.getCropList().then(function (cropList) {
            $scope.cropList = cropList;
        });
        HttpDataService.getStateList().then(function (stateList) {
            $scope.stateList = stateList;
        });
       $scope.addSoilTstRslt = function(addSoilTstRsltMap){
           addSoilTstRsltMap.cropId=parseInt(addSoilTstRsltMap.cropId,10);
           addSoilTstRsltMap.isApplyToAllDists=parseInt(addSoilTstRsltMap.isApplyToAllDists,10);
           addSoilTstRsltMap.isRfOrIrr=parseInt(addSoilTstRsltMap.isRfOrIrr,10);
           addSoilTstRsltMap.stateId=parseInt(addSoilTstRsltMap.stateId,10);
           addSoilTstRsltMap.districtId=parseInt(addSoilTstRsltMap.districtId,10);
           addSoilTstRsltMap.sFertTypeId=parseInt(addSoilTstRsltMap.sFertTypeId,10);
           console.log(addSoilTstRsltMap);
           HttpDataService.addSoilTestResult(addSoilTstRsltMap).then(function (addSoilTestResultResponse) {
                console.log(addSoilTestResultResponse);
            });
       }
       $scope.stateChange = function (stateId) {
            HttpDataService.getDistrictList(stateId).then(function (districtList) {
                $scope.districtList = districtList;
            });
        }
 }]);
