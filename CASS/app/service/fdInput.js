//var app=angular.module('csViewApp.fdInput',[]);
//
//app.directive('fdInput', [function ($rootScope) {
//    var files;
//   
//        return {
//            files:files,
//            link: function (scope, element, attrs) {
//                    element.on('change', function (evt) {
//                        return files = evt.target.files;
//                        console.log("inside directive"+files[0].name);
////                        console.log(files[0].size);
//                    });
//                },
//                scope: {
//                    uploadedFileDetails: '='
//                },
//                controller: function ($rootScope) {
//                    $rootScope.uploadedFileDetails = files;
//                }
//        }
//}])