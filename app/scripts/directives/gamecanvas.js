'use strict';

angular.module('shipMateApp').directive('gameCanvas', function () {
        return {
            template: '<canvas id="canvas" width="640px" height="480px"/>',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs) {

            }
        };
    });
