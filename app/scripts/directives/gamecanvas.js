'use strict';

angular.module('shipMateApp').directive('gameCanvas', function () {
        return {
            template: '<canvas id="canvas" width="1024px" height="768px"/>',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs) {

            }
        };
    });
