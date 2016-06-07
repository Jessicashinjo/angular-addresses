angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/login', {
        templateUrl: 'app/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth',
      })
      .when('/register', {
        templateUrl: 'app/auth/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'auth',
      })
      .when('/logout', {
        template: '',
        controller: 'LogoutCtrl',
        controllerAs: 'logout',
      })
  ))
