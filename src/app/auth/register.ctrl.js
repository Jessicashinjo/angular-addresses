angular.module('app')
  .controller('RegisterCtrl', function (AuthFactory, $location, $route) {
    const auth = this

    auth.register = () => {
      AuthFactory.register(auth.user.email, auth.user.password)
        .then(() => $location.path('/login'))
        .catch((err) => {
          console.error(err)
          $route.reload()
        })
    }
  })
