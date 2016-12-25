var log                 = require('./libs/log')(module);
var mongoose            = require('./libs/mongoose').mongoose;
var UserModel           = require('./libs/mongoose').UserModel;
var ClientModel         = require('./libs/mongoose').ClientModel;
var AccessTokenModel    = require('./libs/mongoose').AccessTokenModel;
var RefreshTokenModel   = require('./libs/mongoose').RefreshTokenModel;
var GPASSO_PROD001MT_Model   = require('./libs/gpassov3').GPASSO_PROD001MT_Model;
var GPASSO_PRTL002MT_Model   = require('./libs/gpassov3').GPASSO_PRTL002MT_Model;
var GPASSO_ROLE003MT_Model   = require('./libs/gpassov3').GPASSO_ROLE003MT_Model;
var GPASSO_PGGR004MT_Model   = require('./libs/gpassov3').GPASSO_PGGR004MT_Model;
var GPASSO_SSID003MT_Model   = require('./libs/gpassov3').GPASSO_SSID003MT_Model;
var ObjectId = mongoose.Types.ObjectId;


setTimeout(function() {
    mongoose.disconnect();
}, 3000);

DataSetup =function(callback) {
GPASSO_PROD001MT_Model.remove({}, function(err) {
	var prod=new GPASSO_PROD001MT_Model({
	  usrIds: [],
	  prtlIds: [],
	  prodVersion: '1',
	  prodName: 'GLOBAL_PROD_ADMIN',
	  dtModified: new Date(),
	  athId: 1,
	  dtCreated: new Date(),
	  mkrId: 1 }
	);
		var  prtl= new GPASSO_PRTL002MT_Model(
		{
			  pageGrpIds: [],
			  roleIds: [],
			  basePath: '',
			  prtlVersion: '001',
			  prtlName: 'Member Portal',
			  dtModified: new Date(),
			  athId: 1,
			  dtCreated: new Date(),
			  mkrId: 1 
		}
		);

	var pggr=new GPASSO_PGGR004MT_Model(
		{
  dispOrder: 1,
  pageGrpTitle: 'DASHBOARD',
  pageGrpKey: 'DASHBOARD',
  dtModified: new Date(),
  athId: 1,
  dtCreated: new Date(),
  mkrId: 1 }
);

	var ssid= new GPASSO_SSID003MT_Model({
  userRole: 'Internal',
  userType: 'Member',
  empId: 'H1450001',
  password: '1qaz2wsx',
  username: 'H1450001',
  middleName: '',
  lastName: 'Govindaraj',
  firstNane: 'Gangammal',
  dtModified: new Date(),
  athId: 1,
  dtCreated: new Date(),
  mkrId: 1 }
) ;

	console.log("ssid");
	console.log(ssid);
	

		var role=new GPASSO_ROLE003MT_Model({ 
  pageGrpIds: [],
  roleValue: 0xff,
  status: 'ACTIVE',
  roleName: 'SEC_ADMIN',
  dtModified: new Date(),
  athId: 1,
  dtCreated: new Date(),
  mkrId: 1 }
);


		role.pageGrpIds.push(pggr);
		role.usrIds.push(ssid);
		prtl.roleIds.push(role);
		prtl.pageGrpIds.push(pggr);
		prod.prtlIds.push(prtl);
		prod.usrIds.push(ssid);
		GPASSO_SSID003MT_Model.remove({}, function(err) {
			ssid.save(function(err) {
				if(err) {
					callback && callback(err,{"status" : "Unable to save ssid : [" + ssid + "]"});
				}

				console.log("ssid saved");

		GPASSO_PGGR004MT_Model.remove({}, function(err) {
			pggr.save(function(err) {
				if(err) {
					callback && callback(err,{"status" : "Unable to save pggr : [" + pggr + "]"});
				}

				console.log("pggr saved");
			});
		GPASSO_ROLE003MT_Model.remove({}, function(err) {


			role.save(function(err) {
				if(err) {
					callback && callback(err,{"status" : "Unable to save role : [" + role + "]"});
				}
				console.log("role saved");
			});
		GPASSO_PRTL002MT_Model.remove({}, function(err) {
	
			prtl.save(function(err) {
				if(err) {
					callback && callback(err,{"status" : "Unable to save prtl : [" + prtl + "]"});
				}
				console.log("prtl saved");
			});
			prod.save(function (err) {

				if(err) {	
					callback && callback(err,{"status" : "Unable to save prod : [" + prod + "]"});
				}
				console.log("prod saved");

				callback && callback(null, {"status" : "Success"});
			});

		});
	});
	});
	});


});
});
	
}

DataSetup(function(err,msg) {
	if(err) {
		console.log(err);

	} else {
		console.log(msg);
	}
});

