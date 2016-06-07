angular.module('app')
  .factory('delay', $timeout => (ms = 0) => $timeout(()=>{}, ms))
