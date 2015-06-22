//var TransEarthApp = angular.module('TransEarthApp', ['ngRoute', 'ui.bootstrap', "ngGrid", "ngTable", 'ngSanitize']);
var TransEarthApp = angular.module('TransEarthApp',
    [
        'ngRoute',
        'ngAnimate',
        'ui.bootstrap',
        'ui.date',
        'ngGrid',
        //"daterangepicker",
        //'angular-bootstrap-select',
        //'nya.bootstrap.select',
        'ngTable'
    ]
);

TransEarthApp.factory('redirectInterceptor', function($q,$location,$window){
    return  {
        'response':function(response){
            //console.log("Response Interceptor!!"+JSON.stringify(response));
            if (typeof response.data === 'string' && response.data.indexOf("LOGIN")>-1) {
                console.log("LOGIN Redirect!!");
                //console.log(response.data);
                $window.location.href = "/";
                return $q.reject(response);
            }else{
                return response;
            }
        }
    }

});

TransEarthApp.factory('httpInterceptor', function ($q, $rootScope, $log) {

    var numLoadings = 0;

    return {
        request: function (config) {

            numLoadings++;

            // Show loader
            $rootScope.$broadcast("loader_show");
            return config || $q.when(config)

        },
        response: function (response) {

            if ((--numLoadings) === 0) {
                // Hide loader
                $rootScope.$broadcast("loader_hide");
            }

            return response || $q.when(response);

        },
        responseError: function (response) {

            if (!(--numLoadings)) {
                // Hide loader
                $rootScope.$broadcast("loader_hide");
            }

            return $q.reject(response);
        }
    };
});

TransEarthApp.config(['$httpProvider',function($httpProvider) {
    $httpProvider.interceptors.push('redirectInterceptor');
    $httpProvider.interceptors.push('httpInterceptor');
    //$httpProvider.defaults.cache = false;
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = new Date();
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

TransEarthApp.directive('customDatepicker',['$compile', function($compile){
    return {
        replace:true,
        //templateUrl:'custom-datepicker.html',
        //template : '<input type="text" ui-date-format="yy-mm-dd" ng-model="ngModel" ui-date="dateOptions"/>',
        scope: {
            ngModel: '=',
            dateOptions: '='
        },
        link: function($scope, $element, $attrs, $controller){
            var html = [];
            html.push('<input type="text" ui-date-format="yy-mm-dd" ng-model="ngModel" ui-date="dateOptions"/>');
            $element.html(html.join(''));
            $compile($element.contents())($scope);

            var $button = $element.find('button');
            var $input = $element.find('input');
            $button.on('click',function(){
                if($input.is(':focus')){
                    $input.trigger('blur');
                } else {
                    $input.trigger('focus');
                }
            });
        }
    };
}
]);

TransEarthApp.directive("loader", function ($rootScope) {
    return function ($scope, element, attrs) {
        $scope.$on("loader_show", function () {
            return element.show();
        });
        return $scope.$on("loader_hide", function () {
            return element.hide();
        });
    };
});

TransEarthApp.factory('UserRequest', function () {

    var user_profile = {};

    function resetUserProfile(){
        user_profile = {};
    }

    function setUserProfile(user){
        if(typeof user.username != "undefined" && user.username != null && user.username != ""){
            user_profile.username = user.username;
        }
        if(typeof user.user_type != "undefined" && user.user_type != null && user.user_type != ""){
            user_profile.user_type = user.user_type;
        }
        if(typeof user.display_name != "undefined" && user.display_name != null && user.display_name != ""){
            user_profile.display_name = user.display_name;
        }
        if(typeof user.email != "undefined" && user.email != null && user.email != ""){
            user_profile.email = user.email;
        }
        if(typeof user.user_information != "undefined" && user.user_information != null){
            user_profile.user_information = user.user_information;
        }
    }
    function getUserProfile(){
        return user_profile;
    }
    function getUserName(){
        return user_profile.username;
    }
    function getEmail(){
        return user_profile.email;
    }
    function getUserType(){
        return user_profile.user_type;
    }

    return {
        getUserName : getUserName,
        getEmail : getEmail,
        getUserType : getUserType,
        setUserProfile : setUserProfile,
        resetUserProfile : resetUserProfile,
        getUserProfile : getUserProfile
    };
});

TransEarthApp.factory('TruckRequest', function(){
    var _truck;
    var _processed;
    //var _truck;
    return {
        getSharedTruck : function(){
            //console.log("Truck Request Get Shared Truck Details:"+JSON.stringify(_truck));
            return _truck;
        },
        setSharedTruck : function(truck){
            //console.log("Truck Request Set Shared Truck Details:"+JSON.stringify(truck));
            _truck = truck;
        },
        isSharedTruckProcessed : function(){
            return _processed;
        },
        setSharedTruckProcessed : function(status){
            _processed = status;
        },
        resetSharedTruck : function(status){
            var temp;
            _processed = temp;
            _truck = temp;
        }
    };
});

TransEarthApp.factory('TruckPostRequest', function(){
    var _truck;
    var _postId;
    var _saved;
    return {
        getSharedTruck : function(){
            //console.log("Truck Post Request Get Shared Truck Details:"+JSON.stringify(_truck));
            return _truck;
        },
        setSharedTruck : function(truck){
            //console.log("Truck Post Request Set Shared Truck Details:"+JSON.stringify(truck));
            _truck = truck;
        },
        getSharedTruckPostId : function(){
            //console.log("Truck Post Request Get Shared Post ID:"+_postId);
            return _postId;
        },
        setSharedTruckPostId : function(postId){
            //console.log("Truck Post Request Set Shared Post ID:"+postId);
            _postId = postId;
        },
        isSharedTruckPostProcessed : function(){
            return _saved;
        },
        setSharedTruckPostProcessed : function(status){
            _saved = status;
        },
        resetSharedTruckPost : function(status){
            var temp;
            _postId = temp;
            _truck = temp;
            _saved= temp;
        }
    };
});

TransEarthApp.factory('LoadRequest', function(){
    var _load;
    var _processed;
    return {
        getSharedLoad : function(){
            //console.log("Load Request Get Shared Truck Details:"+JSON.stringify(_load));
            return _load;
        },
        setSharedLoad : function(load){
            //console.log("Load Request Set Shared Truck Details:"+JSON.stringify(load));
            _load = load;
        },
        isSharedLoadProcessed : function(){
            return _processed;
        },
        setSharedLoadProcessed : function(status){
            _processed = status;
        }
    };
});

TransEarthApp.directive("loader", function ($rootScope) {
    return function ($scope, element, attrs) {
        $scope.$on("loader_show", function () {
            return element.show();
        });
        return $scope.$on("loader_hide", function () {
            return element.hide();
        });
    };
});

TransEarthApp.directive('collapseSection', function() {
    return {
        controller: function noteChange($scope) {
            $scope.note = "E";
            $scope.change = function(){
                if($scope.note == "E"){
                    $scope.note = "C";
                }else{
                    $scope.note = "E";
                }
            };
        },
        restrict: 'EA',
        transclude: true,
        scope: true,
        link: function($scope, element, attrs, noteChange) {
            var title= angular.element(element.parent().parent().children().children()[1]),
                body = angular.element(element.parent().parent().parent().children()[1]);
            title.on('click', function($event) {
                if (typeof body != 'undefined'
                    && typeof body[0] != 'undefined'
                    && typeof body[0].style != 'undefined'){
                    var section = 'block';
                    if(body[0].style.display == 'none'){
                        section = 'block';
                    }else{
                        section = 'none';
                    }
                    body.css({
                        display: section
                    });
                }
                $event.preventDefault();
            });
        },
        template: '<div class="pull-right glyphicon title2"><a href="#" ng-click="change()" ng-class="{\'glyphicon-chevron-down\': note == \'C\', \'glyphicon-chevron-right\': note != \'C\'}"></a></div>'
    };
});

TransEarthApp.directive('ngCompare', function () {
    return {
        require: 'ngModel',
        link: function (scope, currentEl, attrs, ctrl) {
            var comparefield = document.getElementsByName(attrs.ngCompare)[0]; //getting first element
            compareEl = angular.element(comparefield);

            //current field key up
            currentEl.on('keyup', function () {
                if (compareEl.val() != "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });

            //Element to compare field key up
            compareEl.on('keyup', function () {
                if (currentEl.val() != "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });
        }
    }
});

TransEarthApp.directive('googlePlacesTemp', function(){
    return {
        restrict:'E',
        replace:true,
        // transclude:true,
        scope: {location:'='},
        template: '<input id="google_places_ac" name="google_places_ac" type="text" class="input-block-level"/>',
        link: function($scope, elm, attrs){
            var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                $scope.location = place.address_components;
                $scope.$apply();
            });
        }
    }
});

TransEarthApp.directive('formattedAddress', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, controller) {
            controller.$parsers.push(function(value) {
                console.log("value: "+value);
                if(typeof value != "undefined"
                        && value != null
                        && typeof value["formatted-address"] != "undefined"
                        && value["formatted-address"] != null){
                    console.log("formatted value: "+value["formatted-address"]);
                    return value["formatted-address"];
                }else{
                    return ;
                }
            });
        }
    }
});

TransEarthApp.directive('googlePlacesBootStrap', ["$compile", function($compile){
    return {
        restrict:'AE',
        //replace:true,
        replace:false,
        require: ['^form'],
        controller: 'CityCtrl',
        // transclude:true,
        scope: {
            location : '=',
            tagId : "@",
            tagName : "@"
        },
        //template: '<input id="{{tagId}}" name="{{tagName}}" type="text" class="input-block-level"/>',
        //template: '<input id="hash" name="hash" type="text" class="input-block-level"/>',
        //template: '<div><input id="hash" name="hash" type="text" class="input-block-level"/>{{tagId}}</div>',
        link: function($scope, elm, attrs, ctrls){
            var tagId = attrs.tagid;
            var tagName = attrs.tagname;
            var requiredAttr = attrs.required;
            var placeHolder = attrs.holder;
            var glyph = attrs.glyph;
            var glyphDisplay = false;
            var disable;
            $scope.form = ctrls[0];
            if (typeof placeHolder == "undefined" || placeHolder == null) {
                placeHolder = "Enter Location";
            }
            if (typeof requiredAttr != "undefined" && requiredAttr != null) {
                // If attribute required exists
                // ng-required takes a boolean
                $scope.required = true;
            }else{
                $scope.required = false;
                if(typeof $scope.location != "undefined" && $scope.location != null){
                    $scope.location.isSelected = true;
                }
            }
            //console.log("Required set on initialize: "+$scope.required);
            if(typeof $scope.location == "undefined" || $scope.location == null){
                //$scope.city = {};
                disable = false;
            }else{
                disable = $scope.location.disable;
            }
            if (typeof glyph == "undefined" || glyph == null) {
                glyphDisplay = true;
            }else{
                glyphDisplay = false;
            }

            var template =
                    '<div class="input-group"> ' +
                        '<span class="input-group-addon"><i class="fa fa-map-marker fa-2"></i></span> ' +
                        '<div id="city"> ' +
                            '<div ng-class="{\'has-error\': form.'+tagName+'.$error.required && !location.isSelected, ' +
                            '\'has-success\' : !(form.'+tagName+'.$error.required) && location.isSelected, '+
                            '\'has-feedback\' : form.'+tagName+'.$error.required && !location.isSelected}">' +
                                '<input class="form-control" id="'+tagId+'" name="'+tagName + '" ' +
                                'ng-disabled="location.disable" type="text" class="input-block-level" '+
                                'ng-change="resetPlace()" ' +
                                'placeholder="'+placeHolder+'" ' +
                                'ng-model="location.display" ng-required="'+$scope.required+'"'+
                                '/> ' +
                            '</div> ' +
                        '</div> ' +
                    '</div> '+
                        //'<span ng-show="form.'+tagName+'.$error.required" class="help-block">Required</span> ' +
                    '<i class="form-control-feedback" ng-if="'+glyphDisplay+'"' +
                                'ng-class="{ \'glyphicon glyphicon-remove\' : form.'+tagName+'.$error.required || !location.isSelected, '+
                                '\'glyphicon glyphicon-ok\' : !form.'+tagName+'.$error.required && location.isSelected, '+
                                '\'has-feedback\' : form.'+tagName+'.$error.required && !location.isSelected}" '+
                                'for="city"> ' +
                    '</i>'+
                    '<div ng-if="form.'+tagName+'.$error.required" '+
                                'class="help-block pull-right" '+
                                'ng-class="{ \'has-error\' : form.'+tagName+'.$error.required && !location.isSelected, '+
                                '\'has-success\' : !form.'+tagName+'.$error.required && location.isSelected, '+
                                '\'has-feedback\' : form.'+tagName+'.$error.required && !location.isSelected}" '+
                                'for="city">Location is mandatory'+
                    '</div> '
                    //+ '<pre>{{form.'+tagName+'.$error | json}} {{location.isSelected}}</pre> '
                ;
            //console.log("Template set on initialize: "+template);
            //console.log("Scope set on initialize: "+$scope);
            //console.log("Attr set on initialize: "+attrs.required);
            $scope.resetPlace = function(){
                if(typeof $scope.location != "undefined" && $scope.location!= null){
                    //console.log("Resetting place as it is changed: "+JSON.stringify($scope.location));
                    //$scope.location.place = "";
                    //$scope.location.state = "";
                    if(requiredAttr){
                        $scope.location.isSelected = false;
                        $scope.location.disable = false;
                    }else if($scope.location.display == ""){
                        $scope.location.place = "";
                        $scope.location.isSelected = true;
                        $scope.location.disable = false;
                    }else{
                        $scope.location.isSelected = false;
                        $scope.location.disable = false;
                    }
                }
            };
            elm.html(template);
            $compile(elm.contents())($scope);
            if(typeof $scope.location != "undefined" && $scope.location != null){
                //console.log("Location set on initialize for "+"#"+tagId+" : "+JSON.stringify($scope.location));
                $("#"+tagId).val($scope.location.place);
                //$("#ownr_city").val($scope.city.place);
            }

            var autocomplete = new google.maps.places.Autocomplete($("#"+tagId)[0], {types: ['(cities)'],componentRestrictions: {country: 'in'}});
            //var autocomplete = new google.maps.places.Autocomplete($("#hash")[0], {});
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                //$scope.city = {};
                if(typeof place != "undefined" && place != null && typeof place.address_components != "undefined" && place.address_components != null){
                    console.log("place: "+JSON.stringify(place));
                    var result = getObjects(place.address_components, 'types', 'locality', null, null);
                    //console.log("result: "+JSON.stringify(result));
                    //$scope.city.place = place.address_components;
                    if(Array.isArray(result) && result.length > 0){
                        $scope.location.place = result[0].long_name;
                        $scope.location.isSelected = true;
                        $scope.location["formatted-address"] = result[0]["formatted-address"];
                    }
                    result = getObjects(place.address_components, 'types', 'administrative_area_level_1', null, null);
                    if(Array.isArray(result) && result.length > 0){
                        $scope.location.state = result[0].long_name;
                        //$scope.city.isSelected = true;
                    }
                    result = getObjects(place.address_components, 'types', 'country', null, null);
                    if(Array.isArray(result) && result.length > 0){
                        $scope.location.country = result[0].long_name;
                        //$scope.city.isSelected = true;
                    }
                }else{
                    console.log("place not defined");
                    if(requiredAttr){
                        $scope.location.isSelected = false;
                    }else{
                        $scope.location.isSelected = true;
                    }
                }
                //console.log(JSON.stringify(place));
                console.log(JSON.stringify($scope.location));
                $scope.$apply();
            });
        }
    }
}]);

TransEarthApp.directive('googlePlaces', ["$compile", function($compile){
    return {
        restrict:'AE',
        //replace:true,
        replace:false,
        require: ['^form'],
        controller: 'CityCtrl',
        // transclude:true,
        scope: {
            location : '=',
            tagId : "@",
            tagName : "@"
        },
        //template: '<input id="{{tagId}}" name="{{tagName}}" type="text" class="input-block-level"/>',
        //template: '<input id="hash" name="hash" type="text" class="input-block-level"/>',
        //template: '<div><input id="hash" name="hash" type="text" class="input-block-level"/>{{tagId}}</div>',
        link: function($scope, elm, attrs, ctrls){
            console.log(attrs);
            var tagId = attrs.tagid;
            var tagName = attrs.tagname;
            var requiredAttr = attrs.required;
            var placeHolder = attrs.holder;
            var glyph = attrs.glyph;
            var className = attrs.classname;
            if(typeof className == "undefined" || className == null){
                className = "textbox";
            }

            var glyphDisplay = false;
            var disable;
            $scope.form = ctrls[0];
            if (typeof placeHolder == "undefined" || placeHolder == null) {
                placeHolder = "Enter Location";
            }
            if (typeof requiredAttr != "undefined" && requiredAttr != null) {
                // If attribute required exists
                // ng-required takes a boolean
                $scope.required = true;
            }else{
                $scope.required = false;
                if(typeof $scope.location != "undefined" && $scope.location != null){
                    $scope.location.isSelected = true;
                }
            }
            //console.log("Required set on initialize: "+$scope.required);
            if(typeof $scope.location == "undefined" || $scope.location == null){
                //$scope.city = {};
                disable = false;
            }else{
                disable = $scope.location.disable;
            }
            if (typeof glyph == "undefined" || glyph == null) {
                glyphDisplay = true;
            }else{
                glyphDisplay = false;
            }

            var template =
                    '<input class="'+className+'" id="'+tagId+'" name="'+tagName + '" ' +
                        'ng-class="{\'has-error\': form.'+tagName+'.$error.required && !location.isSelected, ' +
                        '\'has-success\' : !(form.'+tagName+'.$error.required) && location.isSelected, '+
                        '\'has-feedback\' : form.'+tagName+'.$error.required && !location.isSelected}" ' +
                        'ng-disabled="location.disable" type="text" '+
                        'ng-change="resetPlace()" ' +
                        'placeholder="'+placeHolder+'" ' +
                        'ng-model="location.display" ng-required="'+$scope.required+'"'+
                    '/> '
            //+ '<pre>{{form.'+tagName+'.$error | json}} {{location.isSelected}}</pre> '
                ;
            //console.log("Template set on initialize: "+template);
            //console.log("Scope set on initialize: "+$scope);
            //console.log("Attr set on initialize: "+attrs.required);
            $scope.resetPlace = function(){
                if(typeof $scope.location != "undefined" && $scope.location!= null){
                    //console.log("Resetting place as it is changed: "+JSON.stringify($scope.location));
                    //$scope.location.place = "";
                    //$scope.location.state = "";
                    if(requiredAttr){
                        $scope.location.isSelected = false;
                        $scope.location.disable = false;
                    }else if($scope.location.display == ""){
                        $scope.location.place = "";
                        $scope.location.isSelected = true;
                        $scope.location.disable = false;
                    }else{
                        $scope.location.isSelected = false;
                        $scope.location.disable = false;
                    }
                }
            };
            elm.html(template);
            $compile(elm.contents())($scope);
            if(typeof $scope.location != "undefined" && $scope.location != null){
                //console.log("Location set on initialize for "+"#"+tagId+" : "+JSON.stringify($scope.location));
                $("#"+tagId).val($scope.location.place);
                //$("#ownr_city").val($scope.city.place);
            }

            var autocomplete = new google.maps.places.Autocomplete($("#"+tagId)[0], {types: ['(cities)'],componentRestrictions: {country: 'in'}});
            //var autocomplete = new google.maps.places.Autocomplete($("#hash")[0], {});
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                //$scope.city = {};
                if(typeof place != "undefined" && place != null && typeof place.address_components != "undefined" && place.address_components != null){
                    console.log("place: "+JSON.stringify(place));
                    var result = getObjects(place.address_components, 'types', 'locality', null, null);
                    //console.log("result: "+JSON.stringify(result));
                    //$scope.city.place = place.address_components;
                    if(Array.isArray(result) && result.length > 0){
                        $scope.location.place = result[0].long_name;
                        $scope.location.isSelected = true;
                        $scope.location["formatted-address"] = result[0]["formatted-address"];
                    }
                    result = getObjects(place.address_components, 'types', 'administrative_area_level_1', null, null);
                    if(Array.isArray(result) && result.length > 0){
                        $scope.location.state = result[0].long_name;
                        //$scope.city.isSelected = true;
                    }
                    result = getObjects(place.address_components, 'types', 'country', null, null);
                    if(Array.isArray(result) && result.length > 0){
                        $scope.location.country = result[0].long_name;
                        //$scope.city.isSelected = true;
                    }
                }else{
                    console.log("place not defined");
                    if(requiredAttr){
                        $scope.location.isSelected = false;
                    }else{
                        $scope.location.isSelected = true;
                    }
                }
                //console.log(JSON.stringify(place));
                console.log(JSON.stringify($scope.location));
                $scope.$apply();
            });
        }
    }
}]);

TransEarthApp.directive('myFocus', function () {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            console.log("myFocus directive:"+attrs);
            if (attrs.myFocus == "") {
                attrs.myFocus = "focusElement";
            }
            scope.$watch(attrs.myFocus, function(value) {
                if(value == attrs.id) {
                    element[0].focus();
                }
            });
            element.on("blur", function() {
                scope[attrs.myFocus] = "";
                scope.$apply();
            })
        }
    };
});

TransEarthApp.controller('CityCtrl', ['$scope', function($scope) {
}]);

/*TransEarthApp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});*/

TransEarthApp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

TransEarthApp.directive('capitalizeNoBlanks', function(uppercaseFilter, $parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            //console.log(attrs.ngModel);
            var capitalize = function(inputValue) {
                //console.log(inputValue);
                var capitalized;
                if(typeof  inputValue != "undefined" && inputValue != null){
                    //capitalized = inputValue.toUpperCase();
                    capitalized = inputValue.replace(/\s+/g,'').toUpperCase();
                    /*var capitalized = inputValue.split(' ').reduce(function(prevValue, word){
                     return  prevValue + word.substring(0, 1).toUpperCase() + word.substring(1)+' ';
                     }, '');*/
                    if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                }
            };
            var model = $parse(attrs.ngModel);
            modelCtrl.$parsers.push(capitalize);
            capitalize(model(scope));
        }
    };
});

TransEarthApp.directive('capitalizeAll', function(uppercaseFilter, $parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            //console.log(attrs.ngModel);
            var capitalize = function(inputValue) {
                //console.log(inputValue);
                var capitalized;
                if(typeof  inputValue != "undefined" && inputValue != null){
                    capitalized = inputValue.replace(/\s+/g,'').toUpperCase();
                    /*var capitalized = inputValue.split(' ').reduce(function(prevValue, word){
                     return  prevValue + word.substring(0, 1).toUpperCase() + word.substring(1)+' ';
                     }, '');*/
                    if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                }
            };
            var model = $parse(attrs.ngModel);
            modelCtrl.$parsers.push(capitalize);
            capitalize(model(scope));
        }
    };
});

TransEarthApp.directive('capitalizeFirst', function(uppercaseFilter, $parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            //console.log(attrs.ngModel);
            var capitalize = function(inputValue) {
                //console.log(inputValue);
                var capitalized;
                if(typeof  inputValue != "undefined" && inputValue != null){
                    //capitalized = inputValue.replace(/\s+/g,'').toUpperCase();
                    var capitalized = inputValue.split(' ').reduce(function(prevValue, word){
                        return  prevValue + word.substring(0, 1).toUpperCase() + word.substring(1)+' ';
                    }, '');
                    if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                }
            };
            var model = $parse(attrs.ngModel);
            modelCtrl.$parsers.push(capitalize);
            capitalize(model(scope));
        }
    };
});
//Route Provider to load views with ng-view
TransEarthApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
        //alert('Inside Route Provider'+$routeProvider);
        $routeProvider.
            when('/index', {
                templateUrl: 'partials/blank.html',
                controller: 'indexCtrl'
            }).
            when('/truckList', {
                templateUrl: 'partials/trucks_grid.html',
                controller: 'truckListCtrl'
            }).
            when('/loadList', {
                templateUrl: 'partials/loads_grid.html',
                controller: 'loadListCtrl'
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            }).
            otherwise({
                //templateUrl: 'partials/blank.html',
                controller: 'indexCtrl'
            });
    }]);

var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

function convertDateStringsToDates(input) {
    // Ignore things that aren't objects.
    if (typeof input !== "object") return input;

    for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        var match;
        // Check for string properties which look like dates.
        if (typeof value === "string" && (match = value.match(regexIso8601))) {
            var milliseconds = Date.parse(match[0])
            if (!isNaN(milliseconds)) {
                input[key] = new Date(milliseconds);
            }
        } else if (typeof value === "object") {
            // Recurse into object
            convertDateStringsToDates(value);
        }
    }
}

function getObjects(obj, key, val, parentKey, parentObj) {
    var objects = [];
    for (var i in obj) {
        //console.log("i: "+JSON.stringify(i)+" value "+JSON.stringify(obj[i]));
        if (!obj.hasOwnProperty(i)) continue;
        //console.log("continue with i: "+JSON.stringify(i)+" value "+JSON.stringify(obj[i]));
        if (typeof obj[i] == 'object') {
            //console.log("Start object flattening: "+JSON.stringify(obj[i]));
            objects = objects.concat(getObjects(obj[i], key, val, i, obj));
            //console.log("Concatenated objects: "+JSON.stringify(objects));
        } else if (i == key && obj[key] == val) {
            //console.log("Found objects: key: "+i+" object: "+JSON.stringify(obj[key]));
            objects.push(obj);
        }else if(parentKey == key && obj[i] == val){
            //console.log("Found array item: key: "+key+" object pushed: "+JSON.stringify(parentObj));
            objects.push(parentObj);
        }
    }
    return objects;
}

//Head controller to load page title
function coreController($scope, $rootScope, $http, $location, $modal, UserRequest, TruckRequest) {
//function coreController($scope, $route, $http, $location, UserRequest) {
    //alert('Inside coreController');
    $scope.siteTitle = 'Transport Earth';
    $scope.page = {};
    $scope.core = {};
    $scope.core.menus = [];
    $scope.core.pageHeaders = {
        "home" : "Home",
        "login" : "Login",
        "searchTrucks" : "Search Truck",
        "searchLoads" : "Search Load",
        "myTrucks" : "My Trucks",
        "myLoads" : "My Loads",
        "addTruck" : "Add Truck",
        "addLoad" : "Add Load",
        "sessionExpired" : "Session Expired"
    };
    $scope.core.truck_owner = false;
    $scope.core.load_owner = false;
    $scope.serverAuth = {};
    $scope.serverAuth.authFailed = false;
    $scope.serverAuth.messageAvailable = false;

    $scope.ifSessionInvalid = false;
    $scope.user = {};
    $scope.core.loggedIn = false;
    $scope.core.expired = false;

    $scope.resetCore = function(){
        //$scope.siteHome();
        //$scope.core = {};
        $scope.core.loggedIn = false;
        $scope.core.truck_owner = false;
        $scope.core.load_owner = false;
        $scope.serverAuth = {};
        $scope.serverAuth.authFailed = false;
        $scope.serverAuth.messageAvailable = false;
        $scope.user = {};
        $scope.core.loggedIn = false;
        $scope.core.expired = true;
    } ;
    $scope.core.menuInitLoad = function(){
        $scope.core.menus = [];
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn,
            home : false,
            display_name : "Login",
            func : $scope.loginClicked,
            dropList : false
        });
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn,
            home : false,
            display_name : "Search Load",
            func : $scope.searchLoad,
            dropList : false
        });
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn,
            home : false,
            display_name : "Search Truck",
            func : $scope.searchTrucks,
            dropList : false
        });
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn||$scope.core.loggedIn,
            home : true,
            display_name : "Home",
            func : $scope.siteHome,
            dropList : false
        });
    };
    $scope.core.menuRefresh = function(){
        $scope.core.menus = [];
        if(!$scope.core.loggedIn){
            $scope.core.menus.push({
                isActive : !$scope.core.loggedIn,
                home : false,
                display_name : "Login",
                func : $scope.loginClicked,
                dropList : false
            });
        }else{
            $scope.core.menus.push({
                isActive : $scope.core.loggedIn,
                home : false,
                display_name : $scope.user.display_name,
                //func : $scope.loginClicked,
                dropList : true
            });
        }
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn||$scope.core.loggedIn,
            home : false,
            display_name : "Search Truck",
            func : $scope.searchTrucks,
            dropList : false
        });
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn||$scope.core.loggedIn,
            home : false,
            display_name : "Search Load",
            func : $scope.searchLoad,
            dropList : false
        });
        if($scope.core.load_owner||$scope.core.agent||$scope.core.contractor){
            $scope.core.menus.push({
                isActive : $scope.core.loggedIn,
                home : false,
                display_name : "Add Load",
                func : $scope.addLoad,
                dropList : false
            });
        }
        if($scope.core.truck_owner||$scope.core.agent||$scope.core.contractor){
            $scope.core.menus.push({
                isActive : $scope.core.loggedIn,
                home : false,
                display_name : "Add Truck",
                func : $scope.gotoAddTrucksPage,
                dropList : false
            });
        }
        if($scope.core.load_owner||$scope.core.agent||$scope.core.contractor){
            $scope.core.menus.push({
                isActive : $scope.core.loggedIn,
                home : false,
                display_name : "My Loads",
                func : $scope.loadMyLoads,
                dropList : false
            });
        }
        if($scope.core.truck_owner||$scope.core.agent||$scope.core.contractor){
            $scope.core.menus.push({
                isActive : $scope.core.loggedIn,
                home : false,
                display_name : "My Trucks",
                func : $scope.loadMyTrucks,
                dropList : false
            });
        }
        $scope.core.menus.push({
            isActive : !$scope.core.loggedIn||$scope.core.loggedIn,
            home : true,
            display_name : "Home",
            func : $scope.siteHome,
            dropList : false
        });
    };

    $scope.$watch('local', function(){
        //console.log("Core ng-init local: "+$scope.local);
        $scope.loginRedirect = false;
        $scope.ifSessionInvalid = false;
        if(typeof $scope.local != "undefined" && $scope.local != null){
            $scope.session = JSON.parse($scope.local);
            //console.log("Set $scope.session: "+JSON.stringify($scope.session));
            if(typeof $scope.session != "undefined" && $scope.session != null && $scope.session.loginFailed){
                $scope.serverAuth.authFailed = true;
                $scope.serverAuth.messageAvailable = true;
                $scope.serverAuth.message = $scope.session.loginError;
                //console.log("Set $scope.serverAuth: "+JSON.stringify($scope.serverAuth));
                $scope.core.menuInitLoad();
                $scope.loginClicked();
            }
            if(typeof $scope.session.expired != "undefined" && $scope.session.expired != null && !$scope.local.expired){
                //console.log("Session not valid: "+JSON.stringify($scope.session));
                TruckRequest.resetSharedTruck();
                UserRequest.resetUserProfile();
                //TruckPostRequest.resetSharedTruckPost();
                $scope.ifSessionInvalid = true;
                $scope.resetCore();
                $scope.core.menuInitLoad();
                $scope.siteHome();
                $scope.$apply();
                //window.location.reload(true);
            }
            if(typeof $scope.session.validity != "undefined" && $scope.session.validity != null && !$scope.session.validity){
                //console.log("Redirecting to Login: "+JSON.stringify($scope.session));
                $scope.session.validity = null;
                TruckRequest.resetSharedTruck();
                UserRequest.resetUserProfile();
                //TruckPostRequest.resetSharedTruckPost();
                $scope.resetCore();
                $scope.loginRedirect = true;
                $scope.core.menuInitLoad();
                $scope.loginClicked();
                //$scope.$apply();
                //window.location.reload(true);
            }
        }
        //console.log("$scope.loginRedirect: "+$scope.loginRedirect);
        //console.log("$scope.serverAuth.authFailed: "+$scope.serverAuth.authFailed);
        if(!$scope.loginRedirect && !$scope.serverAuth.authFailed){
            $scope.serverAuth.authFailed = null;
            $scope.loginRedirect = false;
            $http.get('/TransEarth/getLoggedInUserProfile')
                .success(function(data){
                    //console.log("Get User Profile: "+JSON.stringify(data));
                    $scope.core.truck_owner = false;
                    $scope.core.load_owner = false;
                    $scope.core.agent = false;
                    $scope.core.contractor = false;
                    if(typeof data.user != 'undefined'){
                        $scope.user = data.user;
                        $scope.core.loggedIn = true;
                        if(typeof $scope.user.user_type != "undefined"){

                            if($scope.user.user_type == "truck_owner"){
                                $scope.core.truck_owner = true;
                            }else if($scope.user.user_type == "load_owner"){
                                $scope.core.load_owner = true;
                            }else if($scope.user.user_type == "agent"){
                                $scope.core.agent = true;
                            }else if($scope.user.user_type == "contractor"){
                                $scope.core.contractor = true;
                            }
                            $scope.core.menuRefresh();
                            /*else if(Array.isArray($scope.user.user_type)){
                             //console.log("Array User type: "+$scope.user.user_type);
                             for(var user_type in $scope.user.user_type){
                             //console.log("User type item: "+$scope.user.user_type[user_type]);
                             if($scope.user.user_type[user_type] == "truck_owner"){
                             $scope.core.truck_owner = true;
                             }
                             if($scope.user.user_type[user_type] == "load_owner"){
                             $scope.core.load_owner = true;
                             }
                             }
                             }*/
                            //console.log("$scope.core.truck_owner: "+$scope.core.truck_owner);
                            //console.log("$scope.core.load_owner: "+$scope.core.load_owner);
                            //console.log("$scope.core.agent: "+$scope.core.agent);
                            //console.log("$scope.core.contractor: "+$scope.core.contractor);
                        }
                        //console.log("Core Profile: "+JSON.stringify($scope.core));
                    }else{
                        $scope.core.menuInitLoad();
                        $scope.core.expired = true;
                    }
                    //console.log("$scope.serverAuth: "+JSON.stringify($scope.serverAuth));
                    /*if($scope.core.truck_owner){
                     $scope.page.template = "/TransEarth/truck_owner_home";
                     $scope.page.scope = "Truck Owner Home";
                     }else if($scope.core.load_owner){
                     $scope.page.template = "/TransEarth/load_owner_home";
                     $scope.page.scope = "Load Owner Home";
                     }else if($scope.serverAuth.authFailed){
                     $scope.page.template = ''+"/TransEarth/login";
                     $scope.page.scope = "Login";
                     }else{
                     $scope.page.template = "/TransEarth/site_home";
                     $scope.page.scope = "Site Base Home";
                     }*/
                    if($scope.serverAuth.authFailed || $scope.session.validity){
                        //$scope.page.template = ''+"/TransEarth/login";
                        //$scope.page.scope = "Login";
                        //console.log("Login redirection");
                        $scope.loginClicked();
                    }else{
                        $scope.siteHome();
                    }

                }).error(function(err){
                    alert("Error accessing user profile:"+err);
                });
        }
    });

    //console.log("User: "+$scope.user);

    //console.log("User Details: "+$scope.user);
    /*$scope.$watch('pageTemplate', function(pageTemplate) {
        //console.log("pageTemplate: "+JSON.stringify(pageTemplate));
    }, true);*/

    /*$http.get('/TransEarth/getAuthMsg')
        .success(function(data){
            //console.log("Get Auth Message: "+JSON.stringify(data));
            $scope.login.messageAvailable = false;
            if(typeof data.initial != 'undefined'){
                $scope.login.messageAvailable = false;
                $scope.page.template = "/TransEarth/site_home";
                //alert($scope.authFailed);
            }else if(typeof data.messageAvailable !='undefined' && data.messageAvailable != null && data.messageAvailable){
                $scope.login.messageAvailable = true;
                $scope.page.template = "/TransEarth/login";
                succesError(data, 'login_alert');
                //alert(JSON.stringify(data));
            }else{
                $scope.page.template = "/TransEarth/site_home";
            }
            //alert('$scope.authFailed Data - '+JSON.stringify(data));
        }).error(function(data){
            alert("error accessing Auth message");
        });*/

    $scope.siteHome = function(){
        //console.log("Home clicked");
        $scope.page.template = ''+"/TransEarth/site_home";
        $scope.page.scope = "TransEarth Home";
        //console.log("Login clicked : "+$scope.pageTemplate);
    };
    $scope.loginClicked = function(){
        //console.log("Login clicked");
        $scope.core.expired = false;
        $scope.page.template = ''+"/TransEarth/login";
        $scope.page.scope = "Login";
        //console.log("Login clicked : "+$scope.pageTemplate);
    };
    $scope.signupClicked = function(){
        //console.log("Login clicked");
        $scope.page.template = ''+"/TransEarth/signup";
        $scope.page.scope = "Register";
        //console.log("Login clicked : "+$scope.pageTemplate);
    };

    $scope.searchTrucks = function(){
        //console.log("Search Trucks clicked");
        $scope.page.template = ''+"/TransEarth/searchTrucks";
        $scope.page.scope = "Search Trucks";
        //console.log("Search Truck clicked : "+$scope.pageTemplate);
    };
    $scope.searchLoad = function(){
        //console.log("Search Load clicked");
        $scope.page.template = ''+"/TransEarth/searchLoad";
        $scope.page.scope = "Search Load";
        //console.log("Search Load clicked : "+$scope.pageTemplate);
    };

    $scope.loadMyTrucks = function(){
        //console.log("Truck Owner Home Page clicked");
        $scope.page.template = ''+"/TransEarth/truck_owner_home";
        $scope.page.scope = "Truck Owner Home";
        //console.log("Search Truck clicked : "+$scope.pageTemplate);
    };
    $scope.addTruck = function(){
        //console.log("Add Truck clicked");
        TruckRequest.setSharedTruck(null);
        $scope.page.template = null;
        $scope.page.template = ''+"/TransEarth/manage_truck?test=1";
        $scope.page.scope = "Add Truck";
        //console.log("Search Truck clicked : "+$scope.pageTemplate);
    };
    $scope.loadMyLoads = function(){
        //console.log("My Loads clicked");
        $scope.page.template = ''+"/TransEarth/load_owner_home";
        $scope.page.scope = "Load Owner Home";
        //console.log("Search Truck clicked : "+$scope.pageTemplate);
    };
    $scope.addLoad = function(){
        //console.log("My Loads clicked");
        $scope.page.template = ''+"/TransEarth/manage_load";
        $scope.page.scope = "Add Load";
        //console.log("Search Truck clicked : "+$scope.pageTemplate);
    };

    $scope.gotoAddTrucksPage = function(){
        //$scope.page.template = "/TransEarth/add_trucks";
        //$scope.page.scope = "Add Multiple Trucks";
        $scope.newTrucks = {};
        $scope.newTrucks.open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'addTrucks.html',
                controller: AddTrucksCtrl,
                //windowClass: 'xx-dialog',
                size: size,
                resolve: {
                    result : function () {
                        //console.log("Modal $scope.newTrucks.result: "+JSON.stringify($scope.newTrucks.result));
                        return $scope.newTrucks.result;
                    }
                }
            });
            modalInstance.result.then(function(result){
                //on ok button press
                if(result){
                    $scope.loadMyTrucks();
                }
                //console.log("On ok button press");
                //$scope.inActivateTruck(truckToRemove);
            },function(){
                //on cancel button press
                //console.log("Modal Closed");
                //$scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
            });
        };

        var AddTrucksCtrl = function ($scope, $modalInstance, $http, $timeout, UserRequest, result) {

            $scope.newTrucksModal = {};
            $scope.newTrucksModal.result = {};

            $scope.init = function(){
                $scope.getTruckTypes();
                $scope.getTruckMakes();
            };
            $scope.truckTypeList = [];
            $scope.getTruckTypes = function(){
                $http.get("/TransEarth/getTruckTypes")
                    .success(function(truckTypes) {
                        //console.log("Truck Types looked up:"+JSON.stringify(truckTypes));
                        $scope.truckTypeList = truckTypes;
                        //$scope.truck.details.type = "";
                    }).error(function(err) {
                        //console.log("truckType Lookup failed:"+JSON.stringify(err));
                    });
            };
            //$scope.getTruckTypes();
            $scope.makeList = [];
            $scope.getTruckMakes = function(){
                $http.get("/TransEarth/getTruckMakes")
                    .success(function(truckMakes) {
                        //console.log("Truck Makes looked up:"+truckMakes);
                        $scope.makeList = truckMakes;
                        //$scope.truck.details.make = "";
                    }).error(function(err) {
                        //console.log("Make Lookup failed:"+JSON.stringify(err));
                    });
            };

            $scope.counter = 0;
            $scope.newTrucksModal.trucks = [];
            $scope.stopAdd = false;
            $scope.addTruckRow = function(){
                $scope.counter++;
                if($scope.counter>9){
                    $scope.stopAdd = true;
                }
                $scope.newTrucksModal.trucks.push(
                    {
                        "index" : $scope.counter,
                        "$edit" : true,
                        "details" : {
                            "type" : "",
                            "make" : "",
                            "model" : "",
                            "regno" : "",
                            "load" : ""
                        },
                        haveMessage : false
                    }
                );

                $scope.isError = true;
                //$scope.tableParams.reload();
            };

            $scope.checkErrors = function(truck){

                if(typeof truck != "undefined" && truck != null && typeof truck.details != "undefined" && truck.details != null){
                    if(typeof truck.details.type != "undefined" && truck.details.type != null && truck.details.type != ""
                        && typeof truck.details.make != "undefined" && truck.details.make != null && truck.details.make != ""
                        && typeof truck.details.model != "undefined" && truck.details.model != null && truck.details.model != ""
                        && typeof truck.details.regno != "undefined" && truck.details.regno != null && truck.details.regno != ""
                        && typeof truck.details.load != "undefined" && truck.details.load != null && truck.details.load != ""){
                        $scope.isError = false;
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    return true;
                }
            };

            $scope.disableSubmit = function(trucks){

                var result = true;
                for(var i in trucks){
                    var truck = trucks[i];
                    if(typeof truck != "undefined" && truck != null && typeof truck.details != "undefined" && truck.details != null){
                        if(typeof truck.details.type != "undefined" && truck.details.type != null && truck.details.type != ""
                            && typeof truck.details.make != "undefined" && truck.details.make != null && truck.details.make != ""
                            && typeof truck.details.model != "undefined" && truck.details.model != null && truck.details.model != ""
                            && typeof truck.details.regno != "undefined" && truck.details.regno != null && truck.details.regno != ""
                            && typeof truck.details.load != "undefined" && truck.details.load != null && truck.details.load != ""){
                            $scope.isError = false;
                            result = false;
                        }else{
                            return true;
                        }
                    }else{
                        return true;
                    }
                }
                return result;
            };

            $scope.removeTruck = function(index){
                $scope.newTrucksModal.trucks.splice(index, 1);
                $scope.counter--;
                if($scope.counter>9){
                    $scope.stopAdd = true;
                }else{
                    $scope.stopAdd = false;
                }
                //$scope.tableParams.reload();
            };

            $scope.showMessages = function(list){
                //console.log("Show Messages check: "+JSON.stringify(list));
                for(var ind in list){
                    var item = list[ind];
                    //console.log("Show Messages check item: "+JSON.stringify(item));
                    if(typeof list[ind]["haveMessage"] == "undefined" || list[ind]["haveMessage"] == null || !list[ind]["haveMessage"]){
                        return false;
                    }
                }
                return true;
            };

            $scope.addTrucks = function(trucks){
                //console.log("Adding trucks");
                if(typeof trucks != "undefined" && trucks != null && Array.isArray(trucks) && trucks.length > 0){
                    //console.log(JSON.stringify(trucks));
                    for(var i in trucks){
                        //var truck = trucks[i];
                        $scope.saveTrucks(trucks, i);
                        //console.log(JSON.stringify(truck));
                    }
                }
            };

            $scope.closeOut = false;
            $scope.saveTrucks = function(trucks, index){

                $scope.closeOut = true;
                if(typeof trucks[index] != "undefined" && trucks[index] != null && typeof trucks[index].details != "undefined" && trucks[index].details != null){
                    if(typeof trucks[index].details.type != "undefined" && trucks[index].details.type != null && trucks[index].details.type != ""
                        && typeof trucks[index].details.make != "undefined" && trucks[index].details.make != null && trucks[index].details.make != ""
                        && typeof trucks[index].details.model != "undefined" && trucks[index].details.model != null && trucks[index].details.model != ""
                        && typeof trucks[index].details.regno != "undefined" && trucks[index].details.regno != null && trucks[index].details.regno != ""
                        && typeof trucks[index].details.load != "undefined" && trucks[index].details.load != null && trucks[index].details.load != ""){
                        //console.log("Saving truck: "+JSON.stringify(trucks[index]));
                        $http.post("/TransEarth/addTruck", {truck : trucks[index]})
                            .success(function(result) {
                                //console.log("Truck saved successfully: "+JSON.stringify(trucks[index]));
                                trucks[index].haveMessage = true;
                                trucks[index].hasError = false;
                                trucks[index].message = "Saved";
                                //$scope.data[i] = truck;
                                $scope.newTrucksModal.trucks.splice($scope.newTrucksModal.trucks.indexOf(trucks[index].index),1, trucks[index]);
                                //console.log("Spliced data with truck index: "+trucks[index].index+" replaced "+JSON.stringify($scope.newTrucksModal.trucks));
                                if($scope.showMessages($scope.newTrucksModal.trucks)){
                                    //console.log("Trucks with message "+index+" :"+JSON.stringify($scope.newTrucksModal.trucks));
                                    //$scope.tableParams.reload();
                                }
                            }).error(function(err) {
                                //console.log("Truck saved failed:"+err);
                                trucks[index].haveMessage = true;
                                trucks[index].hasError = true;
                                trucks[index].message = JSON.stringify(err);
                                //$scope.data[i] = truck;
                                $scope.newTrucksModal.trucks.splice($scope.data.indexOf(trucks[index].index),1, trucks[index]);
                                if($scope.showMessages($scope.newTrucksModal.trucks)){
                                    //console.log("Trucks with Save Crashed "+index+" :"+JSON.stringify($scope.newTrucksModal.trucks));
                                    //$scope.tableParams.reload();
                                }
                            });
                    }else{
                        trucks[index].haveMessage = true;
                        trucks[index].message = "Something Crashed";
                        //$scope.data[i] = truck;
                        $scope.newTrucksModal.trucks.splice($scope.newTrucksModal.trucks.indexOf(trucks[index].index),1, trucks[index]);
                        if($scope.showMessages($scope.newTrucksModal.trucks)){
                            //console.log("Trucks with Something Crashed "+index+" :"+JSON.stringify($scope.newTrucksModal.trucks));
                            //$scope.tableParams.reload();
                        }
                    }
                }else{
                    truck.haveMessage = true;
                    truck.message = "Don't Crash";
                    //$scope.data[i] = truck;
                    $scope.newTrucksModal.trucks.splice($scope.newTrucksModal.trucks.indexOf(truck.index),1, truck);
                    if($scope.showMessages($scope.newTrucksModal.trucks)){
                        //console.log("Trucks with Don't Crash "+i+" :"+JSON.stringify($scope.newTrucksModal.trucks));
                        //$scope.tableParams.reload();
                    }
                }

            };

            $scope.goToHome = function(){
                $scope.newTrucksModal.result = true;
                $scope.ok();
            };
            $scope.ok = function () {
                $modalInstance.close($scope.newTrucksModal.result);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

        $scope.newTrucks.open('lg');
    };

    $scope.truckPostDetails = {};
    $scope.truckPostDetails.post = {};
    $scope.truckPostDetails.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myTruckPostDetailModal.html',
            controller: TruckPostDetailModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                post: function () {
                    //console.log("Modal $scope.truckPostDetails.post: "+JSON.stringify($scope.truckPostDetails.post));
                    return $scope.truckPostDetails.post;
                }
            }
        });
        modalInstance.result.then(function(post){
            //on ok button press
            //console.log("On ok button press");
            //$scope.inActivateTruck(truckToRemove);
        },function(){
            //on cancel button press
            //console.log("Modal Closed");
            //$scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
        });
    };

    var TruckPostDetailModalCtrl = function ($scope, $modalInstance, post) {

        $scope.truckPostModal = post;
        if(typeof $scope.truckPostModal != "undefined"){
            $scope.truckPostModal.owner.name = $scope.truckPostModal.owner.last_name + " ," + $scope.truckPostModal.owner.first_name;
        }
        $scope.showClose = false;
        //console.log("Inside TruckPostDetailModalCtrl: truckPostModal = "+JSON.stringify($scope.truckPostModal));

        $scope.ok = function () {
            $modalInstance.close($scope.truckPostModal);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.getTruckPostDetailById = function(truckId, postId){
        //console.log("Get truck post details: "+truckId);

        $http.post("/TransEarth/getTruckPostDetailById", {truckId : truckId, postId : postId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                //console.log(data);
                if(typeof data != 'undefined' && data != null && data.length > 0){
                    //console.log(JSON.stringify(data));
                    var post = data[0];
                    if(typeof post.posts != "undefined" && post.posts != null
                        && typeof post.posts.truck_post != "undefined" && post.posts.truck_post != null
                        && typeof post.posts.truck_post.availability != "undefined" && post.posts.truck_post.availability != null
                        && typeof post.posts.truck_post.availability.start_date != "undefined" && post.posts.truck_post.availability.start_date != null){
                        post.posts.truck_post.availability.start_date = moment(post.posts.truck_post.availability.start_date).format("Do MMM YYYY");
                    }
                    if(typeof post.posts != "undefined" && post.posts != null
                        && typeof post.posts.truck_post != "undefined" && post.posts.truck_post != null
                        && typeof post.posts.truck_post.availability != "undefined" && post.posts.truck_post.availability != null
                        && typeof post.posts.truck_post.availability.end_date != "undefined" && post.posts.truck_post.availability.end_date != null){
                        post.posts.truck_post.availability.end_date = moment(post.posts.truck_post.availability.end_date).format("Do MMM YYYY");
                    }
                    $scope.truckPostDetails.post = post;
                    //TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.truckPostDetails.open('sm');
                }else{
                    //$scope.myTruckList.messageAvailable = true;
                    //$scope.truckOwnerPage.showAlert = true;
                    //succesError("Truck Details Not available", 'myTrucklist_alert');
                    alert("No Post Detail Available");
                }
            }).error(function(err) {
                //$scope.myTruckList.listShow = false;
                //$scope.myTruckList.messageAvailable = true;
                //$scope.truckOwnerPage.showAlert = true;
                //succesError(err.statusMsg, 'myTrucklist_alert');
                alert("Please Login");
            });
    };

    $scope.loadPostDetails = {};
    $scope.loadPostDetails.post = {};
    $scope.loadPostDetails.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myLoadPostDetailModal.html',
            controller: LoadPostDetailModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                post: function () {
                    //console.log("Modal $scope.loadPostDetails.post: "+JSON.stringify($scope.loadPostDetails.post));
                    return $scope.loadPostDetails.post;
                }
            }
        });
        modalInstance.result.then(function(truck){
            //on ok button press
            //console.log("On ok button press");
            //$scope.inActivateTruck(truckToRemove);
        },function(){
            //on cancel button press
            //console.log("Modal Closed");
            //$scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
        });
    };

    var LoadPostDetailModalCtrl = function ($scope, $modalInstance, post) {

        $scope.loadPostModal = post;
        /*if(typeof $scope.loadPostModal != "undefined" && typeof $scope.loadPostModal.owner != "undefined"){
            $scope.loadPostModal.owner.name = $scope.loadPostModal.owner.last_name + " ," + $scope.loadPostModal.owner.first_name;
        }*/
        $scope.showClose = false;
        //console.log("Inside LoadPostDetailModalCtrl: loadPostModal = "+JSON.stringify($scope.loadPostModal));

        $scope.ok = function () {
            $modalInstance.close($scope.loadPostModal);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.viewLoad = function(loadId){

        //console.log("Get load post details: "+loadId);
        $http.post("/TransEarth/getLoadById", {loadId : loadId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    $scope.loadPostDetails.post = data;
                    //TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.loadPostDetails.open('sm');
                }else{
                    //$scope.loadPostList.messageAvailable = true;
                    //$scope.loadPostList.message = "No data available";
                    //succesWarning("Load details not found", 'loadlist_alert');
                    alert("No Data Available");
                    //console.log("No data available");
                }
            }).error(function(err) {
                //$scope.loadPostList.messageAvailable = true;
                //$scope.loadPostList.message = "No data available";
                //succesError(err.statusMsg, 'myLoadList_alert');
                alert(err.statusMsg);
            });
    };

    //$scope.$route = $route;
}