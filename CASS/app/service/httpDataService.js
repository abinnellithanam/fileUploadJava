'use strict';

/**
 * @ngdoc service
 * @name helixApp.httpdata
 * @description
 * # httpdata
 * Service in the helixApp.
 */
angular.module('cassApp')
    .service('HttpDataService', function ($http) {
        var hostUrl = "localhost";
        var HttpDataService = {

            getCropList: function () {
                return $http.get('http://' + hostUrl + ':8080/cassapp/getCropList')
                    .then(function (response) {
                        return response.data;
                    });
            },
            getStateList: function () {
                return $http.get('http://' + hostUrl + ':8080/cassapp/getStateList')
                    .then(function (response) {
                        return response.data;
                    });
            },
            getDistrictList: function (stateId) {
                return $http.get('http://' + hostUrl + ':8080/cassapp/getDistrictList/' + stateId)
                    .then(function (response) {
                        return response.data;
                    });
            },
            getFertTypeList: function () {
                return $http.get('http://' + hostUrl + ':8080/cassapp/getFertTypeList')
                    .then(function (response) {
                        return response.data;
                    });
            },
            getCropsList: function (stateId) {
                return $http.get('http://' + hostUrl + ':8080/cassapp/getCropsList/' + stateId)
                    .then(function (response) {
                        return response.data;
                    });
            },
            addYieldTarget: function (yieldTargetDetails) {
                //var parameter = JSON.stringify(yieldTargetDetails);addYTMap.stateId
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + yieldTargetDetails.stateId + '/addYieldTarget', yieldTargetDetails)
                    .then(function (response) {
                        return response.data;
                    });
            },
            addSoilTestResult: function (addSoilTstRsltMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + addSoilTstRsltMap.stateId + '/addSoilTestResult', addSoilTstRsltMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            getYieldTargetList: function (getYieldTargetCriteriaMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + getYieldTargetCriteriaMap.stateId + '/getYieldTargetList', getYieldTargetCriteriaMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            getSoilTestResultList: function (getSoilTestResultCriteriaMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + getSoilTestResultCriteriaMap.stateId + '/getSoilTestResultList', getSoilTestResultCriteriaMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            addFertRecomm: function (fertRecommMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + fertRecommMap.stateId + '/addFertRecomm', fertRecommMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            getFertRecomm: function (getFertRecommMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + getFertRecommMap.stateId + '/getFertRecomm', getFertRecommMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            getMFertRecommState: function (cropId) {
                return $http.get('http://' + hostUrl + ':8080/cassapp/'+cropId+'/getMFertRecommState')
                    .then(function (response) {
                        return response.data;
                    });
            },
            getMFertRecomm: function (getMFertRecommMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + getMFertRecommMap.stateId + '/getMFertRecomm', getMFertRecommMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            updateYieldTarget: function (yieldTargetDetails) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + yieldTargetDetails.stateId + '/updateYieldTarget', yieldTargetDetails)
                    .then(function (response) {
                        return response.data;
                    });
            },
            updateSoilTestResult: function (addSoilTstRsltMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + addSoilTstRsltMap.stateId + '/updateSoilTestResult', addSoilTstRsltMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
            updateFertRecomm: function (fertRecommMap) {
                return $http.post('http://' + hostUrl + ':8080/cassapp/' + fertRecommMap.stateId + '/updateFertRecomm', fertRecommMap)
                    .then(function (response) {
                        return response.data;
                    });
            },
        };
        return HttpDataService;
    });
