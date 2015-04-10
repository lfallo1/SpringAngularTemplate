(function(){
	angular.module('angularAuthDemo').directive('dirNavBar', function(){
		return {
			restrict : 'E',
			scope : {},
			controller : 'NavbarCtrl',
			templateUrl: 'app/views/directiveViews/Navbar.html'
		}
	})
})();