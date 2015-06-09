/**
 * Created by Santhosh on 05/08/2015.
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema;
//var auditLog = require('audit-log');

//auditLog.addTransport("console");
//auditLog.addTransport("mongoose", {connectionString: "mongodb://localhost:27017/PET", debug: true});
var trackerSchema = new Schema({
    pagesNavigated : [{type: String, trim: true}],
    user_type : {type: String, required: true, trim: true}
}, {"_id" : false});

var sessionSchema = new Schema({
    username : {type: String, required: true, trim: true},
    sessionStartTime : {type: Date, required: true, trim: true},
    sessionEndTime : {type: Date, trim: true},
    sessionTracker : {
        pagesNavigated : [{type: String, trim: true}],
        user_type : {type: String, required: true, trim: true}
    }
});

var session = mongoose.model('Session', sessionSchema, 'Session');
/*
 var pluginFn = auditLog.getPlugin('mongoose', {modelName:'Truck', namePath:'truckId', debug: false, storeDoc:['update','save']}); // setup occurs here
 applicationSchema.plugin(pluginFn.handler); // .handler is the pluggable function for mongoose in this case
 */
module.exports = {
    Session : session
};
