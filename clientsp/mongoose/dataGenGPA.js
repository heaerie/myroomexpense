var log                 = require('./libs/log')(module);
var mongoose            = require('./libs/mongoose').mongoose;
var UserModel           = require('./libs/mongoose').UserModel;
var ClientModel         = require('./libs/mongoose').ClientModel;
var AccessTokenModel    = require('./libs/mongoose').AccessTokenModel;
var RefreshTokenModel   = require('./libs/mongoose').RefreshTokenModel;
var GPASSO_SID001MB_Model   = require('./libs/gpassov3').GPASSO_SID001MB_Model;
var GPASSO_PROD001MB_Model   = require('./libs/gpassov3').GPASSO_PROD001MB_Model;
var GPASSO_PRTL002MB_Model   = require('./libs/gpassov3').GPASSO_PRTL002MB_Model;
var faker               = require('Faker');

GPASSO_SID001MB_Model.remove({}, function(err) {

GPASSO_PROD001MB_Model.remove({}, function(err) {
        if(err)  { 
		return log.error("Unable to remove PROD001MB:" +err);
	}
});


var prod=GPASSO_PROD001MB_Model(
{ 
  _id: 1,
  protocal: 'http',
  port: '3000',
  baseHome: '/clientsp/',
  hostname: 'myroomexpense',
  dbname: 'gpasso',
  dtModified: Date(),
  athId: 1,
  dtCreated: Date(),
  mkrId: 1,
  prodStDt: Date(),
  prodVersion: 1,
  prodName: 'myroomexpense'
  }
);
prod.remove({});

prod.save(function(err, prod ) {
        if(err)  { 
		return log.error(err);
	} else {
		console.log(prod);
	}


});

	var prtl=GPASSO_PRTL002MB_Model({ dtModified: Date(),
  athId: 1,
  dtCreated: Date(),
  mkrId: 1,
  protocal: 'http',
  port: '3000',
  baseHome: 'clientsp',
  hostname: 'myroomexpense.com',
  dbname: 'myroomexpense.com',
  prtlStDt: Date(),
  prtlSt: '',
  prtlVersion: '',
  prtlName: '',
  pordId: prod._id,
  _id: 1 }
);
prtl.remove({});
console.log( "PRTL002MB:" + prtl);
prtl.save(function(err, prtl ) {
        if(err)  { 
		return log.error(err);
	} else {
		console.log(prtl);
	}


});
	
    var sid001mb = new GPASSO_SID001MB_Model({ prodId: prod._id,
  primaryIdType: 'SSN',
  primaryId: '889-12-7763',
  status: 'ACTIVE',
  athId: 1,
  mkrId: 1,
  dtModified: Date(),
  dtCreated: Date(),
  password: '1qaz2wsx',
  username: 'durai145@live.in',
  lName: 'Duraimurugan',
  fName: 'Govindaraj',
  _id: 1 });
	console.log("sid001mb:" +sid001mb);
    sid001mb.remove({});
    sid001mb.save(function(err, user) {
        if(err) return log.error(err);
        else log.info("New user - %s:%s",user.username,user.password);
    });

	var rtObj= GPASSO_SID001MB_Model.find({_id: 1});
	console.log( "rtObj:");
	console.log( rtObj);

});





setTimeout(function() {
    mongoose.disconnect();
}, 3000);
