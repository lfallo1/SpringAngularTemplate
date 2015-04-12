(function(){
	angular.module('app.controllers').controller('UsersCtrl', ['$scope', '$location', '$timeout', '$q', '$http', '$modal', 'UserPostsService', 
                 function($scope, $location, $timeout, $q, $http, $modal, UserPostsService) {
		
		//public variables
		$scope.aboutMessage = "User Info Page";
		$scope.loadingUsers = true;
		
		var userAndPostPromises = $q.all([UserPostsService.getUsers(), UserPostsService.getPosts()]);
		
		//wait for both user & posts promises to complete, then handle
		userAndPostPromises.then(function(data){
			$scope.error = false;
			$scope.users = data[0];
			var posts = data[1];
			for(var i = 0; i < $scope.users.length; i++){
				$scope.users[i].posts = posts.filter(function(d){
					if(d.userId === $scope.users[i].id){
						return d;
					}
				});
			}
			$scope.loadingUsers = false
		}, function(err){
			$scope.error = 'Unable to retrieve data from ' + err.reason.config.url;
			$scope.loadingUsers = false
		});
		
		$scope.showPosts = function(user){
			var modalInstance = $modal.open({
				templateUrl : 'app/views/modalViews/UserPostsModal.html',
				controller: 'UserPostsModalCtrl',
				resolve : {
					posts : function(){
						return angular.copy(user.posts); //pass a copy of the posts, so editing is not saved until user clicks save inside the modal
					},
					user : function(){
						return user;
					}
				}
			});
			
			modalInstance.result.then(function(response){
				$scope.users.filter(function(d){if(d.id === user.id){return d;}})[0].posts = response;
			}, function(err){
				console.log(err);
			});
		};
		
	}]);
})();