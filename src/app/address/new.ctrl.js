angular.module('app')
  .controller('NewAddressCtrl', function (AddressFactory, $location) {
    const address = this

    address.submit = () => {
      AddressFactory.create(address.person)
      $location.path('/addresses')

      // challenge mode
      // AddressFactory.create(address.person).then(...)
      //
      // challenge mode #2: add a 1 second delay, but implemnet #1 first
    }
  })
