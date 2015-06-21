function truckManageCtrl($scope, $http, $location, $anchorScroll, UserRequest, TruckRequest) {
    //console.log('Inside truckManageCtrl - '+$scope.page.scope);

    clearAlert("manage_truck_alert");
    $scope.truckForm = {};
    $scope.width = 50;
    $scope.width = $scope.width.toFixed();
    $scope.width = $scope.width + "%";

    $scope.truck = TruckRequest.getSharedTruck();
    //console.log("User details in Manage Truck:"+JSON.stringify($scope.user));

    $scope.init = function(){
        $scope.getTruckTypes();
        $scope.getTruckMakes();
    } ;

    //$scope.truckTypeList = ["Ashok Leyland","Tata","Eicher","Force","Mahindra","Hindustan","Swaraj Mazda","Volvo","MAN","AMW","Tatra Vectra","DAF","Kamaz Vactra","SML Isuzu","Bharat Benz"];
    $scope.truckTypeList = [];
    $scope.getTruckTypes = function(){
        $http.get("/TransEarth/getTruckTypes")
            .success(function(data) {
                //console.log("Truck Types looked up:"+JSON.stringify(data));
                $scope.truckTypeList = data;
                //$scope.truck.details.type = "";
                var options = '';
                options += '<option data-hidden="true">Choose one</option>';
                $.each(data, function (i, row) {
                    //console.log(JSON.stringify(row));
                    if(typeof $scope.truck.truck_details != "undefined" && typeof $scope.truck.truck_details.type != "undefined"
                        && $scope.truck.truck_details.type != null
                        && $scope.truck.truck_details.type == row){
                        options += '<option selected>' + row + '</option>';
                    }else{
                        options += '<option>' + row + '</option>';
                    }
                });
                //alert(id+' - '+options);
                //Apply html with option
                /*applyHtml("truck_type", options);
                applySelect("truck_type");
                if(typeof $scope.truck.truck_details != "undefined"
                        && typeof $scope.truck.truck_details.type != "undefined" && $scope.truck.truck_details.type != null){
                    //console.log("Truck Types lookup selected:"+$scope.truck.truck_details.type);
                    //$('#truck_type').selectpicker('val', $scope.load.load.preferredTruck.type);
                    $('#truck_type').val($scope.truck.truck_details.type);
                    $('#truck_type').selectpicker('refresh');
                }*/
                if(typeof $scope.truck.truck_details != "undefined"
                        && typeof $scope.truck.truck_details.typeDescription != "undefined" && $scope.truck.truck_details.typeDescription != null){
                    $scope.truck.details.typeDescription = $scope.truck.truck_details.typeDescription;
                }
            }).error(function(err) {
                //console.log("truckType Lookup failed:"+JSON.stringify(err));
            });
    };
    //$scope.getTruckTypes();
    $scope.makeList = [];
    $scope.getTruckMakes = function(){
        $http.get("/TransEarth/getTruckMakes")
            .success(function(data) {
                //console.log("Truck Makes looked up:"+data);
                $scope.makeList = data;
                //$scope.truck.details.make = "";
                var options = '';
                options += '<option data-hidden="true">Choose one</option>';
                $.each(data, function (i, row) {
                    //console.log(JSON.stringify(row));
                    if(typeof $scope.truck.truck_details != "undefined"
                        && typeof $scope.truck.truck_details.make != "undefined" && $scope.truck.truck_details.make != null && $scope.truck.truck_details.make == row){
                        options += '<option selected>' + row + '</option>';
                    }else{
                        options += '<option>' + row + '</option>';
                    }
                });
                //alert(id+' - '+options);
                //Apply html with option
                /*applyHtml("make", options);
                applySelect("make");
                if(typeof $scope.truck.truck_details != "undefined"
                        && typeof $scope.truck.truck_details.make != "undefined" && $scope.truck.truck_details.make != null){
                    //console.log("Truck Makes lookup selected:"+$scope.truck.truck_details.make);
                    //$('#make').selectpicker('val', $scope.load.load.preferredTruck.make);
                    $('#make').val($scope.truck.truck_details.make);
                    $('#make').selectpicker('refresh');
                }*/
            }).error(function(err) {
                //console.log("Make Lookup failed:"+JSON.stringify(err));
            });
    };
    //$scope.getTruckMakes();

    $scope.addTruckInd = false;
    $scope.editTruckInd = false;
    $scope.dumpTruck = function(){
        /*if(typeof $scope.truckShared != "undefined" && typeof $scope.truckShared.owner != "undefined" && typeof $scope.truckShared.company != "undefined"
            && $scope.truckShared.company.address_same_as_owner){
            //$scope.truckShared.company.address_same_as_owner = $scope.truckShared.company.address_same_as_owner;
            $scope.truckShared.company.address = $scope.truckShared.owner.address;
        }
        if(typeof $scope.truckShared != "undefined" && typeof $scope.truckShared.owner != "undefined" && typeof $scope.truckShared.company != "undefined"
            && $scope.truckShared.company.contact_same_as_owner){
            //$scope.truckShared.company.contact_same_as_owner = $scope.truckShared.company.contact_same_as_owner;
            $scope.truckShared.company.contact = $scope.truckShared.owner.contact;
            //$scope.truckShared.company.address.pincode = $scope.truckShared.company.address.pincode.toString();
        }*/
        /*$scope.truckShared.owner.address.mapLocation = {
            place : $scope.truckShared.owner.address.city,
            state : $scope.truckShared.owner.address.state,
            country : $scope.truckShared.owner.address.country,
            display : $scope.truckShared.owner.address.city,
            isSelected : true,
            disable : $scope.truckShared.owner.details_same_as_user
        };
        $scope.truckShared.company.address.mapLocation = {
            place : $scope.truckShared.company.address.city,
            state : $scope.truckShared.company.address.state,
            country : $scope.truckShared.company.address.country,
            display : $scope.truckShared.company.address.city,
            isSelected : true,
            disable : $scope.truckShared.company.address_same_as_owner
        };
        $scope.truckShared.owner.contact = $scope.truckShared.owner.contact.toString();
        $scope.truckShared.company.contact = $scope.truckShared.company.contact.toString();

        $scope.truckShared.owner.address.pincode = $scope.truckShared.owner.address.pincode.toString();
        $scope.truckShared.company.address.pincode = $scope.truckShared.company.address.pincode.toString();*/

        if(typeof $scope.truckShared != "undefined" && typeof $scope.truckShared.truck_details != "undefined" ){
            $scope.truckShared.details = {};
            $scope.truckShared.details.type = $scope.truckShared.truck_details.type;
            $scope.truckShared.details.make = $scope.truckShared.truck_details.make;
            $scope.truckShared.details.model = $scope.truckShared.truck_details.model;
            $scope.truckShared.details.regno = $scope.truckShared.truck_details.reg_no;
            $scope.truckShared.details.load = $scope.truckShared.truck_details.maximum_load.quantity.toString();
        }
        $scope.truck = $scope.truckShared;
        /*$scope.$watch('truck.details.regno', function() {
            $scope.truck.details.regno = $scope.truck.details.regno.replace(/\s+/g,'');
        });*/
        //console.log("Truck dumped: "+JSON.stringify( $scope.truck));
    };

    if(typeof $scope.truck == "undefined" || $scope.truck == null){
        $scope.truck = {};
        $scope.truck.details = {};
        //$scope.truck.details.make = "";
        //$scope.truck.details.type = "";

        /*$scope.truck.owner = {};
        $scope.truck.owner.address = {};
        $scope.truck.owner.address.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };
        $scope.truck.company = {};
        $scope.truck.company.address = {};
        $scope.truck.company.address.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };*/
        $scope.page.header = "Add Truck";
        $scope.addTruckInd = true;
        $scope.editTruckInd = false;
        //console.log("Truck to be added: "+JSON.stringify( $scope.truck));
        /*$scope.$watch('truck.details.regno', function() {
            $scope.truck.details.regno = $scope.truck.details.regno.replace(/\s+/g,'');
        });*/

    }else{
        $scope.page.header = "Edit Truck";
        $scope.addTruckInd = false;
        $scope.editTruckInd = true;

        $scope.truckShared = TruckRequest.getSharedTruck();
        $scope.dumpTruck();
        //console.log('Truck to be edited: '+JSON.stringify($scope.truck));
    }
    /*if($scope.page.scope == "Add Truck"){
        $scope.page.header = "Add Truck";
        $scope.addTruckInd = true;
        $scope.editTruckInd = false;
    }else if($scope.page.scope == "Edit Truck"){
        //console.log('Page scope - Edit Truck');
        $scope.page.header = "Edit Truck";
        $scope.editTruckInd = true;
        $scope.addTruckInd = false;
        $scope.truck = TruckRequest.getSharedTruck();
        //console.log('Truck to be editted: '+JSON.stringify($scope.truck));
        //$scope.fetchTruck();
    }*/

    $scope.gotoHome = function(){
        TruckRequest.setSharedTruck(null);
        $scope.page.template = "/TransEarth/truck_owner_home";
        $scope.page.scope = "Truck Owner Home";
    };

    $scope.truckProcess = {};
    $scope.truckProcess.function = {};
    $scope.truckProcess.indicator = {};
    $scope.truckProcess.indicator.showCompanyDetails = false;
    $scope.truckProcess.indicator.showOwnerDetails = true;

    $scope.canDisableOwnerDetails = function(){
        //console.log("canDisableOwnerDetails with user information: "+JSON.stringify($scope.user));
        if(typeof $scope.truck.owner == "undefined" && $scope.truck.owner == null){
            $scope.truck.owner = {};
        }
        if($scope.truck.owner.details_same_as_user && typeof $scope.user.user_information != "undefined"
            && $scope.user.user_information.address != "undefined"){
            $scope.truck.owner.first_name = $scope.user.user_information.first_name;
            $scope.truck.owner.last_name = $scope.user.user_information.last_name;

            $scope.truck.owner.address.line1 = $scope.user.user_information.address.line1;
            $scope.truck.owner.address.line2 = $scope.user.user_information.address.line2;
            //$scope.truck.company.address.line3 = $scope.truck.owner.address.line3;
            //$scope.truck.owner.address.city = $scope.user.user_information.address.city;
            //$scope.truck.owner.address.state = $scope.user.user_information.address.state;
            $scope.truck.owner.address.mapLocation = {
                place : $scope.user.user_information.address.city,
                state : $scope.user.user_information.address.state,
                country : $scope.user.user_information.address.country,
                display : $scope.user.user_information.address.city,
                isSelected : true,
                disable : true
            };
            $("#owner_city").val($scope.user.user_information.address.city);

            $scope.truck.owner.address.pincode = $scope.user.user_information.address.pincode.toString();
            $scope.truck.owner.contact = $scope.user.user_information.contact[0].toString();

            if(typeof $scope.truck.company == "undefined" && $scope.truck.company == null){
                $scope.truck.company = {};
            }
            if($scope.truck.owner.details_same_as_user && typeof $scope.user.user_information != "undefined"){
                $scope.truck.company.name = $scope.user.user_information.company_name;
            }
            //console.log("canDisableOwnerDetails "+JSON.stringify($scope.truck.owner));
            //$scope.company.address_same_as_owner = true;
        }else{
            if(typeof $scope.truck.owner != "undefined" && typeof $scope.truck.owner.address != "undefined" && typeof $scope.truck.owner.address.mapLocation != "undefined"
                && $scope.truck.owner != null && $scope.truck.owner.address != null && $scope.truck.owner.address.mapLocation != null){
                $scope.truck.owner.address.mapLocation.disable = false;
            }
            /*$scope.truck.owner.first_name = "";
            $scope.truck.owner.last_name = "";
            $scope.truck.owner.address.line1 = "";
            $scope.truck.owner.address.line2 = "";
            $scope.truck.owner.address.mapLocation = {
                place : "",
                state : "",
                isSelected : true,
                disable : true
            };
            $("#owner_city").val("");
            $scope.truck.owner.address.pincode = "";
            $scope.truck.owner.contact = "";
            if(typeof $scope.truck.company == "undefined" && $scope.truck.company == null){
                $scope.truck.company = {};
            }
            $scope.truck.company.name = "";
            //console.log("canDisableOwnerDetails "+JSON.stringify($scope.truck.owner));*/
        }
    };
    $scope.canDisableCompanyDetails = function(){
        //console.log("canDisableCompanyDetails with user information: "+JSON.stringify($scope.user));
        if(typeof $scope.truck.company == "undefined" && $scope.truck.company == null){
            $scope.truck.company = {};
        }
        if($scope.truck.company.details_same_as_user && typeof $scope.user.user_information != "undefined"
            && $scope.user.user_information.address != "undefined"){
            $scope.truck.company.name = $scope.user.user_information.company_name;

            $scope.truck.company.address.line1 = $scope.user.user_information.address.line1;
            $scope.truck.company.address.line2 = $scope.user.user_information.address.line2;
            //$scope.truck.company.address.line3 = $scope.truck.owner.address.line3;
            //$scope.truck.owner.address.city = $scope.user.user_information.address.city;
            //$scope.truck.owner.address.state = $scope.user.user_information.address.state;
            $scope.truck.company.address.mapLocation = {
                place : $scope.user.user_information.address.city,
                state : $scope.user.user_information.address.state,
                country : $scope.user.user_information.address.country,
                display : $scope.user.user_information.address.city,
                isSelected : true,
                disable : true
            };
            $("#company_city").val($scope.user.user_information.address.city);

            $scope.truck.company.address.pincode = $scope.user.user_information.address.pincode.toString();
            $scope.truck.company.contact = $scope.user.user_information.contact[0].toString();
            $scope.truck.company.address_same_as_owner = false;
            //console.log("canDisableCompanyDetails "+JSON.stringify($scope.truck.company));
            //$scope.company.address_same_as_owner = true;
        }else{
            if(typeof $scope.truck.company != "undefined" && typeof $scope.truck.company.address != "undefined" && typeof $scope.truck.company.address.mapLocation != "undefined"
                && $scope.truck.company != null && $scope.truck.company.address != null && $scope.truck.company.address.mapLocation != null){
                $scope.truck.company.address.mapLocation.disable = false;
            }
            /*$scope.truck.company.name = "";
            $scope.truck.company.address.line1 = "";
            $scope.truck.company.address.line2 = "";
            $scope.truck.company.address.mapLocation = {
                place : "",
                state : "",
                isSelected : true,
                disable : true
            };
            $("#company_city").val("");
            $scope.truck.company.address.pincode = "";
            $scope.truck.company.contact = "";
            $scope.truck.company.address_same_as_owner = false;
            //console.log("canDisableCompanyDetails "+JSON.stringify($scope.truck.company));*/
        }
    };
    $scope.canDisableSameAddress = function(){
        //console.log("canDisableSameAddress owner with "+$scope.truck.company.address_same_as_owner+" as "+JSON.stringify($scope.truck.owner));
        if(typeof $scope.truck.company == "undefined" && $scope.truck.company == null){
            $scope.truck.company = {};
        }
        if($scope.truck.company.address_same_as_owner
                /*&& typeof $scope.truck.owner.address.line1!="undefined"
                && typeof $scope.truck.owner.address.city!="undefined" && typeof $scope.truck.owner.address.state!="undefined" && typeof $scope.truck.owner.address.pincode!="undefined"
                && $scope.truck.owner.address.line1!=null && $scope.truck.owner.address.city!=null && $scope.truck.owner.address.state!=null
                && typeof $scope.truck.owner.address.pincode!=null*/){
            $scope.truck.company.address.line1 = $scope.truck.owner.address.line1;
            $scope.truck.company.address.line2 = $scope.truck.owner.address.line2;
            //$scope.truck.company.address.line3 = $scope.truck.owner.address.line3;
            $scope.truck.company.address.city = $scope.truck.owner.address.city;
            $scope.truck.company.address.state = $scope.truck.owner.address.state;
            $scope.truck.company.address.mapLocation = $scope.truck.owner.address.mapLocation ;
            if(typeof $scope.truck.company != "undefined" && typeof $scope.truck.company.address != "undefined" && typeof $scope.truck.company.address.mapLocation != "undefined"
                && $scope.truck.company != null && $scope.truck.company.address != null && $scope.truck.company.address.mapLocation != null){
                $scope.truck.company.address.mapLocation.disable = true;
            }
            //$("#company_city").val($scope.truck.owner.address.mapLocation.place);
            $("#company_city").val($("#owner_city").val());
            $scope.truck.company.address.pincode = $scope.truck.owner.address.pincode;
            //$scope.company.address_same_as_owner = true;
        }else if(typeof $scope.truck.company != "undefined"
                && typeof $scope.truck.company.address != "undefined"
                && $scope.truck.company != null && $scope.truck.company.address != null){
            if(typeof $scope.truck.company != "undefined" && typeof $scope.truck.company.address != "undefined" && typeof $scope.truck.company.address.mapLocation != "undefined"
                && $scope.truck.company != null && $scope.truck.company.address != null && $scope.truck.company.address.mapLocation != null){
                $scope.truck.company.address.mapLocation.disable = false;
            }
            /*console.log("canDisableSameAddress owner 1 "+JSON.stringify($scope.truck.owner));
            $scope.truck.company.address.line1 = "";
            //console.log("canDisableSameAddress owner 2 "+JSON.stringify($scope.truck.owner));
            $scope.truck.company.address.line2 = "";
            //console.log("canDisableSameAddress owner 3 "+JSON.stringify($scope.truck.owner));
            $scope.truck.company.address.mapLocation = {
                place : "",
                state : "",
                isSelected : false,
                disable : false
            };
            //console.log("canDisableSameAddress owner 4 "+JSON.stringify($scope.truck.owner));
            $scope.truck.company.address.pincode = "";
            //console.log("canDisableSameAddress owner 5 "+JSON.stringify($scope.truck.owner));*/
        }
        //console.log("canDisableSameAddress owner "+JSON.stringify($scope.truck.owner));
        //console.log("canDisableSameAddress company "+JSON.stringify($scope.truck.company));
    };
    $scope.canDisableSameContact = function(){
        //console.log("canDisableSameContact "+JSON.stringify($scope.truck.company));
        if(typeof $scope.truck.company == "undefined" && $scope.truck.company == null){
            $scope.truck.company = {};
        }
        if($scope.truck.company.contact_same_as_owner && typeof $scope.truck.owner.contact != "undefined" && typeof $scope.truck.owner.contact != null){
            $scope.truck.company.contact = $scope.truck.owner.contact;
            //$scope.truck.company.contact_same_as_owner = true;
        }else{
            //$scope.truck.company.contact = "";
            //$scope.truck.company.contact_same_as_owner = false;
        }
    };

    $scope.truckProcess.function.showCompanyDetails = function(){
        if($scope.truckForm.first_name.$valid
            && $scope.truckForm.last_name.$valid
            && $scope.truckForm.first_name.$valid){
            $scope.truckProcess.indicator.showCompanyDetails = true;
        }else{
            $scope.truckProcess.indicator.showCompanyDetails = false;
        }
    };
    $scope.truckProcess.function.showOwnerDetails = function(){
        //console.log("User Type Form validity: "+$scope.truckForm.user_type.$valid);
        if($scope.truckForm.$valid){
            $scope.truckProcess.indicator.showOwnerDetails = true;
        }else{
            $scope.truckProcess.indicator.showOwnerDetails = false;
        }
    };

    /*$scope.$`('user.country', function (newVal,oldVal) {

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
        $scope.truck = {};
    };

    $scope.cancelTruckUpdate = function(){
        TruckRequest.setSharedTruck(null);
        $scope.truckOwnerPage.showManageTruck = false;
    };

    $scope.submitForm = function () {

        // Set the 'submitted' flag to true
        $scope.truckProcess.indicator.submitted = true;
        $scope.truckProcess.indicator.saved = false;
        $scope.truckProcess.indicator.showAlert = false;

        if ($scope.truckForm.$valid) {
            //console.log("Form is valid! "+JSON.stringify($scope.truck));

            /*if($scope.truck.owner.details_same_as_user){
                $scope.truck.owner.details_same_as_user = true;
            }else{
                $scope.truck.owner.details_same_as_user = false;
            }
            if($scope.truck.company.details_same_as_user){
                $scope.truck.company.details_same_as_user = true;
            }else{
                $scope.truck.company.details_same_as_user = false;
            }
            if($scope.truck.company.address_same_as_owner){
                $scope.truck.company.address_same_as_owner = true;
            }else{
                $scope.truck.company.address_same_as_owner = false;
            }
            if($scope.truck.company.contact_same_as_owner){
                $scope.truck.company.contact_same_as_owner = true;
            }else{
                $scope.truck.company.contact_same_as_owner = false;
            }*/
            var url = "";
            if($scope.addTruckInd){
                url = "/TransEarth/addTruck";
            }else if($scope.editTruckInd){
                url = "/TransEarth/editTruck";
            }
            $http.post(url, {truck : $scope.truck})
                .success(function(data) {
                    //console.log("Truck saved successfully");
                    $scope.truckProcess.indicator.saved = true;
                    TruckRequest.setSharedTruck(null);
                    TruckRequest.setSharedTruckProcessed(true);

                    $scope.myTruckList.messageAvailable = true;
                    succesAlert("Truck updated successfully", 'truck_home_alert');
                    $scope.truckOwnerPage.refresh = ($scope.truckOwnerPage.refresh != null) ? !$scope.truckOwnerPage.refresh : true;
                    $location.hash('truck_home_alert');

                    $scope.truckOwnerPage.showManageTruck = false;

                    //$scope.page.template = "/TransEarth/truck_owner_home";
                    //$scope.page.scope = "Truck Owner Home";
                    /*if($scope.addTruckInd){
                        $scope.truckProcess.indicator.showAlert = true;
                        successInfo(data.statusMsg, 'truck_home_alert');

                        //$scope.truckOwnerPage.showTruckList = true;
                        //$scope.truckOwnerPage.showPostList = true;

                        $scope.page.template = "/TransEarth/truck_owner_home";
                        $scope.page.scope = "Truck Owner Home";
                        // set the location.hash to the id of
                        // the element you wish to scroll to.
                        $location.hash('truckManagePage');

                        // call $anchorScroll()
                        $anchorScroll();
                    }else if($scope.editTruckInd){
                        $scope.truckProcess.indicator.showAlert = true;
                        //successInfo(data.statusMsg, 'manage_truck_alert');
                        successInfo(data.statusMsg, 'truck_home_alert');

                        //$scope.truckOwnerPage.showTruckList = true;
                        //$scope.truckOwnerPage.showPostList = true;

                        $scope.page.template = "/TransEarth/truck_owner_home";
                        $scope.page.scope = "Truck Owner Home";
                        // set the location.hash to the id of
                        // the element you wish to scroll to.
                        $location.hash('truckManagePage');

                        // call $anchorScroll()
                        $anchorScroll();

                    }*/
                }).error(function(data) {
                    //console.log("Truck saved failed:"+data);
                    $scope.truckProcess.indicator.saved = false;
                    $scope.truckProcess.indicator.showAlert = true;
                    succesError(data.statusMsg, 'truck_home_alert');
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash('truck_home_alert');

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
            $scope.truckProcess.indicator.showAlert = true;
            succesError("Please correct the errors", 'manage_truck_alert');
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('truckManagePage');

            // call $anchorScroll()
            $anchorScroll();
        }
    };
}
