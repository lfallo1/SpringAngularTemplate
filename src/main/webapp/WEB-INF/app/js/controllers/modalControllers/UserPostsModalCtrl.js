(function(){
	angular.module('app.controllers').controller('UserPostsModalCtrl', ['$scope', '$modalInstance', 'posts', 'user', function($scope, $modalInstance, posts, user) {
		
		//public variables
		$scope.posts = posts;
		$scope.user = user;
		$scope.editing = [];
		
		$scope.openEditPost = function(index){
			$scope.editing[index] = true;
		};
		
		$scope.closeEditPost = function(index){
			$scope.editing[index] = false;
		};
		
		$scope.cancel = function(){
			$modalInstance.dismiss('Cancel was clicked');
		};
		
		$scope.okay = function(){
			$modalInstance.close(posts);
		}
		
	}]);
})();