/**
 * Created by Santhosh on 5/31/14.
 */

var Count = require('../models/Count').Count;
var _ = require("lodash");
var moment = require("moment");

exports.getCounts = function(req,res){

    console.log("getCounts started");

    /*Count.aggregate([
        {
            $match : {"_id" : "counts"}
        }
    ], subCounts);*/
            //507f191e810c19729de860ea
    var id = "COUNTS";
    Count.find({"type" : id}, subCounts);
    //Lookup.find({_id : "counts"}, subCounts);

    function subCounts(err, data){
        if(!err){
            /*Count.update(
                {"type" : id},
                {
                    $set : {
                        tripsCompleted : 1,
                        kmsTravelled : 2,
                        tonsMoved : 3
                    }
                },
                test
            );
            function test(err1, data1){*/
                console.log('getCounts Data :' +JSON.stringify(data));
                res.json(200, data);
            //}
        }else{
            console.log('getCounts Failed :' +JSON.stringify(err));
            var jsonResponse = {'statusMsg' : 'Counts Fetch failed!'+err};
            res.json(500, jsonResponse);
        }
    }
};

exports.updateCounts = function(req,res){

    console.log("updateCounts started");
    if(req.body.trips == "undefined" || req.body.trips == null
        || req.body.kms == "undefined" || req.body.kms == null
        || req.body.tons == "undefined" || req.body.tons == null ){
        return res.json(500, {statusMsg : "Inputs not received correctly"});
    }
    console.log("Trips: "+req.body.trips);
    console.log("KMs: "+req.body.kms);
    console.log("Tons: "+req.body.tons);

    var id = "counts";
    Count.update(
        {type : "COUNTS"},
        {
            $set : {
                tripsCompleted : req.body.trips,
                kmsTravelled : req.body.kms,
                tonsMoved : req.body.tons
            }
        },
        subUpdateCounts
    );

    function subUpdateCounts(err, data){
        if(!err){
            console.log('Counts Updated :' +JSON.stringify(data));
            res.json(200, {statusMsg:'Counts Updated Successfully'});
        }else{
            console.log('Counts Update failed :' +JSON.stringify(err));
            var jsonResponse = {'statusMsg' : 'Counts update failed!'+err};
            res.json(500, jsonResponse);
        }
    }
};
