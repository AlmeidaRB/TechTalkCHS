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
      editable: false, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
      deletable: false // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      }
    ];

    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();

    var currentYear = moment().year();
    var currentMonth = moment().month();

    $scope.events = [
  {
    title: 'Iron Yard Final Presentations',
    type: 'special',
    description: 'Final project presentations for The Iron Yard Academy Graduates of Charleston.',
    url: 'http://www.meetup.com/The-Iron-Yard-Charleston/',
    starts_at: new Date(currentYear,currentMonth,27,14,60),
    ends_at: new Date(currentYear,currentMonth,27,16,60)
  },
  {
    title: 'Charleston Ruby Society',
    type: 'info',
    description: 'Presentations about Ruby/Ruby on Rails/etc! Join us for the first inaugural MeetUp for the Charleston Ruby Group. The plan is to have a series of presentations about anything related to the Ruby programming language, the Ruby on Rails web framework, sweet Ruby Gems, interesting techniques, etc. Presentations should be concise, aim for 5-7 minutes per presenter. If you do wish to present something and you have a presentation of some sorts (PowerPoint, Prezi, anything of the like really), please message me beforehand if you could. I\'d like to create a compilation of sorts for anyone who wants to go back and look through what was presented. Also, there should be food available. Hope to see some familiar and new faces there!',
    url: 'http://www.meetup.com/The-Iron-Yard-Charleston/events/220762519/',
    starts_at: new Date(currentYear,currentMonth,12,19,60),
    ends_at: new Date(currentYear,currentMonth,12,21,60)
  },
  {
    title: 'Hack Night',
    type: 'info',
    description: 'Come one, come all to Hack Night! Hack night is a gathering of programmers, designers, hardware hackers, and other tech minded creators. We\'re open to all who are wanting to make something, contribute to open source, or need help with a project. Charleston has a great tech community with a lot of focused gatherings on learning code and sharing ideas or new technologies, but there\'s not really a regular meetup for hacking on some code or collaborating on something really cool.',
    url: 'http://www.meetup.com/The-Iron-Yard-Charleston/events/220130863/',
    starts_at: new Date(currentYear,currentMonth,20,18,60),
    ends_at: new Date(currentYear,currentMonth,20,22,60)
  },
  {
    title: 'Putting the User in User Assistance: The Role of UA in UX (and Vice Versa)',
    type: 'info',
    description: 'Agenda: 6:30 - 7:00 Talk, Drink & Eat, 7:00 - 7:45 Steve Stegelin, 7:45 - 8:30 Talk, Drink & Eat Speaker: Steve Stegelin Title: Putting the User in User Assistance: The Role of UA in UX (and Vice Versa) Abstract: “User assistance indicates a failed design” is a sentiment we sometimes hear from designers, UXers, and even other technical communicators. However, “Help” doesn’t have to be a four-letter word. In this talk, we’ll discuss the role user assistance (UA) plays in the overall UX (spoilers: it plays a big one) and how, likewise, a focus on the UX of Help can lead to innovative and engaging content. We’ll also take a hard look at our users, how they interact with content, considerations to keep in mind to ensure you engage users and answer their real questions, and whether the traditional tri-pane UX of Help still meets their needs and expectations. Steve\'s Bio: An Information Architect at Blackbaud, Steve Stegelin is a big advocate for the role of content and user assistance in the overall UX, be it embedded within the UI or as part of a larger Help file. While the written word has its power, Steve also promotes the use of well-designed visual communication to provide engaging and memorable UA, which befits his after-hours gig as an editorial cartoonist at Charleston City Paper. Steve has spoken previously at DIG South, ConveyUX, GIANT, and WritersUA.',
    url: 'http://www.meetup.com/Charleston-User-Experience/events/220399635/',
    starts_at: new Date(currentYear,currentMonth,19,18,30),
    ends_at: new Date(currentYear,currentMonth,19,20,30)
  },
  {
    title: 'Fridays @ the Corridor - Top Ten Tips for Mobile App Development',
    type: 'info',
    description: 'Businesses are moving toward mobile first strategies. Mobile application development is hard because, in most cases, this translates to native iOS and Android applications as well as mobile browser support. Just because you are mobile first, your software still has to run on a myriad of other platforms including laptops and desktops. As you transition to mobile first, here are the top ten techniques for making your mobile application development a little less hard. At the March Fridays @ the Corridor, David Elam, Founder of PayNearMe, will show us how his company was able to plan, design, and implement the latest products using the best native technologies combined with Cordova, PhoneGap and AngularJS. The result is a hybrid mobile app that can run natively on iOS and Andriod as well as adaptively respond to touch enabled or desktop browsers.',
    url: 'http://www.charlestondigitalcorridor.com/events/1417482701547-fridays-corridor-top-ten-tips-mobile-app-development/',
    starts_at: new Date(currentYear,currentMonth,20,8,30),
    ends_at: new Date(currentYear,currentMonth,25,9,30)
  },
  {
  title: 'Tech After Five',
  type: 'info',
  description: 'Tech After Five is a monthly networking event for tech professionals, tech entrepreneurs and professionals that support the tech community.',
  url: 'http://www.eventbrite.com/e/300-tech-after-five-charleston-sc-march-24-2015-tickets-15892117752?aff=ta5dotcomlist',
  starts_at: new Date(currentYear,currentMonth,24,17,30),
  ends_at: new Date(currentYear,currentMonth,24,19,30)
  },
  {
  title: 'Startup Grind Charleston Hosts Matthew Gough (Echovate)',
  type: 'info',
  description: 'Matthew Gough is a serial entrepreneur, founder and Chief Echovater at Echovate; a predictive cloud based hiring platform built from the ground up for emerging growth companies. Matt bootstrapped his first company, which sold in 2005.  Took some time away from running startups and consulted with Fortune 500 companies on innovation and product-to-market alignment.  He co-founded a predictive reference automation software raising venture capital and acquired a company in 2009.  For the last 6 years he also has mentored start-ups in NYC and Boston through TechStars accelerator and has spoken/written about the life of a start-up. Matt is passionate about being a champion for start-ups, recently relocated from NY and proud to call Charleston home.',
  url: 'http://startupgrind.com/event/startup-grind-charleston-presents-matthew-gough-echovate/',
  starts_at: new Date(currentYear,currentMonth,19,17,30),
  ends_at: new Date(currentYear,currentMonth,19,20,30)
}
];

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


  angular.module('mwl.calendar')
    .controller('WeekController', function (CalendarService, $scope, $modal, moment) {

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

      $scope.calendarView = 'week';
      $scope.calendarDay = new Date();

      var currentYear = moment().year();
      var currentMonth = moment().month();

      $scope.events = [
    {
      title: 'Iron Yard Final Presentations',
      type: 'special',
      description: 'Final project presentations for The Iron Yard Academy Graduates of Charleston.',
      url: 'http://www.meetup.com/The-Iron-Yard-Charleston/',
      starts_at: new Date(currentYear,currentMonth,27,14,60),
      ends_at: new Date(currentYear,currentMonth,27,16,60)
    },
    {
      title: 'Charleston Ruby Society',
      type: 'info',
      description: 'Presentations about Ruby/Ruby on Rails/etc! Join us for the first inaugural MeetUp for the Charleston Ruby Group. The plan is to have a series of presentations about anything related to the Ruby programming language, the Ruby on Rails web framework, sweet Ruby Gems, interesting techniques, etc. Presentations should be concise, aim for 5-7 minutes per presenter. If you do wish to present something and you have a presentation of some sorts (PowerPoint, Prezi, anything of the like really), please message me beforehand if you could. I\'d like to create a compilation of sorts for anyone who wants to go back and look through what was presented. Also, there should be food available. Hope to see some familiar and new faces there!',
      url: 'http://www.meetup.com/The-Iron-Yard-Charleston/events/220762519/',
      starts_at: new Date(currentYear,currentMonth,12,19,60),
      ends_at: new Date(currentYear,currentMonth,12,21,60)
    },
    {
      title: 'Hack Night',
      type: 'info',
      description: 'Come one, come all to Hack Night! Hack night is a gathering of programmers, designers, hardware hackers, and other tech minded creators. We\'re open to all who are wanting to make something, contribute to open source, or need help with a project. Charleston has a great tech community with a lot of focused gatherings on learning code and sharing ideas or new technologies, but there\'s not really a regular meetup for hacking on some code or collaborating on something really cool.',
      url: 'http://www.meetup.com/The-Iron-Yard-Charleston/events/220130863/',
      starts_at: new Date(currentYear,currentMonth,20,18,60),
      ends_at: new Date(currentYear,currentMonth,20,22,60)
    },
    {
      title: 'Putting the User in User Assistance: The Role of UA in UX (and Vice Versa)',
      type: 'info',
      description: 'Agenda: 6:30 - 7:00 Talk, Drink & Eat, 7:00 - 7:45 Steve Stegelin, 7:45 - 8:30 Talk, Drink & Eat Speaker: Steve Stegelin Title: Putting the User in User Assistance: The Role of UA in UX (and Vice Versa) Abstract: “User assistance indicates a failed design” is a sentiment we sometimes hear from designers, UXers, and even other technical communicators. However, “Help” doesn’t have to be a four-letter word. In this talk, we’ll discuss the role user assistance (UA) plays in the overall UX (spoilers: it plays a big one) and how, likewise, a focus on the UX of Help can lead to innovative and engaging content. We’ll also take a hard look at our users, how they interact with content, considerations to keep in mind to ensure you engage users and answer their real questions, and whether the traditional tri-pane UX of Help still meets their needs and expectations. Steve\'s Bio: An Information Architect at Blackbaud, Steve Stegelin is a big advocate for the role of content and user assistance in the overall UX, be it embedded within the UI or as part of a larger Help file. While the written word has its power, Steve also promotes the use of well-designed visual communication to provide engaging and memorable UA, which befits his after-hours gig as an editorial cartoonist at Charleston City Paper. Steve has spoken previously at DIG South, ConveyUX, GIANT, and WritersUA.',
      url: 'http://www.meetup.com/Charleston-User-Experience/events/220399635/',
      starts_at: new Date(currentYear,currentMonth,19,18,30),
      ends_at: new Date(currentYear,currentMonth,19,20,30)
    },
    {
      title: 'Fridays @ the Corridor - Top Ten Tips for Mobile App Development',
      type: 'info',
      description: 'Businesses are moving toward mobile first strategies. Mobile application development is hard because, in most cases, this translates to native iOS and Android applications as well as mobile browser support. Just because you are mobile first, your software still has to run on a myriad of other platforms including laptops and desktops. As you transition to mobile first, here are the top ten techniques for making your mobile application development a little less hard. At the March Fridays @ the Corridor, David Elam, Founder of PayNearMe, will show us how his company was able to plan, design, and implement the latest products using the best native technologies combined with Cordova, PhoneGap and AngularJS. The result is a hybrid mobile app that can run natively on iOS and Andriod as well as adaptively respond to touch enabled or desktop browsers.',
      url: 'http://www.charlestondigitalcorridor.com/events/1417482701547-fridays-corridor-top-ten-tips-mobile-app-development/',
      starts_at: new Date(currentYear,currentMonth,20,8,30),
      ends_at: new Date(currentYear,currentMonth,25,9,30)
    },
    {
    title: 'Tech After Five',
    type: 'info',
    description: 'Tech After Five is a monthly networking event for tech professionals, tech entrepreneurs and professionals that support the tech community.',
    url: 'http://www.eventbrite.com/e/300-tech-after-five-charleston-sc-march-24-2015-tickets-15892117752?aff=ta5dotcomlist',
    starts_at: new Date(currentYear,currentMonth,24,17,30),
    ends_at: new Date(currentYear,currentMonth,24,19,30)
    },
    {
    title: 'Startup Grind Charleston Hosts Matthew Gough (Echovate)',
    type: 'info',
    description: 'Matthew Gough is a serial entrepreneur, founder and Chief Echovater at Echovate; a predictive cloud based hiring platform built from the ground up for emerging growth companies. Matt bootstrapped his first company, which sold in 2005.  Took some time away from running startups and consulted with Fortune 500 companies on innovation and product-to-market alignment.  He co-founded a predictive reference automation software raising venture capital and acquired a company in 2009.  For the last 6 years he also has mentored start-ups in NYC and Boston through TechStars accelerator and has spoken/written about the life of a start-up. Matt is passionate about being a champion for start-ups, recently relocated from NY and proud to call Charleston home.',
    url: 'http://startupgrind.com/event/startup-grind-charleston-presents-matthew-gough-echovate/',
    starts_at: new Date(currentYear,currentMonth,19,17,30),
    ends_at: new Date(currentYear,currentMonth,19,20,30)
  }
  ];

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

// //two versions of controller built
// //we will pick one depending on live server/format of plugin
//
// //version 1
// //applied when not using live server
// (function () {
//   "use strict";
//
//   angular.module('ttcApp')
//     .controller('CalendarController', function (CalendarService, $scope, $location) {
//         var mainCtrl = this;
//
//         calCtrl.events = CalendarService.getEvents();
//
//         mainCtrl.addEvent = function (event) {
//           CalendarService.addEvent(newEvent);
//           $scope.newEvent = {};
//         };
//     });
//
//   })();
//
//
// //version 2
// //applied when using live server
//
// (function () {
//       "use strict";
//
//   angular.module('ttcApp')
//     .controller('CalendarController', function (CalendarService, $rootScope, $scope, $routeParams, $location) {
//       var mainCtrl = this;
//
//       CalendarService.getEvents().success(function(data) {
//         calCtrl.events = data;
//       });
//
//       CalendarService.getEvent($routeParams.eventIndex).success(function(data) {
//         calCtrl.singleEvent = data;
//       });
//
//       mainCtrl.currentIndex = $routeParams.eventIndex;
//
//       mainCtrl.addEvent = function (event) {
//       CalendarService.addEvent(newEvent);
//       $scope.newEvent = {};
//
//     });
//
//   })();
