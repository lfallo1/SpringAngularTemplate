(function(){
	angular.module('app.controllers').controller('WelcomeCtrl', ['$scope', '$location', '$modal', '$http', '$q', 'CaptainJusticeImages',
	            function($scope, $location, $modal, $http, $q, CaptainJusticeImages) {
		
		//private variables
		var deferred = $q.defer();
		
		//public variables
		$scope.welcomeMessage = "Welcome to the website";
		$scope.users = [];
		
		$scope.dt = new Date();
		
		//private methods
		var generateRand = function(){
			return Math.floor(Math.random() * (10-1)) + 1;
		}		
		
		deferred.promise.then(function(response){
			$scope.deferredResult = response;
			$scope.deferredResultClass = 'alert alert-success';
		}, function(err){
			$scope.deferredResult = err;
			$scope.deferredResultClass = 'alert alert-danger';
		});		
		
		
		//public methods
		$scope.tryResolve = function(){
			$scope.answered = true;
			if(Number($scope.answer) === (Number($scope.num1) + Number($scope.num2))){
				deferred.resolve('You got it!!!');
			}
			else{
				deferred.resolve('Nope, you wrong!!!');
			}
			
		};
		
		$scope.openInfoModal = function(){
			var modalInstance = $modal.open({
				backdrop : 'static',
                templateUrl: 'app/views/modalViews/InfoModal.html',
                controller: 'InfoModalCtrl',
                resolve: {
                    title: function () {
                        return "What is Angular?";
                    },
                    body: function(){
                    	return 'Banksy four dollar toast twee artisan pork belly, tofu shabby chic cold-pressed health goth put a bird on it readymade yr hella photo booth scenester. Health goth synth Helvetica, plaid ugh artisan kogi DIY polaroid Carles Wes Anderson. Fanny pack PBR fap, banjo single-origin coffee McSweeney\'s authentic wayfarers polaroid try-hard master cleanse cliche. PBR&B health goth fanny pack slow-carb. PBR&B XOXO wolf selvage fashion axe. Shabby chic hashtag Bushwick, sriracha Vice Echo Park stumptown farm-to-table Pinterest +1 swag whatever semiotics Shoreditch. Seitan pop-up health goth pug kale chips, Pinterest cardigan Etsy hella distillery brunch selfies forage DIY Vice'
                    }
                }
			});
			
			modalInstance.opened.then(function(){
				console.log('opened!');
			});
			
			modalInstance.result.then(function(data){
				console.log(data);
			}, function(err){
				console.log(err);
			});
		};
		
		$scope.dropdownToggle = function($event){
			$event.preventDefault();
			$event.stopPropagation();
			$scope.dropdown.isopen = true;
		};
		
		$scope.getUsers = function(){
			var promise = $http.get('http://jsonplaceholder.typicode.com/users');
			
			console.log(promise);
			
			promise.then(function(response){
				console.log('got data')
				$scope.users = response.data;
			}, function(err){
				console.log(err);
			}, function(){
				console.log('loading data...')
			}).finally(function(){
				console.log('finished');
			});
		};
		
		
		$scope._onLoad = function(){
			$scope.num1 = generateRand();
			$scope.num2 = generateRand();
			$scope.answer = 0;
			$scope.basePath = CaptainJusticeImages.getPath();
			$scope.captainJusticeImages = CaptainJusticeImages.getImages();
		};
		
		$scope._onLoad();
		
	}]);
})();