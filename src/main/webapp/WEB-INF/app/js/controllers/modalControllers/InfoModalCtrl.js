(function(){
	angular.module('app.controllers').controller('InfoModalCtrl', ['$scope', '$modalInstance', 'title', 'body', function($scope, $modalInstance, title, body) {
		
		$scope.title = title;
		
		$scope.body = body;
		
		$scope.close = function(){
			$modalInstance.dismiss('Cancel was clicked');
		};
		
		$scope.okay = function(){
			$modalInstance.close('Okay was clicked');
		}
		
	}]);
})();