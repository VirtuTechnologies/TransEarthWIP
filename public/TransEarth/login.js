function loginCtrl($scope, $http, $location, $anchorScroll, UserRequest) {
    //console.log('Inside loginCtrl - '+JSON.stringify($scope.serverAuth));

    $scope.core = {};
    $scope.width = 80;
    $scope.width = $scope.width.toFixed();
    $scope.width = $scope.width + "%";
    //console.log("$scope.width "+$scope.width);
    /*if(typeof $scope.error != "undefined" && $scope.error != null){
        $scope.serverAuth.authFailed = true;
        succesError($scope.error, "login_alert");
    }*/

    if($scope.serverAuth.authFailed){
        //console.log('Inside loginCtrl serverAuth failed - '+JSON.stringify($scope.serverAuth));
        succesError($scope.serverAuth.message, "login_alert");
    }else if($scope.serverAuth.messageAvailable){
        //console.log('Inside loginCtrl serverAuth failed - '+JSON.stringify($scope.serverAuth));
        succesAlert($scope.serverAuth.message, "login_alert");
    }else{
        clearAlert("login_alert");
    }
    $scope.user = {};
    $scope.user.mapLocation = {
        place : "",
        state : "",
        isSelected : false,
        disable : false
    };

    $scope.signUp = function(){
        //console.log("Signup clicked");
        $scope.serverAuth.authFailed = false;
        clearAlert("login_alert");
        $scope.page.template = ''+"/TransEarth/signup";
    };

    $scope.login = function(){
        //console.log("Login clicked:: "+JSON.stringify($scope.user));
        $scope.login.authFailed = false;
        $scope.login.messageAvailable = false;
        $http.post("/TransEarth/login", {username : $scope.user.username, password : $scope.user.password})
            .success(function(data) {
                //console.log("Logged in");
                $scope.core.loggedIn = true;
                UserRequest.setUserProfile({
                });
                $scope.page.template = ''+"/TransEarth";
                //$location.url("/");
            }).error(function(data) {
                //console.log("Logged in Error: "+data);
                $scope.core.loggedIn = false;
                $scope.serverAuth.authFailed = true;
                succesError(data, 'login_alert');
                //$scope.messageAvailable = true;
                //$scope.index.messageAvailable = true;
                //succesError(data.statusMsg, 'indexTruckListMessage');
                //succesError("Login failed", 'login_alert');
            });
    };

    $scope.countryList = [
        { CountryId: 1, Name: 'India' }
    ];

    $scope.userTypes = [
        { type: 'truck_owner', Name: 'Truck Owner' },
        { type: 'load_owner', Name: 'Load Owner' },
        { type: 'agent', Name: 'Booking Agent' },
        { type: 'contractor', Name: 'Transport Contractor' }
    ];

    $scope.cityList = [];
    $scope.register = {};
    $scope.register.showAccountDetails = false;
    $scope.register.showPersonalDetails = false;
    $scope.showAccountDetails = function(){
        //console.log("User Type Form validity: "+$scope.userForm.user_type.$valid);
        if($scope.userForm.user_type.$valid){
            $scope.register.showAccountDetails = true;
        }else{
            $scope.register.showAccountDetails = false;
        }
    };
    $scope.showAccountDetails = function(){
        //console.log("User Type Form validity: "+$scope.userForm.user_type.$valid);
        if($scope.userForm.user_type.$valid){
            $scope.register.showAccountDetails = true;
        }else{
            $scope.register.showAccountDetails = false;
        }
    };
    $scope.passwordMismatch = true;
    $scope.passwordValidation = function() {
        //console.log("$scope.user.newPassword - "+$scope.user.password+" $scope.user.confirmPassword - "+$scope.user.confirmPassword);
        if($scope.user.password != $scope.user.confirmPassword){
            $scope.passwordMismatch = true;
        }else{
            $scope.passwordMismatch = false;
        }
    };

    /*$scope.$watch('user.country', function (newVal,oldVal) {

        if (newVal == 1)
            $scope.cityList = [
                { CountryId: 1, CityId: 1, Name: 'Noida' },
                { CountryId: 1, CityId: 2, Name: 'Delhi' }];
        else if (newVal == 2)
            $scope.cityList = [
                { CountryId: 2, CityId: 3, Name: 'Texas' },
                { CountryId: 2, CityId: 4, Name: 'NewYork' }];
        else
            $scope.cityList = [];
    });*/

    // function to submit the form after all validation has occurred
    $scope.reset = function(){
        $scope.user = {};
        $scope.user.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };
        $scope.register = {};
    };

    $scope.submitForm = function () {

        // Set the 'submitted' flag to true
        $scope.submitted = true;
        $scope.saved = false;

        if ($scope.userForm.$valid) {
            //console.log("Form is valid! "+JSON.stringify($scope.user));

            $http.post("/TransEarth/createUser", {user : $scope.user})
                .success(function(data) {
                    //console.log("User saved successfully");
                    $scope.saved = true;
                    $scope.register.showAccountDetails = false;
                    $scope.register.showPersonalDetails = false;
                    $scope.passwordMismatch = true;
                    $scope.user = {};
                    //succesAlert("User registered successfully", 'signup_alert');
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    //$location.hash('registerForm');

                    // call $anchorScroll()
                    //$anchorScroll();
                    $scope.serverAuth.messageAvailable = true;
                    $scope.serverAuth.message = "User registered successfully. Please login";
                    $scope.loginClicked();
                }).error(function(err) {
                    //console.log("User saved failed:"+err.statusMsg);
                    $scope.saved = false;
                    succesError(err.statusMsg, 'signup_alert');
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash('registerForm');

                    // call $anchorScroll()
                    $anchorScroll();
                    //$scope.messageAvailable = true;
                    //$scope.index.messageAvailable = true;
                    //succesError(data.statusMsg, 'indexTruckListMessage');
                    //succesError("Login failed", 'login_alert');
                });
        }
        else {
            //alert("Please correct errors!");
            succesError("Please correct Errors", 'login_alert');
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('registerForm');

            // call $anchorScroll()
            $anchorScroll();
        }
    };
}
