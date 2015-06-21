//ng-grid Truck List
function truckOwnerTrucksCtrl($scope, $http, $location, $modal, UserRequest, TruckRequest, TruckPostRequest) {
    //console.log('Inside truckOwnerTrucksCtrl');

    clearAlert("myTrucklist_alert");
    $scope.myTruckList = {};
    $scope.myTruckList.list = [];
    $scope.myTruckList.listShow = false;
    $scope.myTruckList.messageAvailable = false;
    $scope.myTruckList.showAddPostError = false;
    $scope.myTruckList.totalServerItems = 0;

    $scope.getPagedDataAsync = function () {
        //if($scope.myTruckList.searchTriggered){
            setTimeout(function () {
                var data;
                //console.log("Search Text: "+searchText);
                $scope.myTruckList.listShow = false;
                $scope.myTruckList.messageAvailable = false;
                $http.post("/TransEarth/getMyTrucks", {filters : []})
                    .success(function(data) {
                    // succesAlert(data.statusMsg, 'eaiSaveStatus');
                    if(typeof data != 'undefined' && data != null
                        && typeof data.myTruckList != 'undefined' && data.myTruckList != null
                        && typeof data.myTruckList.details != "undefined" && data.myTruckList.details != null
                        && data.myTruckList.details.length > 0){
                        //console.log(JSON.stringify(data.myTruckList.details));
                        $scope.myTruckList.list = data.myTruckList.details
                        $scope.myTruckList.totalServerItems = data.myTruckList.details.length;
                        $scope.myTruckList.listShow = true;
                    }else{
                        //console.log("No data available");
                        $scope.myTruckList.list = [];
                        $scope.myTruckList.messageAvailable = true;
                        $scope.myTruckList.listShow = false;
                        $scope.myTruckList.message = "No data available";
                        $scope.truckOwnerPage.showAlert = true;
                        successInfo($scope.myTruckList.message, 'myTrucklist_alert');
                    }
                }).error(function(data) {
                        $scope.myTruckList.list = [];
                    $scope.myTruckList.listShow = false;
                    $scope.myTruckList.messageAvailable = true;
                    $scope.truckOwnerPage.showAlert = true;
                    succesError(data.statusMsg, 'myTrucklist_alert');
                });
            }, 100);
        //}
    };
    $scope.$watch('truckOwnerPage.refresh', function (newVal, oldVal) {
        //console.log(' My Truck Posts refresh '+JSON.stringify(newVal));
        if(typeof newVal != "undefined" && newVal != null){
            $scope.getPagedDataAsync();
        }
    });
    //$scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage);
    $scope.getPagedDataAsync();

    $scope.editTruck = function(id){
        //console.log("Editing truck: "+id);
        //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
        $http.post("/TransEarth/getTruckById", {truckId : id})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    //$scope.page.scope == "Edit Truck";
                    //$scope.page.template = "/TransEarth/manage_truck";
                    $scope.truckOwnerPage.showManageTruck = true;
                    $scope.truckOwnerPage.showManagePost = false;
                }else{
                    $scope.myTruckList.messageAvailable = true;
                    $scope.truckOwnerPage.showAlert = true;
                    succesError("Truck Details Not available for update", 'myTrucklist_alert');
                    //console.log("No data available");
                }
            }).error(function(err) {
                $scope.myTruckList.listShow = false;
                $scope.myTruckList.messageAvailable = true;
                $scope.truckOwnerPage.showAlert = true;
                succesError(err.statusMsg, 'myTrucklist_alert');
            });
    };

    $scope.truckToRemove = {};
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myTruckRemoveModal.html',
            controller: TruckRemoveModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                truckToInactivate: function () {
                    //console.log("Modal $scope.truckToRemove: "+JSON.stringify($scope.truckToRemove));
                    return $scope.truckToRemove;
                }
            }
        });
        modalInstance.result.then(function(truckToRemove){
            //on ok button press
            //console.log("On ok button press");
            //$scope.inActivateTruck(truckToRemove);
        },function(){
            //on cancel button press
            //console.log("Modal Closed");
            $scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
        });
    };

    var TruckRemoveModalCtrl = function ($scope, $modalInstance, truckToInactivate) {

        clearAlert("remove_truck_alert");
        $scope.truckToInactivate = truckToInactivate;
        $scope.showClose = false;
        //console.log("Inside TruckRemoveModalCtrl: truckToRemove = "+JSON.stringify($scope.truckToInactivate));

        $scope.inActivateTruck = function(truck){
            //console.log("Removing truck: "+truck._id);
            //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
            $scope.truckToInactivate = truck;
            $http.post("/TransEarth/removeTruck", {truck : truck})
                .success(function(data) {
                    $scope.showClose = true;
                    // succesAlert(data.statusMsg, 'eaiSaveStatus');
                    successInfo(data.statusMsg, 'remove_truck_alert');
                    /*if(typeof data != 'undefined' && data != null){
                        //console.log(JSON.stringify(data));
                        TruckRequest.setSharedTruck(data);
                        $scope.page.template = "/TransEarth/truck_owner_home";
                        $scope.page.scope = "Truck Owner Home";
                        succesError(err.statusMsg, 'myTrucklist_alert');
                    }else{
                        //console.log("No data available");
                    }*/
                }).error(function(err) {
                    $scope.showClose = false;
                    succesError(err.statusMsg, 'remove_truck_alert');
                });
        };
        $scope.ok = function () {
            $modalInstance.close($scope.truckToRemove);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.removeTruck = function(truck_id, regNo){
        $scope.truckToRemove = {
            _id : truck_id,
            reg_no : regNo
        };
        $scope.open('sm');
    };

    $scope.addTruckPost = function(truckId){
        //console.log("Add post to truck: "+truckId);
        $scope.myTruckList.showAddPostError = false;
        $http.post("/TransEarth/getTruckById", {truckId : truckId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                $scope.myTruckList.showAddPostError = false;
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    TruckRequest.setSharedTruck(data);
                    //TruckPostRequest.setSharedTruck(null);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.myTruckList.showAddPostError = false;
                    //$scope.truckOwnerPage.showPostList = false;
                    $scope.truckOwnerPage.showManageTruck = false;
                    $scope.truckOwnerPage.showManagePost = true;
                    $scope.truckOwnerPage.managePostTitle = "Add Post";
                }else{
                    $scope.myTruckList.showAddPostError = false;
                    $scope.truckOwnerPage.showPostList = true;
                    succesError("Truck Not found to add post", 'myTrucklist_alert');
                    //console.log("No data available");
                }
            }).error(function(err) {
                $scope.myTruckList.showAddPostError = true;
                $scope.truckOwnerPage.showPostList = true;
                succesError("Truck Hack error prevented to add post", 'myTrucklist_alert');
            });
    };

    $scope.truckDetails = {};
    $scope.truckInfo = {};
    $scope.truckDetails.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myTruckDetailModal.html',
            controller: TruckDetailModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                truck: function () {
                    //console.log("Modal $scope.truckInfo: "+JSON.stringify($scope.truckToRemove));
                    return $scope.truckInfo;
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

    var TruckDetailModalCtrl = function ($scope, $modalInstance, truck) {

        $scope.truckModal = truck;
        if(typeof $scope.truckModal != "undefined" && typeof $scope.truckModal.owner != "undefined"){
            $scope.truckModal.owner.name = $scope.truckModal.owner.last_name + " ," + $scope.truckModal.owner.first_name;
        }
        $scope.showClose = false;
        //console.log("Inside TruckDetailModalCtrl: truckModal = "+JSON.stringify($scope.truckModal));

        $scope.ok = function () {
            $modalInstance.close($scope.truckToRemove);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.getTruckDetails = function(truckId){
        //console.log("Get truck details: "+truckId);

        $http.post("/TransEarth/getTruckById", {truckId : truckId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    $scope.truckInfo = data;
                    //TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.truckDetails.open('sm');
                }else{
                    $scope.myTruckList.messageAvailable = true;
                    $scope.truckOwnerPage.showAlert = true;
                    succesError("Truck Details Not available", 'myTrucklist_alert');
                    //console.log("No data available");
                }
            }).error(function(err) {
                $scope.myTruckList.listShow = false;
                $scope.myTruckList.messageAvailable = true;
                $scope.truckOwnerPage.showAlert = true;
                succesError(err.statusMsg, 'myTrucklist_alert');
            });
    };
}
