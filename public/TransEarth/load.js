//ng-grid Load List
function loadListCtrl($scope, $http, $location, $modal, UserRequest) {
    console.log('Inside loadListCtrl');
    clearAlert("loadlist_alert");

    $scope.loadPostList = {};
    $scope.loadPostList.filter = {};
    $scope.loadPostList.filter.from = {
        place : "",
        state : "",
        isSelected : false,
        disable : false
    };

    $scope.loadPostList.filter.to = {
        place : "",
        state : "",
        isSelected : false,
        disable : false
    };

    $scope.loadPostList.filter.dateRange = 2;
    $scope.loadPostList.filter.dt = new Date();
    $scope.minDate = new Date();
    $scope.loadPostList.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.opened = false;
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        console.log("Opened");
        $scope.opened = true;
    };

    $scope.loadPostList.searchButtonName = "Go";
    $scope.resetSearchCategory = function(){
        $scope.loadPostList.searchButtonName = "Go";
    };
    $scope.loadPostList.filterOptions = {
        filterText: '',
        useExternalFilter : false
    };

    $scope.loadPostList.totalServerItems = 0;
    $scope.loadPostList.pagingOptions = {
        pageSizes: [3, 6, 10],
        pageSize: 3,
        currentPage: 1
    };

    $scope.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //console.log(JSON.stringify(pagedData));
        $scope.loadPostList.list = pagedData;

        $scope.loadPostList.totalServerItems = data.length;
        $scope.loadPostList.gridOptions = {
            data: 'loadPostList.list',
            /*beforeSelectionChange: function() {
             return $scope.truckList.truckListOption;
             },*/
            columnDefs: 'loadPostList.columnDefs'
        };

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        if($scope.loadPostList.searchTriggered){
            setTimeout(function () {
                var data;
                //console.log("Search Text: "+searchText);
                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.post("/TransEarth/getLoadPostings", {filters : [
                        $scope.loadPostList.filter.from,
                        $scope.loadPostList.filter.to,
                        $scope.loadPostList.filter.dateRange,
                        $scope.loadPostList.filter.dt,
                        $scope.loadPostList.filter.material
                    ]}).success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.loadPostList != 'undefined' && data.loadPostList != null
                            && typeof data.loadPostList.details != "undefined" && data.loadPostList.details != null
                            && data.loadPostList.details.length > 0){
                            //console.log(JSON.stringify(data));
                            $scope.loadPostList.list = data.loadPostList.details;
                            var filteredData = data.loadPostList.details.filter(function(item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                            });
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.loadPostList.columnDefs = data.loadPostList.headers;
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.loadPostList.listShow = true;
                            //$scope.loadPostList.searchButtonName = "Review LoadList";
                        }else{
                            //console.log("No data available");
                            $scope.loadPostList.messageAvailable = true;
                            $scope.loadPostList.listShow = false;
                            $scope.loadPostList.message = "No data available";
                            succesWarning($scope.loadPostList.message, 'loadlist_alert');

                        }
                    }).error(function(data) {
                        $scope.loadPostList.listShow = false;
                        $scope.loadPostList.messageAvailable = true;
                        succesError(data.statusMsg, 'loadlist_alert');
                    });
                } else {
                    $http.post("/TransEarth/getLoadPostings", {filters : [
                        $scope.loadPostList.filter.from,
                        $scope.loadPostList.filter.to,
                        $scope.loadPostList.filter.dateRange,
                        $scope.loadPostList.filter.dt,
                        $scope.loadPostList.filter.material
                    ]}).success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.loadPostList != 'undefined' && data.loadPostList != null
                            && typeof data.loadPostList.details != "undefined" && data.loadPostList.details != null
                            && data.loadPostList.details.length > 0){
                            //console.log(JSON.stringify(data));
                            $scope.loadPostList.list = data.loadPostList.details;
                            var filteredData = data.loadPostList.details;
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.loadPostList.columnDefs = data.loadPostList.headers;
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.loadPostList.listShow = true;
                            //$scope.loadPostList.searchButtonName = "Review LoadList";
                        }else{
                            //console.log("No data available");
                            $scope.loadPostList.messageAvailable = true;
                            $scope.loadPostList.listShow = false;
                            $scope.loadPostList.message = "No data available";
                            succesWarning($scope.loadPostList.message, 'loadlist_alert');

                        }
                    }).error(function(data) {
                        $scope.loadPostList.listShow = false;
                        $scope.loadPostList.messageAvailable = true;
                        succesError(data.statusMsg, 'loadlist_alert');
                    });
                }
            }, 100);
        }
    };
    //$scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage);

    $scope.$watch('loadPostList.pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.getPagedDataAsync($scope.loadPostList.pagingOptions.pageSize, $scope.loadPostList.pagingOptions.currentPage, $scope.loadPostList.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('loadPostList.filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.loadPostList.pagingOptions.pageSize, $scope.loadPostList.pagingOptions.currentPage, $scope.loadPostList.filterOptions.filterText);
        }
    }, true);

    $scope.loadPostList.columnDefs = [];
    $scope.loadPostList.gridOptions = {
        data: 'loadPostList.list',
        //filterOptions: $scope.filterOptions,
        //showColumnMenu : true,
        //showFilter : false,
        enablePaging: true,
        pagingOptions: $scope.loadPostList.pagingOptions,
        filterOptions: $scope.loadPostList.filterOptions,
        showFooter: true,
        rowHeight : 25,
        showGroupPanel: true,
        enableCellSelection: false,
        enableRowSelection: false,
        totalServerItems : 'loadPostList.totalServerItems',
        columnDefs: 'loadPostList.columnDefs'
    };
    $scope.loadPostList.list = [
    ];

    $scope.loadPostList.searchTriggered = false;
    $scope.loadPostList.listShow = false;
    $scope.loadPostList.messageAvailable = false;

    $scope.searchLoads = function(){
        $scope.loadPostList.searchTriggered = true;
        $scope.getPagedDataAsync($scope.loadPostList.pagingOptions.pageSize, $scope.loadPostList.pagingOptions.currentPage);
    };
    $scope.searchLoads();

    $scope.init = function(){
        $scope.getMaterials();
    } ;

    $scope.materialList = [];
    $scope.getMaterials = function(){
        $http.get("/TransEarth/getMaterialTypes")
            .success(function(data) {
                console.log("Materials looked up:"+JSON.stringify(data));
                $scope.materialList = data;
                $scope.loadPostList.filter.material = "";
            }).error(function(err) {
                console.log("truckType Lookup failed:"+JSON.stringify(err));
            });
    };
    $scope.getMaterials();

    $scope.loadDetails = {};
    $scope.loadInfo = {};
    $scope.loadDetails.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'loadDetailModal.html',
            controller: LoadDetailModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                load: function () {
                    console.log("Modal $scope.loadInfo: "+JSON.stringify($scope.loadInfo));
                    return $scope.loadInfo;
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

    var LoadDetailModalCtrl = function ($scope, $modalInstance, load) {

        $scope.loadModal = load;
        if(typeof $scope.loadModal != "undefined" && typeof $scope.loadModal.owner != "undefined"){
            $scope.loadModal.owner.name = $scope.loadModal.owner.last_name + " ," + $scope.loadModal.owner.first_name;
        }
        $scope.showClose = false;
        console.log("Inside LoadDetailModalCtrl: loadModal = "+JSON.stringify($scope.loadModal));

        $scope.ok = function () {
            $modalInstance.close($scope.loadModal);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.viewLoad = function(loadId){
        if(!$scope.core.loggedIn){
            $scope.loadPostList.messageAvailable = true;
            succesError("Please login to view details", 'loadlist_alert');
        }else{
            console.log("Get load details: "+loadId);

            $http.post("/TransEarth/getLoadById", {loadId : loadId})
                .success(function(data) {
                    // succesAlert(data.statusMsg, 'eaiSaveStatus');
                    if(typeof data != 'undefined' && data != null){
                        console.log(JSON.stringify(data));
                        $scope.loadInfo = data;
                        //TruckRequest.setSharedTruck(data);
                        //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                        $scope.loadDetails.open('sm');
                    }else{
                        $scope.loadPostList.messageAvailable = true;
                        //$scope.loadPostList.message = "No data available";
                        succesWarning("Load details not found", 'loadlist_alert');
                        console.log("No data available");
                    }
                }).error(function(err) {
                    $scope.loadPostList.messageAvailable = true;
                    //$scope.loadPostList.message = "No data available";
                    succesError(err.statusMsg, 'myLoadList_alert');
                });
        }
    };
    //$location.url('/TransEarth/forms');
}
