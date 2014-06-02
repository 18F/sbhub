angular.module('sbhub', ['ngResource']).controller('appCtrl', function ($scope, $http) {
    $http.defaults.useXDomain = true;

    $scope.getOpps = function() {
        $http.get('http://api.data.gov/gsa/fbopen/v0/opps')
            .success(function(data) {
                $scope.opps = data;
                console.log('Opps query performed'); 
            }).error(function(data, status){
                console.log('Request failed:'+status);
            });
    };

});