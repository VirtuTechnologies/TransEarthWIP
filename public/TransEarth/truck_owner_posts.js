//ng-grid Truck List
function truckOwnerPostsCtrl($scope, $http, $location, $modal, UserRequest, TruckPostRequest) {
    //console.log('Inside truckOwnerPostsCtrl');

    clearAlert("myTruckPostlist_alert");
    clearAlert("truck_home_alert");

    //Posts
    //$scope.myTruckPostList = {};
    $scope.myTruckPostList.filter = {};

    $scope.myTruckPostList.filter.dateRange = null;
    $scope.myTruckPostList.filter.dt = new Date();

    $scope.myTruckPostList.resetSearchCategory = function(){
        $scope.myTruckPostList.searchButtonName = "Search";
    };
    $scope.myTruckPostList.filterOptions = {
        filterText: '',
        useExternalFilter : false
    };
    $scope.myTruckPostList.totalServerItems = 0;
    $scope.myTruckPostList.pagingOptions = {
        pageSizes: [10, 20, 30],
        pageSize: 10,
        currentPage: 1
    };
    $scope.myTruckPostList.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //console.log(JSON.stringify(pagedData));
        $scope.myTruckPostList.list = pagedData;

        $scope.myTruckPostList.gridOptions = {
            data: 'myTruckPostList.list',
            /*beforeSelectionChange: function() {
             return $scope.myTruckList.truckListOption;
             },*/
            columnDefs: 'myTruckPostList.columnDefs'
        };

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.myTruckPostList.getPagedDataAsync = function () {
        //if($scope.myTruckList.searchTriggered){
        setTimeout(function () {
            var data;
            //console.log("Search Text: "+searchText);
            if (0==1) {
                var ft = searchText.toLowerCase();
                $http.post("/TransEarth/getMyTruckPosts", {filters : []})
                    .success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.myTruckPostList != 'undefined' && data.myTruckPostList != null
                            && typeof data.myTruckPostList.details != "undefined" && data.myTruckPostList.details != null
                            && data.myTruckPostList.details.length > 0){
                            //console.log(JSON.stringify(data.myTruckPostList.details));
                            $scope.myTruckPostList.totalServerItems = data.length;
                            $scope.myTruckPostList.list = data.myTruckPostList.details;
                            $scope.myTruckPostList.totalServerItems = $scope.myTruckPostList.list.length;
                            /*var filteredData = data.myTruckPostList.details.filter(function(item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                            });*/
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.myTruckPostList.columnDefs = data.myTruckPostList.headers;
                            //$scope.myTruckPostList.setPagingData(filteredData,page,pageSize);
                            $scope.myTruckPostList.listShow = true;
                            $scope.myTruckPostList.searchButtonName = "Review TruckList";
                        }else{
                            //console.log("No data available");
                            $scope.myTruckPostList.messageAvailable = true;
                            $scope.myTruckPostList.listShow = false;
                            $scope.myTruckPostList.message = "No data available";
                            successInfo($scope.myTruckPostList.message, 'myTruckPostlist_alert');

                        }
                    }).error(function(err) {
                        $scope.myTruckPostList.listShow = false;
                        $scope.myTruckPostList.messageAvailable = true;
                        succesError(err.statusMsg, 'myTruckPostlist_alert');
                    });
                /*$http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
                 data = largeLoad.filter(function(item) {
                 return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                 });
                 $scope.setPagingData(data,page,pageSize);
                 });*/
            } else {
                $http.post("/TransEarth/getMyTruckPosts", {filters : []})
                    .success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.myTruckPostList != 'undefined' && data.myTruckPostList != null
                            && typeof data.myTruckPostList.details != "undefined" && data.myTruckPostList.details != null
                            && data.myTruckPostList.details.length > 0){
                            //console.log(JSON.stringify(data.myTruckPostList.details));
                            $scope.myTruckPostList.totalServerItems = data.length;
                            //var filteredData = data.myTruckPostList.details;
                            $scope.myTruckPostList.list = data.myTruckPostList.details;

                            $scope.myTruckPostList.totalServerItems = $scope.myTruckPostList.list.length;
                            $scope.myTruckPostList.columnDefs = data.myTruckPostList.headers;
                            //$scope.myTruckPostList.setPagingData(filteredData,page,pageSize);
                            $scope.myTruckPostList.listShow = true;
                            $scope.myTruckPostList.searchButtonName = "Review TruckList";
                        }else{
                            //console.log("No data available");
                            $scope.myTruckPostList.list = [];
                            $scope.myTruckPostList.messageAvailable = true;
                            $scope.myTruckPostList.listShow = false;
                            $scope.myTruckPostList.message = "No data available";
                            successInfo($scope.myTruckPostList.message, 'myTruckPostlist_alert');

                        }
                    }).error(function(data) {
                        $scope.myTruckPostList.listShow = false;
                        $scope.myTruckPostList.messageAvailable = true;
                        succesError(data.statusMsg, 'myTruckPostlist_alert');
                    });
                /*$http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
                 $scope.setPagingData(largeLoad,page,pageSize);
                 });*/
            }
        }, 100);
        //}
    };
    //$scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage);

    /*$scope.$watch('myTruckPostList.pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.myTruckPostList.getPagedDataAsync($scope.myTruckPostList.pagingOptions.pageSize, $scope.myTruckPostList.pagingOptions.currentPage, $scope.myTruckPostList.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('myTruckPostList.filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.myTruckPostList.getPagedDataAsync($scope.myTruckPostList.pagingOptions.pageSize, $scope.myTruckPostList.pagingOptions.currentPage, $scope.myTruckPostList.filterOptions.filterText);
        }
    }, true);*/

    $scope.myTruckPostList.list = [];

    $scope.myTruckPostList.searchTriggered = false;
    $scope.myTruckPostList.listShow = false;
    $scope.myTruckPostList.messageAvailable = false;

    //$scope.searchTrucks = function(){
    $scope.myTruckPostList.searchTriggered = true;
    $scope.$watch('truckOwnerPage.refresh', function (newVal, oldVal) {
        //console.log(' My Truck Posts refresh '+JSON.stringify(newVal));
        if(typeof newVal != "undefined" && newVal != null){
            //$scope.myTruckPostList.getPagedDataAsync($scope.myTruckPostList.pagingOptions.pageSize, $scope.myTruckPostList.pagingOptions.currentPage);
            $scope.myTruckPostList.getPagedDataAsync();
        }
    });
    //$scope.myTruckPostList.getPagedDataAsync($scope.myTruckPostList.pagingOptions.pageSize, $scope.myTruckPostList.pagingOptions.currentPage);
    $scope.myTruckPostList.getPagedDataAsync();

    //};

    $scope.myTruckList.showAddPostError = false;
    $scope.editTruckPost = function(truckId, postId, availableDate){
        //console.log("Editing truck : "+truckId+" Post:"+postId+" Date: "+new Date(availableDate)+" Current Date: " +new Date());
        //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
        $scope.truckOwnerPage.showManagePost = false;
        TruckPostRequest.setSharedTruck(null);
        if(new Date(availableDate) < new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate())){
            $scope.myTruckPostList.messageAvailable = true;
            succesWarning("Post prior to today cannot be edited. Please remove and add new post if required", 'myTruckPostlist_alert');
        }else{
            $http.post("/TransEarth/getTruckPostById", {
                truckId : truckId,
                postId : postId
            }).success(function(data) {
                //console.log("Data fetched by getTruckPostById:"+JSON.stringify(data));
                $scope.myTruckList.showAddPostError = false;
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    TruckPostRequest.setSharedTruck(data);
                    TruckPostRequest.setSharedTruckPostId(postId);
                    //console.log("Get Shared Truck Request: "+JSON.stringify(TruckRequest.getSharedTruck()));
                    $scope.myTruckList.showAddPostError = false;
                    //$scope.truckOwnerPage.showPostList = false;
                    $scope.truckOwnerPage.showManageTruck = false;
                    $scope.truckOwnerPage.showManagePost = true;
                    $scope.truckOwnerPage.managePostTitle = "Edit Post";
                }else{
                    $scope.myTruckList.showAddPostError = false;
                    $scope.truckOwnerPage.showManageTruck = false;
                    $scope.truckOwnerPage.showPostList = true;
                    succesError("Truck Not found to add post", 'truck_home_alert');
                    //console.log("No data available");
                }
            }).error(function(err) {
                $scope.myTruckPostList.listShow = false;
                $scope.myTruckPostList.messageAvailable = true;
                succesError(err.statusMsg, 'myTruckPostlist_alert');
            });
        }
    };

    $scope.truckPostToRemove = {};
    $scope.open = function (size) {
        if(typeof $scope.truckOwnerPage == "undefined" || $scope.truckOwnerPage== null ){
            $scope.truckOwnerPage = {};
        }
        var modalInstance = $modal.open({
            templateUrl: 'myTruckPostRemoveModal.html',
            controller: TruckPostRemoveModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                truckPostToInactivate: function () {
                    //console.log("Modal $scope.truckToRemove: "+JSON.stringify($scope.truckPostToRemove));
                    return $scope.truckPostToRemove;
                }
            }
        });
        modalInstance.result.then(function(truckPostToInactivate){
            //on ok button press
            //console.log("On ok button press");
            //$scope.inActivateTruck(truckPostToInactivate);
            if(typeof $scope.truckPostToRemove.status != "undefined" && $scope.truckPostToRemove.status != null){
                console.log("On ok button press");
                $scope.truckOwnerPage.refresh = ($scope.truckOwnerPage.refresh != null) ? !$scope.truckOwnerPage.refresh : true;
            }
        },function(){
            //on cancel button press
            //console.log("Modal Closed");
            $scope.myTruckPostList.getPagedDataAsync($scope.myTruckPostList.pagingOptions.pageSize, $scope.myTruckPostList.pagingOptions.currentPage);
        });
    };

    var TruckPostRemoveModalCtrl = function ($scope, $modalInstance, truckPostToInactivate) {

        clearAlert("remove_truck_post_alert");
        $scope.truckPostToInactivate = truckPostToInactivate;
        $scope.showClose = false;
        //console.log("Inside TruckPostRemoveModalCtrl: truckPostToRemove = "+JSON.stringify($scope.truckPostToInactivate));

        $scope.inActivateTruckPost = function(truckPost){
            //console.log("Removing truck: "+truckPost.truckId);
            //console.log("Get Shared Truck Request: "+TruckRequest.getSharedTruckId());
            $scope.truckPostToInactivate = truckPost;
            $http.post("/TransEarth/removeTruckPost", {
                truckId : truckPost.truckId,
                postId : truckPost.postId,
                reg_no : truckPost.reg_no,
                available_ton : truckPost.available_ton,
                available_date : truckPost.available_date
            }).success(function(data) {
                $scope.showClose = true;
                // succesAlert(data.statusMsg, 'eaiSaveStatus');
                successInfo(data.statusMsg, 'remove_truck_post_alert');
                $scope.truckPostToInactivate.status = "success";

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
                succesError(err.statusMsg, 'remove_truck_post_alert');
            });
        };
        $scope.ok = function () {
            $modalInstance.close($scope.truckPostToRemove);
        };

        $scope.cancel = function () {
            $modalInstance.close($scope.truckPostToRemove);
            //$modalInstance.dismiss('cancel');
        };
    };

    $scope.removeTruckPost = function(truck_id, post_id, reg_no, available_ton, available_date){
        $scope.truckPostToRemove = {
            truckId : truck_id,
            postId : post_id,
            reg_no : reg_no,
            available_ton : available_ton,
            available_date : available_date
        };
        $scope.open('sm');
    };
}
