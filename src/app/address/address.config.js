angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/addresses', {
        controller: 'AddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/address/index.html',
      })
      .when('/addresses/new', {
        controller: 'NewAddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/address/form.html',
      })
      .when('/addresses/:id/edit', {
        controller: 'EditAddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/address/form.html',
      })
    )
  )
