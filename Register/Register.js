(function(){
	'use strict';
	angular
		.module('app')
		.controller('RegisterController', RegisterController);
	
	RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
	function RegisterController(UserService, $location, $rootScope, FlashService){
		var vm = this;
		vm.Register = Register;
		
		function Register(){
			vm.	dataLoading = true;
			alert("Welcome to register page!");
		}
	}
})();