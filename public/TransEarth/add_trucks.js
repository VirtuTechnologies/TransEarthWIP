function addTrucksCtrl($scope, $http, $location, $anchorScroll, $timeout, ngTableParams, UserRequest) {
    //console.log('Inside addTrucksCtrl');
    var data = [];
    $scope.data = [];
    $scope.closeOut = false;

    $scope.gotoHome = function(){
        $scope.page.template = "/TransEarth/truck_owner_home";
        $scope.page.scope = "Truck Owner Home";
    };

    $scope.isError = true;
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
    $scope.addTruckRow = function(){
        $scope.counter++;
        $scope.data.push(
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
    $scope.editRow = function(index){
        //console.log("Editing row with index "+index);
        /* var options = '';
        options += '<option data-hidden="true">Choose one</option>';
        $.each($scope.truckTypeList, function (i, row) {
            //console.log(JSON.stringify(row));
            options += '<option>' + row + '</option>';
        });
        //alert(id+' - '+options);
        //Apply html with option
        //console.log("Applying options for truck_type"+index);
        applyHtml("truck_type"+index, options);
        applySelect("truck_type"+index);
        options = '';
        options += '<option data-hidden="true">Choose one</option>';
        $.each($scope.truckTypeList, function (i, row) {
            //console.log(JSON.stringify(row));
            options += '<option>' + row + '</option>';
        });
        //alert(id+' - '+options);
        //Apply html with option
        //console.log("Applying options for truck_make"+index);
        applyHtml("truck_make"+index, options);
        applySelect("truck_make"+index);*/

        //$("#truck_type"+index).selectpicker.val("");
        //$("#truck_type"+index).selectpicker("refresh");
        //$("#truck_make"+index).selectpicker.val("");
        //$("#truck_make"+index).selectpicker("refresh");
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
        $scope.data.splice(index, 1);
        $scope.tableParams.reload();
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
                        trucks[index].message = "Saved";
                        //$scope.data[i] = truck;
                        $scope.data.splice($scope.data.indexOf(trucks[index].index),1, trucks[index]);
                        //console.log("Spliced data with truck index: "+trucks[index].index+" replaced "+JSON.stringify($scope.data));
                        if($scope.showMessages($scope.data)){
                            //console.log("Trucks with message "+index+" :"+JSON.stringify($scope.data));
                            $scope.tableParams.reload();
                        }
                    }).error(function(err) {
                        //console.log("Truck saved failed:"+err);
                        trucks[index].haveMessage = true;
                        trucks[index].message = "Save Crashed";
                        //$scope.data[i] = truck;
                        $scope.data.splice($scope.data.indexOf(trucks[index].index),1, trucks[index]);
                        if($scope.showMessages($scope.data)){
                            //console.log("Trucks with Save Crashed "+index+" :"+JSON.stringify($scope.data));
                            $scope.tableParams.reload();
                        }
                    });
            }else{
                trucks[index].haveMessage = true;
                trucks[index].message = "Something Crashed";
                //$scope.data[i] = truck;
                $scope.data.splice($scope.data.indexOf(trucks[index].index),1, trucks[index]);
                if($scope.showMessages($scope.data)){
                    //console.log("Trucks with Something Crashed "+index+" :"+JSON.stringify($scope.data));
                    $scope.tableParams.reload();
                }
            }
        }else{
            truck.haveMessage = true;
            truck.message = "Don't Crash";
            //$scope.data[i] = truck;
            $scope.data.splice($scope.data.indexOf(truck.index),1, truck);
            if($scope.showMessages($scope.data)){
                //console.log("Trucks with Don't Crash "+i+" :"+JSON.stringify($scope.data));
                $scope.tableParams.reload();
            }
        }

    };

    $scope.tableParams = new ngTableParams({
        page: 1,   // show first page
        total: 1,  // value less than count hide pagination
        count: 10  // count per page
    }, {
        counts: [], // hide page counts control
        //total: data.length, // length of data
        getData: function ($defer, params) {
            var pageData = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            $defer.resolve(pageData);
        }
    });

}
