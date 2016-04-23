angular
	.module('ngStore')
	.controller('storeController', function($scope, storeFactory){
		$scope.items;

		$scope.priceInfo = {
			min: 0,
			max: 200
		}

		$scope.newListing = {};

		$scope.addItem = function(newListing) {
			var newListingHolder = newListing;
			$scope.items.push(newListingHolder);
			$scope.newListing = {};
			return $scope.items;
		}

		storeFactory.getStore().success(function(data){
			$scope.items = data;
		}).error(function(error){
			console.log(error);
		});

	});