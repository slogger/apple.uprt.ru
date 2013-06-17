angular
	.module('apple.uprt', [])
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
	$scope.model = {
		title: "APPLE.UPRT.RU",
		footer: "Десигн ис симпл",
	}
}

function DownloadCtrl ($scope) {
	$scope.btnText = "Загрузите фотографию";
	$scope.desc =  "Зафигачь градиент, не будь лалкой.";

}
function cropCtrl ($scope) {
	$scope.btn = {
		next: "Далее",
		back: "Назад"
	}
}
