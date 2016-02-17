var app = angular.module("app", []);

app.controller('appController', ['$scope', 
	function ($scope) {
		$scope.books = [
			{
				id: 1,
				name: 'แฮร์รี พอตเตอร์ กับ ศิลาอาถรรพ์',
				price: 100,
				amount: 0
			},
			{
				id: 2,
				name: 'แฮร์รี พอตเตอร์ กับ ห้องแห่งความลับ',
				price: 100,
				amount: 0
			},
			{
				id: 3,
				name: 'แฮร์รี พอตเตอร์ กับ นักโทษแห่งอัซคาบัน',
				price: 100,
				amount: 0
			},
			{
				id: 4,
				name: 'แฮร์รี พอตเตอร์ กับ ถ้วยอัคนี',
				price: 100,
				amount: 0
			},
			{
				id: 5,
				name: 'แฮร์รี พอตเตอร์ กับ ภาคีนกฟินิกซ์',
				price: 100,
				amount: 0
			},
			{
				id: 6,
				name: 'แฮร์รี พอตเตอร์ กับ เจ้าชายเลือดผสม',
				price: 100,
				amount: 0
			},
			{
				id: 7,
				name: 'แฮร์รี พอตเตอร์ กับ เครื่องรางยมทูต',
				price: 100,
				amount: 0
			}
		];
		$scope.uniqueBookAmount = 0;
		$scope.totalAmount = 0;
		$scope.totalPrice = 0;
		$scope.totalDiscount = 0;
		$scope.totalPriceWithDiscount = 0;

		$scope.calculate = function () {
			var discountPercentage = 0;

			if ($scope.uniqueBookAmount === 2) {
				discountPercentage = 10;
			}
			else if ($scope.uniqueBookAmount === 3) {
				discountPercentage = 20;
			}
			else if ($scope.uniqueBookAmount === 4) {
				discountPercentage = 30;
			}
			else if ($scope.uniqueBookAmount === 5) {
				discountPercentage = 40;
			}
			else if ($scope.uniqueBookAmount === 6) {
				discountPercentage = 50;
			}
			else if ($scope.uniqueBookAmount === 7) {
				discountPercentage = 60;
			}

			if (discountPercentage > 0) {
				$scope.totalDiscount = $scope.totalPrice*discountPercentage/100;
				$scope.totalPriceWithDiscount = $scope.totalPrice - $scope.totalDiscount;
			}
		};

		$scope.$watch('books', function(newValue) {
	   		$scope.uniqueBookAmount = 0;
	   		$scope.totalAmount = 0;
	   		$scope.totalPrice = 0;

	       	for (var b in newValue) {
	       		if (isNaN(parseInt(newValue[b].amount))) {
	       			alert('Amount must be number!');
	       			return;
	       		}
	       		if (newValue[b].amount > 0) {
	       			$scope.uniqueBookAmount++;
	       			$scope.totalAmount += newValue[b].amount;
	       			$scope.totalPrice += newValue[b].amount*newValue[b].price;
	       		}
	       		$scope.calculate();
	    	}
		}, true);
	}
]);