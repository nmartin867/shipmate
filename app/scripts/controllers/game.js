'use strict';

angular.module('shipMateApp').controller('GameCtrl', function ($scope, Image) {
    $scope.imageService = Image;

    $scope.startGameLoop = function () {
        window.attachGraphicsDevice();
    };
});
