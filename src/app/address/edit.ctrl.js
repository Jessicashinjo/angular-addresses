angular.module('app')
  .controller('EditAddressCtrl', function (AddressFactory, $routeParams, $location) {
    const address = this
    const id = $routeParams.id

    address.person = AddressFactory.get(id)

    // challenge mode
    // AddressFactory.get(index).then(...)

    address.submit = () => {
      AddressFactory.update(id, address.person)
      $location.path('/addresses')

      // challenge mode
      // AddressFactory.update(address.person).then(...)
    }
  })
