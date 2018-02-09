'use strict';
angular.module('cassApp', [
    'ngRoute',
    'angularCSS',
    'cassApp.view',
    'cassApp.addYT',
    'cassApp.addSoilTestResult',
    'cassApp.addFertilizerRecommendation',
    'cassApp.updateYT',
    'cassApp.updateSoilTestResult',
    'cassApp.updateFertilizerRecommendation'
//    'csViewApp.adminAccountView.adminAccountViewModule',
//    'csViewApp.adminAccountView.adminAccountAddModule',
//     'csViewApp.dashboard'
    
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
         redirectTo: '/view1'
    });
}]);
