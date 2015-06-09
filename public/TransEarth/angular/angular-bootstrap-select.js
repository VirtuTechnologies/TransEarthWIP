angular.module('angular-bootstrap-select.extra', [])
  .directive('toggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var target = element.parent();

        element.bind('click', function () {
          target.toggleClass('open')
        });

        element.next().find('li').bind('click', function () {
          target.toggleClass('open')
        })
      }
    };
  });

angular.module('angular-bootstrap-select-temp', [])
  .directive('selectpicker', function () {
    return {
        restrict: 'CA',
        require: '?ngModel',
        priority: 1,
        compile: function (tElement, tAttrs, transclude) {
            tElement.selectpicker();
            return function (scope, element, attrs, ngModel) {
                if(typeof ngModel!= "undefined" && ngModel != null){
                    ngModel.$render = function() {
                        element.val(ngModel.$viewValue || '').selectpicker('render');
                    };
                    ngModel.$viewValue = element.val();
                }
            };
        }
    };
  });

angular.module('angular-bootstrap-select', [])
    .directive('selectpicker', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.selectpicker($parse(attrs.selectpicker)());
                element.selectpicker('refresh');
                //scope.$watch(attrs.ngModel, function (newVal, oldVal) {
                scope.$watch(attrs.ngModel, function (newVal, oldVal) {
                    scope.$parent[attrs.ngModel] = newVal;
                    //console.log("Watch Select Picker ngModel: "+ scope.$parent[attrs.ngModel] +" newVal: "+newVal+" oldVal: "+oldVal);
                    scope.$evalAsync(function () {
                        newVal = (typeof newVal != "undefined" && newVal != null) ? newVal.trim() : newVal;
                        var patt = new RegExp(newVal);
                        //console.log("Watch Select Picker ngOptions : "+ attrs.ngOptions);
                        //console.log("Watch Select Picker ngOptions with selected value: "+ newVal +"'");
                        /*if (!attrs.ngOptions){
                            element.val(newVal);
                            console.log("no ng-options element: "+ element);
                        }else{
                            var attr = attrs.ngOptions.slice(attrs.ngOptions.lastIndexOf(' ') + 1);
                            console.log("ng-options attr: "+ attr);
                            console.log("ng-options list: "+ scope[attr]);
                            console.log("Watch Select Picker ngOptions with selected value: "+ newVal +"'");
                            console.log("Watch Select Picker Regex ngOptions with selected value: "+ patt.test(scope[attr]));
                            if(patt.test(scope[attr])){
                                console.log("ng-options patt matched element: "+ newVal);
                                element.val(newVal);
                            }
                        }*/
                        console.log("ng-options refresh with: "+ newVal);
                        element.selectpicker('refresh');
                        console.log(attrs);
                        console.log(element);

                        //element.selectpicker('val', newVal);
                    });
                });

                scope.$on('$destroy', function () {
                    scope.$evalAsync(function () {
                        element.selectpicker('destroy');
                    });
                });
            }
        };
    }]);