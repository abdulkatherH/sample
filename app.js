(function(){
	'use strict';
	angular
		.module('app', ['ngRoute', 'ngCookies'])
		.config(config)
		.run(run);
		
	config.$inject = ['$routeProvider', '$locationProvider'];
	
	function config($routeProvider, $locationProvider){
		$routeProvider
			.when('/Login', {
				controller: 'LoginController',
				templateUrl: 'Login/Login.html',
				controllerAs: 'vm'
			})
			.when('/Register', {
				controller: 'RegisterController',
				templateUrl: 'Register/Register.html',
				controllerAs: 'vm'
			})			
			.otherwise({redirectTo: '/Login'});
	}	
	
	run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
	function run($rootScope, $location, $cookies, $http){
		//alert("Welcome to app.js page !");
	}
})();