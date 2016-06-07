angular.module('app')
  .controller('LoginCtrl', function (AuthFactory, $location, $route) {
    const auth = this

    auth.login = () => {
      AuthFactory.login(auth.user.email, auth.user.password)
        .then(() => $location.path('/addresses'))
        .catch((err) => {
          console.error(err)
          $route.reload()
        })
    }
  })
