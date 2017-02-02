(function(){
	'use strict';
	angular
		.module('app')
		.controller('LoginController', LoginController);
		
	LoginController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
	function LoginController(UserService, $location, $rootScope, FlashService){
		var vm = this;
		vm.Login = Login;
		
		function Login(){
			vm.dataLoading = true;
			alert("Welcome to Login controller!");
		}
	}
})();