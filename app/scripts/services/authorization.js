'use strict';

angular.module('shipMateApp')
    .service('Authorization', function Authorization($q, $http) {
        function signUp(user) {
            var deferred = $q.defer();
            var url = '/api/users';
            $http.post(url, user).success(function (response) {
               deferred.resolve();
            });
           return deferred.promise;
        };

        function login(context){
            var deferred = $q.defer();
            var url = '/api/session';
            $http.post(url, context).success(function (response) {
                deferred.resolve();
            });
            return deferred.promise;
        };

        return{
            signUp:signUp,
            login: login
        };
    });
