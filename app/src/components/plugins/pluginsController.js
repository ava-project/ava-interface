(function () {
    'use strict';

    angular.module('ava')
        .controller('PluginsController', PluginsController);

    function PluginsController() {
        var vm = this;

        // NOTE: $onInit is not yet supported by ui-router
        // vm.$onInit = function() {
        vm.installedPlugins = [{
            name: 'Firefox',
            dev: 'jeannustre',
            img: 'https://cdn1.iconfinder.com/data/icons/appicns/513/appicns_Firefox.png',
            installationDate: new Date(),
            url: 'https://firefox.com'
        }, {
            name: 'Google-Chrome',
            dev: 'amouro_d',
            img: 'https://cdn0.iconfinder.com/data/icons/jfk/512/chrome-512.png',
            installationDate: new Date(),
            url: 'https://google.com'
        }];
        vm.availablePlugins = [{
            name: 'Atom',
            dev: 'jeannustre',
            url: 'https://atom.io'
        }, {
            name: 'Sublime Text',
            dev: 'chambo_e_d',
            url: 'https://www.sublimetext.com/'
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
