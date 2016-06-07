angular.module('app')
  .factory('AuthFactory', (delay) => {
    const users = {
      'a@b.com': '123',
      'b@c.com': '123'
    }

    let user = null

    return {
      login (email, password) {
        return delay(5000).then(() => (
          users[email] === password
            ? Promise.resolve(user = email)
            : Promise.reject('Authentication Failed')
        ))
      },

      register (email, password) {
        return delay(5000).then(() => {
          if (users[email]) {
            Promise.reject('Registration Failed')
          }

          users[email] = {email, password}
          Promise.resolve(email)
        })
      },

      getUser () {
        return user
      }

    }
  })
