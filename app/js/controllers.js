'use strict';

/* Controllers */


function Shippo($scope) {
	//$scope.run = 1000;
	$scope.max = 25000;
	$scope.sec1fat = 600;
	$scope.min1fat = $scope.sec1fat/60;

	$scope.ki_pool=81;
	$scope.fatigues=9;

	$scope.distance=500;

	$scope.turns = function() {
		return $scope.distance * 1000 / $scope.max;
	}
	$scope.spent_fatigues = function() {
		return Math.floor($scope.turns() * 3 / $scope.sec1fat);
	}
	$scope.trip_m = function() { return $scope.turns() * 3 / 60; }
	$scope.spent_ki = function() { return Math.floor($scope.turns() / 10); }
	$scope.recover_h = function() {
		var fat_recover_as_ki = $scope.spent_fatigues() * 5; 
		var ki_recover = (18 + fat_recover_as_ki + $scope.spent_ki())/6;

		return Math.ceil(ki_recover); 
	}
}
Shippo.$inject= ['$scope'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
