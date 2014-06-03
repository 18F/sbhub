var sbhub = angular.module('sbhub', ['ngResource']);

sbhub.controller('oppsCtrl', function ($scope, $http, $resource) {
    $http.defaults.useXDomain = true;
    var Opp = $resource('http://api.data.gov/gsa/fbopen/v0/opps', {'api_key': '8l3xbEmsQMq7AG7mXoSy3IuJAqehmWGRC754Otx7'});

    $scope.getOpps = function(filter){
        filter = filter || {};
        Opp.get(filter, function(data){
            $scope.opps = data;
            $scope.$broadcast('dataloaded');
        }, function(data, status){
            console.log('Request failed:'+status);
        });
    };

    //On page load, get opportunities with no filtering.
    $scope.getOpps();

});

// sbhub.directive('shorten', ['$timeout', function ($timeout) {
//     return {
//         link: function ($scope, element, attrs) {
//             $scope.$on('dataloaded', function () {
//                     $timeout(function () { // You might need this timeout to be sure its run after DOM render.
//                      alert('hello!');
//                  }, 0, false);
//                 })
//         }
//     };
// }]);
