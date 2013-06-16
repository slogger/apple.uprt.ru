var app = angular
	.module('uprt', [])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	  $routeProvider.
	    when('/', {
	      templateUrl:'views/downloadImage.html', 
	      controller:'DownloadCtrl'
	    }).
	    when('/result', {
	      templateUrl: 'views/results.html'
	    }).
	    when('/process', {
	      templateUrl: 'views/process.html', 
	      controller:'cropCtrl'
	    }).
	    otherwise({ redirectTo: '/' })
	    ;

	    $locationProvider.html5Mode(false);
	  }]);

function MainCtrl ($scope) {
	$scope.title = "APPLE.UPRT.RU";
	$scope.footer = "Дезигн ис симпле";
}

function DownloadCtrl ($scope) {
	$scope.btnText = "Загрузите фотографию";
}
function cropCtrl ($scope) {
	$scope.btnText = "Далее";
}
