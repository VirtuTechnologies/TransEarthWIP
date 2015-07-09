function loadManageCtrl($scope, $http, $location, $anchorScroll, UserRequest, LoadRequest) {
    //console.log('Inside loadManageCtrl - ');

    $scope.init = function(){
        $scope.getTruckTypes();
        $scope.getMaterials();
    } ;

    $scope.minDate = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
    clearAlert("manage_load_alert");
    $scope.chooseOne = "Choose One";
    $scope.blanks = "";
    $scope.style = "btn-danger";
    $scope.materialTypeList = [];

    $scope.gotoHome = function(){
        //TruckRequest.setSharedTruck(null);
        $scope.page.template = "/TransEarth/load_owner_home";
        $scope.page.scope = "Load Owner Home";
    };
    $scope.showLoadDetails = false;
    $scope.trackDays= function(){
        //console.log("Tracking Days for frequency "+$scope.truckToPost.post.schedule.frequency);
        if(typeof $scope.load.load.schedule.frequency != "undefined" && $scope.load.load.schedule.frequency != null){
            if($scope.load.load.schedule.frequency == "Weekly"){
                $scope.dateRange = 7;
                $scope.showLoadDetails = true;
            }else if($scope.load.load.schedule.frequency == "Monthly"){
                $scope.monthRange = 1;
                $scope.showLoadDetails = true;
            }else if($scope.load.load.schedule.frequency == "Daily"){
                $scope.showLoadDetails = true;
            }else if($scope.load.load.schedule.frequency == "One Time"){
                $scope.showLoadDetails = true;
            }else{
                $scope.showLoadDetails = false;
            }
        }
    };
    $scope.showPickupSection = function(){
        var returnValue = false;
        if(typeof $scope.load.load != "undefined" && $scope.load.load != null && typeof $scope.load.load.schedule != "undefined" && $scope.load.load.schedule != null
            && typeof $scope.load.load.schedule.frequency != "undefined" && $scope.load.load.schedule.frequency != null && $scope.load.load.schedule.frequency=='One Time'){
            if(typeof $scope.load.load.end_date != "undefined" && $scope.load.load.end_date != null){
                returnValue = true;
            }
        }else{
            if(typeof $scope.load.load != "undefined" && $scope.load.load != null
                && typeof $scope.load.load.start_date != "undefined" && $scope.load.load.start_date != null
                && typeof $scope.load.load.end_date != "undefined" && $scope.load.load.end_date != null){
                returnValue = true;
            }
        }
        return returnValue;
    };
    $scope.getMaterials = function(){
        $http.get("/TransEarth/getMaterialTypes")
            .success(function(data) {
                $scope.materialTypeList = data;
                //console.log("Materials looked up:"+JSON.stringify($scope.materialTypeList));
                /*var options = '';
                options += '<option data-hidden="true">'+$scope.chooseOne+'</option>';
                $.each(data, function (i, row) {
                    //console.log(JSON.stringify(row));
                    options += '<option>' + row + '</option>';
                });
                //alert(id+' - '+options);
                //Apply html with option
                applyHtml("materialType", options);
                applySelect("materialType");
                if(typeof $scope.load.load.material.type != "undefined" && $scope.load.load.material.type != null){
                    //$('#materialType').selectpicker('val', $scope.load.load.material.type);
                    $('#materialType').val($scope.load.load.material.type);
                    $('#materialType').selectpicker('refresh');
                }*/
                //console.log("Materials assigned: "+$scope.load.load.material.type);
                //$('#materialType').selectpicker('refresh');
            }).error(function(err) {
                //console.log("Materials Lookup failed:"+JSON.stringify(err));
            });
    };

    $scope.getTruckTypes = function(){
        $http.get("/TransEarth/getTruckTypes")
            .success(function(data) {
                //console.log("Truck Types looked up:"+JSON.stringify(data));
                $scope.truckTypeList = data;
                /*var options = '';
                options += '<option data-hidden="true">'+$scope.chooseOne+'</option>';
                $.each(data, function (i, row) {
                    //console.log(JSON.stringify(row));
                    options += '<option>' + row + '</option>';
                });
                //alert(id+' - '+options);
                //Apply html with option
                applyHtml("truckType", options);
                applySelect("truckType");
                if(typeof $scope.load.load.preferredTruck.type != "undefined" && $scope.load.load.preferredTruck.type != null){
                    //$('#truckType').selectpicker('val', $scope.load.load.preferredTruck.type);
                    $('#truckType').val($scope.load.load.preferredTruck.type);
                    $('#truckType').selectpicker('refresh');
                }*/
            }).error(function(err) {
                //console.log("truckType Lookup failed:"+JSON.stringify(err));
            });
    };

    $scope.minDate = new Date();
    $scope.loadProcess = {};
    $scope.loadProcess.function = {};
    $scope.loadProcess.indicator = {};

    $scope.addLoadInd = false;
    $scope.editLoadInd = false;
    var sharedLoad = LoadRequest.getSharedLoad();
    var userDetails = UserRequest.getUserProfile();
    if(typeof sharedLoad != "undefined" && sharedLoad != null){
        //console.log("Shared Load in memory: "+JSON.stringify(sharedLoad));
        $scope.page_header = "Edit Load";
        $scope.editLoadInd = true;
        $scope.addLoadInd = false;
        //$scope.loadForm = {};
        /*sharedLoad.owner.address.mapLocation = {
            place : $scope.user.user_information.address.city,
            state : $scope.user.user_information.address.state,
            country : $scope.user.user_information.address.country,
            display : "",//sharedLoad.owner.address.city,
            isSelected : true,
            disable : false
        };
        sharedLoad.company.address.mapLocation = {
            place : $scope.user.user_information.address.city,
            state : $scope.user.user_information.address.state,
            country : $scope.user.user_information.address.country,
            display : "", //sharedLoad.owner.address.city,
            isSelected : true,
            disable : false
        };*/
        sharedLoad.load.pickup.address.mapLocation = {
            place : sharedLoad.load.pickup.address.city,
            state : sharedLoad.load.pickup.address.state,
            country : sharedLoad.load.pickup.address.country,
            display : sharedLoad.load.pickup.address.city,
            isSelected : true,
            disable : false
        };
        sharedLoad.load.delivery.address.mapLocation = {
            place : sharedLoad.load.delivery.address.city,
            state : sharedLoad.load.delivery.address.state,
            country : sharedLoad.load.delivery.address.country,
            display : sharedLoad.load.delivery.address.city,
            isSelected : true,
            disable : false
        };
        //sharedLoad.owner.address.pincode  = sharedLoad.owner.address.pincode.toString();
        //sharedLoad.company.address.pincode  = sharedLoad.company.address.pincode.toString();
        //sharedLoad.owner.contact  = sharedLoad.owner.contact.toString();
        //sharedLoad.company.contact  = sharedLoad.company.contact.toString();
        if(typeof sharedLoad.load.pickup.address.line1 != "undefined" && sharedLoad.load.pickup.address.line1 != null){
            $scope.pickupPinFlag = true;
            sharedLoad.load.pickup.address.pincode  =
                (typeof sharedLoad.load.pickup.address.pincode != "undefined" && sharedLoad.load.pickup.address.pincode != null) ? sharedLoad.load.pickup.address.pincode.toString() : "";
        }
        sharedLoad.load.pickup.contact  =
            (typeof sharedLoad.load.pickup.contact != "undefined" && sharedLoad.load.pickup.contact != null) ? sharedLoad.load.pickup.contact.toString() : "";
        if(typeof sharedLoad.load.delivery.address.line1 != "undefined" && sharedLoad.load.delivery.address.line1 != null){
            $scope.deliveryPinFlag = true;
            sharedLoad.load.delivery.address.pincode  =
                (typeof sharedLoad.load.delivery.address.pincode != "undefined" && sharedLoad.load.delivery.address.pincode != null) ? sharedLoad.load.delivery.address.pincode.toString() : "";
        }
        sharedLoad.load.delivery.contact  =
            (typeof sharedLoad.load.delivery.contact != "undefined" && sharedLoad.load.delivery.contact != null) ? sharedLoad.load.delivery.contact.toString() : "";
        sharedLoad.load.quantity  = sharedLoad.load.quantity.toString();
        var schedule = sharedLoad.load.schedule;
        sharedLoad.load.schedule = {};
        sharedLoad.load.schedule.frequency = schedule;

        $scope.load = sharedLoad;
        $scope.trackDays();

        console.log("Shared Load: "+JSON.stringify($scope.load));
        //$scope.disableAddress = $scope.load.company.address_same_as_owner;
        //$scope.disableContact = $scope.load.company.contact_same_as_owner;
        $scope.loadProcess.indicator.showCompanyDetails = true;
        $scope.loadProcess.indicator.showOwnerDetails = true;
    }else{
        $scope.page_header = "Add Load";
        $scope.addLoadInd = true;
        $scope.editLoadInd = false;
        //$scope.loadForm = {};
        $scope.load = {};
        $scope.load.owner = {};
        $scope.load.owner.address = {};
        $scope.load.company = {};
        $scope.load.company.address = {};
        $scope.$watch("load.company.contact", function(){
            //console.log("watching contact:"+$scope.load.company.contact);
        });
        $scope.load.owner.address.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };
        $scope.load.company.address.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };
        $scope.load.load = {};
        $scope.load.load.schedule = {};
        $scope.load.load.schedule.frequency = "";
        $scope.load.load.material = {};
        $scope.load.load.preferredTruck = {};
        $scope.load.load.pickup = {};
        $scope.load.load.pickup.date = null;
        $scope.load.load.start_date = null;
        $scope.load.load.end_date = null;
        $scope.load.load.pickup.address = {};
        $scope.load.load.pickup.address.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };
        $scope.load.load.delivery = {};
        $scope.load.load.delivery.address = {};
        $scope.load.load.delivery.address.mapLocation = {
            place : "",
            state : "",
            isSelected : false,
            disable : false
        };
        $scope.load.details = {};
        $scope.load.details.pickup = {};
        $scope.load.details.pickup.address = {};
        $scope.load.details.delivery = {};
        $scope.load.details.delivery.address = {};
        $scope.loadProcess.indicator.showCompanyDetails = false;
        $scope.loadProcess.indicator.showOwnerDetails = true;
    }

    $scope.frequency = ["One Time", "Daily", "Weekly", "Monthly"];
    /*var frequency = ["One Time", "Daily", "Weekly", "Monthly"];
    var options = '';
    options += '<option value="">Choose one</option>';
    $.each(frequency, function (i, row) {
        //console.log(JSON.stringify(row));
        if(typeof $scope.load.load.schedule != "undefined"
            && $scope.load.load.schedule != null
            && $scope.load.load.schedule.frequency == row){
            options += '<option selected>' + row + '</option>';
        }else{
            options += '<option>' + row + '</option>';
        }
    });*/

    $scope.showStep1 = true;
    $scope.styleStep1 = {
        'background' : "url('images/current.png')",
        'background-size' : "cover",
        'color' : "#000000"
    };
    $scope.showStep = function(stepId){
        $scope.showStep1 = false;
        $scope.showStep2 = false;
        $scope.showStep3 = false;
        $scope["showStep"+stepId] = true;
        $scope["styleStep"+stepId] = {
            'background' : "url('images/current.png')",
            'background-size' : "cover",
            'color' : "#000000"
        };
        //console.log("$scope[showStep"+stepId+"] = "+$scope["showStep"+stepId]);
    };

    $scope.pickup = {};
    $scope.pickup.date = new Date();
    $scope.pickup.dateRangeOptions = {
        format: 'DD-MMM-YYYY',
        popup : "dd-MMMM-yyyy",
        //"is-open" : "pickup.dateRangeOpened",
        minDate: $scope.minDate
        //maxDate: $scope.maxDate
    };
    $scope.pickup.opened = false;
    $scope.pickup.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        //console.log("pickup.Opened");
        $scope.pickup.opened = true;
    };

    $scope.delivery = {};
    $scope.delivery.date = new Date();
    $scope.delivery.dateRangeOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.delivery.opened = false;
    $scope.delivery.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        //console.log("delivery.Opened");
        $scope.delivery.opened = true;
    };

    $scope.isPickupPincodeRequired = function(){
        $scope.pickupPinFlag = false;
        //console.log("Inside isPickupPincodeRequired "+$scope.load.load.pickup.address.line1);
        if(typeof $scope.load.load.pickup != "undefined" && $scope.load.load.pickup != null
            && typeof $scope.load.load.pickup.address != "undefined" && $scope.load.load.pickup.address != null
            && typeof $scope.load.load.pickup.address.line1 != "undefined" && $scope.load.load.pickup.address.line1 != null
            && $scope.load.load.pickup.address.line1.length >0){
            $scope.pickupPinFlag = true;
        }else{
            $scope.pickupPinFlag = false;
        }
    };

    $scope.isDeliveryPincodeRequired = function(){
        $scope.deliveryPinFlag = false;
        if(typeof $scope.load.load.delivery != "undefined" && $scope.load.load.delivery != null
            && typeof $scope.load.load.delivery.address != "undefined" && $scope.load.load.delivery.address != null
            && typeof $scope.load.load.delivery.address.line1 != "undefined" && $scope.load.load.delivery.address.line1 != null
            && $scope.load.load.delivery.address.line1.length >0){
            $scope.deliveryPinFlag = true;
        }else{
            $scope.deliveryPinFlag = false;
        }
    };

    $scope.canDisableOwnerDetails = function(){
        //console.log("canDisableOwnerDetails with user information: "+JSON.stringify($scope.user));
        if(typeof $scope.load.owner == "undefined" && $scope.load.owner == null){
            $scope.load.owner = {};
        }
        if($scope.load.owner.details_same_as_user && typeof $scope.user.user_information != "undefined"
            && $scope.user.user_information.address != "undefined"){
            $scope.load.owner.first_name = $scope.user.user_information.first_name;
            $scope.load.owner.last_name = $scope.user.user_information.last_name;

            $scope.load.owner.address.line1 = $scope.user.user_information.address.line1;
            $scope.load.owner.address.line2 = $scope.user.user_information.address.line2;
            //$scope.truck.company.address.line3 = $scope.truck.owner.address.line3;
            //$scope.truck.owner.address.city = $scope.user.user_information.address.city;
            //$scope.truck.owner.address.state = $scope.user.user_information.address.state;
            $scope.load.owner.address.mapLocation = {
                place : $scope.user.user_information.address.city,
                state : $scope.user.user_information.address.state,
                country : $scope.user.user_information.address.country,
                display : $scope.user.user_information.address.city,
                isSelected : true,
                disable : true
            };
            $("#owner_city").val($scope.user.user_information.address.city);

            $scope.load.owner.address.pincode = $scope.user.user_information.address.pincode.toString();
            $scope.load.owner.contact = $scope.user.user_information.contact[0].toString();
            $scope.load.owner.address_same_as_owner = false;
            $scope.load.owner.contact_same_as_owner = false;
            if(typeof $scope.load.company == "undefined" && $scope.load.company == null){
                $scope.load.company = {};
            }
            if($scope.load.owner.details_same_as_user && typeof $scope.user.user_information != "undefined"){
                $scope.load.company.name = $scope.user.user_information.company_name;
            }
            //console.log("canDisableOwnerDetails "+JSON.stringify($scope.load.owner));
            //$scope.company.address_same_as_owner = true;
        }else{
            if(typeof $scope.load.owner != "undefined" && typeof $scope.load.owner.address != "undefined" && typeof $scope.load.owner.address.mapLocation != "undefined"
                && $scope.load.owner != null && $scope.load.owner.address != null && $scope.load.owner.address.mapLocation != null){
                $scope.load.owner.address.mapLocation.disable = false;
            }
            /*$scope.load.owner.first_name = "";
            $scope.load.owner.last_name = "";
            $scope.load.owner.address.line1 = "";
            $scope.load.owner.address.line2 = "";
            $scope.load.owner.address.mapLocation = {
                place : "",
                state : "",
                isSelected : true,
                disable : true
            };
            $("#owner_city").val("");
            $scope.load.owner.address.pincode = "";
            $scope.load.owner.contact = "";
            $scope.load.owner.address_same_as_owner = false;
            if(typeof $scope.load.company == "undefined" && $scope.load.company == null){
                $scope.load.company = {};
            }
            if($scope.load.owner.details_same_as_user && typeof $scope.user.user_information != "undefined"){
                $scope.load.company.name = "";
            }
            //console.log("canDisableOwnerDetails "+JSON.stringify($scope.load.owner));*/
        }
    };
    $scope.canDisableCompanyDetails = function(){
        //console.log("canDisableCompanyDetails with user information: "+JSON.stringify($scope.user));
        if(typeof $scope.load.company == "undefined" && $scope.load.company == null){
            $scope.load.company = {};
        }
        if($scope.load.company.details_same_as_user && typeof $scope.user.user_information != "undefined"
            && $scope.user.user_information.address != "undefined"){
            $scope.load.company.name = $scope.user.user_information.company_name;

            $scope.load.company.address.line1 = $scope.user.user_information.address.line1;
            $scope.load.company.address.line2 = $scope.user.user_information.address.line2;
            //$scope.truck.company.address.line3 = $scope.truck.owner.address.line3;
            //$scope.truck.owner.address.city = $scope.user.user_information.address.city;
            //$scope.truck.owner.address.state = $scope.user.user_information.address.state;
            $scope.load.company.address.mapLocation = {
                place : $scope.user.user_information.address.city,
                state : $scope.user.user_information.address.state,
                country : $scope.user.user_information.address.country,
                display : $scope.user.user_information.address.city,
                isSelected : true,
                disable : true
            };
            $("#company_city").val($scope.user.user_information.address.city);

            $scope.load.company.address.pincode = $scope.user.user_information.address.pincode.toString();
            $scope.load.company.contact = $scope.user.user_information.contact[0].toString();
            //$("#company_contact").val($scope.user.user_information.contact[0].toString());
            $scope.load.company.address_same_as_owner = false;
            $scope.load.company.contact_same_as_owner = false;
            //console.log("canDisableCompanyDetails "+JSON.stringify($scope.load.company));
            //$scope.company.address_same_as_owner = true;
        }else{
            if(typeof $scope.load.company != "undefined" && typeof $scope.load.company.address != "undefined" && typeof $scope.load.company.address.mapLocation != "undefined"
                && $scope.load.company != null && $scope.load.company.address != null && $scope.load.company.address.mapLocation != null){
                $scope.load.company.address.mapLocation.disable = false;
            }
            /*$scope.load.company.name = "";
            $scope.load.company.address.line1 = "";
            $scope.load.company.address.line2 = "";
            $scope.load.company.address.mapLocation = {
                place : "",
                state : "",
                isSelected : true,
                disable : true
            };
            $("#company_city").val("");
            $scope.load.company.address.pincode = "";
            $scope.load.company.contact = "";
            $scope.load.company.address_same_as_owner = false;
            //console.log("canDisableCompanyDetails empty "+JSON.stringify($scope.load.company));*/
        }
    };
    $scope.canDisableSameAddress = function(){
        //console.log("canDisableSameAddress "+JSON.stringify($scope.load.company));
        if(typeof $scope.load.company == "undefined" && $scope.load.company == null){
            $scope.load.company = {};
        }
        if($scope.load.company.address_same_as_owner /*&& typeof $scope.load.owner != "undefined" && typeof $scope.load.owner.address != "undefined"
                && typeof $scope.load.owner.address.line1!="undefined" && typeof $scope.load.owner.address.city!="undefined"
                && typeof $scope.load.owner.address.state!="undefined" && typeof $scope.load.owner.address.pincode!="undefined"
                && $scope.load.owner.address.line1!=null && $scope.load.owner.address.city!=null && $scope.load.owner.address.state!=null
                && typeof $scope.load.owner.address.pincode!=null*/){
                $scope.load.company.address.line1 = $scope.load.owner.address.line1;
                $scope.load.company.address.line2 = $scope.load.owner.address.line2;
                //$scope.load.company.address.line3 = $scope.load.owner.address.line3;
                //$scope.load.company.address.city = $scope.load.owner.address.city;
                //$scope.load.company.address.state = $scope.load.owner.address.state;
                $scope.load.company.address.mapLocation = {
                    place : $scope.load.owner.address.mapLocation.place,
                    state : $scope.load.owner.address.mapLocation.state,
                    country : $scope.load.owner.address.mapLocation.country,
                    display : $scope.load.owner.address.mapLocation.place,
                    isSelected : true,
                    disable : true
                };
                $("#company_city").val($scope.load.owner.address.mapLocation.place);
                $scope.load.company.address.pincode = $scope.load.owner.address.pincode;
                $scope.load.company.address_same_as_owner = true;
                //$scope.disableAddress = true;
        }else if(typeof $scope.load.company != "undefined"
            && typeof $scope.load.company.address != "undefined"
            && $scope.load.company != null && $scope.load.company.address != null){
            if(typeof $scope.load.company != "undefined" && typeof $scope.load.company.address != "undefined" && typeof $scope.load.company.address.mapLocation != "undefined"
                && $scope.load.company != null && $scope.load.company.address != null && $scope.load.company.address.mapLocation != null){
                $scope.load.company.address.mapLocation.disable = false;
            }
            //console.log("canDisableSameAddress owner 1 "+JSON.stringify($scope.load.owner));
            /*$scope.load.company.address.line1 = "";
            $scope.load.company.address.line2 = "";
            $scope.load.company.address.mapLocation = {
                place : "",
                state : "",
                isSelected : false,
                disable : false
            };
            $scope.load.company.address.pincode = "";
            //console.log("canDisableSameAddress owner: "+JSON.stringify($scope.load.owner));*/
        }
    };
    $scope.canDisableSameContact = function(){
        //console.log("canDisableSameContact "+JSON.stringify($scope.load.company));
        if(typeof $scope.load.company == "undefined" && $scope.load.company == null){
            $scope.load.company = {};
        }

        if($scope.load.company.contact_same_as_owner && typeof $scope.load.owner != "undefined"
            && typeof $scope.load.owner.contact != "undefined" && typeof $scope.load.owner.contact != null){
            //console.log("canDisableSameContact "+JSON.stringify($scope.load.owner));
            $scope.load.company.contact = $scope.load.owner.contact.toString();
            //$scope.disableContact = true;
        }else{
            //$scope.load.company.contact = "";
            //$scope.truck.company.contact_same_as_owner = false;
        }
    };

    $scope.canDisablePickupAddress = function(){
        //console.log("canDisablePickupAddress "+JSON.stringify($scope.load.pickup));
        if(typeof $scope.load.load.pickup == "undefined" && $scope.load.load.pickup == null){
            $scope.load.load.pickup = {};
        }
        if($scope.load.load.pickup.address_same_as_owner){
            $scope.load.load.pickup.address.line1 = $scope.load.owner.address.line1;
            $scope.load.load.pickup.address.line2 = $scope.load.owner.address.line2;
            //$scope.load.company.address.line3 = $scope.load.owner.address.line3;
            //$scope.load.company.address.city = $scope.load.owner.address.city;
            //$scope.load.company.address.state = $scope.load.owner.address.state;
            $scope.load.load.pickup.address.mapLocation = {
                place : $scope.load.owner.address.mapLocation.place,
                state : $scope.load.owner.address.mapLocation.state,
                country : $scope.load.owner.address.mapLocation.country,
                display : $scope.load.owner.address.mapLocation.place,
                isSelected : true,
                disable : true
            };
            $("#pickup_city").val($scope.load.owner.address.mapLocation.place);
            $scope.load.load.pickup.address.pincode = $scope.load.owner.address.pincode;
            $scope.load.load.pickup.address_same_as_owner = true;
            //$scope.disableAddress = true;
        }else if(typeof $scope.load.load.pickup != "undefined"
            && typeof $scope.load.load.pickup.address != "undefined"
            && $scope.load.load.pickup != null && $scope.load.load.pickup.address != null){
            if(typeof $scope.load.load.pickup != "undefined" && typeof $scope.load.load.pickup.address != "undefined" && typeof $scope.load.load.pickup.address.mapLocation != "undefined"
                && $scope.load.load.pickup != null && $scope.load.load.pickup.address != null && $scope.load.load.pickup.address.mapLocation != null){
                $scope.load.load.pickup.address.mapLocation.disable = false;
            }
            //console.log("canDisablePickupAddress owner 1 "+JSON.stringify($scope.load.owner));
            /*$scope.load.load.pickup.address.line1 = "";
            $scope.load.load.pickup.address.line2 = "";
            $scope.load.load.pickup.address.mapLocation = {
                place : "",
                state : "",
                isSelected : false,
                disable : false
            };
            $scope.load.load.pickup.address.pincode = "";
            //console.log("canDisablePickupAddress owner: "+JSON.stringify($scope.load.pickup));*/
        }
    };
    $scope.canDisableDeliveryAddress = function(){
        //console.log("canDisableDeliveryAddress "+JSON.stringify($scope.load.delivery));
        if(typeof $scope.load.load.delivery == "undefined" && $scope.load.load.delivery == null){
            $scope.load.load.delivery = {};
        }
        if($scope.load.load.delivery.address_same_as_owner){
            $scope.load.load.delivery.address.line1 = $scope.load.owner.address.line1;
            $scope.load.load.delivery.address.line2 = $scope.load.owner.address.line2;
            //$scope.load.company.address.line3 = $scope.load.owner.address.line3;
            //$scope.load.company.address.city = $scope.load.owner.address.city;
            //$scope.load.company.address.state = $scope.load.owner.address.state;
            $scope.load.load.delivery.address.mapLocation = {
                place : $scope.load.owner.address.mapLocation.place,
                state : $scope.load.owner.address.mapLocation.state,
                country : $scope.load.owner.address.mapLocation.country,
                display : $scope.load.owner.address.mapLocation.place,
                isSelected : true,
                disable : true
            };
            $("#delivery_city").val($scope.load.owner.address.mapLocation.place);
            $scope.load.load.delivery.address.pincode = $scope.load.owner.address.pincode;
            $scope.load.load.delivery.address_same_as_owner = true;
            //$scope.disableAddress = true;
        }else if(typeof $scope.load.load.delivery != "undefined"
            && typeof $scope.load.load.delivery.address != "undefined"
            && $scope.load.load.delivery != null && $scope.load.load.delivery.address != null){
            if(typeof $scope.load.load.delivery != "undefined" && typeof $scope.load.load.delivery.address != "undefined" && typeof $scope.load.load.delivery.address.mapLocation != "undefined"
                && $scope.load.load.delivery != null && $scope.load.load.delivery.address != null && $scope.load.load.delivery.address.mapLocation != null){
                $scope.load.load.delivery.address.mapLocation.disable = false;
            }
            //console.log("canDisablePickupAddress owner 1 "+JSON.stringify($scope.load.owner));
            /*$scope.load.load.delivery.address.line1 = "";
            $scope.load.load.delivery.address.line2 = "";
            $scope.load.load.delivery.address.mapLocation = {
                place : "",
                state : "",
                isSelected : false,
                disable : false
            };
            $scope.load.load.delivery.address.pincode = "";
            //console.log("canDisableDeliveryAddress owner: "+JSON.stringify($scope.load.delivery));*/
        }
    };

    $scope.loadProcess.function.showCompanyDetails = function(){
        if($scope.loadForm.first_name.$valid
            && $scope.loadForm.last_name.$valid
            && $scope.loadForm.first_name.$valid){
            $scope.loadProcess.indicator.showCompanyDetails = true;
        }else{
            $scope.loadProcess.indicator.showCompanyDetails = false;
        }
    };
    $scope.loadProcess.function.showOwnerDetails = function(){
        //console.log("User Type Form validity: "+$scope.loadForm.user_type.$valid);
        if($scope.loadForm.$valid){
            $scope.loadProcess.indicator.showOwnerDetails = true;
        }else{
            $scope.loadProcess.indicator.showOwnerDetails = false;
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
        $scope.load = {};
    };

    $scope.submitForm = function () {

        // Set the 'submitted' flag to true
        $scope.loadProcess.indicator.submitted = true;
        $scope.loadProcess.indicator.saved = false;
        $scope.loadProcess.indicator.showAlert = false;

        $scope.loadProcess.indicator.showAlert = false;
        if ($scope.loadForm.$valid) {
            //console.log("Form is valid! "+JSON.stringify($scope.load));

            if($scope.load.owner.details_same_as_user){
                $scope.load.owner.details_same_as_user = true;
            }else{
                $scope.load.owner.details_same_as_user = false;
            }
            if($scope.load.company.details_same_as_user){
                $scope.load.company.details_same_as_user = true;
            }else{
                $scope.load.company.details_same_as_user = false;
            }
            if($scope.load.company.address_same_as_owner){
                $scope.load.company.address_same_as_owner = true;
            }else{
                $scope.load.company.address_same_as_owner = false;
            }
            if($scope.load.company.contact_same_as_owner){
                $scope.load.company.contact_same_as_owner = true;
            }else{
                $scope.load.company.contact_same_as_owner = false;
            }
            if($scope.load.load.pickup.address_same_as_owner){
                $scope.load.load.pickup.address_same_as_owner = true;
            }else{
                $scope.load.load.pickup.address_same_as_owner = false;
            }
            if($scope.load.load.delivery.address_same_as_owner){
                $scope.load.load.delivery.address_same_as_owner = true;
            }else{
                $scope.load.load.delivery.address_same_as_owner = false;
            }

            var url = "";
            if($scope.addLoadInd){
                url = "/TransEarth/addLoad";
            }else if($scope.editLoadInd){
                url = "/TransEarth/editLoad";
            }
            //$scope.loadProcess.indicator.showAlert = false;
            //console.log("AJAX URL to be posted to "+url+" with input: "+JSON.stringify($scope.load));
            $http.post(url, {load : $scope.load})
                .success(function(data) {
                    //console.log("Load saved successfully");
                    $scope.loadProcess.indicator.saved = true;
                    $scope.load = {};
                    $scope.loadProcess.indicator.showAlert = true;
                    succesAlert("Load added successfully", 'manage_load_alert');
                    LoadRequest.setSharedLoad(null);
                    LoadRequest.setSharedLoadProcessed(true);

                    $scope.page.template = "/TransEarth/load_owner_home";
                    $scope.page.scope = "Load Owner Home";

                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    //$location.hash('page-header');

                    // call $anchorScroll()
                    //$anchorScroll();
                }).error(function(data) {
                    //console.log("Load saved failed:"+data);
                    $scope.loadProcess.indicator.saved = false;
                    $scope.loadProcess.indicator.showAlert = true;
                    succesError(data.statusMsg, 'manage_load_alert');
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash('headerBar');

                    // call $anchorScroll()
                    $anchorScroll();
                    //$scope.messageAvailable = true;
                    //$scope.index.messageAvailable = true;
                    //succesError(data.statusMsg, 'indexLoadListMessage');
                    //succesError("Login failed", 'login_alert');
                });
        }
        else {
            alert("Please correct errors!");
            $scope.loadProcess.indicator.showAlert = true;
            succesError("Please correct the errors", 'manage_load_alert');
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('page-header');
        }
    };
}
