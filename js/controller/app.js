/**
 * @author Kevin
 */

angular.module('omniscient', ['omniscientServices']).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/index', {templateUrl: 'views/map.html', controller: MapController}).
			when('/tagcloud', {templateUrl: 'views/tagcloud.html', controller: MapController}).
			when('/contact', {templateUrl: 'views/contact.html', controller: MapController}).
			when('/about', {templateUrl: 'views/about.html', controller: MapController}).
			otherwise({redirectTo: '/index'});
	}]);
