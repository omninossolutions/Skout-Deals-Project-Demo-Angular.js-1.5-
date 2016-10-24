(function () {
    "use strict";
    var module = angular.module("angulardemo");

    function controller($http) {

        var model = this;
        model.$onInit = function () {
            debugger;
            ///load any http call
        }
    }


    module.component("appTables", {
        templateUrl: "/Components/Tables/demo-tables.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });

})();