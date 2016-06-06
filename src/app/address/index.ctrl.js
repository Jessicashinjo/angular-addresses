angular.module('app')
  .controller('AddressCtrl', function (AddressFactory) {
    const address = this

    address.list = AddressFactory.all()

    // challenge mode
    // AddressFactory.all().then(list =>
    //   address.list = list
    // )

    address.delete = (index) => {
      AddressFactory.delete(index)

      // grab list again
      // address.list = AddressFactory.all()
      // or
      // edit in place
      // address.list.splice(index, 1)
      address.list = [
        ...address.list.slice(0, index),
        ...address.list.slice(index + 1)
      ]
    }

    // challenge
    // address.delete = (index) => {
    //   AddressFactory.delete(index).then(...)
    // }
  })
