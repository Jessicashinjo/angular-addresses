angular.module('app')
  .controller('LoginCtrl', function ($location, AuthFactory) {
    const auth = this

    auth.login = function () {
      AuthFactory.login(auth.user.email, auth.user.password)
        .then(() => $location.path('/addresses'))
        .catch(() => alert('Login Failed'))
    }
  })
