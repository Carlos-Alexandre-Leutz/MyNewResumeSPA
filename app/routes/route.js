app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl',
    })

    .when('/pagina1', {
            templateUrl: 'app/views/p1.html',
            controller: 'Pagina1Ctr',
        })
        .when('/pagina2', {
            templateUrl: 'app/views/p2.html',
            controller: 'Pagina2Ctr',
        })

    .when('/pagina3', {
        templateUrl: 'app/views/p4.html',
        controller: 'Pagina3Ctr',
    })

    .when('/pagina4', {
        templateUrl: 'app/views/p4.html',
        controller: 'Pagina4Ctr',
    })

    .when('/pagina5', {
            templateUrl: 'app/views/p5.html',
            controller: 'Pagina5Ctr',
        })
        .when('/pagina6', {
            templateUrl: 'app/views/p6.html',
            controller: 'Pagina6Ctr',
        })



    .otherwise({ redirectTo: '/' });
});