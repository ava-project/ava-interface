(function () {
    'use strict';

    angular.module('ava')
        .controller('PluginsController', PluginsController);

    function PluginsController() {
        var vm = this;

        // NOTE: $onInit is not yet supported by ui-router
        // vm.$onInit = function() {
        vm.installedPlugins = [{
            name: 'Pornhub',
            dev: 'jeannustre',
            installationDate: new Date(),
            url: 'https://pornhub.com'
        }, {
            name: 'Cuisine',
            dev: 'amouro_d',
            installationDate: new Date(),
            url: 'https://jemetouche.online'
        }];
        vm.availablePlugins = [{
            name: 'Gaytube',
            dev: 'jeannustre',
            url: 'https://mescouilll.es'
        }, {
            name: 'Zerma',
            dev: 'chambo_e_d',
            url: null
        }];
        vm.install = install;
        // };

        function install(plugin) {
            if (plugin > -1) {
                var plug = vm.availablePlugins[plugin];
                vm.availablePlugins.splice(plugin, 1);
                plug.installationDate = new Date();
                vm.installedPlugins.push(plug);
            }
        }
    }
})();
