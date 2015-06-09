/**
 * Created by Santhosh on 5/31/14.
 */

var Lookup = require('../models/Lookup').Lookup;
var _ = require("lodash");
var moment = require("moment");

exports.getMaterialTypes = function(req,res){

    console.log("getMaterialTypes started");
    var materialList = [];
    var returnData = {
        materialList : []
    };

    Lookup.aggregate([
        {
            $match : {"_id" : "materials"}
        }
    ], subMaterials);

    function subMaterials(err, data){
        if(!err){
            console.log('Data :' +JSON.stringify(data));
            if(typeof data != "undefined" && data.length > 0){
                if(typeof data[0].list != "undefined" && data[0].list != null){
                    //console.log('Lookup Data Rendered - '+JSON.stringify(data));
                    res.json(200, data[0].list);
                }else{
                    var jsonResponse = {'statusMsg' : ' Materials Fetch failed - List null'};
                    res.json(500, jsonResponse);
                }
            }else{
                var jsonResponse = {'statusMsg' : ' Materials List empty'};
                res.json(500, jsonResponse);
            }
        }
        else{
            var jsonResponse = {'statusMsg' : ' Truck Fetch failed!'+err};
            res.json(500, jsonResponse);
        }
    }
};

exports.getTruckTypes = function(req,res){

    console.log("getTruckTypes started");
    var truckTypeList = [];
    var returnData = {
        truckTypeList : []
    };

    Lookup.aggregate([
        {
            $match : {"_id" : "trucktypes"}
        }
    ], subTruckTypes);

    function subTruckTypes(err, data){
        if(!err){
            console.log('Truck Types Data :' +JSON.stringify(data));
            if(typeof data != "undefined" && data.length > 0){
                if(typeof data[0].list != "undefined" && data[0].list != null){
                    //console.log('Lookup Data Rendered - '+JSON.stringify(data));
                    res.json(200, data[0].list);
                }else{
                    var jsonResponse = {'statusMsg' : ' Truck Types Fetch failed - List null'};
                    res.json(500, jsonResponse);
                }
            }else{
                var jsonResponse = {'statusMsg' : ' Truck Types List empty'};
                res.json(500, jsonResponse);
            }
        }
        else{
            var jsonResponse = {'statusMsg' : ' Truck Types Fetch failed!'+err};
            res.json(500, jsonResponse);
        }
    }
};

exports.getTruckMakes = function(req,res){

    console.log("getTruckMakes started");
    var truckMakeList = [];
    var returnData = {
        truckMakeList : []
    };

    Lookup.aggregate([
        {
            $match : {"_id" : "truckmakes"}
        }
    ], subTruckMakes);

    function subTruckMakes(err, data){
        if(!err){
            console.log('Truck Makes Data :' +JSON.stringify(data));
            if(typeof data != "undefined" && data.length > 0){
                if(typeof data[0].list != "undefined" && data[0].list != null){
                    //console.log('Lookup Data Rendered - '+JSON.stringify(data));
                    res.json(200, data[0].list);
                }else{
                    var jsonResponse = {'statusMsg' : ' Truck Makes Fetch failed - List null'};
                    res.json(500, jsonResponse);
                }
            }else{
                var jsonResponse = {'statusMsg' : ' Truck Makes List empty'};
                res.json(500, jsonResponse);
            }
        }
        else{
            var jsonResponse = {'statusMsg' : ' Truck Makes Fetch failed!'+err};
            res.json(500, jsonResponse);
        }
    }
};
