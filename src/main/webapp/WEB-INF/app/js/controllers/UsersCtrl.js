(function(){
	angular.module('app.controllers').controller('UsersCtrl', ['$scope', '$location', '$timeout', '$q', '$http', '$modal', 
                 function($scope, $location, $timeout, $q, $http, $modal) {
		
		//public variables
		$scope.aboutMessage = "User Info Page";
		$scope.loadingUsers = true;
		
		//private variables
		var userPromise = $http.get('http://jsonplaceholder.typicode.com/users');
		var postsPromise = $http.get('http://jsonplaceholder.typicode.com/posts');
		var userAndPostPromises = $q.all([userPromise, postsPromise]);
		
		//wait for both user & posts promises to complete, then handle
		userAndPostPromises.then(function(result){
			$scope.error = false;
			$scope.users = result[0].data;
			for(var i = 0; i < $scope.users.length; i++){
				$scope.users[i].posts = result[1].data.filter(function(d){
					if(d.userId === $scope.users[i].id){
						return d;
					}
				});
			}
			$scope.loadingUsers = false
		}, function(err){
			$scope.error = 'Unable to retrieve data from ' + err.config.url;
			$scope.loadingUsers = false
		});
		
		$scope.showPosts = function(user){
			var modalInstance = $modal.open({
				templateUrl : 'app/views/modalViews/UserPostsModal.html',
				controller: 'UserPostsModalCtrl',
				resolve : {
					posts : function(){
						return angular.copy(user.posts); //pass a copy of the posts, so editing is not saved until user clicks accept
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