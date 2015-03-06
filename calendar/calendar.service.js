(function () {
  "use strict";

  angular.module('mwl.calendar')
    .factory('CalendarService', function () {
      var factoryObj = {};
      return factoryObj;
    });

})();

// (function (){
//     "use strict";
//     angular.module('.ttcApp')
//     .factory('CalendarService', function($http, $rootScope){
//          var url: "http://www.tiy-fee-rest.herokuapp.com/collections/ttcService"
//
//
//           var getEvent = function () {
//             return $http.get(url);
//           };
//           var addEvent = function (Info) {
//             $http.post(url, Info);
//           };
//
//
//         return {
//           getEvent: getEvent,
//           addEvent: addEvent,
//
//         };
//
//         })
//
//     })
