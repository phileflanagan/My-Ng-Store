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
			$scope.addListing = false;
			return $scope.items;
		}

		$scope.editItem = function(item) {
			$scope.editListing = true;
			$scope.existingListing = item;

		}

		$scope.saveStoreEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		$scope.deleteItem = function(listing) {
			var index = $scope.items.indexOf(listing);
			$scope.items.splice(index, 1);
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		storeFactory.getStore().success(function(data){
			$scope.items = data;
		}).error(function(error){
			console.log(error);
		});

	});