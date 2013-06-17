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
		footer: "Дезигн ис симпле",
	}
}

function DownloadCtrl ($scope) {
	$scope.btnText = "Загрузите фотографию";
	$scope.desc =  "На WWDC 2013 была представлена iOS7. её главной особенностью стали градиенты, так захуячь градиент и себя, не будь лохом.";

}
function cropCtrl ($scope) {
	$scope.btn = {
		next: "Далее",
		back: "Назад"
	}
}
