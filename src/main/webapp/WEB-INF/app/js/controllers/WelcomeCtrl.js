(function(){
	angular.module('app.controllers').controller('WelcomeCtrl', ['$scope', '$location', function($scope, $location) {
		
		$scope.welcomeMessage = "Welcome to the website";
		
	}]);
})();