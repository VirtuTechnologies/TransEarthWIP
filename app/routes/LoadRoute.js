/**
 * Created by Santhosh on 2015.
 */

var Load = require('../models/Load').Load;
var _ = require("lodash");
var moment = require("moment");

exports.getLoadListSummary = function(req,res){
    console.log("getLoadListSummary started");
    var loadPostList = [];
    var returnData = {
        loadPostList : {
            headers : [],
            details : []
        }
    };

    var colDef = {};
    /*colDef.field = 'assign';
     colDef.displayName = "Assign";
     //colDef.headerClass = 'gridHeader';
     colDef.resizable = true;
     colDef.width = '12%';
     returnData.loadList.headers.push(colDef);*/

    colDef = {};
    colDef.field = 'source';
    colDef.displayName = "From";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '21%';
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'destination';
    colDef.displayName = "To";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '21%';
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'load';
    colDef.displayName = "Load";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '17%';
    ///colDef.cellClass = 'gridCurrentMonth';
    /*colDef.cellTemplate = '<div style="text-align:center;">';
    colDef.cellTemplate += '    <div class="ngCellText" style="color:grey;">';
    colDef.cellTemplate += '        <div class="ngCellText" >';
    colDef.cellTemplate += "            <div ng-class=\"{'ngRed': row.getProperty(col.field) > 200 }\">{{row.getProperty(col.field)}}";
    //colDef.cellTemplate += "                {{row.getProperty(col.field)}}";
    colDef.cellTemplate += '            </div>';
    colDef.cellTemplate += '        </div>';
    colDef.cellTemplate += '    </div>';
    colDef.cellTemplate += '</div>';*/
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'materialType';
    colDef.displayName = "Material";
    //colDef.headerClass = 'gridHeader';
    colDef.width = '20%';
    colDef.resizable = true;
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'pickupDate';
    colDef.displayName = "Pickup Date";
    //colDef.headerClass = 'gridHeader';
    colDef.width = '20%';
    colDef.resizable = true;
    returnData.loadPostList.headers.push(colDef);

    var currentDate = new Date();
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);

    Load.find(
        {
            "isActive" : true,
            "load.pickup.date" : {"$gte":currentDate}
        },
        {
            "_id" : true,
            "load.pickup.address.city" : true,
            "load.delivery.address.city" : true,
            "load.quantity" : true,
            "load.unit" : true,
            "load.material.type" : true,
            "load.pickup.date" : true,
            "auditLog.createdTime": true
        }
    ).sort({"auditLog.createdTime":-1}).limit(5).exec(subLoadSummary);

    function subLoadSummary(err, data){
        if(!err){
            //console.log('Data :' +JSON.stringify(data));
            for(var i=0;i<data.length;i++){
                var item = data[i];
                loadPostList.push({
                    //assign : "NA",
                    load_id : item._id,
                    source : item.load.pickup.address.city,
                    destination : item.load.delivery.address.city,
                    load : item.load.quantity + " " + item.load.unit,
                    materialType : item.load.material.type,
                    pickupDate : moment(item.load.pickup.date).format("Do MMM YYYY")
                })
            }
            returnData.loadPostList.details = loadPostList;
            //console.log('Load data length=' + returnData.loadList.details.length);
            console.log('Load Data Rendered - '+JSON.stringify(returnData));
            res.json(200,returnData);
        }
        else{
            var jsonResponse = {'statusMsg' : ' Load Fetch failed!'+err};
            console.log('Load Data Fetch Error - '+JSON.stringify(jsonResponse));
            res.json(500, jsonResponse);
        }
    }
};

exports.searchLoadList = function(req,res){

    console.log("searchLoadList started");
    var loadPostList = [];
    var returnData = {
        loadPostList : {
            headers : [],
            details : []
        }
    };

    var colDef = {};
    colDef.field = 'action';
    colDef.displayName = "Action";
    //colDef.headerClass = 'gridHeader';
    colDef.cellTemplate = '<div style="text-align:center;">';
    colDef.cellTemplate += '    <div class="ngCellText" style="color:grey;">';
    colDef.cellTemplate += '        <div class="ngCellText" >';
    colDef.cellTemplate += '            <a href="#" ng-click="viewLoad(row.entity.load_id)">';
    colDef.cellTemplate += '                <i class="glyphicon glyphicon glyphicon-eye-open custom-green-basic adjust-size"></i>';
    colDef.cellTemplate += '            </a>';
    colDef.cellTemplate += '        </div>';
    colDef.cellTemplate += '    </div>';
    colDef.cellTemplate += '</div>';
    colDef.resizable = true;
    colDef.width = '7%';
    colDef.cellClass = "small-font";
    colDef.headerClass = "small-font";
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'source';
    colDef.displayName = "From";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '20%';
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'destination';
    colDef.displayName = "To";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '20%';
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'load';
    colDef.displayName = "Load";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '17%';
    ///colDef.cellClass = 'gridCurrentMonth';
    /*colDef.cellTemplate = '<div style="text-align:center;">';
    colDef.cellTemplate += '    <div class="ngCellText" style="color:grey;">';
    colDef.cellTemplate += '        <div class="ngCellText" >';
    colDef.cellTemplate += "            <div ng-class=\"{'ngRed': row.getProperty(col.field) > 200 }\">{{row.getProperty(col.field)}}";
    //colDef.cellTemplate += "                {{row.getProperty(col.field)}}";
    colDef.cellTemplate += '            </div>';
    colDef.cellTemplate += '        </div>';
    colDef.cellTemplate += '    </div>';
    colDef.cellTemplate += '</div>';*/
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'materialType';
    colDef.displayName = "Material";
    //colDef.headerClass = 'gridHeader';
    colDef.width = '18%';
    colDef.resizable = true;
    returnData.loadPostList.headers.push(colDef);

    colDef = {};
    colDef.field = 'pickupDate';
    colDef.displayName = "Pickup Date";
    //colDef.headerClass = 'gridHeader';
    colDef.width = '18%';
    colDef.resizable = true;
    returnData.loadPostList.headers.push(colDef);

    var filters = req.body.filters;

    if(typeof filters != "undefined" && filters.length > 0){
        //console.log("getLoadListSummary filters: "+JSON.stringify(filters));
        var searchParams = {};
        searchParams["isActive"] = true;
        if(typeof filters[0] != "undefined" && filters[0] != null && typeof filters[0].place != "undefined"
            && filters[0].place != null && filters[0].place != ""){
            //var fromRegex = "/^" + filters[0] + "$/i";
            //searchParams["locationCapableFrom"] = fromRegex;
            var fromPlace = filters[0].place;
            searchParams["load.pickup.address.city"] = fromPlace;
        }
        if(typeof filters[1] != "undefined" && filters[1] != null  && typeof filters[1].place != "undefined"
            && filters[1].place != null && filters[1].place != ""){
            //var toRegex = "/^" + filters[1] + "$/i";
            //searchParams["locationCapableTo"] = toRegex;
            var toPlace = filters[1].place;
            searchParams["load.delivery.address.city"] = toPlace;
        }
        if(typeof filters[2] != "undefined" && filters[2] != null && typeof filters[3] != "undefined" && filters[3] != null){
            var dateFilterRange = filters[2];
            var dateFilter = filters[3];
            console.log("moment().utc(dateFilter.availableOn).get('year') - "+moment().utc(dateFilter).get('year'));
            console.log("moment().utc(dateFilter.availableOn).get('month') - "+moment().utc(dateFilter).get('month'));
            console.log("moment().utc(dateFilter.availableOn).get('date') - "+moment().utc(dateFilter).get('date'));
            if(dateFilterRange == 1){
                searchParams["load.pickup.date"] = {
                    $gte: new Date(
                        moment().utc(dateFilter).get('year'),
                        moment().utc(dateFilter).get('month'),
                        moment().utc(dateFilter).get('date'),
                        0,
                        0,
                        0,
                        0
                    ),
                    $lt: new Date(
                        moment().utc(dateFilter).get('year'),
                        moment().utc(dateFilter).get('month'),
                        moment().utc(dateFilter).get('date') + 1,
                        0,
                        0,
                        0,
                        0
                    )
                };
            }else if(dateFilterRange == 2){
                searchParams["load.pickup.date"] = {
                    $gte: new Date(
                        moment(dateFilter).get('year'),
                        moment(dateFilter).get('month'),
                        moment(dateFilter).get('date'),
                        0,
                        0,
                        0,
                        0
                    )
                };
            }else{
                var jsonResponse = {'statusMsg' : ' Date Range Filter not valid'};
                res.json(500, jsonResponse);
            }
        }else{
            var jsonResponse = {'statusMsg' : ' Date Range Filter required'};
            res.json(500, jsonResponse);
        }
        if(typeof filters[4] != "undefined" && filters[4] != null && filters[4] != '') {
            var material = filters[4];
            searchParams["load.material.type"] = material;
        }
        console.log("getLoadList searchParams: "+JSON.stringify(searchParams));

        //Truck.find(searchParams, subTruckSummary);
        Load.aggregate(
            [
                {
                    $match :searchParams
                },
                {
                    $project:
                    {
                        year: { $year: "$load.pickup.date" },
                        month: { $month: "$load.pickup.date" },
                        date: { $dayOfMonth: "$load.pickup.date" },
                        //assign: "",
                        //truckName: "$truckName",
                        load_id: "$_id",
                        source: "$load.pickup.address.city",
                        destination: "$load.delivery.address.city",
                        loadQuantity: "$load.quantity",
                        loadUnit: "$load.unit",
                        materialType : "$load.material.type",
                        pickupDate: "$load.pickup.date"
                    }
                }
            ], subLoadSummary
        )
    }else{
        return res.json(500, {statusMsg : "Invalid or Empty Filters"});
    }

    function subLoadSummary(err, data){
        if(!err){
            //console.log('Data :' +JSON.stringify(data));
            for(var i=0;i<data.length;i++){
                var item = data[i];
                loadPostList.push({
                    assign : "NA",
                    load_id: item.load_id,
                    source : item.source,
                    destination : item.destination,
                    load : item.loadQuantity + " " + item.loadUnit,
                    materialType : item.materialType,
                    pickupDate : moment(item.pickupDate).format("Do MMM YYYY")
                })
            }
            returnData.loadPostList.details = loadPostList;
            //console.log('Load data length=' + returnData.loadList.details.length);
            console.log('Load Data Rendered - '+JSON.stringify(returnData));
            res.json(200,returnData);
        }
        else{
            var jsonResponse = {'statusMsg' : ' Load Fetch failed!'+err};
            console.log('Load Data Fetch Error - '+JSON.stringify(jsonResponse));
            res.json(500, jsonResponse);
        }
    }
};

exports.getMyLoadList = function(req,res){

    console.log("getMyLoadList started");
    var myLoadList = [];
    var returnData = {
        myLoadList : {
            headers : [],
            details : []
        }
    };

    var colDef = {};
    colDef.field = 'action';
    colDef.displayName = "Action";
    //colDef.headerClass = 'gridHeader';
    colDef.cellTemplate = '<div style="text-align:center;">';
    colDef.cellTemplate += '    <div class="ngCellText" style="color:grey;">';
    colDef.cellTemplate += '        <div class="ngCellText" >';
    colDef.cellTemplate += '            <a href="#" ng-click="editLoad(row.entity.load_id)">';
    colDef.cellTemplate += '                <i class="glyphicon glyphicon-pencil custom-blue-basic adjust-size"></i>';
    colDef.cellTemplate += '            </a>';
    colDef.cellTemplate += '            <a href="#" ng-click="removeLoad(row.entity.load_id, row.entity.source, row.entity.destination, row.entity.load, row.entity.materialType, row.entity.pickupDate)">';
    colDef.cellTemplate += '                <i class="glyphicon glyphicon-remove-sign custom-red-mid adjust-size"></i>';
    colDef.cellTemplate += '            </a>';
    colDef.cellTemplate += '            <a href="#" ng-click="viewLoad(row.entity.load_id)">';
    colDef.cellTemplate += '                <i class="glyphicon glyphicon glyphicon-eye-open custom-green-basic adjust-size"></i>';
    colDef.cellTemplate += '            </a>';
    colDef.cellTemplate += '        </div>';
    colDef.cellTemplate += '    </div>';
    colDef.cellTemplate += '</div>';
    colDef.resizable = true;
    colDef.width = '10%';
    colDef.cellClass = "small-font";
    colDef.headerClass = "small-font";
    returnData.myLoadList.headers.push(colDef);

    colDef = {};
    colDef.field = 'source';
    colDef.displayName = "From";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '20%';
    returnData.myLoadList.headers.push(colDef);

    colDef = {};
    colDef.field = 'destination';
    colDef.displayName = "To";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '20%';
    returnData.myLoadList.headers.push(colDef);

    colDef = {};
    colDef.field = 'load';
    colDef.displayName = "Load";
    //colDef.headerClass = 'gridHeader';
    colDef.resizable = true;
    colDef.width = '10%';
    ///colDef.cellClass = 'gridCurrentMonth';
    /*colDef.cellTemplate = '<div style="text-align:center;">';
     colDef.cellTemplate += '    <div class="ngCellText" style="color:grey;">';
     colDef.cellTemplate += '        <div class="ngCellText" >';
     colDef.cellTemplate += "            <div ng-class=\"{'ngRed': row.getProperty(col.field) > 200 }\">{{row.getProperty(col.field)}}";
     //colDef.cellTemplate += "                {{row.getProperty(col.field)}}";
     colDef.cellTemplate += '            </div>';
     colDef.cellTemplate += '        </div>';
     colDef.cellTemplate += '    </div>';
     colDef.cellTemplate += '</div>';*/
    returnData.myLoadList.headers.push(colDef);

    colDef = {};
    colDef.field = 'materialType';
    colDef.displayName = "Material";
    //colDef.headerClass = 'gridHeader';
    colDef.width = '19%';
    colDef.resizable = true;
    returnData.myLoadList.headers.push(colDef);

    colDef = {};
    colDef.field = 'pickupDate';
    colDef.displayName = "Pickup Date";
    //colDef.headerClass = 'gridHeader';
    colDef.width = '20%';
    colDef.resizable = true;
    returnData.myLoadList.headers.push(colDef);

    var currentDate = new Date();
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);

    var searchParams = {};
    searchParams["isActive"] = true;
    searchParams["load.pickup.date"] = {"$gte":currentDate};
    if(typeof req.session.user_profile != "undefined" && req.session.user_profile != null){
        searchParams["current_tracker.user.username"] = req.session.user_profile.username;
    }else{
        var jsonResponse = {'statusMsg' : ' Load Owner Details not reachable'};
        res.json(500, jsonResponse);
    }

    console.log("getMyLoad searchParams: "+JSON.stringify(searchParams));
    //Truck.find(searchParams, subTruckSummary);
    Load.aggregate(
        [
            {
                $match :searchParams
            },
            {
                $project:
                {
                    _id : 0,
                    load_id: "$_id",
                    //load_id: "$load_id",
                    source: "$load.pickup.address.city",
                    destination: "$load.delivery.address.city",
                    loadQuantity: "$load.quantity",
                    loadUnit: "$load.unit",
                    materialType : "$load.material.type",
                    pickupDate: "$load.pickup.date",
                    createdTime : "$auditLog.createdTime"
                }
            },
            {
                $sort : {
                    "createdTime":-1
                }
            }
        ], subMyLoad
    );

    function subMyLoad(err, data){
        if(!err){
            console.log('Data :' +JSON.stringify(data));
            for(var i=0;i<data.length;i++){
                var item = data[i];
                myLoadList.push({
                    load_id : item.load_id,
                    source : item.source,
                    destination : item.destination,
                    load : item.loadQuantity + " " + item.loadUnit,
                    materialType : item.materialType,
                    pickupDate : moment(item.pickupDate).format("Do MMM YYYY")
                })
            }
            returnData.myLoadList.details = myLoadList;
            //console.log('Load data length=' + returnData.loadList.details.length);
            console.log('Load Data Rendered - '+JSON.stringify(returnData));
            res.json(200,returnData);
        }
        else{
            var jsonResponse = {'statusMsg' : ' Load Fetch failed!'+err};
            console.log('Load Data Fetch Error - '+JSON.stringify(jsonResponse));
            res.json(500, jsonResponse);
        }
    }
};

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
exports.getLoadById = function(req, res){

    console.log("Inside getLoadById");
    var loadId = req.body.loadId;

    if(typeof loadId == "undefined" || loadId == null){
        return res.json(500, {"statusMsg" : "Cannot update load with Id undefined"});
    }else{
        Load.findOne({
            "_id" : ObjectId.fromString(loadId),
            "isActive" : true
        }, subGetLoadById);
    }

    function subGetLoadById(err, data){
        if(err){
            return res.json(500, {"statusMsg" : "Cannot find load with Id :"+JSON.stringify(err)});
        }else{
            console.log("Load found:"+JSON.stringify(data));
            return res.json(200, data);
        }
    }
};

exports.addLoad = function(req, res){

    console.log("Add Load started for "+JSON.stringify(req.session.user_profile));

    var input = req.body.load;
    console.log("Load to be added: "+JSON.stringify(input));

    if(typeof input == "undefined" || input == null){
        return res.json(500, {statusMsg:'Load Input invalid'});
    }
    /*if(typeof input.owner == "undefined" || input.owner == null
        || typeof input.owner.address == "undefined" || input.owner.address == null
        || typeof input.owner.address.mapLocation == "undefined" || input.owner.address.mapLocation == null
        || typeof input.owner.address.mapLocation.place == "undefined" || input.owner.address.mapLocation.place == null
        || input.owner.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Owner Location Details invalid'});
    }
    if(typeof input.company == "undefined" || input.company == null
        || typeof input.company.address == "undefined" || input.company.address == null
        || typeof input.company.address.mapLocation == "undefined" || input.company.address.mapLocation == null
        || typeof input.company.address.mapLocation.place == "undefined" || input.company.address.mapLocation.place == null
        || input.company.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Company Location Details invalid'});
    }*/
    if(typeof input.load == "undefined" || input.load == null
        || typeof input.load.pickup == "undefined" || input.load.pickup == null
        || typeof input.load.pickup.address == "undefined" || input.load.pickup.address == null
        || typeof input.load.pickup.address.mapLocation == "undefined" || input.load.pickup.address.mapLocation == null
        || typeof input.load.pickup.address.mapLocation.place == "undefined" || input.load.pickup.address.mapLocation.place == null
        || input.load.pickup.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Pickup Location Details invalid'});
    }
    if(typeof input.load == "undefined" || input.load == null
        || typeof input.load.delivery == "undefined" || input.load.delivery == null
        || typeof input.load.delivery.address == "undefined" || input.load.delivery.address == null
        || typeof input.load.delivery.address.mapLocation == "undefined" || input.load.delivery.address.mapLocation == null
        || typeof input.load.delivery.address.mapLocation.place == "undefined" || input.load.delivery.address.mapLocation.place == null
        || input.load.delivery.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Delivery Location Details invalid'});
    }

    var load = new Load({
        load_id : Math.floor((Math.random() * 10000) + 1),
        isActive : true,
        current_tracker : {
            time : new Date(),
            user : {
                username: req.session.user_profile.username,
                email: req.session.user_profile.email,
                first_name: req.session.user_profile.user_information.first_name,
                last_name: req.session.user_profile.user_information.last_name,
                display_name : req.session.user_profile.display_name,
                company_name: req.session.user_profile.user_information.company_name,
                user_type : req.session.user_profile.user_type,
                contact : req.session.user_profile.user_information.contact[0]
            }
        },
        /*owner : {
            details_same_as_user : input.owner.details_same_as_user,
            first_name: input.owner.first_name,
            last_name: input.owner.last_name,
            address : {
                line1 : input.owner.address.line1,
                line2 : input.owner.address.line2,
                //line3 : { type: String, trim : true},
                city : input.owner.address.mapLocation.place,
                state : input.owner.address.mapLocation.state,
                country : input.owner.address.mapLocation.country,
                pincode : input.owner.address.pincode
            },
            contact : input.owner.contact
        },
        company : {
            details_same_as_user : input.company.details_same_as_user,
            name: input.company.name,
            address_same_as_owner : input.company.address_same_as_owner,
            contact_same_as_owner : input.company.contact_same_as_owner,
            address : {
                line1 : input.company.address.line1,
                line2 : input.company.address.line2,
                //line3 : { type: String, trim : true},
                city : input.company.address.mapLocation.place,
                state : input.company.address.mapLocation.state,
                country : input.company.address.mapLocation.country,
                pincode : input.company.address.pincode
            },
            contact : input.company.contact
        },*/
        load : {
            quantity : input.load.quantity,
            unit : "Tons",
            material :{
                type : input.load.material.type,
                typeDescription : input.load.material.typeDescription
            },
            preferredTruck :{
                type : input.load.preferredTruck.type,
                typeDescription : input.load.preferredTruck.typeDescription
            },
            status : "OPEN",
            pickup : {
                date : input.load.pickup.date,
                //address_same_as_owner : input.load.pickup.address_same_as_owner,
                address : {
                    line1 : input.load.pickup.address.line1,
                    line2 : input.load.pickup.address.line2,
                    //line3 : { type: String, trim : true},
                    city : input.load.pickup.address.mapLocation.place,
                    state : input.load.pickup.address.mapLocation.state,
                    country : input.load.pickup.address.mapLocation.country,
                    pincode : input.load.pickup.address.pincode
                },
                contact : input.load.pickup.contact,
                alt_address : {
                    line1 : input.load.pickup.address.line1,
                    //line2 : input.load.pickup.address.line2,
                    //line3 : { type: String, trim : true},
                    city : input.load.pickup.address.mapLocation.place,
                    state : input.load.pickup.address.mapLocation.state,
                    country : input.load.pickup.address.mapLocation.country,
                    pincode : input.load.pickup.address.pincode
                }
            },
            delivery : {
                //date : input.load.delivery.date,
                //address_same_as_owner : input.load.delivery.address_same_as_owner,
                address : {
                    line1 : input.load.delivery.address.line1,
                    //line2 : input.load.delivery.address.line2,
                    //line3 : { type: String, trim : true},
                    city : input.load.delivery.address.mapLocation.place,
                    state : input.load.delivery.address.mapLocation.state,
                    country : input.load.delivery.address.mapLocation.country,
                    pincode : input.load.delivery.address.pincode
                },
                contact : input.load.delivery.contact,
                alt_address : {
                    line1 : input.load.delivery.address.line1,
                    //line2 : input.load.delivery.address.line2,
                    //line3 : { type: String, trim : true},
                    city : input.load.delivery.address.mapLocation.place,
                    state : input.load.delivery.address.mapLocation.state,
                    country : input.load.delivery.address.mapLocation.country,
                    pincode : input.load.delivery.address.pincode
                }
            }
        },
        auditLog : {
            createdUserId : req.session.user_profile.username,
            lastUpdatedUserId : req.session.user_profile.username,
            createdTime : new Date(),
            lastUpdatedTime : new Date()
        }
    });

    console.log("Before Save Load");
    load.save(subSaveLoad);

    function subSaveLoad(err1){
        console.log("Save Load Sub method");
        if(err1){
            console.log('Load save failed - '+err1);
            res.json(500, {statusMsg:'Load save failed - '+err1});
        }else{
            res.json(200, {statusMsg:'Load save Success'});
        }
    }
};

exports.editLoad = function(req, res){

    console.log("Edit Load started");
    var input = req.body.load;
    console.log("Edit Load input:"+input);
    console.log("Edit Load input:"+JSON.stringify(input));
    if(typeof input == "undefined" || input == null){
        return res.json(500, {statusMsg:'Load Input invalid'});
    }
    if(typeof input._id == "undefined" || input._id == null
        || typeof input.load_id == "undefined" || input.load_id == null){
        return res.json(500, {statusMsg:'Empty Load ID passed - Stopping Hack Updates'});
    }
    /*if(typeof input.owner == "undefined" || input.owner == null
        || typeof input.owner.address == "undefined" || input.owner.address == null
        || typeof input.owner.address.mapLocation == "undefined" || input.owner.address.mapLocation == null
        || typeof input.owner.address.mapLocation.place == "undefined" || input.owner.address.mapLocation.place == null
        || input.owner.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Owner Location Details invalid'});
    }
    if(typeof input.company == "undefined" || input.company == null
        || typeof input.company.address == "undefined" || input.company.address == null
        || typeof input.company.address.mapLocation == "undefined" || input.company.address.mapLocation == null
        || typeof input.company.address.mapLocation.place == "undefined" || input.company.address.mapLocation.place == null
        || input.company.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Company Location Details invalid'});
    }*/
    if(typeof input.load == "undefined" || input.load == null
        || typeof input.load.pickup == "undefined" || input.load.pickup == null
        || typeof input.load.pickup.address == "undefined" || input.load.pickup.address == null
        || typeof input.load.pickup.address.mapLocation == "undefined" || input.load.pickup.address.mapLocation == null
        || typeof input.load.pickup.address.mapLocation.place == "undefined" || input.load.pickup.address.mapLocation.place == null
        || input.load.pickup.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Pickup Location Details invalid'});
    }
    if(typeof input.load == "undefined" || input.load == null
        || typeof input.load.delivery == "undefined" || input.load.delivery == null
        || typeof input.load.delivery.address == "undefined" || input.load.delivery.address == null
        || typeof input.load.delivery.address.mapLocation == "undefined" || input.load.delivery.address.mapLocation == null
        || typeof input.load.delivery.address.mapLocation.place == "undefined" || input.load.delivery.address.mapLocation.place == null
        || input.load.delivery.address.mapLocation.place == ""){
        return res.json(500, {statusMsg:'Load Delivery Location Details invalid'});
    }
    console.log("Load to be edited: "+JSON.stringify(input));

    Load.findOne({
        "_id" : ObjectId.fromString(input._id),
        "isActive" : true
    }, subValidLoadById);

    function subValidLoadById(err, data){
        if(err){
            console.log("Load found for update error:"+JSON.stringify(err));
            return res.json(500, {"statusMsg" : "Cannot find load with Id :"+JSON.stringify(err)});
        }else{
            console.log("Load found for update:"+JSON.stringify(data));
            //return res.json(200, data);
            updateLoad();
        }
    }

    function updateLoad(){

        console.log("Updating found load: "+input._id);
        Load.update(
            { _id : input._id },
            { $set:
                {
                    current_tracker : {
                        time : new Date(),
                        user : {
                            username: req.session.user_profile.username,
                            email: req.session.user_profile.email,
                            first_name: req.session.user_profile.user_information.first_name,
                            last_name: req.session.user_profile.user_information.last_name,
                            display_name : req.session.user_profile.display_name,
                            company_name: req.session.user_profile.user_information.company_name,
                            user_type : req.session.user_profile.user_type,
                            contact : req.session.user_profile.user_information.contact[0]
                        }
                    },
                    /*owner : {
                        details_same_as_user : input.owner.details_same_as_user,
                        first_name: input.owner.first_name,
                        last_name: input.owner.last_name,
                        address : {
                            line1 : input.owner.address.line1,
                            //line2 : input.owner.address.line2,
                            //line3 : { type: String, trim : true},
                            city : input.owner.address.mapLocation.place,
                            state : input.owner.address.mapLocation.state,
                            country : input.owner.address.mapLocation.country,
                            pincode : input.owner.address.pincode
                        },
                        contact : input.owner.contact
                    },
                    company : {
                        details_same_as_user : input.company.details_same_as_user,
                        name: input.company.name,
                        address_same_as_owner : input.company.address_same_as_owner,
                        contact_same_as_owner : input.company.contact_same_as_owner,
                        address : {
                            line1 : input.company.address.line1,
                            //line2 : input.company.address.line2,
                            //line3 : { type: String, trim : true},
                            city : input.company.address.mapLocation.place,
                            state : input.company.address.mapLocation.state,
                            country : input.company.address.mapLocation.country,
                            pincode : input.company.address.pincode
                        },
                        contact : input.company.contact
                    },*/
                    load : {
                        quantity : input.load.quantity,
                        unit : "Tons",
                        material :{
                            type : input.load.material.type,
                            typeDescription : input.load.material.typeDescription
                        },
                        preferredTruck :{
                            type : input.load.preferredTruck.type,
                            typeDescription : input.load.preferredTruck.typeDescription
                        },
                        status : "OPEN",
                        pickup : {
                            date : input.load.pickup.date,
                            //address_same_as_owner : input.load.pickup.address_same_as_owner,
                            address : {
                                line1 : input.load.pickup.address.line1,
                                //line2 : input.load.pickup.address.line2,
                                city : input.load.pickup.address.mapLocation.place,
                                state : input.load.pickup.address.mapLocation.state,
                                country : input.load.pickup.address.mapLocation.country,
                                pincode : input.load.pickup.address.pincode
                            },
                            contact : input.load.pickup.contact,
                            alt_address : {
                                line1 : input.load.pickup.address.line1,
                                //line2 : input.load.pickup.address.line2,
                                //line3 : { type: String, trim : true},
                                city : input.load.pickup.address.mapLocation.place,
                                state : input.load.pickup.address.mapLocation.state,
                                country : input.load.pickup.address.mapLocation.country,
                                pincode : input.load.pickup.address.pincode
                            }
                        },
                        delivery : {
                            //date : input.load.delivery.date,
                            //address_same_as_owner : input.load.delivery.address_same_as_owner,
                            address : {
                                line1 : input.load.delivery.address.line1,
                                //line2 : input.load.delivery.address.line2,
                                //line3 : { type: String, trim : true},
                                city : input.load.delivery.address.mapLocation.place,
                                state : input.load.delivery.address.mapLocation.state,
                                country : input.load.delivery.address.mapLocation.country,
                                pincode : input.load.delivery.address.pincode
                            },
                            contact : input.load.delivery.contact,
                            alt_address : {
                                line1 : input.load.delivery.address.line1,
                                //line2 : input.load.delivery.address.line2,
                                //line3 : { type: String, trim : true},
                                city : input.load.delivery.address.mapLocation.place,
                                state : input.load.delivery.address.mapLocation.state,
                                country : input.load.delivery.address.mapLocation.country,
                                pincode : input.load.delivery.address.pincode
                            }
                        }
                    },
                    auditLog : {
                        lastUpdatedUserId : req.session.user_profile.username,
                        lastUpdatedTime : new Date()
                    }
                }
            },
            subUpdateLoad
        );
    }

    function subUpdateLoad(err1){
        console.log("Update Load Sub method");
        if(err1){
            console.log('Load update failed - '+err1);
            res.json(500, {statusMsg:'Load Update Failed - '+err1});
        }else{
            res.json(200, {statusMsg:'Load Updated Successfully'});
        }
    }
};

exports.removeLoad = function(req, res){

    console.log("Remove Load started for "+JSON.stringify(req.session.user_profile));

    var input = req.body.load;

    if(typeof input == "undefined" || input == null){
        return res.json(500, {statusMsg:'Load Input invalid'});
    }
    if(typeof input._id == "undefined" || input._id == null){
        return res.json(500, {statusMsg:'Empty Load ID passed - Stopping Hack Removes'});
    }

    Load.findOne({
        "_id" : ObjectId.fromString(input._id)
    }, subValidLoadById);

    function subValidLoadById(err, data){
        if(err){
            console.log("Load found for remove error:"+JSON.stringify(err));
            return res.json(500, {"statusMsg" : "Cannot find Load with Id :"+JSON.stringify(err)});
        }else{
            console.log("Load found for remove:"+JSON.stringify(data));
            //return res.json(200, data);
            removeLoad();
        }
    }

    function removeLoad(){

        console.log("Removing found Load: "+input._id);
        Load.update(
            { _id : input._id },
            { $set:
                {
                    "isActive" : false
                }
            },
            subRemoveLoad
        );
    }

    function subRemoveLoad(err1){
        console.log("Remove Load Sub method");
        if(err1){
            console.log('Load remove failed - '+err1);
            res.json(500, {statusMsg:'Load Remove Failed - '+JSON.stringify(err1)});
        }else{
            res.json(200, {statusMsg:'Load Removed Successfully'});
        }
    }
};