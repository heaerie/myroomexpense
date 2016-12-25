/* Generated from GPASSOV002.sql by n.js  Don't change */
/* All copyrights © 2016 Heaerie Global solutions (P) Ltd.India  */
 var GPASSO_PAGE005MT  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
, pageKey: { type: String, unique: false, required: false, default: ''  } 
, pageTitle: { type: String, unique: false, required: false, default: ''  } 
, dispOrder: { type: Number, unique: false, required: false, default: ''  } 
});

 GPASSO_PAGE005MT.index({ 
    _id : 1 
});
 var GPASSO_PAGE005MT_Model = mongoose.model('GPASSO_PAGE005MT', GPASSO_PAGE005MT); 
 module.exports.GPASSO_PAGE005MT_Model = GPASSO_PAGE005MT_Model; 
 
 var GPASSO_PGGR004MT  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
, pageGrpKey: { type: String, unique: false, required: false, default: ''  } 
, pageGrpTitle: { type: String, unique: false, required: false, default: ''  } 
, dispOrder: { type: Number, unique: false, required: false, default: ''  } 
, pageIds:  { type: Schema.ObjectId, ref: 'GPASSO_PAGE005MT' }   
});

 GPASSO_PGGR004MT.index({ 
    _id : 1 
});
 var GPASSO_PGGR004MT_Model = mongoose.model('GPASSO_PGGR004MT', GPASSO_PGGR004MT); 
 module.exports.GPASSO_PGGR004MT_Model = GPASSO_PGGR004MT_Model; 
 
 var GPASSO_SSID003MT  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
, firstNane: { type: String, unique: false, required: false, default: ''  } 
, lastName: { type: String, unique: false, required: false, default: ''  } 
, middleName: { type: String, unique: false, required: false, default: ''  } 
, username: { type: String, unique: false, required: false, default: ''  } 
, password: { type: String, unique: false, required: false, default: ''  } 
, empId: { type: String, unique: false, required: false, default: ''  } 
, userType: { type: String, unique: false, required: false, default: ''  } 
, userRole: { type: String, unique: false, required: false, default: ''  } 
});

 GPASSO_SSID003MT.index({ 
    _id : 1 
});
 var GPASSO_SSID003MT_Model = mongoose.model('GPASSO_SSID003MT', GPASSO_SSID003MT); 
 module.exports.GPASSO_SSID003MT_Model = GPASSO_SSID003MT_Model; 
 
 var GPASSO_ROLE003MT  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
, roleName: { type: String, unique: false, required: false, default: ''  } 
, status: { type: String, unique: false, required: false, default: ''  } 
, roleValue: { type: Number, unique: false, required: false, default: ''  } 
, pageGrpIds:  [{ type: Schema.ObjectId, ref: 'GPASSO_SSID003MT' }]   
});

 GPASSO_ROLE003MT.index({ 
    _id : 1 
});
 var GPASSO_ROLE003MT_Model = mongoose.model('GPASSO_ROLE003MT', GPASSO_ROLE003MT); 
 module.exports.GPASSO_ROLE003MT_Model = GPASSO_ROLE003MT_Model; 
 
 var GPASSO_PRTL002MT  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
, prtlName: { type: String, unique: false, required: false, default: ''  } 
, prtlVersion: { type: String, unique: false, required: false, default: ''  } 
, basePath: { type: String, unique: false, required: false, default: ''  } 
, roleIds:  [{ type: Schema.ObjectId, ref: 'GPASSO_ROLE003MT' }]   
, pageGrpIds:  [{ type: Schema.ObjectId, ref: 'GPASSO_PGGR004MT' }]   
});

 GPASSO_PRTL002MT.index({ 
    _id : 1 
});
 var GPASSO_PRTL002MT_Model = mongoose.model('GPASSO_PRTL002MT', GPASSO_PRTL002MT); 
 module.exports.GPASSO_PRTL002MT_Model = GPASSO_PRTL002MT_Model; 
 
 var GPASSO_PROD001MT  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
, prodName: { type: String, unique: false, required: false, default: ''  } 
, prodVersion: { type: String, unique: false, required: false, default: ''  } 
, prtlIds:  [{ type: Schema.ObjectId, ref: 'GPASSO_PRTL002MT' }]   
, usrIds:  [{ type: Schema.ObjectId, ref: 'GPASSO_SSID003MT' }]   
});

 GPASSO_PROD001MT.index({ 
    _id : 1 
});
 var GPASSO_PROD001MT_Model = mongoose.model('GPASSO_PROD001MT', GPASSO_PROD001MT); 
 module.exports.GPASSO_PROD001MT_Model = GPASSO_PROD001MT_Model; 
 
 var GPASSO_mongoTables  = new Schema({
  mkrId: { type: Number, unique: false, required: false, default: ''  } 
, dtCreated: { type: Date, unique: false, required: false, default: ''  } 
, athId: { type: Number, unique: false, required: false, default: ''  } 
, dtModified: { type: Date, unique: false, required: false, default: ''  } 
});

 GPASSO_mongoTables.index({ 
    _id : 1 
});
 var GPASSO_mongoTables_Model = mongoose.model('GPASSO_mongoTables', GPASSO_mongoTables); 
 module.exports.GPASSO_mongoTables_Model = GPASSO_mongoTables_Model; 
 
