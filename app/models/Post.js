/**
 * Created by Santhosh on 05/08/2015.
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema;
//var auditLog = require('audit-log');

//auditLog.addTransport("console");
//auditLog.addTransport("mongoose", {connectionString: "mongodb://localhost:27017/PET", debug: true});
var postSchema = new Schema({
    truck_post : {
        availability : {
            date : {type: Date, required: true, trim: true},
            "pickup_location" : { type: String, required: true, trim : true},
            "delivery_location" : { type: String, required: true, trim : true}
        },
        minimum_load : {
            quantity : {type: Number, required: true, trim: true},
            unit : {type: String, required: true, trim: true}
        },
        maximum_load : {
            quantity : {type: Number, required: true, trim: true},
            unit : {type: String, required: true, trim: true}
        }
    },
    load_handling : {
        status : { type: String, required: true, trim : true},
        //owned_by : { type: String, trim: true},
        minimum_load : {
            metric : {type: Number, trim: true},
            unit : {type: String, trim: true}
        },
        maximum_load : {
            metric : {type: Number, required: true, trim: true},
            unit : {type: String, required: true, trim: true}
        },
        material :{
            type : {type: String, required: true, trim: true}
        },
        assignedAt : {type: Date, required: true, trim: true},
        assignedBy : {
            username: { type: String, required: true},
            email: { type: String},
            display_name : {type: String},
            first_name: { type: String, required: true},
            last_name: { type: String, required: true},
            company_name: { type: String, required: true},
            user_type : {type: String, required: true},
            contact : [{ type: Number, required: true}]
        }
    },
    pickup : {
        date : {type: Date, required: true, trim: true},
        address : {
            line1 : { type: String, required: true, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, required: true, trim : true}
        },
        alt_address : {
            line1 : { type: String, required: true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, required: true, trim : true}
        }
    },
    delivery : {
        date : {type: Date, required: true, trim: true},
        address : {
            line1 : { type: String, required: true, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, required: true, trim : true}
        },
        alt_address : {
            line1 : { type: String, required: true, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, required: true, trim : true}
        }
    }
});

module.exports = {
    Post : postSchema
};
