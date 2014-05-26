'use strict';

angular.module('shipMateApp')
    .controller('LoginCtrl', ['$scope', '$http', '$state', 'Authorization', function ($scope, $http, $state, authorization) {
        $scope.user = {};
        $scope.login = function(form) {
            if (form.$valid) {
                authorization.login($scope.user).then(function () {
                    $state.go('main');
                });
            }
        }
    }]);
