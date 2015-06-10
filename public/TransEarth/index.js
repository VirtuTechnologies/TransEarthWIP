function indexCtrl($scope, $http, $location, $timeout, $route, UserRequest) {
    //console.log('Inside indexCtrl');

    //$scope.user = window.user_name;
    clearAlert("indexTruckPostListMessage");
    clearAlert("indexLoadPostListMessage");
    $scope.itemDuration = 5000;
    $scope.itemLeaveDelay = 1500;

    if(typeof $scope.user == "undefined"){
        $scope.page.template = "/TransEarth/site_home";
    }

    $scope.index = {};

    $scope.truckPosts = [];
    $scope.truckPosting = {};
    $scope.truckPosting.animation = "slide-right";

    $scope.truckPosting.timeOut = function(index){
        $timeout(function(){
            $scope.truckPosts.pop();
            console.log("Current truck post displayed:"+JSON.stringify($scope.index.truckPostList[$scope.truckPosting.nextItem]));
            if(index>$scope.index.truckPostList.length - 2){
                $scope.truckPosting.nextItem = 0;
            }else{
                $scope.truckPosting.nextItem++;
            }
            var truck_post = $scope.index.truckPostList[$scope.truckPosting.nextItem];
            $timeout(function(){
                $scope.truckPosts.push(truck_post);
                console.log("Next truck post to display:"+JSON.stringify($scope.index.truckPostList[$scope.truckPosting.nextItem]));
                $scope.truckPosting.timeOut($scope.truckPosting.nextItem);
            }, $scope.itemLeaveDelay);

        }, $scope.itemDuration);
    };

    $scope.index.truckPostList = [];
    $http.post("/TransEarth/getTruckPostingsSummary", {filters : []})
        .success(function(data) {
            if(typeof data != 'undefined' && data != null
                    && data.truckPostList != 'undefined' && data.truckPostList != null
                    && data.truckPostList.details.length > 0){
                //console.log(JSON.stringify(data));
                $scope.index.truckPostList = data.truckPostList.details;
                $scope.truckPosting.nextItem = 1;
                $scope.truckPosts.push($scope.index.truckPostList[0]);
                $scope.truckPosting.timeOut($scope.truckPosting.nextItem);
            }else{
                $scope.index.truckPostListMessageAvailable = true;
                $scope.index.truckPostListMessage = "No data available";
                succesWarning($scope.index.truckPostListMessage, 'indexTruckPostListMessage');
                //console.log("No data available");
            }
        }).error(function(data) {
            $scope.index.truckPostListMessageAvailable = true;
            succesError(data.statusMsg, 'indexTruckPostListMessage');
        });

    $scope.loadPosts = [];
    $scope.loadPosting = {};
    $scope.loadPosting.animation = "slide-right";

    $scope.loadPosting.timeOut = function(index){
        $timeout(function(){
            $scope.loadPosts.pop();
            console.log("Current load post displayed:"+JSON.stringify($scope.index.loadPostList[$scope.loadPosting.nextItem]));
            if(index>$scope.index.loadPostList.length - 2){
                $scope.loadPosting.nextItem = 0;
            }else{
                $scope.loadPosting.nextItem++;
            }
            var load_post = $scope.index.loadPostList[$scope.loadPosting.nextItem];
            $timeout(function(){
                $scope.loadPosts.push(load_post);
                console.log("Next load post to display:"+JSON.stringify($scope.index.loadPostList[$scope.loadPosting.nextItem]));
                $scope.loadPosting.timeOut($scope.loadPosting.nextItem);
            }, $scope.itemLeaveDelay);

        }, $scope.itemDuration);
    };

    $scope.index.loadPostList = [];
    $http.post("/TransEarth/getLoadPostingsSummary", {filters : []})
        .success(function(data) {
            if(typeof data != 'undefined' && data != null
                && data.loadPostList != 'undefined' && data.loadPostList != null
                && data.loadPostList.details.length > 0){
               // console.log(JSON.stringify(data));
                $scope.index.loadPostList = data.loadPostList.details;
                $scope.loadPosting.nextItem = 1;
                $scope.loadPosts.push($scope.index.loadPostList[0]);
                $scope.loadPosting.timeOut($scope.loadPosting.nextItem);
            }else{
                $scope.index.loadPostListMessageAvailable = true;
                $scope.index.loadPostListShow = false;
                $scope.index.loadPostListMessage = "No data available";
                succesWarning($scope.index.loadPostListMessage, 'indexLoadPostListMessage');
                //console.log("No data available");
            }
        }).error(function(data) {
            $scope.index.loadPostListMessageAvailable = true;
            $scope.index.loadPostListShow = false;
            succesError(data.statusMsg, 'indexLoadPostListMessage');
        });
    //$location.url('/TransEarth/forms');

}
