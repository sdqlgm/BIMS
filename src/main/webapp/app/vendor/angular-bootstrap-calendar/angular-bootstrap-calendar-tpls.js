'use strict';

/**
 * @ngdoc overview
 * @name angularBootstrapCalendarApp
 * @description
 * # angularBootstrapCalendarApp
 *
 * Main module of the application.
 */
angular
  .module('mwl.calendar', [
    'ui.bootstrap'
  ]);

angular.module("mwl.calendar").run(["$templateCache", function($templateCache) {$templateCache.put("assets/views/calendar/day.html","<div class=\"cal-day-box\"><div class=\"row-fluid clearfix cal-row-head\"><div class=\"span1 col-xs-1 cal-cell\">Time</div><div class=\"span11 col-xs-11 cal-cell\">Events</div></div><div class=\"cal-day-panel\" style=\"height: 960px;\"><div class=\"cal-day-panel-hour\"><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>06:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>06:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>07:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>07:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>08:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>08:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>09:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>09:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>10:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>10:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>11:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>11:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>12:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>12:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>13:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>13:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>14:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>14:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>15:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>15:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>16:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>16:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>17:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>17:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>18:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>18:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>19:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>19:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>20:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>20:30</b></div><div class=\"span11 col-xs-11\"></div></div></div><div class=\"cal-day-hour\"><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>21:00</b></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\"><div class=\"span1 col-xs-1\"><b>21:30</b></div><div class=\"span11 col-xs-11\"></div></div></div></div><div class=\"pull-left day-event day-highlight dh-event-{{ event.type }}\" ng-repeat=\"event in view track by $index\" ng-style=\"{top: event.top + \'px\', left: event.left + 60 + \'px\', height: event.height + \'px\'}\"><a href=\"javascript:;\" class=\"event-item\" ng-click=\"eventClick({$event: event})\"><span>{{ event.title | truncateEventTitle:20:event.height }}</span></a></div></div></div>");
$templateCache.put("assets/views/calendar/main.html","<div class=\"cal-context\" style=\"width: 100%;\"><mwl-calendar-year calendar-events=\"events\" calendar-current-day=\"currentDay\" calendar-event-click=\"eventClick\" calendar-edit-event-click=\"eventEditClick\" calendar-delete-event-click=\"eventDeleteClick\" calendar-edit-event-html=\"editEventHtml\" calendar-delete-event-html=\"deleteEventHtml\" calendar-auto-open=\"autoOpen\" ng-if=\"view == \'year\'\"></mwl-calendar-year><mwl-calendar-month calendar-events=\"events\" calendar-current-day=\"currentDay\" calendar-event-click=\"eventClick\" calendar-edit-event-click=\"eventEditClick\" calendar-delete-event-click=\"eventDeleteClick\" calendar-edit-event-html=\"editEventHtml\" calendar-delete-event-html=\"deleteEventHtml\" calendar-auto-open=\"autoOpen\" calendar-use-iso-week=\"useIsoWeek\" ng-if=\"view == \'month\'\"></mwl-calendar-month><mwl-calendar-week calendar-events=\"events\" calendar-current-day=\"currentDay\" calendar-event-click=\"eventClick\" calendar-use-iso-week=\"useIsoWeek\" ng-if=\"view == \'week\'\"></mwl-calendar-week><mwl-calendar-day calendar-events=\"events\" calendar-current-day=\"currentDay\" calendar-event-click=\"eventClick\" ng-if=\"view == \'day\'\"></mwl-calendar-day></div>");
$templateCache.put("assets/views/calendar/month.html","<div class=\"cal-row-fluid cal-row-head\"><div class=\"cal-cell1\" ng-repeat=\"day in weekDays\">{{ day }}</div></div><div class=\"cal-month-box\"><div ng-repeat=\"week in view track by $index\"><div class=\"cal-row-fluid cal-before-eventlist\"><div class=\"cal-cell1 cal-cell {{ day.highlightClass }}\" ng-repeat=\"day in week track by $index\" ng-click=\"dayClicked($parent.$index, $index)\" ng-class=\"{pointer: day.events.length > 0}\"><div class=\"cal-month-day\" ng-class=\"{\'cal-day-outmonth\': !day.inMonth, \'cal-day-inmonth\': day.inMonth, \'cal-day-weekend\': $index == 5 || $index == 6, \'cal-day-today\': day.isToday}\"><span class=\"pull-right\" data-cal-date=\"\" ng-click=\"drillDown(day.label)\">{{ day.label }}</span><div class=\"cal-day-tick\" ng-show=\"day.isOpened\"><i class=\"glyphicon glyphicon-chevron-up\"></i> <i class=\"fa fa-chevron-up\"></i></div><div class=\"events-list\" ng-show=\"day.events.length > 0\"><a href=\"javascript:;\" ng-click=\"eventClick({$event: event})\" ng-repeat=\"event in day.events track by $index\" class=\"pull-left event event-{{ event.type }}\" ng-mouseenter=\"highlightEvent(event, true)\" ng-mouseleave=\"highlightEvent(event, false)\" tooltip-append-to-body=\"true\" tooltip=\"{{ event.title }}\"></a></div></div></div></div><div class=\"cal-slide-box\" collapse=\"!week.isOpened\"><div class=\"cal-slide-content cal-event-list\"><ul class=\"unstyled list-unstyled\"><li ng-repeat=\"event in openEvents track by $index\"><span class=\"pull-left event event-{{ event.type }}\"></span> &nbsp; <a href=\"javascript:;\" class=\"event-item\" ng-click=\"eventClick({$event: event})\">{{ event.title }}</a> <a href=\"javascript:;\" class=\"event-item-edit\" ng-if=\"editEventHtml && event.editable !== false\" ng-bind-html=\"$sce.trustAsHtml(editEventHtml)\" ng-click=\"eventEditClick({$event: event})\"></a> <a href=\"javascript:;\" class=\"event-item-delete\" ng-if=\"deleteEventHtml && event.deletable !== false\" ng-bind-html=\"$sce.trustAsHtml(deleteEventHtml)\" ng-click=\"eventDeleteClick({$event: event})\"></a></li></ul></div></div></div></div>");
$templateCache.put("assets/views/calendar/week.html","<div class=\"cal-week-box\"><div class=\"cal-row-fluid cal-row-head\"><div class=\"cal-cell1\" ng-repeat=\"column in view.columns track by $index\" ng-class=\"{\'cal-day-weekend\': $index > 4, \'cal-day-today\': column.isToday}\">{{ column.weekDay }}<br><small><span data-cal-date=\"\" ng-click=\"drillDown(column.day)\" class=\"pointer\">{{ column.date }}</span></small></div></div><hr><div class=\"cal-row-fluid\" ng-repeat=\"event in view.events track by $index\"><div class=\"cal-cell{{ event.daySpan }} cal-offset{{ event.dayOffset }} day-highlight dh-event-{{ event.type }}\" data-event-class=\"\"><a href=\"javascript:;\" ng-click=\"eventClick({$event: event})\" class=\"cal-event-week\">{{ event.title }}</a></div></div></div>");
$templateCache.put("assets/views/calendar/year.html","<div class=\"cal-year-box\"><div ng-repeat=\"year in view track by $index\"><div class=\"row cal-before-eventlist\"><div class=\"span3 col-md-3 col-xs-6 cal-cell\" ng-repeat=\"month in year track by $index\" ng-click=\"monthClicked($parent.$index, $index)\" ng-class=\"{pointer: month.events.length > 0, \'cal-day-today\': month.isToday}\"><span class=\"pull-right\" data-cal-date=\"\" ng-click=\"drillDown(month.monthIndex)\">{{ month.label }}</span> <small class=\"cal-events-num badge badge-important pull-left\" ng-show=\"month.events.length > 0\">{{ month.events.length }}</small><div class=\"cal-day-tick\" ng-show=\"month.isOpened\"><i class=\"glyphicon glyphicon-chevron-up\"></i> <i class=\"fa fa-chevron-up\"></i></div></div></div><div class=\"cal-slide-box\" collapse=\"!year.isOpened\"><span class=\"cal-slide-tick\"></span><div class=\"cal-slide-content\"><ul class=\"unstyled list-unstyled\"><li ng-repeat=\"event in openEvents track by $index\"><span class=\"pull-left event\" ng-class=\"\'event-\' + event.type\"></span> &nbsp; <a href=\"javascript:;\" class=\"event-item\" ng-click=\"eventClick({$event: event})\">{{ event.title }}</a> <a href=\"javascript:;\" class=\"event-item-edit\" ng-if=\"editEventHtml && event.editable !== false\" ng-bind-html=\"$sce.trustAsHtml(editEventHtml)\" ng-click=\"eventEditClick({$event: event})\"></a> <a href=\"javascript:;\" class=\"event-item-delete\" ng-if=\"deleteEventHtml && event.deletable !== false\" ng-bind-html=\"$sce.trustAsHtml(deleteEventHtml)\" ng-click=\"eventDeleteClick({$event: event})\"></a></li></ul></div></div></div></div>");}]);
'use strict';

/**
 * @ngdoc service
 * @name angularBootstrapCalendarApp.moment
 * @description
 * # moment
 * Constant in the angularBootstrapCalendarApp.
 */
angular.module('mwl.calendar')
  .constant('moment', window.moment);

'use strict';

/**
 * @ngdoc service
 * @name angularBootstrapCalendarApp.calendarHelper
 * @description
 * # calendarHelper
 * Service in the angularBootstrapCalendarApp.
 */
angular.module('mwl.calendar')
  .service('calendarHelper', ["$filter", "moment", function calendarHelper($filter, moment) {

    var self = this;

    function isISOWeekBasedOnLocale() {
      return moment().startOf('week').day() === 1;
    }

    function isISOWeek(userValue) {
      //If a manual override has been set in the directive, use that
      if (angular.isDefined(userValue)) return userValue;
      //Otherwise fallback to the locale
      return isISOWeekBasedOnLocale();
    }

    this.getMonthNames = function(short) {

      var format = short ? 'MMM' : 'MMMM';

      var months = [];
      for (var i = 0; i <= 11; i++) {
        months.push($filter('date')(new Date(2014, i), format));
      }

      return months;

    };

    this.getWeekDayNames = function(short, useISOWeek) {

      var format = short ? 'EEE' : 'EEEE';

      var weekdays = [];
      var startDay = isISOWeek(useISOWeek) ? 22 : 21;
      for (var i = 0; i <= 6; i++) {
        weekdays.push($filter('date')(new Date(2014, 8, startDay + i), format));
      }

      return weekdays;

    };

    this.eventIsInPeriod = function(eventStart, eventEnd, periodStart, periodEnd) {

      return (
          moment(eventStart).isAfter(moment(periodStart)) &&
          moment(eventStart).isBefore(moment(periodEnd))
        ) || (
          moment(eventEnd).isAfter(moment(periodStart)) &&
          moment(eventEnd).isBefore(moment(periodEnd))
        ) || (
          moment(eventStart).isBefore(moment(periodStart)) &&
          moment(eventEnd).isAfter(moment(periodEnd))
        ) || (
          moment(eventStart).isSame(moment(periodStart))
        ) || (
          moment(eventEnd).isSame(moment(periodEnd))
      );

    };

    this.getYearView = function(events, currentDay) {

      var grid = [];
      var months = self.getMonthNames();

      for (var i = 0; i < 3; i++) {
        var row = [];
        for (var j = 0; j < 4; j++) {
          var monthIndex = 12 - months.length;
          var startPeriod = new Date(moment(currentDay).format('YYYY'), monthIndex, 1);
          var endPeriod = moment(startPeriod).add(1, 'month').subtract(1, 'second').toDate();

          row.push({
            label: months.shift(),
            monthIndex: monthIndex,
            isToday: moment(startPeriod).startOf('month').isSame(moment().startOf('month')),
            events: events.filter(function(event) {
              return self.eventIsInPeriod(event.starts_at, event.ends_at, startPeriod, endPeriod);
            })
          });
        }
        grid.push(row);
      }

      return grid;

    };

    this.getMonthView = function(events, currentDay, useISOWeek) {

      var dateOffset = isISOWeek(useISOWeek) ? 1 : 0;

      function getWeekDayIndex() {
        var day = startOfMonth.day() - dateOffset;
        if (day < 0) day = 6;
        return day;
      }

      var startOfMonth = moment(currentDay).startOf('month');
      var numberOfDaysInMonth = moment(currentDay).endOf('month').date();

      var grid = [];
      var buildRow = new Array(7);
      var eventsWithIds = events.map(function(event, index) {
        event.$id = index;
        return event;
      });

      for (var i = 1; i <= numberOfDaysInMonth; i++) {

        if (i == 1) {
          var weekdayIndex = getWeekDayIndex(startOfMonth);
          var prefillMonth = startOfMonth.clone();
          while (weekdayIndex > 0) {
            weekdayIndex--;
            prefillMonth = prefillMonth.subtract(1, 'day');
            buildRow[weekdayIndex] = {
              label: prefillMonth.date(),
              date: prefillMonth.clone(),
              inMonth: false,
              events: []
            };
          }
        }

        buildRow[getWeekDayIndex(startOfMonth)] = {
          label: startOfMonth.date(),
          inMonth: true,
          isToday: moment().startOf('day').isSame(startOfMonth),
          date: startOfMonth.clone(),
          events: eventsWithIds.filter(function(event) {
            return self.eventIsInPeriod(event.starts_at, event.ends_at, startOfMonth.clone().startOf('day'), startOfMonth.clone().endOf('day'));
          })
        };

        if (i == numberOfDaysInMonth) {
          var weekdayIndex = getWeekDayIndex(startOfMonth);
          var postfillMonth = startOfMonth.clone();
          while (weekdayIndex < 6) {
            weekdayIndex++;
            postfillMonth = postfillMonth.add(1, 'day');
            buildRow[weekdayIndex] = {
              label: postfillMonth.date(),
              date: postfillMonth.clone(),
              inMonth: false,
              events: []
            };
          }
        }

        if (getWeekDayIndex(startOfMonth) === 6 || i == numberOfDaysInMonth) {
          grid.push(buildRow);
          buildRow = new Array(7);
        }

        startOfMonth = startOfMonth.add(1, 'day');

      }

      return grid;

    };

    this.getWeekView = function(events, currentDay, useISOWeek) {

      var dateOffset = isISOWeek(useISOWeek) ? 1 : 0;
      var columns = new Array(7);
      var weekDays = self.getWeekDayNames(false, useISOWeek);
      var currentWeekDayIndex = currentDay.getDay();
      var beginningOfWeek, endOfWeek;

      for (var i = currentWeekDayIndex; i >= 0; i--) {
        var date = moment(currentDay).subtract(currentWeekDayIndex - i, 'days').add(dateOffset, 'day').toDate();
        columns[i] = {
          weekDay: weekDays[i],
          day: $filter('date')(date, 'd'),
          date: $filter('date')(date, 'd MMM'),
          isToday: moment(date).startOf('day').isSame(moment().startOf('day'))
        };
        if (i == 0) {
          beginningOfWeek = date;
        } else if (i == 6) {
          endOfWeek = date;
        }
      }

      for (var i = currentWeekDayIndex + 1; i < 7; i++) {
        var date = moment(currentDay).add(i - currentWeekDayIndex, 'days').add(dateOffset, 'day').toDate();
        columns[i] = {
          weekDay: weekDays[i],
          day: $filter('date')(date, 'd'),
          date: $filter('date')(date, 'd MMM'),
          isToday: moment(date).startOf('day').isSame(moment().startOf('day'))
        };
        if (i == 0) {
          beginningOfWeek = date;
        } else if (i == 6) {
          endOfWeek = date;
        }
      }

      endOfWeek = moment(endOfWeek).endOf('day').toDate();
      beginningOfWeek = moment(beginningOfWeek).startOf('day').toDate();

      var eventsSorted = events.filter(function(event) {
        return self.eventIsInPeriod(event.starts_at, event.ends_at, beginningOfWeek, endOfWeek);
      }).map(function(event) {
        var span = moment(event.ends_at).startOf('day').diff(moment(event.starts_at).startOf('day'), 'days') + 1;
        if (span >= 7) {
          span = 7;
          if (moment(event.ends_at).startOf('day').diff(moment(endOfWeek).startOf('day'), 'days') < 0) {
            span += moment(event.ends_at).startOf('day').diff(moment(endOfWeek).startOf('day'), 'days') + dateOffset;
          }
        }

        var offset = moment(event.starts_at).startOf('day').diff(moment(beginningOfWeek).startOf('day'), 'days');
        if (offset < 0) offset = 0;
        if (offset > 6) offset = 6;

        if (span - offset > 0) {
          span -= offset;
        }

        event.daySpan = span;
        event.dayOffset = offset;
        return event;
      });

      return {columns: columns, events: eventsSorted};

    };

    this.getDayView = function(events, currentDay) {

      var calendarStart = moment(currentDay).startOf('day').add(6, 'hours');
      var calendarEnd = moment(currentDay).startOf('day').add(22, 'hours');
      var calendarHeight = 16 * 60;
      var buckets = [];

      return events.filter(function(event) {
        return self.eventIsInPeriod(event.starts_at, event.ends_at, moment(currentDay).startOf('day').toDate(), moment(currentDay).endOf('day').toDate());
      }).map(function(event) {
        if (moment(event.starts_at).isBefore(calendarStart)) {
          event.top = 0;
        } else {
          event.top = moment(event.starts_at).startOf('minute').diff(calendarStart.startOf('minute'), 'minutes') - 2;
        }

        if (moment(event.ends_at).isAfter(calendarEnd)) {
          event.height = calendarHeight - event.top;
        } else {
          var diffStart = event.starts_at;
          if (moment(event.starts_at).isBefore(calendarStart)) {
            diffStart = calendarStart.toDate();
          }
          event.height = moment(event.ends_at).diff(diffStart, 'minutes');
        }

        if (event.top - event.height > calendarHeight) {
          event.height = 0;
        }

        event.left = 0;

        return event;
      }).filter(function(event) {
        return event.height > 0;
      }).map(function(event) {

        var cannotFitInABucket = true;
        buckets.forEach(function(bucket, bucketIndex) {
          var canFitInThisBucket = true;

          bucket.forEach(function(bucketItem) {
            if (self.eventIsInPeriod(event.starts_at, event.ends_at, bucketItem.starts_at, bucketItem.ends_at) || self.eventIsInPeriod(bucketItem.starts_at, bucketItem.ends_at, event.starts_at, event.ends_at)) {
              canFitInThisBucket = false;
            }
          });

          if (canFitInThisBucket && cannotFitInABucket) {
            cannotFitInABucket = false;
            event.left = bucketIndex * 150;
            buckets[bucketIndex].push(event);
          }

        });

        if (cannotFitInABucket) {
          event.left = buckets.length * 150;
          buckets.push([event]);
        }

        return event;

      });

    };

    this.toggleEventBreakdown = function(view, rowIndex, cellIndex) {

      var openEvents = [];

      if (view[rowIndex][cellIndex].events.length > 0) {

        var isCellOpened = view[rowIndex][cellIndex].isOpened;

        view = view.map(function(row) {
          row.isOpened = false;
          return row.map(function(cell) {
            cell.isOpened = false;
            return cell;
          });
        });

        view[rowIndex][cellIndex].isOpened = !isCellOpened;
        view[rowIndex].isOpened = !isCellOpened;
        openEvents = view[rowIndex][cellIndex].events;
      }

      return {view: view, openEvents: openEvents};

    };

  }]);

'use strict';

/**
 * @ngdoc directive
 * @name angularBootstrapCalendarApp.directive:mwlCalendarYear
 * @description
 * # mwlCalendarYear
 */
angular.module('mwl.calendar')
  .directive('mwlCalendarYear', ["$sce", "$timeout", "calendarHelper", "moment", function($sce, $timeout, calendarHelper, moment) {
    return {
      templateUrl: 'assets/views/calendar/year.html',
      restrict: 'EA',
      require: '^mwlCalendar',
      scope: {
        events: '=calendarEvents',
        currentDay: '=calendarCurrentDay',
        eventClick: '=calendarEventClick',
        eventEditClick: '=calendarEditEventClick',
        eventDeleteClick: '=calendarDeleteEventClick',
        editEventHtml: '=calendarEditEventHtml',
        deleteEventHtml: '=calendarDeleteEventHtml',
        autoOpen: '=calendarAutoOpen'
      },
      link: function postLink(scope, element, attrs, calendarCtrl) {

        var firstRun = false;

        scope.$sce = $sce;

        calendarCtrl.titleFunctions.year = function(currentDay) {
          return moment(currentDay).format('YYYY');
        };

        function updateView() {
          scope.view = calendarHelper.getYearView(scope.events, scope.currentDay);

          //Auto open the calendar to the current day if set
          if (scope.autoOpen && !firstRun) {
            scope.view.forEach(function(row, rowIndex) {
              row.forEach(function(year, cellIndex) {
                if (year.label == moment(scope.currentDay).format('MMMM')) {
                  scope.monthClicked(rowIndex, cellIndex);
                  $timeout(function() {
                    firstRun = false;
                  });
                }
              });
            });
          }
        }

        scope.$watch('currentDay', updateView);
        scope.$watch('events', updateView, true);

        scope.monthClicked = function(yearIndex, monthIndex) {

          var handler = calendarHelper.toggleEventBreakdown(scope.view, yearIndex, monthIndex);
          scope.view = handler.view;
          scope.openEvents = handler.openEvents;

        };

        scope.drillDown = function(month) {
          calendarCtrl.changeView('month', moment(scope.currentDay).clone().month(month).toDate());
        };

      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name angularBootstrapCalendarApp.directive:mwlCalendarWeek
 * @description
 * # mwlCalendarWeek
 */
angular.module('mwl.calendar')
  .directive('mwlCalendarWeek', ["moment", "calendarHelper", function(moment, calendarHelper) {
    return {
      templateUrl: 'assets/views/calendar/week.html',
      restrict: 'EA',
      require: '^mwlCalendar',
      scope: {
        events: '=calendarEvents',
        currentDay: '=calendarCurrentDay',
        eventClick: '=calendarEventClick',
        useIsoWeek: '=calendarUseIsoWeek'
      },
      link: function postLink(scope, element, attrs, calendarCtrl) {

        calendarCtrl.titleFunctions.week = function(currentDay) {
          return 'Week ' + moment(currentDay).week() + ' of ' + moment(currentDay).format('YYYY');
        };

        function updateView() {
          scope.view = calendarHelper.getWeekView(scope.events, scope.currentDay, scope.useIsoWeek);
        }

        scope.drillDown = function(day) {
          calendarCtrl.changeView('day', moment(scope.currentDay).clone().date(day).toDate());
        };

        scope.$watch('currentDay', updateView);
        scope.$watch('events', updateView, true);

      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name angularBootstrapCalendarApp.directive:mwlCalendarMonth
 * @description
 * # mwlCalendarMonth
 */
angular.module('mwl.calendar')
  .directive('mwlCalendarMonth', ["$sce", "$timeout", "calendarHelper", function ($sce, $timeout, calendarHelper) {
    return {
      templateUrl: 'assets/views/calendar/month.html',
      restrict: 'EA',
      require: '^mwlCalendar',
      scope: {
        events: '=calendarEvents',
        currentDay: '=calendarCurrentDay',
        eventClick: '=calendarEventClick',
        eventEditClick: '=calendarEditEventClick',
        eventDeleteClick: '=calendarDeleteEventClick',
        editEventHtml: '=calendarEditEventHtml',
        deleteEventHtml: '=calendarDeleteEventHtml',
        autoOpen: '=calendarAutoOpen',
        useIsoWeek: '=calendarUseIsoWeek'
      },
      link: function postLink(scope, element, attrs, calendarCtrl) {

        var firstRun = false;

        scope.$sce = $sce;

        calendarCtrl.titleFunctions.month = function(currentDay) {
          return moment(currentDay).format('MMMM YYYY');
        };

        function updateView() {
          scope.view = calendarHelper.getMonthView(scope.events, scope.currentDay, scope.useIsoWeek);

          //Auto open the calendar to the current day if set
          if (scope.autoOpen && !firstRun) {
            scope.view.forEach(function(week, rowIndex) {
              week.forEach(function(day, cellIndex) {
                if (day.inMonth && moment(scope.currentDay).startOf('day').isSame(day.date.startOf('day'))) {
                  scope.dayClicked(rowIndex, cellIndex);
                  $timeout(function() {
                    firstRun = false;
                  });
                }
              });
            });
          }

        }

        scope.$watch('currentDay', updateView);
        scope.$watch('events', updateView, true);

        scope.weekDays = calendarHelper.getWeekDayNames(false, scope.useIsoWeek);

        scope.dayClicked = function(rowIndex, cellIndex) {

          var handler = calendarHelper.toggleEventBreakdown(scope.view, rowIndex, cellIndex);
          scope.view = handler.view;
          scope.openEvents = handler.openEvents;

        };

        scope.drillDown = function(day) {
          calendarCtrl.changeView('day', moment(scope.currentDay).clone().date(day).toDate());
        };

        scope.highlightEvent = function(event, shouldAddClass) {

          scope.view = scope.view.map(function(week) {

            week.isOpened = false;

            return week.map(function(day) {

              delete day.highlightClass;
              day.isOpened = false;

              if (shouldAddClass) {
                var dayContainsEvent = day.events.filter(function(e) {
                  return e.$id == event.$id;
                }).length > 0;

                if (dayContainsEvent) {
                  day.highlightClass = 'day-highlight dh-event-' + event.type;
                }
              }

              return day;

            });

          });

        };

      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name angularBootstrapCalendarApp.directive:mwlCalendarDay
 * @description
 * # mwlCalendarDay
 */
angular.module('mwl.calendar')
  .directive('mwlCalendarDay', ["calendarHelper", function(calendarHelper) {
    return {
      templateUrl: 'assets/views/calendar/day.html',
      restrict: 'EA',
      require: '^mwlCalendar',
      scope: {
        events: '=calendarEvents',
        currentDay: '=calendarCurrentDay',
        eventClick: '=calendarEventClick'
      },
      link: function postLink(scope, element, attrs, calendarCtrl) {

        calendarCtrl.titleFunctions.day = function(currentDay) {
          return moment(currentDay).format('dddd DD MMMM, YYYY');
        };

        function updateView() {
          scope.view = calendarHelper.getDayView(scope.events, scope.currentDay);
        }

        scope.$watch('currentDay', updateView);
        scope.$watch('events', updateView, true);

      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name angularBootstrapCalendarApp.directive:mwlCalendar
 * @description
 * # mwlCalendar
 */
angular.module('mwl.calendar')
  .directive('mwlCalendar', ["moment", function (moment) {
    return {
      templateUrl: 'assets/views/calendar/main.html',
      restrict: 'EA',
      scope: {
        events: '=calendarEvents',
        view: '=calendarView',
        currentDay: '=calendarCurrentDay',
        control: '=calendarControl',
        eventClick: '&calendarEventClick',
        eventEditClick: '&calendarEditEventClick',
        eventDeleteClick: '&calendarDeleteEventClick',
        editEventHtml: '=calendarEditEventHtml',
        deleteEventHtml: '=calendarDeleteEventHtml',
        autoOpen: '=calendarAutoOpen',
        useIsoWeek: '=calendarUseIsoWeek'
      },
      controller: ["$scope", function($scope) {

        var self = this;

        this.titleFunctions = {};

        this.changeView = function(view, newDay) {
          $scope.view = view;
          $scope.currentDay = newDay;
        };

        $scope.control = $scope.control || {};

        $scope.control.prev = function() {
          $scope.currentDay = moment($scope.currentDay).subtract(1, $scope.view).toDate();
        };

        $scope.control.next = function() {
          $scope.currentDay = moment($scope.currentDay).add(1, $scope.view).toDate();
        };

        $scope.control.getTitle = function() {
          if (!self.titleFunctions[$scope.view]) return '';
          return self.titleFunctions[$scope.view]($scope.currentDay);
        };

      }]
    };
  }]);

'use strict';


angular.module('mwl.calendar')
  .filter('truncateEventTitle', function() {

    return function(string, length, boxHeight) {
      if (!string) return '';

      //Only truncate if if actually needs truncating
      if (string.length >= length && string.length / 20 > boxHeight / 30) {
        return string.substr(0, length) + '...';
      } else {
        return string;
      }
    };

  });
