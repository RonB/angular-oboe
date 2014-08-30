angular.module('Contacts', ['ngOboe'])
        .controller('ContactsCtrl', function($scope, Oboe) {
            $scope.contacts = Oboe({url: 'contacts.json', pattern: '{_id}'});
        });