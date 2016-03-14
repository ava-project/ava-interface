(function() {
    'use strict';

    angular.module('ava')
        .controller('PluginsController', PluginsController);

    PluginsController.$inject = ['$rootScope'];

    function PluginsController($rootScope) {
        var vm = this;

        // NOTE: $onInit is not yet supported by ui-router
        // vm.$onInit = function() {
        vm.installedPlugins = [{
            madeBy: 'Github',
            name: 'Atom',
            dev: 'jeannustre',
            url: 'https://atom.io',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Atom_editor_logo.svg/2000px-Atom_editor_logo.svg.png'
        }];
        vm.availablePlugins = [{
            madeBy: 'Mozilla',
            name: 'Firefox',
            dev: 'jeannustre',
            img: 'https://cdn1.iconfinder.com/data/icons/appicns/513/appicns_Firefox.png',
            installationDate: new Date(),
            url: 'https://firefox.com'
        }, {
            madeBy: 'Alphabet Inc.',
            name: 'Google-Chrome',
            dev: 'amouro_d',
            img: 'https://cdn0.iconfinder.com/data/icons/jfk/512/chrome-512.png',
            installationDate: new Date(),
            url: 'https://google.com'
        }, {
            madeBy: 'AVA Team',
            name: 'Application Launcher',
            dev: 'chambo_e_d',
            url: 'https://www.sublimetext.com/',
            img: 'assets/img/launcher.png'
        }, {
            madeBy: 'Sublime Text',
            name: 'Sublime Text',
            dev: 'chambo_e_d',
            url: 'https://www.sublimetext.com/',
            img: 'http://2.bp.blogspot.com/-nrgKz1hgc00/VKeWCHbw_aI/AAAAAAAAAKQ/yh1SfF9GB_E/s1600/logo-sublime-3.png'
        }];
        vm.install = install;
        vm.delete = del;
        // };

        function install(plugin) {
            if (plugin > -1) {
                var plug = vm.availablePlugins[plugin];
                vm.availablePlugins.splice(plugin, 1);
                $rootScope.coreClient.write(plug.name + ':true');
                plug.installationDate = new Date();
                vm.installedPlugins.push(plug);
            }
        }

        function del(plugin) {
            if (plugin > -1) {
                var plug = vm.installedPlugins[plugin];
                vm.installedPlugins.splice(plugin, 1);
                $rootScope.coreClient.write(plug.name + ':false');
                delete plug.installationDate;
                vm.availablePlugins.push(plug);
            }
        }
    }
})();
