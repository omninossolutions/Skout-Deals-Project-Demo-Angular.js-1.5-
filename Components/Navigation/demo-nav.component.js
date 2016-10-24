(function () {
    "use strict"

    var module = angular.module("angulardemo");

    module.component("demoApp", {
        templateUrl: "/Components/Navigation/demo-nav.component.html",
        $routeConfig: [
            { path: "/dashboard", component: "appDashboard", name: "Dashboard" },
            { path: "/tables", component: "appTables", name: "Tables" },
            { path: "/forms", component: "appForms", name: "Forms" },
            { path: "/about", component: "appAbout", name: "About" },
            { path: "/**", redirectTo: ["Dashboard"] }
        ]
    });


})();