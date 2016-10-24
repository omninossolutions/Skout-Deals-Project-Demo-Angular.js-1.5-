(function () {
    "use strict";

    var module = angular.module("angulardemo", ["ngComponentRouter"]);

    module.value("$routerRootComponent", "demoApp")
   
    module.component("appAbout", {
        template: "This is about tempalate"
    })

}());
