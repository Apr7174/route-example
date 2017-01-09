angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider, $scope){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm' //additional controllerAs field
        }).when('/city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl',
            controllerAs: 'vm'
        }).when('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'NewMealCtrl',
            controllerAs: 'vm'
        }).when('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'MyEarningsCtrl',
            controllerAs : 'vm'
        });
    }])
    .controller('HomeCtrl', [function() {
        var vm = this;
        vm.city = 'Boston';
    }])
    .controller('NewMealCtrl', [function() {
        var vm = this;
        vm.enterMeal = function() {
            vm.subtotal = vm.mealBase + (vm.mealBase * vm.taxRate / 100);
            console.log(vm.subtotal)
            vm.tip = (vm.subtotal * vm.tipPercentage / 100);
            vm.total = vm.subtotal + vm.tip;

            vm.tipTotal += vm.tip;
            vm.mealCount ++;
            vm.averageTip = vm.tipTotal / vm.mealCount; 

            // $scope.subtotal = $scope.mealBase + ($scope.mealBase * $scope.taxRate / 100);
            // $scope.tip = ($scope.subtotal * $scope.tipPercentage / 100);
            // $scope.total = $scope.subtotal + $scope.tip;

            // $scope.tipTotal += $scope.tip;
            // $scope.mealCount ++;
            // $scope.averageTip = $scope.tipTotal / $scope.mealCount; 
        }    
    }])
    .controller('MyEarningsCtrl', [function() {
        var vm = this;
        vm.city = 'New York';
        vm.tipTotal += vm.tip;

        vm.resetEarnings = function(){
            vm.tipTotal = 0;
            vm.mealCount = 0;   
            vm.averageTip = 0;
        }

    }])
    .controller('CityCtrl', [function() {
        var vm = this;
        vm.city = 'New York';
        vm.printCity = function(){
            console.log(vm.city);
            console.log(vm.subtotal);
        }
    }]);