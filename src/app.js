'use strict';
angular.module('Contacts', ['ngOboe'])
        .controller('ContactsCtrl', function($scope, Oboe, $http) {
            $scope.contacts = Oboe({url: 'contacts.json', pattern: '{_id}'});
            $scope.httpcontacts =[];
            $http.get('contacts.json').success(function(response) {
                $scope.httpcontacts = response;
            });
        });