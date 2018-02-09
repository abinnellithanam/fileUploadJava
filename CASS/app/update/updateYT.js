'use strict';

angular.module('cassApp.updateYT', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/updateYT', {
            templateUrl: 'update/updateYT.html',
            controller: 'updateYTCtrl'
        });
}])
    .controller('updateYTCtrl', ['$scope', 'HttpDataService', '$location', function ($scope, HttpDataService, $location) {
//$scope.addYTMap.isApplyToAllDists=0;
        HttpDataService.getCropList().then(function (cropList) {
            $scope.cropList = cropList;
        });
        HttpDataService.getStateList().then(function (stateList) {
            $scope.stateList = stateList;
        });
        $scope.addYT = {};
        $scope.addYT = function (addYTMap) {
            addYTMap.isRfOrIrr = parseInt(addYTMap.isRfOrIrr, 10);
            addYTMap.cropId = parseInt(addYTMap.cropId, 10);
            addYTMap.districtId = parseInt(addYTMap.districtId, 10);
            addYTMap.isApplyToAllDists = parseInt(addYTMap.isApplyToAllDists, 10);
            addYTMap.stateId = parseInt(addYTMap.stateId, 10);
            HttpDataService.updateYieldTarget(addYTMap).then(function (addYTResponse) {
                console.log(addYTResponse);
            });
//            console.log(addYTMap);
        }
        $scope.stateChange = function (stateId) {
            HttpDataService.getDistrictList(stateId).then(function (districtList) {
                $scope.districtList = districtList;
            });
        }
 }]);
