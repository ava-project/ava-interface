(function () {
    'use strict';

    angular.module('ava')
        .controller('SettingsController', SettingsController);

    function SettingsController() {
        var vm = this;

        // NOTE: $onInit is not yet supported by ui-router
        // vm.$onInit = function() {
        // };
    }
})();
