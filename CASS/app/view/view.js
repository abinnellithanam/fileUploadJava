'use strict';

angular.module('cassApp.view', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view/view.html',
            controller: 'viewCtrl'
        });
}])
    .controller('viewCtrl', ['$scope', '$http', '$location', 'HttpDataService', function ($scope, $http, $location, HttpDataService) {
        console.info("viewCtrl");
        $scope.viewDistricts = {};
        $scope.viewYieldTargetList = {};
        $scope.viewSoilTestResultList = {};
        $scope.viewMFert = {};
        //        $scope.viewSoilTestResult = {};
        $scope.viewFertRecommChart = {};
        var isViewYieldTargetDistrictIdSelected = 0;
        var isViewYieldTargetCropIdSelected = 0;
        var isViewYieldTargetStateIdSelected = 0;
        var isViewSoilTestResultStateIdSelected = 0;
        var isViewSoilTestResultSFertTypeIdSelected = 0;
        var isViewSoilTestResultDistrictIdSelected = 0;
        var isViewSoilTestResultCropIdSelected = 0;
        var isViewFertRecommStateIdSelected = 0;
        var isViewFertRecommCropIdSelected = 0;
        HttpDataService.getCropList().then(function (cropList) {
            $scope.cropList = cropList;
        });
        HttpDataService.getStateList().then(function (stateList) {
            $scope.stateList = stateList;
        });

        $scope.viewDistricts.stateChange = function (stateId) {
            console.info(stateId);
            if (stateId != '') {
                HttpDataService.getDistrictList(stateId).then(function (districtList) {
                    $scope.viewDistricts.districtList = districtList;
                    console.log(districtList)
                });
            }
        }

        $scope.viewMFert.cropChange = function (cropId) {
            HttpDataService.getMFertRecommState(cropId).then(function (getMFertRecommStateResponse) {
                $scope.mFertRecomStatesList = getMFertRecommStateResponse.mFertRecomStatesList;
            });
        }


        //getMFertRecomm    getMFertRecommState: function (getMFertRecommMap)

        $scope.viewSoilTestResultList.stateChange = function (viewSoilTestResult) {
            if (viewSoilTestResult.stateId != "" && viewSoilTestResult.stateId != undefined) {
                isViewSoilTestResultStateIdSelected = 1;
                HttpDataService.getDistrictList(viewSoilTestResult.stateId).then(function (districtList) {
                    $scope.viewSoilTestResult.districtList = districtList;
                });
            } else {
                isViewSoilTestResultStateIdSelected = 0;
            }
            if (isViewSoilTestResultCropIdSelected && isViewSoilTestResultDistrictIdSelected && isViewSoilTestResultStateIdSelected && isViewSoilTestResultSFertTypeIdSelected) {
                getSoilTestResultList(viewSoilTestResult).then(function (getSoilTestResultListResponse) {
                    $scope.viewSoilTestResult.viewSoilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sfetTypeId  Null");
            }
        }

        $scope.viewSoilTestResultList.sFertTypeChange = function (viewSoilTestResult) {
            if (viewSoilTestResult.sFertTypeId != "" && viewSoilTestResult.sFertTypeId != undefined) {
                isViewSoilTestResultSFertTypeIdSelected = 1;
            } else {
                isViewSoilTestResultSFertTypeIdSelected = 0;
            }
            if (isViewSoilTestResultCropIdSelected && isViewSoilTestResultDistrictIdSelected && isViewSoilTestResultStateIdSelected && isViewSoilTestResultSFertTypeIdSelected) {
                getSoilTestResultList(viewSoilTestResult).then(function (getSoilTestResultListResponse) {
                    $scope.viewSoilTestResult.viewSoilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sfetTypeId  Null");
            }
        }

        $scope.viewSoilTestResultList.districtChange = function (viewSoilTestResult) {
            if ((viewSoilTestResult.districtId != "" && viewSoilTestResult.districtId != undefined) || viewSoilTestResult.isApplyToAllDists == 1) {
                isViewSoilTestResultDistrictIdSelected = 1;
            } else {
                isViewSoilTestResultDistrictIdSelected = 0;
            }
            if (isViewSoilTestResultCropIdSelected && isViewSoilTestResultDistrictIdSelected && isViewSoilTestResultStateIdSelected && isViewSoilTestResultSFertTypeIdSelected) {
                getSoilTestResultList(viewSoilTestResult).then(function (getSoilTestResultListResponse) {
                    $scope.viewSoilTestResult.viewSoilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sfetTypeId  Null");
            }
        }

        $scope.viewSoilTestResultList.cropChange = function (viewSoilTestResult) {
            if (viewSoilTestResult.cropId != "" && viewSoilTestResult.cropId != undefined) {
                isViewSoilTestResultCropIdSelected = 1;
            } else {
                isViewSoilTestResultCropIdSelected = 0;
            }
            if (isViewSoilTestResultCropIdSelected && isViewSoilTestResultDistrictIdSelected && isViewSoilTestResultStateIdSelected && isViewSoilTestResultSFertTypeIdSelected) {
                getSoilTestResultList(viewSoilTestResult).then(function (getSoilTestResultListResponse) {
                    $scope.viewSoilTestResult.viewSoilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sfetTypeId  Null");
            }
        }

        $scope.viewSoilTestResultList.rbtnIsApplyToAllDistsChange = function (viewSoilTestResult) {
            if ((viewSoilTestResult.districtId != "" && viewSoilTestResult.districtId != undefined) || viewSoilTestResult.isApplyToAllDists == 1) {
                isViewSoilTestResultDistrictIdSelected = 1;
            } else {
                isViewSoilTestResultDistrictIdSelected = 0;
            }
            if (isViewSoilTestResultCropIdSelected && isViewSoilTestResultDistrictIdSelected && isViewSoilTestResultStateIdSelected && isViewSoilTestResultSFertTypeIdSelected) {
                getSoilTestResultList(viewSoilTestResult).then(function (getSoilTestResultListResponse) {
                    $scope.viewSoilTestResult.viewSoilTestResultList = getSoilTestResultListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID or sfetTypeId  Null");
            }
        }

        $scope.viewYieldTargetList.stateChange = function (viewYieldTarget) {
            if (viewYieldTarget.stateId != "" && viewYieldTarget.stateId != undefined) {
                isViewYieldTargetStateIdSelected = 1;
                HttpDataService.getDistrictList(viewYieldTarget.stateId).then(function (districtList) {
                    $scope.viewYieldTargetList.districtList = districtList;
                });
            } else {
                isViewYieldTargetStateIdSelected = 0;
            }
            if (isViewYieldTargetDistrictIdSelected && isViewYieldTargetStateIdSelected && isViewYieldTargetCropIdSelected) {
                getYieldTargetList(viewYieldTarget).then(function (getYieldTargetListResponse) {
                    $scope.viewYieldTarget.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID  Null");
            }
        }

        $scope.viewYieldTargetList.districtChange = function (viewYieldTarget) {
            if ((viewYieldTarget.districtId != "" && viewYieldTarget.districtId != undefined) || viewYieldTarget.isApplyToAllDists == 1) {
                isViewYieldTargetDistrictIdSelected = 1;
            } else {
                isViewYieldTargetDistrictIdSelected = 0;
            }
            if (isViewYieldTargetDistrictIdSelected && isViewYieldTargetStateIdSelected && isViewYieldTargetCropIdSelected) {
                getYieldTargetList(viewYieldTarget).then(function (getYieldTargetListResponse) {
                    $scope.viewYieldTarget.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID  Null");
            }
        }

        $scope.viewYieldTargetList.cropChange = function (viewYieldTarget) {
            if (viewYieldTarget.cropId != "" && viewYieldTarget.cropId != undefined) {
                isViewYieldTargetCropIdSelected = 1;
            } else {
                isViewYieldTargetCropIdSelected = 0;
            }
            if (isViewYieldTargetDistrictIdSelected && isViewYieldTargetStateIdSelected && isViewYieldTargetCropIdSelected) {
                getYieldTargetList(viewYieldTarget).then(function (getYieldTargetListResponse) {
                    $scope.viewYieldTarget.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID  Null");
            }
        }

        $scope.viewYieldTargetList.rbtnIsApplyToAllDistsChange = function (viewYieldTarget) {
            //            console.log(viewYieldTarget);
            if ((viewYieldTarget.districtId != "" && viewYieldTarget.districtId != undefined) || viewYieldTarget.isApplyToAllDists == 1) {
                isViewYieldTargetDistrictIdSelected = 1;
            } else {
                isViewYieldTargetDistrictIdSelected = 0;
            }
            if (isViewYieldTargetDistrictIdSelected && isViewYieldTargetStateIdSelected && isViewYieldTargetCropIdSelected) {
                getYieldTargetList(viewYieldTarget).then(function (getYieldTargetListResponse) {
                    $scope.viewYieldTarget.yieldTargetList = getYieldTargetListResponse;
                });
            } else {
                console.log("districtId Or cropId Or stateID  Null");
            }
        }

        //viewFertRecommChart.rbtnToApplyAllDistsChange cropChange(viewFertRecomm)
        //        var isViewFertRecommStateIdSelected = 0;
        //        var isViewFertRecommCropIdSelected = 0;
        $scope.viewFertRecommChart.stateChange = function (viewFertRecommendation) {
            console.info(viewFertRecommendation);
            if (viewFertRecommendation.stateId != "") {
                isViewFertRecommStateIdSelected = 1;
            } else {
                isViewFertRecommStateIdSelected = 0;
            }
            if (isViewFertRecommStateIdSelected == 1 && isViewFertRecommCropIdSelected == 1) {
                var viewFertRecomm = {};
                viewFertRecomm.stateId = parseInt(viewFertRecommendation.stateId, 10);
                viewFertRecomm.cropId = parseInt(viewFertRecommendation.cropId, 10);
                viewFertRecomm.isRfOrIrr = parseInt(viewFertRecommendation.isRfOrIrr, 10);
                HttpDataService.getFertRecomm(viewFertRecomm).then(function (getFertRecommResult) {
                    console.log(getFertRecommResult);
                    $scope.fertRecommList = getFertRecommResult.fertRecommList;
                });
            }
        }

        $scope.viewFertRecommChart.cropChange = function (viewFertRecommendation) {
            console.info(viewFertRecommendation);
            if (viewFertRecommendation.cropId != "") {
                isViewFertRecommCropIdSelected = 1;
            } else {
                isViewFertRecommCropIdSelected = 0;
            }
            if (isViewFertRecommStateIdSelected == 1 && isViewFertRecommCropIdSelected == 1) {
                var viewFertRecomm = {};
                viewFertRecomm.stateId = parseInt(viewFertRecommendation.stateId, 10);
                viewFertRecomm.cropId = parseInt(viewFertRecommendation.cropId, 10);
                viewFertRecomm.isRfOrIrr = parseInt(viewFertRecommendation.isRfOrIrr, 10);
                HttpDataService.getFertRecomm(viewFertRecomm).then(function (getFertRecommResult) {
                    console.log(getFertRecommResult);
                    $scope.fertRecommList = getFertRecommResult.fertRecommList;
                });
            }
        }

        $scope.viewFertRecommChart.rbtnIsRfOrIrrChange = function (viewFertRecommendation) {
            console.info(viewFertRecommendation);
            if (isViewFertRecommStateIdSelected == 1 && isViewFertRecommCropIdSelected == 1) {
                var viewFertRecomm = {};
                viewFertRecomm.stateId = parseInt(viewFertRecommendation.stateId, 10);
                viewFertRecomm.cropId = parseInt(viewFertRecommendation.cropId, 10);
                viewFertRecomm.isRfOrIrr = parseInt(viewFertRecommendation.isRfOrIrr, 10);
                HttpDataService.getFertRecomm(viewFertRecomm).then(function (getFertRecommResult) {
                    console.log(getFertRecommResult);
                    $scope.fertRecommList = getFertRecommResult.fertRecommList;
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
