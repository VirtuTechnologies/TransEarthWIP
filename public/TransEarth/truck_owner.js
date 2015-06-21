//ng-grid Truck List
function truckOwnerCtrl($scope, $http, $location, UserRequest, TruckRequest) {
    //console.log('Inside truckOwnerCtrl');

    clearAlert("truck_home_alert");
    TruckRequest.setSharedTruck(null);
    if(TruckRequest.isSharedTruckProcessed()){
        //console.log("Truck processed");
        TruckRequest.setSharedTruckProcessed(false);
        $scope.myTruckList.messageAvailable = true;
        succesAlert("Truck saved successfully", 'truck_home_alert');
    }
    $scope.truckOwnerPage = {};
    $scope.truckOwnerPage.showTruckList = true;
    $scope.truckOwnerPage.showManageTruck = false;
    $scope.truckOwnerPage.showPostList = true;
    $scope.truckOwnerPage.showManagePost = false;

    $scope.truckOwnerPage.showAlert = false;

    $scope.truckOwnerPage.refresh = null;

    /*$scope.$watch('truckOwnerPage.showAlert', function (newVal, oldVal) {
        //console.log('truckOwnerPage.showAlert old value = '+oldVal+" and new value = "+newVal);
    }, true);*/

    $scope.myTruckList = {};
    $scope.myTruckPostList = {};
    $scope.template = {
        myTrucks : "truck_owner_trucks",
        editTruck : "manage_truck",
        truckPosts : "truck_owner_posts",
        managePost : "manage_post"
    };
    /*$scope.$watch('truckOwnerPage.showPostList', function (newVal, oldVal) {
        //console.log('truckOwnerPage.showPostList changed from '+oldVal+" to "+newVal);
        //if (!oldVal && newVal) {
            $scope.template.truckPosts = '';
            $scope.template.truckPosts = 'truck_owner_posts';
            //$scope.myTruckPostList.list = [];
            //$scope.myTruckPostList.getPagedDataAsync($scope.myTruckPostList.pagingOptions.pageSize, $scope.myTruckPostList.pagingOptions.currentPage);
        //}
    });*/
}
