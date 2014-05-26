'use strict';

var app = angular.module('shipMateApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "partials/main.html"
        })
        .state('login', {
            url: "/login",
            controller: 'LoginCtrl',
            templateUrl: "partials/login.html"
        })
        .state('signup', {
            url: '/signup',
            controller: 'SignupCtrl',
            templateUrl: 'partials/signup.html'
        })
        .state('game', {
            url: '/game',
            controller: 'GameCtrl',
            templateUrl: 'partials/game.html'
        })

});