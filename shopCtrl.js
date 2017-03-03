angular.module('assessment')
.controller('shopCtrl', function($scope, $stateParams, shopService) {

    shopService.getProducts()
    .then(function(response) {
        $scope.products = response.data;
    });
});