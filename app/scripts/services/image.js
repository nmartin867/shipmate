'use strict';

angular.module('shipMateApp').service('Image', function Image($http, $q) {
        function getImageByName(imageName) {
            var url = 'asset/' + imageName;
            var deferred = $q.defer();
            $http.get(url).then(function (response) {
                deferred.resolve(response.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        };

        return {
            getImageByName: getImageByName
        };
    });
