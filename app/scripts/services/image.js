'use strict';

angular.module('shipMateApp')
    .service('Image', function Image($http, $q) {
        function getImageByName(imageName) {
            var url = 'images/' + imageName;
            var deferred = $q.defer();
            $http.get(url).then(function (response) {
                var image = new Image(response.data);
                deferred.resolve(image);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        };

        return {
            getImageByName: getImageByName
        };
    });
