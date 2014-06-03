angular.module('sbhub', ['ngResource']).controller('oppsCtrl', function ($scope, $http, $resource) {
    $http.defaults.useXDomain = true;
    var Opp = $resource('http://api.data.gov/gsa/fbopen/v0/opps', {'api_key': '8l3xbEmsQMq7AG7mXoSy3IuJAqehmWGRC754Otx7'});

    $scope.getOpps = function(filter){
        filter = filter || {};
        Opp.get(filter, function(data){
            $scope.opps = data;
        }, function(data, status){
            console.log('Request failed:'+status);
        });
    };

    //On page load, get opportunities with no filtering.
    $scope.getOpps();

});