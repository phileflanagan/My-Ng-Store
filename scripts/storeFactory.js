angular
	.module('ngStore')
	.factory('storeFactory', function($http){


		function getStore(){
			return $http.get('data/data.json');
		};

		return {
			getStore: getStore
		}
});