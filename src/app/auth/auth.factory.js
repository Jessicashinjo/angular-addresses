angular.module('app')
  .factory('AuthFactory', ($timeout) => {
    const users = {
      'a@b.com': '123',
      'b@c.com': '123'
    }

    let currentUser = null

    return {
      login (email, password) {
        return $timeout().then(() => (
          // Using Fake database
          users[email] === password
            ? Promise.resolve(currentUser = email)
            : Promise.reject('Authentication Failed')

          // Using firebase
          // firebase.auth().signInWithEmailAndPassword(email, password)
        ))
      },

      logout () {
        return $timeout().then(() => (
          // Using fake database
          currentUser = null

          // Using firebase
          // firebase.auth().signOut()
        ))
      },

      getUser () {
        // Using Fake database
        return currentUser

        // Using firebase
        // return firebase.auth().currentUser
      }
    }
  })
