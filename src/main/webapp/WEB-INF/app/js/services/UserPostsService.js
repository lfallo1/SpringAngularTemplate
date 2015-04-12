/**
 * 
 */
(function(){
	angular.module('app.services').service('UserPostsService', ['$http', function($http){
		var self = this;
		
		self.getUsers = function(){
			var userPromise = $http.get('http://jsonplaceholder.typicode.com/users');
			return userDataPromise = userPromise.then(function(response){
				return response.data;
			}, function(err){
				throw {
					success : false,
					reason : err
				};
			});			
		};
		
		self.getPosts = function(){
			var postsPromise = $http.get('http://jsonplaceholder.typicode.com/posts');
			return postsDataPromise = postsPromise.then(function(response){
				return response.data;
			}, function(err){
				throw {
					success : false,
					reason : err
				};
			});			
		};
		
	}]);
})();