(function () {
    'use strict';

    angular.module('ava')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$timeout', '$state'];

    function LoginController($timeout, $state) {
        $state.go('dashboard.content');
        return ;
        var vm = this;

        // NOTE: $onInit is not yet supported by ui-router
        // vm.$onInit = function() {
        vm.asked = false;
        vm.user = {};

        vm.submit = submit;
        // };

        function submit() {
            vm.asked = true;
            $timeout(function () {
                vm.asked = false;
                $state.go('dashboard.content');
            }, 1000);
        }
    }
})();
