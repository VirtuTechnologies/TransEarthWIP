/**
 * Created by Santhosh on 5/31/14.
 */

var User = require("../models/User").User;
var _ = require("lodash");
var moment = require("moment");

exports.createUser = function(req, res){

    console.log('Create User Started:'+JSON.stringify(req.body.user));
    var jsonObj = req.body.user;
    //var user = req.session.user_profile;

    if(typeof jsonObj == "undefined" || jsonObj == null){
        return res.json(500, {statusMsg : "Empty User details passed"});
    }

    User.findOne({username : jsonObj.username}, function (err, user) {
        if(err){
            return res.json(500, {statusMsg:'User registration failed - '+err});
        }
        if(!user){
            saveUser();
        }else{
            console.log("User already exists and force fail registration: "+JSON.stringify(user));
            return res.json(500, {statusMsg:'Username already exists'});
        }
    });

    function saveUser(){

        if(typeof jsonObj.mapLocation == "undefined" || jsonObj.mapLocation == null
            || jsonObj.mapLocation.place == "" || jsonObj.mapLocation.state == "" || jsonObj.mapLocation.country == "" ){
            return res.json(500, {statusMsg : "Location is not valid. Please correct"});
        }

        var user = new User({
            username: jsonObj.username,
            //email: jsonObj.username,
            password: jsonObj.password,
            display_name : jsonObj.display_name,
            user_type : jsonObj.user_type,
            user_information : {
                first_name: jsonObj.first_name,
                last_name: jsonObj.last_name,
                company_name: jsonObj.company_name,
                address : {
                    line1 : jsonObj.line1,
                    line2 : jsonObj.line2,
                    line3 : jsonObj.line3,
                    city : jsonObj.mapLocation.place,
                    state : jsonObj.mapLocation.state,
                    country : jsonObj.mapLocation.country,
                    pincode : jsonObj.pincode
                },
                contact : [jsonObj.contact]
            },
            //accessToken: { type: String }, // Used for Remember Me
            //type:{type: String,required: true},
            status : "Active",
            encrypt : false
        });

        console.log('User to be loaded: '+JSON.stringify(user));
        user.save(subSaveUser);
    }

    function subSaveUser(err1){
        if(err1){
            console.log('USer save failed - '+err1);
            res.json(500, {statusMsg:'User save failed - '+err1});
        }else{
            res.json(200, {statusMsg:'User save Success'});
        }
    }
};

exports.findUser = function(req, res){

    console.log('Find User Started:'+JSON.stringify(req.body.user));
    var jsonObj = req.body.user;
    //var user = req.session.user_profile;

    if(typeof jsonObj == "undefined" || jsonObj == null){
        return res.json(500, {statusMsg : "Empty User details passed"});
    }

    User.findOne({username : jsonObj.username}, function (err, user) {
        if(err){
            return res.json(500, {statusMsg:'Chekcing User existence failed - '+err});
        }
        if(!user){
            saveUser();
        }else{
            console.log("User already exists and force fail registration: "+JSON.stringify(user));
            return res.json(500, {statusMsg:'Username already exists'});
        }
    });
};

