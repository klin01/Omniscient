/**
 * @author Kevin
 */

angular.module('omniscientServices', ['ngResource']).
	factory('Query', function($resource){
		return $resource('twistorm/:queryId', {}, {
			query: {method: 'POST', params: { queryId: ''}, isArray: false}
		});
	});
