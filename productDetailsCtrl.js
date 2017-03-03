angular.module('assessment')
.controller('productDetailsCtrl', function($scope, $stateParams, shopService) {

    shopService.getDetails($stateParams.id)
    .then(function(response) {
        $scope.details = response.data;
    });
});