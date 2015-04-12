(function(){
	angular.module('angularAuthDemo').directive('dirCaptainJusticeCarousel', function(){
		return {
			restrict : 'E',
			scope : {
				images : "=",
				path : "="
			},
			controller : 'CaptainJusticeCarouselCtrl',
			templateUrl: 'app/views/directiveViews/CaptainJusticeCarousel.html'
		}
	})
})();