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
          
            Oboe({
                url: 'http://www.webbergen.nl/data/publicatie-website/largejson/contacts2.json',
                pattern: '{index}', // all nodes that have an index property will be included
                start: function(stream) {
                    // the stream starts. create a reference
                    $scope.stream = stream;
                    $scope.status = 'reading....';
                },
                done: function() {
                    $scope.status = 'done';
                }
            }).then(function() {
                // not used
            }, function(error) {
                // some error
            }, function(record) {
               $scope.contacts.push(record);
            });
        })
        .controller('NoStreamingCtrl', function($scope, $http) {
            $scope.offset = 0; // starting offset for virtual-scroll
            // the contacts read entirely before added to the scope
            $scope.contacts = [];
            $scope.status = 'reading....';
            $http.get('http://www.webbergen.nl/data/publicatie-website/largejson/contacts2.json')
                    .success(function(response) {
                        $scope.contacts = response;
                        $scope.status = 'done';
                    });
        });