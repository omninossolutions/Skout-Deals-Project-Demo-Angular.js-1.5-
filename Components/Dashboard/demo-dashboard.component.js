(function () {
    "use strict";
    var module = angular.module("angulardemo");

    function controller($http) {

        var model = this;
        model.data = [];
        model.$onInit = function () {
            debugger;
         ///load any http call
        }
    }


    module.component("appDashboard", {
        templateUrl: "/Components/Dashboard/demo-dashboard.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });

})();