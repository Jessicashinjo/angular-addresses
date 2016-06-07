angular.module('app')
  .factory('AddressFactory', ($timeout) => {
    let list = [
      {
        name: 'Amy',
        phone: '+16152345678',
        email: 'amy@example.com',
        twitter: 'amy'
      },
      {
        name: 'Bob',
        phone: '+16153456789',
        email: 'bob@example.com',
        twitter: 'bob'
      },
      {
        name: 'Cal',
        phone: '+16154567890',
        email: 'cal@example.com',
        twitter: 'cal'
      },
      {
        name: 'Dom',
        phone: '+16155678901',
        email: 'dom@example.com',
        twitter: 'dom'
      }
    ]

    return {
      all () {
        // timeout = 1000 means callback after 1 second
        return $timeout(()=>{}, 1000).then(() => list)
      },

      get (id) {
        // timeout = 0 means callback ASAP but still async
        return $timeout().then(() => list[id])
      },

      create (person) {
        list.push(person)
      },

      update (index, person) {
        // id when passed by $routeParams is a string
        // thus: string + 1 === `${string}1`
        // prefer unary plus operator: +string + 1 === Number(string) + 1

        list = [
          ...list.slice(0, index),
          person,
          ...list.slice(+index + 1),
        ]
      },

      delete (index) {
        list = [
          ...list.slice(0, index),
          ...list.slice(index + 1),
        ]
      }
    }
  })
