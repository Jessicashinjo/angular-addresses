angular.module('app')
  .controller('EditAddressCtrl', function (AddressFactory, $routeParams, $location) {
    const address = this
    const id = $routeParams.id

    address.heading = 'Edit Address'
    address.loading = true

    AddressFactory.get(id)
      .then(person => address.person = person)
      .then(() => address.loading = false)
      .catch(() => $location.path('/addresses'))

    address.submit = () => {
      AddressFactory.update(id, address.person)
        .then(() => $location.path('/addresses'))
        .then(() => address.loading = true)
        .catch(() => $location.path('/addresses'))
    }
  })
