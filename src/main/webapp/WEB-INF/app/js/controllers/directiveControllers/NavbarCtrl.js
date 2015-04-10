(function(){
	angular.module('app.controllers').controller('NavbarCtrl', ['$scope', '$location', function($scope, $location) {
		
		$scope.links = ['Home', 'About', 'Contact'];

		$scope.navigate = function(location){
			$location.path('/' + location);
		};
		
	}]);
})();