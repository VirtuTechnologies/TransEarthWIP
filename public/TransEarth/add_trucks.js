function addTrucksCtrl($scope, $http, $location, $anchorScroll, $timeout, UserRequest) {
    console.log('Inside addTrucksCtrl');
    $scope.addTruckModel = {};
    $scope.addTruckModel.trucks = [];

    $scope.init = function(){
        $scope.getTruckTypes();
        $scope.getTruckMakes();
    };

    $scope.goToHome = function(){
        $scope.page.template = "/TransEarth/truck_owner_home";
        $scope.page.scope = "Truck Owner Home";
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
    $scope.stopAdd = false;
    $scope.addTruckRow = function(){
        $scope.counter++;
        if($scope.counter>9){
            $scope.stopAdd = true;
        }
        console.log('$scope.addTruckModel.trucks: '+$scope.addTruckModel.trucks);
        $scope.addTruckModel.trucks.push(
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
        $scope.addTruckModel.trucks.splice(index, 1);
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
        var newTruck = trucks[index];
        if(typeof newTruck != "undefined" && newTruck != null && typeof newTruck.details != "undefined" && newTruck.details != null){
            if(typeof newTruck.details.type != "undefined" && newTruck.details.type != null && newTruck.details.type != ""
                && typeof newTruck.details.make != "undefined" && newTruck.details.make != null && newTruck.details.make != ""
                && typeof newTruck.details.model != "undefined" && newTruck.details.model != null && newTruck.details.model != ""
                && typeof newTruck.details.regno != "undefined" && newTruck.details.regno != null && newTruck.details.regno != ""
                && typeof newTruck.details.load != "undefined" && newTruck.details.load != null && newTruck.details.load != ""){
                //console.log("Saving truck: "+JSON.stringify(trucks[index]));
                $http.post("/TransEarth/addTruck", {truck : newTruck})
                    .success(function(result) {
                        //console.log("Truck saved successfully: "+JSON.stringify(trucks[index]));
                        newTruck.haveMessage = true;
                        newTruck.hasError = false;
                        newTruck.message = "Saved";
                        //$scope.data[i] = truck;
                        $scope.addTruckModel.trucks.splice($scope.addTruckModel.trucks.indexOf(newTruck.index),1, newTruck);
                        //console.log("Spliced data with truck index: "+trucks[index].index+" replaced "+JSON.stringify($scope.addTruckModel.trucks));
                        if($scope.showMessages($scope.addTruckModel.trucks)){
                            //console.log("Trucks with message "+index+" :"+JSON.stringify($scope.addTruckModel.trucks));
                            //$scope.tableParams.reload();
                        }
                    }).error(function(err) {
                        //console.log("Truck saved failed:"+err);
                        newTruck.haveMessage = true;
                        newTruck.hasError = true;
                        newTruck.message = JSON.stringify(err);
                        //$scope.data[i] = truck;
                        $scope.addTruckModel.trucks.splice($scope.data.indexOf(newTruck.index),1, newTruck);
                        if($scope.showMessages($scope.addTruckModel.trucks)){
                            //console.log("Trucks with Save Crashed "+index+" :"+JSON.stringify($scope.addTruckModel.trucks));
                            //$scope.tableParams.reload();
                        }
                    });
            }else{
                newTruck.haveMessage = true;
                newTruck.message = "Something Crashed";
                //$scope.data[i] = truck;
                $scope.addTruckModel.trucks.splice($scope.addTruckModel.trucks.indexOf(newTruck.index),1, newTruck);
                if($scope.showMessages($scope.addTruckModel.trucks)){
                    //console.log("Trucks with Something Crashed "+index+" :"+JSON.stringify($scope.addTruckModel.trucks));
                    //$scope.tableParams.reload();
                }
            }
        }else{
            truck.haveMessage = true;
            truck.message = "Don't Crash";
            //$scope.data[i] = truck;
            $scope.addTruckModel.trucks.splice($scope.addTruckModel.trucks.indexOf(truck.index),1, truck);
            if($scope.showMessages($scope.addTruckModel.trucks)){
                //console.log("Trucks with Don't Crash "+i+" :"+JSON.stringify($scope.addTruckModel.trucks));
                //$scope.tableParams.reload();
            }
        }

    };
}
