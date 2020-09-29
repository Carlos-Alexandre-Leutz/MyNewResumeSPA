var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/home.html",
            controller: 'HomeCtrl',

        })
        .when("/pagina1", {
            templateUrl: "template/p1.html"

        })
        .when("/pagina2", {
            templateUrl: "template/p2.html"

        })

    .when("/pagina3", {
            templateUrl: "template/p3.html"

        })
        .when("/pagina4", {
            templateUrl: "template/p4.html"

        })
        .when("/pagina5", {
            templateUrl: "template/p5.html"

        })
        .when("/pagina6", {
            templateUrl: "template/p6.html"

        })



    .otherwise({ redirectTo: '/' })
})