(function () {
    'use strict';

    angular.module('ava', ['ui.router'])
        // Disable angular's debug
        // .config(['$compileProvider', function ($compileProvider) {
        //     $compileProvider.debugInfoEnabled(false);
        // }])
        // .config([function() {}]);
        .run(['$rootScope', '$state', function($rootScope, $state) {
            $rootScope.isConnectedToCore = false;

            var net = require('net');
            $rootScope.coreClient = net.createConnection("/tmp/ava_socket");

            $rootScope.coreClient.on("connect", function () {
                $rootScope.isConnectedToCore = true;
            });

            $rootScope.coreClient.on('data', function (data) {
                console.log('Received from core:' + data)
            });

            $rootScope.coreClient.on('close', function () {
                $rootScope.isConnectedToCore = false;
            });

            $rootScope.$on('decomagueule', function () {
                $state.go('login');
            });
        }]);
}());
