(function() {
    var myApp = angular.module('angularAuthDemo', [
        'ngRoute',
        'app.controllers',
        'ui.bootstrap',
        'angularjs-dropdown-multiselect'
    ]);

    myApp.config(['$routeProvider', function($routeProvider) {

    	$routeProvider.when('/', {
    		templateUrl : 'Welcome',
    		controller : 'WelcomeCtrl',
    		pageTitle : 'Welcome Page'
    	});
    	
    	$routeProvider.when('/About', {
    		templateUrl : 'About',
    		controller : 'AboutCtrl',
    		pageTitle : 'About Page'
    	});    	

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }])
    .run(['$rootScope', '$location', function($rootScope, $location){
    	$rootScope.$on('$locationChangeStart', function(){
    		console.log("Changing location...");
    	})
    }]);
}());