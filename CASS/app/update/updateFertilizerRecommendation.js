'use strict';

angular.module('cassApp.updateFertilizerRecommendation', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/updateFertilizerRecommendation', {
            templateUrl: 'update/updateFertilizerRecommendation.html',
            controller: 'updateFertilizerRecommendationCtrl'
        });
}])
    .controller('updateFertilizerRecommendationCtrl', ['$scope', 'HttpDataService', '$location', function ($scope, HttpDataService, $location) {
        var toFetchSTandYT = {};
        $scope.addFertRecommMap = {};
        toFetchSTandYT.isStateIdSelected = 0;
        toFetchSTandYT.isSFertTypeIdSelected = 0;
        toFetchSTandYT.isDistrictIdSelected = 0;
        toFetchSTandYT.isCropIdSelected = 0;
        HttpDataService.getCropList().then(function (cropList) {
            $scope.cropList = cropList;
        });
        HttpDataService.getStateList().then(function (stateList) {
            $scope.stateList = stateList;
        });
        $scope.stateChange = function (addFertRecommMap) {
            if (addFertRecommMap.stateId != "" && addFertRecommMap.stateId != undefined) {
                toFetchSTandYT.isStateIdSelected = 1;
                HttpDataService.getDistrictList(addFertRecommMap.stateId).then(function (districtList) {
                    $scope.districtList = districtList;
                });
            } else {
                toFetchSTandYT.isStateIdSelected = 0;
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getSoilTestResultList(addFertRecommMap).then(function (getSoilTestResultListResponse) {
                    $scope.soilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sFertId Null");
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getYieldTargetList(addFertRecommMap).then(function (getYieldTargetListResponse) {
                    $scope.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID Null");
            }
        }

        $scope.cropChange = function (addFertRecommMap) {
            if (addFertRecommMap.cropId != "" && addFertRecommMap.cropId != undefined) {
                toFetchSTandYT.isCropIdSelected = 1;
            } else {
                toFetchSTandYT.isCropIdSelected = 0;
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getSoilTestResultList(addFertRecommMap).then(function (getSoilTestResultListResponse) {
                    $scope.soilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sFertId Null");
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getYieldTargetList(addFertRecommMap).then(function (getYieldTargetListResponse) {
                    $scope.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID Null");
            }
        }
        $scope.fertTypeChange = function (addFertRecommMap) {
            if (addFertRecommMap.sFertTypeId != "" && addFertRecommMap.sFertTypeId != undefined) {
                toFetchSTandYT.isSFertTypeIdSelected = 1;
            } else {
                toFetchSTandYT.isSFertTypeIdSelected = 0;
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getSoilTestResultList(addFertRecommMap).then(function (getSoilTestResultListResponse) {
                    $scope.soilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sFertId Null");
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getYieldTargetList(addFertRecommMap).then(function (getYieldTargetListResponse) {
                    $scope.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID Null");
            }
        }
        $scope.districtChange = function (addFertRecommMap) {
            if ((addFertRecommMap.districtId != "" && addFertRecommMap.districtId != undefined) || addFertRecommMap.isApplyToAllDists == 1) {
                toFetchSTandYT.isDistrictIdSelected = 1;
            } else {
                toFetchSTandYT.isDistrictIdSelected = 0;
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getSoilTestResultList(addFertRecommMap).then(function (getSoilTestResultListResponse) {
                    $scope.soilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sFertId Null");
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getYieldTargetList(addFertRecommMap).then(function (getYieldTargetListResponse) {
                    $scope.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID Null");
            }
        }
        
        $scope.rbtnIsApplyToAllDistsChange = function (addFertRecommMap) {
//            console.log(viewYieldTarget);
            if ((addFertRecommMap.districtId != "" && addFertRecommMap.districtId != undefined) || addFertRecommMap.isApplyToAllDists == 1) {
                toFetchSTandYT.isDistrictIdSelected = 1;
            } else {
                toFetchSTandYT.isDistrictIdSelected = 0;
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getSoilTestResultList(addFertRecommMap).then(function (getSoilTestResultListResponse) {
                    $scope.soilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sFertId Null");
            }
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                getYieldTargetList(addFertRecommMap).then(function (getYieldTargetListResponse) {
                    $scope.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID Null");
            }
        }
        
        //yieldTarget soilTestResult
        $scope.addSoilTstRslt = function (addFertRecommMap) {
            console.log(toFetchSTandYT);
            var addFertRecommCriteriaMap = {};
            if (toFetchSTandYT.isStateIdSelected && toFetchSTandYT.isSFertTypeIdSelected && toFetchSTandYT.isDistrictIdSelected && toFetchSTandYT.isCropIdSelected) {
                addFertRecommCriteriaMap.cropId = parseInt(addFertRecommMap.cropId, 10);
                addFertRecommCriteriaMap.districtId = parseInt(addFertRecommMap.districtId, 10);
                addFertRecommCriteriaMap.isApplyToAllDists = parseInt(addFertRecommMap.isApplyToAllDists, 10);
                addFertRecommCriteriaMap.stateId = parseInt(addFertRecommMap.stateId, 10);
                addFertRecommCriteriaMap.isRfOrIrr = parseInt(addFertRecommMap.isRfOrIrr, 10);
                addFertRecommCriteriaMap.sFertTypeId = parseInt(addFertRecommMap.sFertTypeId, 10);
                addFertRecommCriteriaMap.fertRecomm = addFertRecommMap.fertRecomm;
                addFertRecommCriteriaMap.yieldTargetId = parseInt(addFertRecommMap.yieldTargetId, 10);
                addFertRecommCriteriaMap.soilTestResultId = parseInt(addFertRecommMap.soilTestResultId, 10);
                HttpDataService.updateFertRecomm(addFertRecommCriteriaMap).then(function (addSoilTestResultResponse) {
                    console.log(addSoilTestResultResponse);
                });
            }
        }

        var getYieldTargetList = function (viewYieldTarget) {
            var getYieldTargetCriteriaMap = {};
            getYieldTargetCriteriaMap.cropId = parseInt(viewYieldTarget.cropId, 10);
            getYieldTargetCriteriaMap.districtId = parseInt(viewYieldTarget.districtId, 10);
            getYieldTargetCriteriaMap.isApplyToAllDists = parseInt(viewYieldTarget.isApplyToAllDists, 10);
            getYieldTargetCriteriaMap.stateId = parseInt(viewYieldTarget.stateId, 10);
            getYieldTargetCriteriaMap.isRfOrIrr = parseInt(viewYieldTarget.isRfOrIrr, 10);
            return HttpDataService.getYieldTargetList(getYieldTargetCriteriaMap);
        }

        var getSoilTestResultList = function (viewSoilTestResult) {
            var getSoilTestResultCriteriaMap = {};
            getSoilTestResultCriteriaMap.cropId = parseInt(viewSoilTestResult.cropId, 10);
            getSoilTestResultCriteriaMap.districtId = parseInt(viewSoilTestResult.districtId, 10);
            getSoilTestResultCriteriaMap.isApplyToAllDists = parseInt(viewSoilTestResult.isApplyToAllDists, 10);
            getSoilTestResultCriteriaMap.stateId = parseInt(viewSoilTestResult.stateId, 10);
            getSoilTestResultCriteriaMap.isRfOrIrr = parseInt(viewSoilTestResult.isRfOrIrr, 10);
            getSoilTestResultCriteriaMap.sFertTypeId = parseInt(viewSoilTestResult.sFertTypeId, 10);
            return HttpDataService.getSoilTestResultList(getSoilTestResultCriteriaMap);
        }
 }]);
