angular.module('app')
  .controller('NewAddressCtrl', function (AddressFactory, $location) {
    const address = this

    address.heading = "New Address"

    address.submit = () => {
      address.loading = true

      AddressFactory.create(address.person)
        .then(() => $location.path('/addresses'))
        .catch(() => $location.path('/addresses'))
    }
  })
