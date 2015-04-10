(function(){
	angular.module('app.controllers').controller('RouteChangeCtrl', ['$scope', '$route', function($scope, $route) {
		
		$scope.$watch(function() {
			return ($route.current && $route.current.css) ? $route.current.css
					: '';
		}, function(value) {
			$scope.css = value;
		});
		
		$scope.$watch(function() {
			return ($route.current && $route.current.pageTitle) ? $route.current.pageTitle
					: '';
		}, function(value) {
			$scope.pageTitle = value;
		});				

	}]);
})();