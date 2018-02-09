'use strict';

angular.module('csViewApp.dashboard', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardController'
        });
}])
.controller('dashboardController', ['$http','$location','$scope','shareDataService','shareConstantService',function ($http,$location,$scope,shareDataService,shareConstantService) {

      $scope.navigateToAccount=function(){
        $location.url("/adminAccountView");
      }
      $scope.navigateToTeam=function(){
        $location.url("/adminView");
      }
}]);
