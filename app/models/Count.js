/**
 * Created by Santhosh on 05/08/2015.
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema;
//var auditLog = require('audit-log');

//auditLog.addTransport("console");
//auditLog.addTransport("mongoose", {connectionString: "mongodb://localhost:27017/PET", debug: true});
var countSchema = new Schema({
    type : { type: String, required: true, trim : true},
    tripsCompleted : {type: String, required: true, trim : true},
    kmsTravelled : {type: String, required: true, trim : true},
    tonsMoved : {type: String, required: true, trim : true}
});

var count = mongoose.model('Count', countSchema, 'Count');

module.exports = {
    Count : count
};
