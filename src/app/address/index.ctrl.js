angular.module('app')
  .controller('AddressCtrl', function (AuthFactory, AddressFactory, $route) {
    const address = this

    address.user = AuthFactory.getUser()
    address.loading = true

    AddressFactory.all()
      .then(console.log)
      .then(list => address.list = list)
      .then(() => address.loading = false)

    // Arrow Function causes TypeError with ng-inspector
    address.del = function (index) {
      // buggy with delay and array index if multiple deletes execute
      // should work better with proper database
      address.list[index].loading = true

      AddressFactory.delete(index)
        .then(() => (
          address.list = [
            ...address.list.slice(0, index),
            ...address.list.slice(index + 1)
          ]
        ))
        .catch($route.reload)
    }
  })
