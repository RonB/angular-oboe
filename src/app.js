'use strict';
angular.module('Contacts', ['ngOboe'])
        .controller('ContactsCtrl', function($scope, Oboe, $http) {

            // the contacts streamed
            $scope.contacts = Oboe({url: 'contacts.json', pattern: '{_id}'});

            // the contacts read entirely before added to the scope
            $scope.contacts2 = [];
            $http.get('contacts.json').success(function(response) {
                $scope.contacts2 = response;
            });
            
        });