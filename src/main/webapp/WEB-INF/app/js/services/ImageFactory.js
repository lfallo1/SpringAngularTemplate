/**
 * 
 */

(function(){
	angular.module('app.factories').factory('CaptainJusticeImages', [ function(){
		var factory = {};
		
		var captainJusticeImageObjects = [
            {
            	'type' : 'Victorious',
            	'img' : 'CaptainJustice1.jpg',
            	'text' : 'Our spandex clad protector stands victory... Evil never stood a chance against our almighty superhero'
            },
            {
            	'type' : 'Eaten',
            	'img' : 'CaptainJusticeEaten1.jpg',
            	'text' : 'So, this giant snake thing had been eating innocent citizens. Thus, our spandex-clad saviour was sent to save the day. But instead, it looks like our almighty, so-called invincible champion of justice, just became the snake\'s dinner!! Now that looks like a super tasty snack!'
            },
            {
            	'type' : 'Eaten',
            	'img' : 'CaptainJusticeEaten2.jpg',
            	'text' : 'Already half devoured, the spandex-clad champion of justice will soon be digested inside the belly of this beast. What remains of the once invincible superhero, will be crapped out into an unnoticeable pile of feces... This did not go quite how Captain Justice planned.'
            },            
            {
            	'type' : 'Captured',
            	'img' : 'CaptainJustice-Peril0.jpg',
            	'text' : 'The mob was fed up with our almighty spandex-clad protector thwarting all their plans... So, the most dangerous mob boss in the world put out a 20 million dollar bounty for Captain Justice... Unfortunately for our almighty superhero, looks like he won\'t be fighting crime again any time soon'
            },
            {
            	'type' : 'Boots',
            	'img' : 'BootsCaptainJustice.jpg',
            	'text' : 'The sovereign leather boots of our spandex-clad protector!'
            }          
        ];
		
		factory.getPath = function(){
			return 'app/images/';
		};
		
		factory.getImages = function(){
			return captainJusticeImageObjects;
		};
		
		factory.getImageObjByType = function(type){
			return captainJusticeImageObjects.filter(function(d){if(d.type === type){return d}})[0];
		};
		
		return factory;
	}]);
})();