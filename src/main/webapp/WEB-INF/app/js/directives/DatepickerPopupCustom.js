(function(){
	angular.module('angularAuthDemo').directive('dirDatepickerPopupCustom', function(){
		return {
			restrict : 'E',
			scope : {
				dt : "="
			},
			controller : 'DatepickerPopupCustomCtrl',
			templateUrl: 'app/views/directiveViews/DatepickerPopupCustom.html'
		}
	})
})();