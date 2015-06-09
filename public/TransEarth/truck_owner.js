//ng-grid Truck List
function truckOwnerCtrl($scope, $http, $location, UserRequest, TruckRequest) {
    console.log('Inside truckOwnerCtrl');

    clearAlert("truck_home_alert");
    TruckRequest.setSharedTruck(null);
    if(TruckRequest.isSharedTruckProcessed()){
        console.log("Truck processed");
        TruckRequest.setSharedTruckProcessed(false);
        succesAlert("Truck saved successfully", 'truck_home_alert');
    }
    $scope.truckOwnerPage = {};
    $scope.truckOwnerPage.showTruckList = true;
    $scope.truckOwnerPage.showPostList = true;
    $scope.truckOwnerPage.showAlert = false;

    /*$scope.$watch('truckOwnerPage.showAlert', function (newVal, oldVal) {
        console.log('truckOwnerPage.showAlert old value = '+oldVal+" and new value = "+newVal);
    }, true);*/

    $scope.myTruckList = {};
    $scope.myTruckPostList = {};
    $scope.template = {
        myTrucks : "truck_owner_trucks",
        truckPosts : "truck_owner_posts",
        managePost : "manage_post"
    };
}
