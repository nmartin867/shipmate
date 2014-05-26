'use strict';

angular.module('shipMateApp')
    .directive('gameCanvas', function (Image) {
        return {
            template: '<canvas></canvas>',
            restrict: 'E',
            replace: true,
            scope: {
                options: '='
            },
            link: function postLink($scope, element, attrs) {
                var ctx = element.get(0).getContext('2d');
                var width = $scope.options.width;
                var height = $scope.options.height;
                element.css('width', width);
                element.css('height',height);
                Image.getImageByName('water.png').then(function(image){
                     var image = image;
                }, function(){
                   console.log('dammit')
                });
            }
        };
    });
