/**
 * Created by 115937 on 3/26/14.
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var lookupSchema = new Schema({ any: Schema.Types.Mixed });

var lookup = mongoose.model('Lookup', lookupSchema, 'Lookup');

module.exports = {
    Lookup : lookup
};
