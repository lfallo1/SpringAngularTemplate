(function(){
	angular.module('app.controllers').controller('CaptainJusticeCarouselCtrl', ['$scope', function($scope) {

		$scope.interval = 5000;
		
		$scope.pause = function(){
			$scope.interval = 0;
		};
		
		$scope.resume = function(){
			$scope.interval = 1000;
		};
		
	}]);
})();