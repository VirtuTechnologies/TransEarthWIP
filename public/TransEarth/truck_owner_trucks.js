//ng-grid Truck List
function truckOwnerTrucksCtrl($scope, $http, $location, $modal, UserRequest, TruckRequest, TruckPostRequest) {
    console.log('Inside truckOwnerTrucksCtrl');

    clearAlert("myTrucklist_alert");

    $scope.showText = function(obj){
        if(typeof obj != "undefined" && obj != null && obj != ""){
            return true;
        }else{
            return false;
        }
    };
    //$scope.myTruckList = {};
    $scope.myTruckList.showAddPostError = false;
    $scope.myTruckList.filter = {};
    //$scope.core.clickedTruckId = "Temp";
    //console.log("Get username service: "+UserRequest.getUserName());

    $scope.myTruckList.filter.dateRange = null;
    $scope.myTruckList.filter.dt = new Date();

    $scope.resetSearchCategory = function(){
        $scope.myTruckList.searchButtonName = "Search";
    };
    $scope.myTruckList.filterOptions = {
        filterText: '',
        useExternalFilter : false
    };
    $scope.myTruckList.totalServerItems = 0;
    $scope.myTruckList.pagingOptions = {
        pageSizes: [10, 20, 30],
        pageSize: 10,
        currentPage: 1
    };
    $scope.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //console.log(JSON.stringify(pagedData));
        $scope.myTruckList.list = pagedData;

        $scope.myTruckList.gridOptions = {
            data: 'myTruckList.list',
            /*beforeSelectionChange: function() {
             return $scope.myTruckList.truckListOption;
             },*/
            columnDefs: 'myTruckList.columnDefs'
        };

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        //if($scope.myTruckList.searchTriggered){
            setTimeout(function () {
                var data;
                //console.log("Search Text: "+searchText);
                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.post("/TransEarth/getMyTrucks", {filters : []})
                        .success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.myTruckList != 'undefined' && data.myTruckList != null
                            && typeof data.myTruckList.details != "undefined" && data.myTruckList.details != null
                            && data.myTruckList.details.length > 0){
                            //console.log(JSON.stringify(data.myTruckList.details));
                            $scope.myTruckList.totalServerItems = data.myTruckList.details.length;
                            var filteredData = data.myTruckList.details.filter(function(item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                            });
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.myTruckList.columnDefs = data.myTruckList.headers;
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.myTruckList.listShow = true;
                            $scope.myTruckList.searchButtonName = "Review TruckList";
                        }else{
                            //console.log("No data available");
                            $scope.myTruckList.messageAvailable = true;
                            $scope.myTruckList.listShow = false;
                            $scope.myTruckList.message = "No data available";
                            $scope.truckOwnerPage.showAlert = true;
                            successInfo($scope.myTruckList.message, 'myTrucklist_alert');

                        }
                    }).error(function(err) {
                            $scope.myTruckList.listShow = false;
                            $scope.myTruckList.messageAvailable = true;
                            $scope.truckOwnerPage.showAlert = true;
                            succesError(err.statusMsg, 'myTrucklist_alert');
                    });
                    /*$http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
                        data = largeLoad.filter(function(item) {
                            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                        });
                        $scope.setPagingData(data,page,pageSize);
                    });*/
                } else {
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
                            console.log(JSON.stringify($scope.myTruckList.totalServerItems));
                            var filteredData = data.myTruckList.details;
                            $scope.myTruckList.columnDefs = data.myTruckList.headers;
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.myTruckList.listShow = true;
                            $scope.myTruckList.searchButtonName = "Review TruckList";
                        }else{
                            //console.log("No data available");
                            $scope.myTruckList.messageAvailable = true;
                            $scope.myTruckList.listShow = false;
                            $scope.myTruckList.message = "No data available";
                            $scope.truckOwnerPage.showAlert = true;
                            successInfo($scope.myTruckList.message, 'myTrucklist_alert');

                        }
                    }).error(function(data) {
                        $scope.myTruckList.listShow = false;
                        $scope.myTruckList.messageAvailable = true;
                        $scope.truckOwnerPage.showAlert = true;
                        succesError(data.statusMsg, 'myTrucklist_alert');
                    });
                    /*$http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
                        $scope.setPagingData(largeLoad,page,pageSize);
                    });*/
                }
            }, 100);
        //}
    };
    //$scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage);

    /*$scope.$watch('myTruckList.pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage, $scope.myTruckList.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('truckPostList.filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage, $scope.myTruckList.filterOptions.filterText);
        }
    }, true);*/

    $scope.myTruckList.columnDefs = [];
    $scope.myTruckList.gridOptions = {
        data: 'myTruckList.list',
        enablePaging: true,
        pagingOptions: $scope.myTruckList.pagingOptions,
        filterOptions: $scope.myTruckList.filterOptions,
        showFooter: true,
        rowHeight : 25,
        enableCellSelection: false,
        enableRowSelection: false,
        totalServerItems : 'myTruckList.totalServerItems',
        //showGroupPanel: true,
        columnDefs: 'myTruckList.columnDefs'
    };
    $scope.myTruckList.list = [];

    $scope.myTruckList.searchTriggered = false;
    $scope.myTruckList.listShow = false;
    $scope.myTruckList.messageAvailable = false;

    //$scope.searchTrucks = function(){
        $scope.myTruckList.searchTriggered = true;
        $scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
    //};

    $scope.editTruck = function(id){
        console.log("Editing truck: "+id);
        //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
        $http.post("/TransEarth/getTruckById", {truckId : id})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));

                    $scope.page.scope == "Edit Truck";
                    $scope.page.template = "/TransEarth/manage_truck";
                }else{
                    $scope.myTruckList.messageAvailable = true;
                    $scope.truckOwnerPage.showAlert = true;
                    succesError("Truck Details Not available for update", 'myTrucklist_alert');
                    console.log("No data available");
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
                    console.log("Modal $scope.truckToRemove: "+JSON.stringify($scope.truckToRemove));
                    return $scope.truckToRemove;
                }
            }
        });
        modalInstance.result.then(function(truckToRemove){
            //on ok button press
            console.log("On ok button press");
            //$scope.inActivateTruck(truckToRemove);
        },function(){
            //on cancel button press
            console.log("Modal Closed");
            $scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
        });
    };

    var TruckRemoveModalCtrl = function ($scope, $modalInstance, truckToInactivate) {

        clearAlert("remove_truck_alert");
        $scope.truckToInactivate = truckToInactivate;
        $scope.showClose = false;
        console.log("Inside TruckRemoveModalCtrl: truckToRemove = "+JSON.stringify($scope.truckToInactivate));

        $scope.inActivateTruck = function(truck){
            console.log("Removing truck: "+truck._id);
            //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
            $scope.truckToInactivate = truck;
            $http.post("/TransEarth/removeTruck", {truck : truck})
                .success(function(data) {
                    $scope.showClose = true;
                    // succesAlert(data.statusMsg, 'eaiSaveStatus');
                    successInfo(data.statusMsg, 'remove_truck_alert');
                    /*if(typeof data != 'undefined' && data != null){
                        console.log(JSON.stringify(data));
                        TruckRequest.setSharedTruck(data);
                        $scope.page.template = "/TransEarth/truck_owner_home";
                        $scope.page.scope = "Truck Owner Home";
                        succesError(err.statusMsg, 'myTrucklist_alert');
                    }else{
                        console.log("No data available");
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
        console.log("Add post to truck: "+truckId);
        $scope.myTruckList.showAddPostError = false;
        $http.post("/TransEarth/getTruckById", {truckId : truckId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                $scope.myTruckList.showAddPostError = false;
                if(typeof data != 'undefined' && data != null){
                    console.log(JSON.stringify(data));
                    TruckRequest.setSharedTruck(data);
                    //TruckPostRequest.setSharedTruck(null);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.myTruckList.showAddPostError = false;
                    $scope.truckOwnerPage.showPostList = false;
                }else{
                    $scope.myTruckList.showAddPostError = false;
                    $scope.truckOwnerPage.showPostList = true;
                    succesError("Truck Not found to add post", 'myTrucklist_alert');
                    console.log("No data available");
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
                    console.log("Modal $scope.truckInfo: "+JSON.stringify($scope.truckToRemove));
                    return $scope.truckInfo;
                }
            }
        });
        modalInstance.result.then(function(truck){
            //on ok button press
            console.log("On ok button press");
            //$scope.inActivateTruck(truckToRemove);
        },function(){
            //on cancel button press
            console.log("Modal Closed");
            //$scope.getPagedDataAsync($scope.myTruckList.pagingOptions.pageSize, $scope.myTruckList.pagingOptions.currentPage);
        });
    };

    var TruckDetailModalCtrl = function ($scope, $modalInstance, truck) {

        $scope.truckModal = truck;
        if(typeof $scope.truckModal != "undefined" && typeof $scope.truckModal.owner != "undefined"){
            $scope.truckModal.owner.name = $scope.truckModal.owner.last_name + " ," + $scope.truckModal.owner.first_name;
        }
        $scope.showClose = false;
        console.log("Inside TruckDetailModalCtrl: truckModal = "+JSON.stringify($scope.truckModal));

        $scope.ok = function () {
            $modalInstance.close($scope.truckToRemove);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.getTruckDetails = function(truckId){
        console.log("Get truck details: "+truckId);

        $http.post("/TransEarth/getTruckById", {truckId : truckId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    console.log(JSON.stringify(data));
                    $scope.truckInfo = data;
                    //TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.truckDetails.open('sm');
                }else{
                    $scope.myTruckList.messageAvailable = true;
                    $scope.truckOwnerPage.showAlert = true;
                    succesError("Truck Details Not available", 'myTrucklist_alert');
                    console.log("No data available");
                }
            }).error(function(err) {
                $scope.myTruckList.listShow = false;
                $scope.myTruckList.messageAvailable = true;
                $scope.truckOwnerPage.showAlert = true;
                succesError(err.statusMsg, 'myTrucklist_alert');
            });
    };
}
