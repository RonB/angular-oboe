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
            $scope.offset = 0;
            // the contacts streamed
            $scope.contacts = Oboe({
                url: 'contacts.json?time=' + new Date().toJSON(),
                pattern: '{_id}', // all nodes that have an id property will be included
                pagesize: 10
            });
        })
        .controller('NoStreamingCtrl', function($scope, $http) {
            $scope.offset = 0;
            // the contacts read entirely before added to the scope
            $scope.contacts = [];
            $http.get('contacts.json?time=' + new Date().toJSON())
                    .success(function(response) {
                        $scope.contacts = response;
                    });
        });