angular.module('app')
  .factory('AddressFactory', (delay) => {
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
        return delay(5000).then(() => (
          list
            ? Promise.resolve(list)
            : Promise.reject('Missing address list')
        ))

        // return new Promise(resolve, reject) {
        //   if (list) {
        //     resolve(list)
        //   }
        //   reject('Missing address list')
        // }
      },

      get (id) {
        return delay(5000).then(() => (
          list[id]
            ? Promise.resolve(list[id])
            : Promise.reject(`Address with id: ${id} not found`)
        ))
      },

      create (person) {
        // With:
        // Promise.resolve(list.push(person))
        // Question: What does list.push(person) return?
        // Answer: The list's new count
        // Prefer: Promise.resolve(list.push(person)).then(() => list)

        // What if list.push(person) errors? Does it reject?
        //
        // Prefer:
        // return Promise.resolve()
        //   .then(() => list.push(person))
        //   .then(() => list)

        return delay(5000)
          .then(() => list.push(person))
          .then(() => list)
      },

      update (index, person) {
        // id when passed by $routeParams is a string
        // thus: string + 1 === `${string}1`
        // prefer unary plus operator: +string + 1 === Number(string) + 1

        return delay(5000).then(() => (
          list = [
            ...list.slice(0, index),
            person,
            ...list.slice(+index + 1),
          ]
        ))
      },

      delete (index) {
        return delay(5000).then(() => (
          list = [
            ...list.slice(0, index),
            ...list.slice(index + 1),
          ]
        ))
      }
    }
  })
