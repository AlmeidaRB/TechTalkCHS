(function () {
  "use strict";

angular.module('mwl.calendar')
  .controller('CalendarController', function (CalendarService, $scope, $modal, moment) {

  $scope.events = [
    {
      title: 'CHS tech event title', // The title of the event
      type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      description: 'Event description',
      url: 'Event URL',
      starts_at: new Date(2013,5,1,1), // A javascript date object for when the event starts
      ends_at: new Date(2014,8,26,15), // A javascript date object for when the event ends
      editable: true, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
      deletable: true // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      }
    ];

    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();

    var currentYear = moment().year();
    var currentMonth = moment().month();

    function showModal(action, event) {
      $modal.open({
        templateUrl: 'modalContent.html',
        controller: function($scope, $modalInstance) {
          $scope.$modalInstance = $modalInstance;
          $scope.action = action;
          $scope.event = event;
        }
      });
    }

    $scope.eventClicked = function(event) {
      showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      showModal('Deleted', event);
    };

    $scope.setCalendarToToday = function() {
      $scope.calendarDay = new Date();
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();

      event[field] = !event[field];
    };

  });



})();

//two versions of controller built
//we will pick one depending on live server/format of plugin

//version 1
//applied when not using live server
(function () {
  "use strict";

  angular.module('ttcApp')
    .controller('CalendarController', function (CalendarService, $scope, $location) {
        var mainCtrl = this;

        calCtrl.events = CalendarService.getEvents();

        mainCtrl.addEvent = function (event) {
          CalendarService.addEvent(newEvent);
          $scope.newEvent = {};
        };
    });

  })();


//version 2
//applied when using live server

(function () {
      "use strict";

  angular.module('ttcApp')
    .controller('CalendarController', function (CalendarService, $rootScope, $scope, $routeParams, $location) {
      var mainCtrl = this;

      CalendarService.getEvents().success(function(data) {
        calCtrl.events = data;
      });

      CalendarService.getEvent($routeParams.eventIndex).success(function(data) {
        calCtrl.singleEvent = data;
      });

      mainCtrl.currentIndex = $routeParams.eventIndex;

      mainCtrl.addEvent = function (event) {
      CalendarService.addEvent(newEvent);
      $scope.newEvent = {};

    });

  })();
