(function(){
	'use strict';
	angular
		.module('app')
		.factory('AuthenticationService', AuthenticationService);
	
	AuthenticationService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'UserService'];
	function AuthenticationService($http, $cookies, $rootScope, $timeout, UserService){
		var service = {};
		
		service.Login = Login;		
	}
})();