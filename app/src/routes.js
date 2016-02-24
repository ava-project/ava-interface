(function () {
    'use strict';

    /**
     * @ngdoc code
     * @description
     *  Define our routes
     *  Disable htlm5mode to be able to retrieve files without a server
     *  And add fallback to '/' for unknown url
     */
    angular.module('ava')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function routes($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'src/components/login/loginView.html',
                controller: 'LoginController',
                controllerAs: 'loginctrl'
            })
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                templateUrl: 'src/components/dashboard/dashboardView.html'
            })
            .state('dashboard.content', {
                url: '',
                views: {
                    'plugins@dashboard': {
                        templateUrl: 'src/components/plugins/pluginsView.html',
                        controller: 'PluginsController',
                        controllerAs: 'plugctrl'
                    },
                    'settings@dashboard': {
                        templateUrl: 'src/components/settings/settingsView.html',
                        controller: 'SettingsController',
                        controllerAs: 'settctrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(false);
    }
}());
