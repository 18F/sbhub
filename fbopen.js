angular.module('FBOpen', ['ngResource']).controller('oppsCtrl', function ($scope, $http) {
    $http.defaults.useXDomain = true;

    $scope.getOpps = function() {
        $http.get('http://api.data.gov/gsa/fbopen/v0/opps')
            .success(function(data) {
                alert(data.ok);
            });
    };

});