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
    	
    	$routeProvider.when('/Users', {
    		templateUrl : 'Users',
    		controller : 'UsersCtrl',
    		pageTitle : 'User Page'
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