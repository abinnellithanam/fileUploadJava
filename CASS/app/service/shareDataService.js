var app = angular.module('csViewApp.shareDataService', []);
app.factory('shareDataService', function () {
    var savedData = {}

    function set(data) {
        savedData = data;
    }

    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }
});
