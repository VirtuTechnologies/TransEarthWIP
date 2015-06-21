//ng-grid Truck List
function truckListCtrl($scope, $http, $location, $modal, $filter, UserRequest) {
    console.log('Inside truckListCtrl');

    clearAlert("trucklist_alert");

    $scope.truckPostList = {};
    $scope.truckPostList.filter = {};
    $scope.truckPostList.filter.from = {
        place : "",
        state : "",
        isSelected : false,
        disable : false
    };

    $scope.truckPostList.filter.to = {
        place : "",
        state : "",
        isSelected : false,
        disable : false
    };

    $scope.truckPostList.filter.dateRange = 2;
    $scope.truckPostList.filter.dt = new Date();
    //$scope.minDate = $scope.minDate ? null : new Date();

    $scope.minDate = new Date();

    $scope.truckPostList.filter.dateRangeOptions ={
        format: 'DD-MMM-YYYY',
        popup : "dd-MMMM-yyyy",
        minDate: $scope.minDate
    };
    $scope.opened = false;
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        //console.log("Opened");
        $scope.opened = true;
    };

    $scope.truckPostList.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.truckPostList.searchButtonName = "Go";
    $scope.resetSearchCategory = function(){
        $scope.truckPostList.searchButtonName = "Go";
    };
    $scope.truckPostList.filterOptions = {
        filterText: '',
        useExternalFilter : false
    };
    $scope.truckPostList.totalServerItems = 0;
    $scope.truckPostList.pagingOptions = {
        pageSizes: [10, 20, 30],
        pageSize: 10,
        currentPage: 1
    };
    $scope.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //console.log(JSON.stringify(pagedData));
        $scope.truckPostList.list = pagedData;

        $scope.truckPostList.totalServerItems = data.length;
        console.log("truckPostList.totalServerItems: "+$scope.truckPostList.totalServerItems);
        $scope.truckPostList.gridOptions = {
            data: 'truckPostList.list',
            /*beforeSelectionChange: function() {
             return $scope.truckList.truckListOption;
             },*/
            columnDefs: 'truckPostList.columnDefs'
        };

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        if($scope.truckPostList.searchTriggered){
            setTimeout(function () {
                var data;
                $scope.truckPostList.listShow = false;
                $scope.truckPostList.messageAvailable = false;
                //console.log("Search Text: "+searchText);
                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.post("/TransEarth/getTruckPostings", {filters : [
                        $scope.truckPostList.filter.from,
                        $scope.truckPostList.filter.to,
                        $scope.truckPostList.filter.dateRange,
                        $scope.truckPostList.filter.dt,
                        $scope.truckPostList.filter.type
                    ]}).success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.truckPostList != 'undefined' && data.truckPostList != null
                            && typeof data.truckPostList.details != "undefined" && data.truckPostList.details != null
                            && data.truckPostList.details.length > 0){
                            //console.log(JSON.stringify(data.truckPostList.details));
                            var filteredData = data.truckPostList.details.filter(function(item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                            });
                            //console.log("Filtered Data:"+JSON.stringify(filteredData));
                            $scope.truckPostList.columnDefs = data.truckPostList.headers;
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.truckPostList.listShow = true;
                            $scope.truckPostList.messageAvailable = false;
                            //$scope.truckPostList.searchButtonName = "Review TruckList";
                        }else{
                            //console.log("No data available");
                            $scope.truckPostList.messageAvailable = true;
                            $scope.truckPostList.listShow = false;
                            $scope.truckPostList.message = "No data available";
                            succesWarning($scope.truckPostList.message, 'trucklist_alert');

                        }
                    }).error(function(err) {
                        $scope.truckPostList.listShow = false;
                        $scope.truckPostList.messageAvailable = true;
                        succesError(err.statusMsg, 'trucklist_alert');
                    });
                    /*$http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
                        data = largeLoad.filter(function(item) {
                            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                        });
                        $scope.setPagingData(data,page,pageSize);
                    });*/
                } else {
                    $http.post("/TransEarth/getTruckPostings", {filters : [
                        $scope.truckPostList.filter.from,
                        $scope.truckPostList.filter.to,
                        $scope.truckPostList.filter.dateRange,
                        $scope.truckPostList.filter.dt,
                        $scope.truckPostList.filter.type
                    ]}).success(function(data) {
                        // succesAlert(data.statusMsg, 'eaiSaveStatus');
                        if(typeof data != 'undefined' && data != null
                            && typeof data.truckPostList != 'undefined' && data.truckPostList != null
                            && typeof data.truckPostList.details != "undefined" && data.truckPostList.details != null
                            && data.truckPostList.details.length > 0){
                            //console.log(JSON.stringify(data.truckPostList.details));
                            var filteredData = data.truckPostList.details;
                            $scope.truckPostList.columnDefs = data.truckPostList.headers;
                            var reminder = filteredData.length % $scope.truckPostList.pagingOptions.pageSize;
                            var floor = Math.floor(filteredData.length / $scope.truckPostList.pagingOptions.pageSize);
                            if(reminder>0){
                                $scope.truckPostList.pagingOptions.lastPage = floor + 1;
                            }else{
                                $scope.truckPostList.pagingOptions.lastPage = floor;
                            }

                            $scope.truckPostList.pagingOptions.currentPage = page;
                            console.log("Current Page: "+$scope.truckPostList.pagingOptions.currentPage);
                            console.log("Last Page: "+$scope.truckPostList.pagingOptions.lastPage);
                            $scope.setPagingData(filteredData,page,pageSize);
                            $scope.truckPostList.listShow = true;
                            $scope.truckPostList.messageAvailable = false;
                            //$scope.truckPostList.searchButtonName = "Review TruckList";
                        }else{
                            //console.log("No data available");
                            $scope.truckPostList.messageAvailable = true;
                            $scope.truckPostList.listShow = false;
                            $scope.truckPostList.message = "No data available";
                            succesWarning($scope.truckPostList.message, 'trucklist_alert');
                        }
                    }).error(function(data) {
                        $scope.truckPostList.listShow = false;
                        $scope.truckPostList.messageAvailable = true;
                        succesError(data.statusMsg, 'trucklist_alert');
                    });
                    /*$http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
                        $scope.setPagingData(largeLoad,page,pageSize);
                    });*/
                }
            }, 100);
        }
    };
    //$scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage);

    /*$scope.$watch('truckPostList.pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage, $scope.truckPostList.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('truckPostList.filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, $scope.truckPostList.pagingOptions.currentPage, $scope.truckPostList.filterOptions.filterText);
        }
    }, true);*/

    $scope.truckPostList.columnDefs = [];
    $scope.truckPostList.gridOptions = {
        data: 'truckPostList.list',
        //filterOptions: $scope.filterOptions,
        //showColumnMenu : true,
        //showFilter : false,
        //resizable : true,
        //enableColumnResize: true,
        enablePaging: true,
        pagingOptions: $scope.truckPostList.pagingOptions,
        filterOptions: $scope.truckPostList.filterOptions,
        showFooter: true,
        rowHeight : 25,
        showGroupPanel: true,
        enableCellSelection: false,
        enableRowSelection: false,
        totalServerItems : 'truckPostList.totalServerItems',
        columnDefs: 'truckPostList.columnDefs'
    };
    $scope.truckPostList.truckList = [];

    $scope.truckPostList.searchTriggered = false;
    $scope.truckPostList.listShow = false;
    $scope.truckPostList.messageAvailable = false;

    $scope.searchTrucks = function(){
        $scope.truckPostList.list = [];
        $scope.truckPostList.searchTriggered = true;
        $scope.getPagedDataAsync($scope.truckPostList.pagingOptions.pageSize, 1);
    };
    $scope.searchTrucks();

    $scope.init = function(){
        $scope.getTruckTypes();
    } ;

    //$scope.truckTypeList = ["Ashok Leyland","Tata","Eicher","Force","Mahindra","Hindustan","Swaraj Mazda","Volvo","MAN","AMW","Tatra Vectra","DAF","Kamaz Vactra","SML Isuzu","Bharat Benz"];
    $scope.truckTypeList = [];
    $scope.getTruckTypes = function(){
        $http.get("/TransEarth/getTruckTypes")
            .success(function(data) {
                //console.log("Truck Types looked up:"+JSON.stringify(data));
                $scope.truckTypeList = data;
                $scope.truckPostList.filter.type = "";
            }).error(function(err) {
                //console.log("truckType Lookup failed:"+JSON.stringify(err));
            });
    };

    $scope.truckPostDetails = {};
    $scope.viewTruckPost = function(truckId, postId){
        if(!$scope.core.loggedIn){
            $scope.truckPostDetails.messageAvailable = true;
            succesError("Please login to view details", 'trucklist_alert');
        }else{
            $http.post("/TransEarth/getTruckPostById", {
                truckId : truckId,
                postId : postId
            }).success(function(data) {
                //console.log("Data fetched by getTruckPostById:"+JSON.stringify(data));
                if(typeof data != 'undefined' && data != null){
                    //console.log(JSON.stringify(data));
                    data.posts = $filter('filter')(data.posts, {_id:postId})[0];
                    //console.log(JSON.stringify(data));
                    if(typeof data.posts != "undefined" && typeof data.posts.truck_post != "undefined"
                        && typeof data.posts.truck_post.availability != "undefined" && typeof data.posts.truck_post.availability.date != "undefined"){
                        //data.posts.availability.date = moment(data.posts.availability.date).format("dd MMM yyyy");
                        /*data.posts.truck_post.availability.date = new Date(data.posts.truck_post.availability.date);
                        data.posts.truck_post.availability.date =
                            data.posts.truck_post.availability.date.getFullYear() + "/"
                            + data.posts.truck_post.availability.date.getMonth()+ "/"
                            + data.posts.truck_post.availability.date.getDate();*/
                        data.posts.truck_post.availability.date = moment(data.posts.truck_post.availability.date).format('MMM DD, YYYY');
                        //console.log("Formatted Date: "+data.posts.truck_post.availability.date);
                    }
                    //console.log("Formatted: "+JSON.stringify(data));
                    $scope.truckPostInfo = data;
                    $scope.truckPostDetails.open('sm');
                    $scope.truckPostDetails.messageAvailable = false;
                }else{
                    $scope.truckPostDetails.messageAvailable = true;
                    succesError("Truck Post Details Not found", 'trucklist_alert');
                    //console.log("No Post data available");
                }
            }).error(function(err) {
                $scope.truckPostDetails.messageAvailable = true;
                succesError(err.statusMsg, 'trucklist_alert');
            });
        }
    };
    $scope.truckPostInfo = {};
    $scope.truckPostDetails.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'truckPostDetailModal.html',
            controller: TruckPostDetailModalCtrl,
            //windowClass: 'xx-dialog',
            size: size,
            resolve: {
                post: function () {
                    //console.log("Modal $scope.truckPostInfo: "+JSON.stringify($scope.truckPostInfo));
                    return $scope.truckPostInfo;
                }
            }
        });
        modalInstance.result.then(function(post){
            //on ok button press
            //console.log("On ok button press");
        },function(){
            //on cancel button press
            //console.log("Modal Closed");
        });
    };

    var TruckPostDetailModalCtrl = function ($scope, $modalInstance, post) {

        $scope.truckPostModal = post;
        if(typeof $scope.truckPostModal != "undefined" && typeof $scope.truckPostModal.owner != "undefined"){
            $scope.truckPostModal.owner.name = $scope.truckPostModal.owner.last_name + " ," + $scope.truckPostModal.owner.first_name;
        }
        $scope.showClose = false;
        //console.log("Inside TruckPostDetailModalCtrl: truckPostModal = "+JSON.stringify($scope.truckPostModal));

        $scope.ok = function () {
            $modalInstance.close($scope.truckPostModal);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

}

//ng-table driven
function truckListCtrlInvalid($scope, $http, $location, UserRequest, $filter,  $q, ngTableParams, $sce) {
    //console.log('Inside truckListCtrl');

    $scope.truckList = {};
    $scope.truckList.filter = {};

    $scope.truckList.filter.dateRange = null;
    $scope.truckList.filter.dt = new Date();

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.opened = false;
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        //console.log("Opened");
        $scope.opened = true;
    };

    $scope.truckList.searchButtonName = "Search";

    $scope.index = {};
    $scope.index.filterOptions = {
        filterText: '',
        useExternalFilter : false
    };

    $scope.data = [{}];

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 20,           // count per page
        filter: {
            // initial filter
        },
        sorting: {
            // initial sorting
        }
    }, {
        total:  $scope.data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            //console.log("params: "+JSON.stringify(params));
            //console.log("data: "+JSON.stringify(data));
            //console.log("$filter: "+JSON.stringify(params.filter()));
            var testData = $scope.data;
            var filteredData = params.filter() ?
                $filter('filter')(testData, params.filter()) :
                data;
            var orderedData = params.sorting() ?
                $filter('orderBy')(filteredData, params.orderBy()) :
                data;

            //console.log("filteredData: "+JSON.stringify(filteredData));
            //console.log("orderedData: "+JSON.stringify(orderedData));

            $scope.trucks = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.trucks);
        },
        $scope: {$data:[]}
    });
    /*$scope.index.truckListColumnDefs = [];
    $scope.index.truckGridOptions = {
        data: 'index.truckList',
        //filterOptions: $scope.filterOptions,
        showColumnMenu : true,
        showFilter : false,
        resizable : true,
        enableColumnResize: true,
        columnDefs: 'index.truckListColumnDefs'
    };
    $scope.index.truckList = [
    ];*/

    $scope.index.truckListShow = false;
    $scope.index.truckListMessageAvailable = false;
    $scope.searchTrucks = function(){

        var filters = {};
        if(typeof $scope.truckList.filter.from != "undefined" && $scope.truckList.filter.from != null){
            filters.source = $scope.truckList.filter.from;
        }
        if(typeof $scope.truckList.filter.to != "undefined" && $scope.truckList.filter.to != null){
            filters.destination = $scope.truckList.filter.to;
        }
        if(typeof $scope.truckList.filter.dt != "undefined" && $scope.truckList.filter.dt != null){
            filters.availableDate = $scope.truckList.filter.dt;
        }
        //console.log("Truck List Filters: "+JSON.stringify(filters));
        $http.post("/TransEarth.getTruckPostingsSummary", {filters : filters})
            .success(function(data) {
                if(typeof data != 'undefined' && data != null
                    && typeof data.truckList != 'undefined' && data.truckList != null
                    && typeof data.truckList.details != "undefined" && data.truckList.details != null){
                    //console.log(JSON.stringify(data));
                    /*$scope.index.truckList = data.truckList.details;
                    $scope.index.truckListColumnDefs = data.truckList.headers;
                    $scope.index.truckListOptions = {
                        enableCellSelection: false,
                        enableRowSelection: false
                    };

                    $scope.index.truckGridOptions = {
                        data: 'index.truckList',
                        columnDefs: 'index.truckListColumnDefs'
                    };*/
                    //console.log("Fetched Trucks data:"+JSON.stringify(responseData));
                    convertDateStringsToDates(data.truckList.details);
                    //console.log("Fetched Release data:"+JSON.stringify(responseData));
                    $scope.data = data.truckList.details;
                    $scope.tableParams.reload();
                    $scope.index.truckListShow = true;
                    $scope.index.searchButtonName = "Review TruckList";
                }else{
                    $scope.index.messageAvailable = true;
                    $scope.index.truckListMessage = "No data available";
                    succesWarning($scope.index.truckListMessage, 'indexTruckListMessage');
                    //console.log("No data available");
                }
            }).error(function(data) {
                $scope.index.messageAvailable = true;
                succesError(data.statusMsg, 'indexTruckListMessage');
            });
    };
    $scope.text = 'Inside TransEarth Table controller';
    //$location.url('/table');
}
