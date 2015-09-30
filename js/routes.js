(function(){
'use strict';

skm.config(['$routeProvider', function($routeProvider) {
  
$routeProvider.when('/approchSearch', {templateUrl: 'js/partials/approach.html', controller: 'mainSearchController'});
$routeProvider.when('/emailSearch', {templateUrl: 'js/partials/email.html', controller: 'mainSearchController'});
  
$routeProvider.otherwise({redirectTo: '/approchSearch'});

}]);

})();