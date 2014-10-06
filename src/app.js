'use strict';
angular.module('Contacts', ['ngOboe', 'ui.router', 'sf.virtualScroll'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('streaming', {
                        url: '/streaming',
                        templateUrl: 'panel.html',
                        controller: 'StreamingCtrl'
                    })
                    .state('nostreaming', {
                        url: '/nostreaming',
                        templateUrl: 'panel.html',
                        controller: 'NoStreamingCtrl'
                    });

            $urlRouterProvider
                    .otherwise('/');

        })
        .controller('StreamingCtrl', function($scope, Oboe) {
            $scope.offset = 0; // starting offset for virtual-scroll
            $scope.contacts = [];
            // the contacts streamed
            $scope.contacts = Oboe({
                url: 'http://www.webbergen.nl/data/publicatie-website/largejson/contacts2.json',
                pattern: '{index}', // all nodes that have an index property will be included
                pagesize: 100
            });
        })
        .controller('NoStreamingCtrl', function($scope, $http) {
            $scope.offset = 0; // starting offset for virtual-scroll
            // the contacts read entirely before added to the scope
            $scope.contacts = [];
            $http.get('http://www.webbergen.nl/data/publicatie-website/largejson/contacts2.json')
                    .success(function(response) {
                        $scope.contacts = response;
                    });
        });