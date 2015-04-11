(function(){
	angular.module('app.controllers').controller('DatepickerPopupCustomCtrl', ['$scope', function($scope) {

		$scope.minDate = new Date();
		$scope.minDate.setDate($scope.dt.getDate() - 90);
		$scope.maxDate = new Date();

		$scope.dtPopupOptions = {
			formatYear : 'yy',
			startingDay : 1
		};

		$scope.openDate = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.dateOpened = true;
		};

		$scope.formats = [ 'dd-MMMM-yyyy',
				'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate' ];
		$scope.format = $scope.formats[0];				
		
	}]);
})();