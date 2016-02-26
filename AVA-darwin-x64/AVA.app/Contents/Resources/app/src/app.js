(function () {
    'use strict';

    angular.module('ava', ['ui.router'])
        // Disable angular's debug
        // .config(['$compileProvider', function ($compileProvider) {
        //     $compileProvider.debugInfoEnabled(false);
        // }])
        // .config([function() {}]);
        .run(['$rootScope', '$state', function($rootScope, $state) {
            $rootScope.$on('decomagueule', function() {
                $state.go('login');
            });
        }]);
}());
