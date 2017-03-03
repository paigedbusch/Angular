angular.module('assessment')
.directive('productDirective', function($stateParams) {
    
    return {
        url: 'http://practiceapi.devmounta.in/products/' + $stateParams.id,
        templateUrl: './views/product-tmpl.html'
    }
});