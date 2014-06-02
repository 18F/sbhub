angular.module('sbhub', []).controller('oppsCtrl', function ($scope, $http) {
    $scope.opps = {};
    $http.defaults.useXDomain = true;
    $http.get('http://api.data.gov/gsa/fbopen/v0/opps?api_key=8l3xbEmsQMq7AG7mXoSy3IuJAqehmWGRC754Otx7')
        .success(function(data) {
            $scope.opps.results = data;
        }).error(function(data, status){
            console.log('Request failed:'+status);
        });

});