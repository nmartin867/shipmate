'use strict';

angular.module('shipMateApp').controller('SignupCtrl', ['$scope', '$http', '$state', 'Authorization', function ($scope, $http, $state, authorization) {
    $scope.user = {};
    $scope.register = function (form) {
        if (form.$valid) {
            authorization.signUp($scope.user).then(function(){
                $state.go('main');
            });
        }
    }
}]);
