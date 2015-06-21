//ng-grid Load List
function loadOwnerCtrl($scope, $http, $location, $modal, UserRequest, LoadRequest) {
    //console.log('Inside loadOwnerCtrl');

    clearAlert("myLoadList_alert");

    $scope.showText = function(obj){
        if(typeof obj != "undefined" && obj != null && obj != ""){
            return true;
        }else{
            return false;
        }
    };
    $scope.myLoadList = {};
    $scope.myLoadList.myLoads_filter = "";
    $scope.myLoadList.filter = {};

    $scope.myLoadList.filter.dateRange = null;
    $scope.myLoadList.filter.dt = new Date();

    $scope.myLoadList.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    LoadRequest.setSharedLoad(null);
    if(LoadRequest.isSharedLoadProcessed()){
        //console.log("Load processed");
        LoadRequest.setSharedLoadProcessed(false);
        succesAlert("Load saved successfully", 'myLoadList_alert');
    }

    $scope.opened = false;
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        //console.log("Opened");
        $scope.opened = true;
    };

    $scope.myLoadList.searchButtonName = "Search";
    $scope.resetSearchCategory = function(){
        $scope.myLoadList.searchButtonName = "Search";
    };
    $scope.myLoadList.filterOptions = {
        filterText: '',
        useExternalFilter : false
    };

    $scope.myLoadList.totalServerItems = 0;
    $scope.myLoadList.pagingOptions = {
        pageSizes: [10, 20, 30],
        pageSize: 10,
        currentPage: 1
    };

    $scope.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //console.log(JSON.stringify(pagedData));
        $scope.myLoadList.list = pagedData;

        $scope.myLoadList.totalServerItems = data.length;
        /*$scope.myLoadList.gridOptions = {
            data: 'myLoadList.list',
            columnDefs: 'myLoadList.columnDefs'
        };*/

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        //if($scope.myLoadList.searchTriggered){
        //console.log("Load Owner getPagedDataAsync");
            setTimeout(function () {
                var data;
                //console.log("Search Text: "+searchText);
                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.post("/TransEarth/getMyLoadList", {filters : []})
                        .success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.myLoadList != 'undefined' && data.myLoadList != null
                            && typeof data.myLoadList.details != "undefined" && data.myLoadList.details != null
                            && data.myLoadList.details.length > 0){
                            //console.log(JSON.stringify(data));
                            //$scope.myLoadList.list = data.myLoadList.details;
                            $scope.myLoadList.totalServerItems = data.myLoadList.details.length;
                            var filteredData = data.myLoadList.details.filter(function(item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                            });
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.myLoadList.columnDefs = data.myLoadList.headers;
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.myLoadList.listShow = true;
                            $scope.myLoadList.searchButtonName = "Review LoadList";
                        }else{
                            //console.log("No data available");
                            $scope.myLoadList.messageAvailable = true;
                            $scope.myLoadList.listShow = false;
                            $scope.myLoadList.message = "No data available";
                            succesWarning($scope.myLoadList.message, 'myLoadList_alert');

                        }
                    }).error(function(data) {
                        $scope.myLoadList.listShow = false;
                        $scope.myLoadList.messageAvailable = true;
                        succesError(data.statusMsg, 'myLoadList_alert');
                    });
                } else {
                    $http.post("/TransEarth/getMyLoadList", {filters : []})
                        .success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.myLoadList != 'undefined' && data.myLoadList != null
                            && typeof data.myLoadList.details != "undefined" && data.myLoadList.details != null
                            && data.myLoadList.details.length > 0){
                            //console.log(JSON.stringify(data));
                            //$scope.myLoadList.list = data.myLoadList.details;
                            $scope.myLoadList.totalServerItems = data.myLoadList.details.length;
                            var filteredData = data.myLoadList.details;
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.myLoadList.columnDefs = data.myLoadList.headers;
                            var reminder = filteredData.length % $scope.myLoadList.pagingOptions.pageSize;
                            var floor = Math.floor(filteredData.length / $scope.myLoadList.pagingOptions.pageSize);
                            if(reminder>0){
                                $scope.myLoadList.pagingOptions.lastPage = floor + 1;
                            }else{
                                $scope.myLoadList.pagingOptions.lastPage = floor;
                            }

                            $scope.myLoadList.pagingOptions.currentPage = page;
                            console.log("Current Page: "+$scope.myLoadList.pagingOptions.currentPage);
                            console.log("Last Page: "+$scope.myLoadList.pagingOptions.lastPage);
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.myLoadList.listShow = true;
                            $scope.myLoadList.messageAvailable = false;

                            $scope.myLoadList.searchButtonName = "Review LoadList";
                        }else{
                            //console.log("No data available");
                            $scope.myLoadList.messageAvailable = true;
                            $scope.myLoadList.listShow = false;
                            $scope.myLoadList.message = "No data available";
                            succesWarning($scope.myLoadList.message, 'myLoadList_alert');

                        }
                    }).error(function(data) {
                        $scope.myLoadList.listShow = false;
                        $scope.myLoadList.messageAvailable = true;
                        succesError(data.statusMsg, 'myLoadList_alert');
                    });
                }
            }, 100);
        //}
    };
    //$scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage);

    /*$scope.$watch('myLoadList.pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.getPagedDataAsync($scope.myLoadList.pagingOptions.pageSize, $scope.myLoadList.pagingOptions.currentPage, $scope.myLoadList.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('myLoadList.filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.myLoadList.pagingOptions.pageSize, $scope.myLoadList.pagingOptions.currentPage, $scope.myLoadList.filterOptions.filterText);
        }
    }, true);*/

    $scope.myLoadList.columnDefs = [];
    $scope.myLoadList.gridOptions = {
        data: 'myLoadList.list',
        //filterOptions: $scope.filterOptions,
        //showColumnMenu : true,
        //showFilter : false,
        enablePaging: true,
        pagingOptions: $scope.myLoadList.pagingOptions,
        filterOptions: $scope.myLoadList.filterOptions,
        showFooter: true,
        rowHeight : 25,
        showGroupPanel: true,
        enableCellSelection: false,
        enableRowSelection: false,
        totalServerItems : 'myLoadList.totalServerItems',
        columnDefs: 'myLoadList.columnDefs'
    };
    $scope.myLoadList.list = [
    ];

    $scope.myLoadList.searchTriggered = false;
    $scope.myLoadList.listShow = false;
    $scope.myLoadList.messageAvailable = false;

    //$scope.searchLoads = function(){
        $scope.myLoadList.searchTriggered = true;
        $scope.getPagedDataAsync($scope.myLoadList.pagingOptions.pageSize, 1);
    //};
    //$location.url('/TransEarth/forms');

    $scope.loadOwnerPage = {};

    $scope.editLoad = function(id){
        //console.log("Editing Load: "+id);
        //console.log("Get Shared Load Request: "+LoadRequest.getSharedLoad());
        $http.post("/TransEarth/getLoadById", {loadId : id})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    LoadRequest.setSharedLoad(data);
                    //console.log("Get Shared Load Request: "+JSON.stringify(LoadRequest.getSharedLoad()));

                    $scope.page.scope == "Edit Load";
                    $scope.page.template = "/TransEarth/manage_load";
                }else{
                    $scope.myLoadList.messageAvailable = true;
                    $scope.loadOwnerPage.showAlert = true;
                    succesError("Load Details Not available for update", 'myLoadList_alert');
                    //console.log("No data available");
                }
            }).error(function(err) {
                $scope.myLoadList.listShow = false;
                $scope.myLoadList.messageAvailable = true;
                $scope.loadOwnerPage.showAlert = true;
                succesError(err.statusMsg, 'myLoadList_alert');
            });
    };

    $scope.loadToRemove = {};
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myLoadRemoveModal.html',
            controller: LoadRemoveModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                loadToInactivate: function () {
                    //console.log("Modal $scope.loadToRemove: "+JSON.stringify($scope.loadToRemove));
                    return $scope.loadToRemove;
                }
            }
        });
        modalInstance.result.then(function(loadToRemove){
            //on ok button press
            //console.log("On ok button press");
            //$scope.inActivateTruck(loadToRemove);
        },function(){
            //on cancel button press
            //console.log("Modal Closed");
            $scope.getPagedDataAsync($scope.myLoadList.pagingOptions.pageSize, $scope.myLoadList.pagingOptions.currentPage);
        });
    };

    var LoadRemoveModalCtrl = function ($scope, $modalInstance, loadToInactivate) {

        clearAlert("remove_load_alert");
        $scope.loadToInactivate = loadToInactivate;
        $scope.showClose = false;
        //console.log("Inside LoadRemoveModalCtrl: loadToRemove = "+JSON.stringify($scope.loadToInactivate));

        $scope.inActivateLoad = function(load){
            //console.log("Removing load: "+load._id);
            //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
            $scope.loadToInactivate = load;
            $http.post("/TransEarth/removeLoad", {load : load})
                .success(function(data) {
                    $scope.showClose = true;
                    successInfo(data.statusMsg, 'remove_load_alert');
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
                    succesError(err.statusMsg, 'remove_load_alert');
                });
        };
        $scope.ok = function () {
            $modalInstance.close($scope.loadToRemove);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.removeLoad = function(load_id, source, destination, load, material, pickupDate){
        $scope.loadToRemove = {
            _id : load_id,
            source : source,
            destination : destination,
            load : load,
            material : material,
            pickupDate : pickupDate
        };
        $scope.open('sm');
    };

    $scope.loadDetails = {};
    $scope.loadInfo = {};
    $scope.loadDetails.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myLoadDetailModal.html',
            controller: LoadDetailModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                load: function () {
                    //console.log("Modal $scope.loadInfo: "+JSON.stringify($scope.loadInfo));
                    return $scope.loadInfo;
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

    var LoadDetailModalCtrl = function ($scope, $modalInstance, load) {

        $scope.loadModal = load;
        if(typeof $scope.loadModal != "undefined" && typeof $scope.loadModal.owner != "undefined"){
            $scope.loadModal.owner.name = $scope.loadModal.owner.last_name + " ," + $scope.loadModal.owner.first_name;
        }
        $scope.showClose = false;
        //console.log("Inside LoadDetailModalCtrl: loadModal = "+JSON.stringify($scope.loadModal));

        $scope.ok = function () {
            $modalInstance.close($scope.loadModal);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.viewLoad = function(loadId){
        //console.log("Get load details: "+loadId);

        $http.post("/TransEarth/getLoadById", {loadId : loadId})
            .success(function(data) {
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    $scope.loadInfo = data;
                    //TruckRequest.setSharedTruck(data);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.loadDetails.open('lg');
                }else{
                    $scope.myLoadList.messageAvailable = true;
                    $scope.loadOwnerPage.showAlert = true;
                    succesError("Load Details Not available", 'myLoadList_alert');
                    //console.log("No data available");
                }
            }).error(function(err) {
                $scope.myLoadList.listShow = false;
                $scope.myLoadList.messageAvailable = true;
                $scope.loadOwnerPage.showAlert = true;
                succesError(err.statusMsg, 'myLoadList_alert');
            });
    };

    $scope.gotoHome = function(){
        LoadRequest.setSharedLoad(null);
        $scope.page.template = "/TransEarth/truck_owner_home";
        $scope.page.scope = "Truck Owner Home";
    };
}
