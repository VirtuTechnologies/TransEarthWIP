/**
 * Created by Santhosh on 05/08/2015.
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema;
//var auditLog = require('audit-log');

//auditLog.addTransport("console");
//auditLog.addTransport("mongoose", {connectionString: "mongodb://localhost:27017/PET", debug: true});
var postSchema = new Schema({
    status : { type: String, required: true, trim : true},
    truck_post : {
        availability : {
            "schedule" : { type: String, required: true, trim : true},
            date : {type: Date, trim: true},
            "start_date" : {type: Date, trim: true},
            "end_date" : {type: Date, trim: true},
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
        //owned_by : { type: String, trim: true},
        minimum_load : {
            quantity : {type: Number, trim: true},
            unit : {type: String, trim: true}
        },
        maximum_load : {
            quantity : {type: Number, required: true, trim: true},
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
            line1 : { type: String, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, trim : true}
        },
        alt_address : {
            line1 : { type: String, trim: true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, trim : true}
        }
    },
    delivery : {
        date : {type: Date, required: true, trim: true},
        address : {
            line1 : { type: String, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, trim : true}
        },
        alt_address : {
            line1 : { type: String, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, required: true, trim : true},
            state : { type: String, required: true, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, trim : true}
        }
    },
    auditLog : {
        createdUserId : {type: String, trim: true},
        lastUpdatedUserId : {type: String, trim: true},
        createdTime : {type: Date, trim: true, default : new Date()},
        lastUpdatedTime : {type: Date, trim: true, default : new Date()}
    }
});

var truckSchema = new Schema({
    truck_id : { type: Number, required: true, trim : true, unique : true},
    current_tracker : {
        time : {type: Date, required: true, trim: true},
        user : {
            username: { type: String, required: true},
            email: { type: String},
            first_name: { type: String, required: true},
            last_name: { type: String, required: true},
            display_name : {type: String},
            company_name: { type: String, required: true},
            user_type : {type: String, required: true},
            contact : [{ type: Number, required: true}]
        }
    },
    owner : {
        details_same_as_user : { type: Boolean, trim : true, default : false},
        first_name: { type: String, trim : true},
        last_name: { type: String, trim : true},
        address : {
            line1 : { type: String, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, trim : true},
            state : { type: String, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, trim : true}
        },
        contact : { type: Number, trim : true}
    },
    company : {
        details_same_as_user : { type: Boolean, trim : true, default : false},
        name: { type: String, trim : true},
        address_same_as_owner : { type: Boolean, trim : true, default : false},
        contact_same_as_owner : { type: Boolean, trim : true, default : false},
        address : {
            line1 : { type: String, trim : true},
            line2 : { type: String, trim : true},
            line3 : { type: String, trim : true},
            city : { type: String, trim : true},
            state : { type: String, trim : true},
            country : { type: String, trim : true},
            pincode : { type: Number, trim : true}
        },
        contact : { type: Number, trim : true}
    },
    truck_details : {
        type : {type: String, required: true, trim: true},
        typeDescription : {type: String, trim: true},
        make : {type: String, required: true, trim: true},
        model : {type: String, required: true, trim: true},
        reg_no : {type: String, required: true, trim: true},
        isActive : {type: Boolean, required: true, trim: true},
        minimum_load : {
            quantity : {type: Number, trim: true},
            unit : {type: String, trim: true}
        },
        maximum_load : {
            quantity : {type: Number, required: true, trim: true},
            unit : {type: String, required: true, trim: true}
        },
        discontinueReason : {type: String, trim: true}
    },
    posts : [postSchema],
    auditLog : {
        createdUserId : {type: String, trim: true},
        lastUpdatedUserId : {type: String, trim: true},
        createdTime : {type: Date, trim: true},
        lastUpdatedTime : {type: Date, trim: true}
    }
});

var truck = mongoose.model('Truck', truckSchema, 'Truck');
/*
var pluginFn = auditLog.getPlugin('mongoose', {modelName:'Truck', namePath:'truckId', debug: false, storeDoc:['update','save']}); // setup occurs here
applicationSchema.plugin(pluginFn.handler); // .handler is the pluggable function for mongoose in this case
*/
module.exports = {
    Truck : truck
};

