/*global angular */
/*
 jQuery UI Datepicker plugin wrapper

 @param [ui-date] {object} Options to pass to $.fn.datepicker() merged onto ui.config
 */

angular.module('ui.date',[])
    .directive('uiDate', ['ui.config', function (uiConfig) {
      'use strict';
      var options;
      options = {};
      if (angular.isObject(uiConfig.date)) {
        angular.extend(options, uiConfig.date);
      }
      return {
        require:'?ngModel',
        link:function (scope, element, attrs, controller) {
          var getOptions = function () {
            return angular.extend({}, uiConfig.date, scope.$eval(attrs.uiDate));
          };
          var initDateWidget = function () {
            var opts = getOptions();

            // If we have a controller (i.e. ngModelController) then wire it up
            if (controller) {
              var updateModel = function () {
                scope.$apply(function () {
                  var date = element.datepicker("getDate");
                  element.datepicker("setDate", element.val());
                  controller.$setViewValue(date);
                });
              };
              if (opts.onSelect) {
                // Caller has specified onSelect, so call this as well as updating the model
                var userHandler = opts.onSelect;
                opts.onSelect = function (value, picker) {
                  updateModel();
                  return userHandler(value, picker);
                };
              } else {
                // No onSelect already specified so just update the model
                opts.onSelect = updateModel;
              }
              // In case the user changes the text directly in the input box
              element.bind('change', updateModel);

              // Update the date picker when the model changes
              controller.$render = function () {
                var date = controller.$viewValue;
                if ( angular.isDefined(date) && date !== null && !angular.isDate(date) ) {
                  throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + ' - use ui-date-format to convert it from a string');
                }
                element.datepicker("setDate", date);
              };
            }
            // If we don't destroy the old one it doesn't update properly when the config changes
            element.datepicker('destroy');
            // Create the new datepicker widget
            element.datepicker(opts);
            // Force a render to override whatever is in the input text box
            controller.$render();
          };
          // Watch for changes to the directives options
          scope.$watch(getOptions, initDateWidget, true);
        }
      };
    }
    ])

    .directive('uiDateFormat', [function() {
      var directive = {
        require:'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
          console.log('dateFormat Link: ', attrs.uiDateFormat);
          if ( attrs.uiDateFormat === '' ) {
            // Default to ISO formatting
            modelCtrl.$formatters.push(function(value) {
              if (angular.isString(value) ) {
                return new Date(value);
              }
              return null;
            });
            modelCtrl.$parsers.push(function(value){
              return value.toISOString();
            });
          } else {
            var format = attrs.uiDateFormat;
            // Use the datepicker with the attribute value as the format string to convert to and from a string
            modelCtrl.$formatters.push(function(value) {
              if (angular.isString(value) ) {
                return $.datepicker.parseDate(format, value);
              }
            });
            modelCtrl.$parsers.push(function(value){
              return $.datepicker.formatDate(format, value);
            });
          }
        }
      };
      return directive;
    }]);