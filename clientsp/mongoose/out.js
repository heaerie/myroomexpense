//File	Owner
 // tomg.scr generated version 1.0


 var DBHSP_DBER001MB  = new Schema({ 
    errCode: {type: String, unique: false, required: false, default: ''  }
 ,  errDesc: {type: String, unique: false, required: false, default: ''  }
 ,  errorPage: {type: String, unique: false, required: false, default: ''  }
 ,  errorText: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  prodId: {type: Number, unique: false, required: false, default: ''  }
 ,  grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageId: {type: Number, unique: false, required: false, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_DBER001MB_Model = mongoose.model('DBHSP_DBER001MB', DBHSP_DBER001MB); 
 module.exports.DBHSP_DBER001MB_Model = DBHSP_DBER001MB_Model; 

 var DBHSP_GRP001MB  = new Schema({ 
    prodId: {type: Number, unique: false, required: false, default: ''  }
    grpId: {type: Number, unique: true, required: true, default: ''  }
 ,  grpName: {type: String, unique: false, required: false, default: ''  }
 ,  curBal: {type: String, unique: false, required: false, default: ''  }
 ,  maxPendAmt: {type: String, unique: false, required: false, default: ''  }
 ,  maxLedger: {type: String, unique: false, required: false, default: ''  }
 ,  password: {type: String, unique: false, required: false, default: ''  }
 ,  lastLogin: {type: Date, unique: false, required: false, default: ''  }
 ,  maxPendQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  maxApvdQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  lang: {type: String, unique: false, required: false, default: ''  }
 ,  maxUsrCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_GRP001MB.index({GRP_ID: 1} ,{unique: true});

 var DBHSP_GRP001MB_Model = mongoose.model('DBHSP_GRP001MB', DBHSP_GRP001MB); 
 module.exports.DBHSP_GRP001MB_Model = DBHSP_GRP001MB_Model; 

 var DBHSP_GID001MB  = new Schema({ 
 ,  usrId: {type: Number, unique: true, required: true, default: ''  }
 ,  grpId: {type: Number, unique: true, required: true, default: '0',  }
 ,  fName: {type: String, unique: false, required: false, default: ''  }
 ,  lName: {type: String, unique: false, required: false, default: ''  }
 ,  emailId: {type: String, unique: false, required: false, default: ''  }
 ,  curBal: {type: String, unique: false, required: false, default: ''  }
 ,  pendAmt: {type: String, unique: false, required: false, default: ''  }
 ,  ledger: {type: String, unique: false, required: false, default: ''  }
 ,  acctType: {type: String, unique: false, required: false, default: ''  }
 ,  password: {type: String, unique: false, required: false, default: ''  }
 ,  lastLogin: {type: Date, unique: false, required: false, default: ''  }
 ,  pendQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  apvdQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  lang: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  adminFlg: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_GID001MB.index({USR_ID: 1, GRP_ID: 1} ,{unique: true});

 var DBHSP_GID001MB_Model = mongoose.model('DBHSP_GID001MB', DBHSP_GID001MB); 
 module.exports.DBHSP_GID001MB_Model = DBHSP_GID001MB_Model; 

 var DBHSP_GID001TB  = new Schema({ 
 ,  usrId: {type: Number, unique: true, required: true, default: ''  }
 ,  fName: {type: String, unique: false, required: false, default: ''  }
 ,  lName: {type: String, unique: false, required: false, default: ''  }
 ,  emailId: {type: String, unique: false, required: false, default: ''  }
 ,  curBal: {type: String, unique: false, required: false, default: ''  }
 ,  pendAmt: {type: String, unique: false, required: false, default: ''  }
 ,  ledger: {type: String, unique: false, required: false, default: ''  }
 ,  foodType: {type: String, unique: false, required: false, default: ''  }
 ,  password: {type: String, unique: false, required: false, default: ''  }
 ,  lastLogin: {type: Date, unique: false, required: false, default: ''  }
 ,  pendQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  apvdQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  lang: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  otpe: {type: String, unique: false, required: false, default: ''  }
 ,  otp: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_GID001TB.index({USR_ID: 1} ,{unique: true});

 var DBHSP_GID001TB_Model = mongoose.model('DBHSP_GID001TB', DBHSP_GID001TB); 
 module.exports.DBHSP_GID001TB_Model = DBHSP_GID001TB_Model; 

 var DBHSP_GRBL001MB  = new Schema({ 
    pendQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  apvdQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  grpId: {type: Number, unique: true, required: true, default: ''  }
 ,  holdAmt: {type: Number, unique: false, required: false, default: ''  }
 ,  holdCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  splHoldAmt: {type: Number, unique: false, required: false, default: ''  }
 ,  splHoldCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_GRBL001MB.index({GRP_ID: 1} ,{unique: true});

 var DBHSP_GRBL001MB_Model = mongoose.model('DBHSP_GRBL001MB', DBHSP_GRBL001MB); 
 module.exports.DBHSP_GRBL001MB_Model = DBHSP_GRBL001MB_Model; 

 var DBHSP_GRP001TB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  grpName: {type: String, unique: false, required: false, default: ''  }
 ,  ledger: {type: String, unique: false, required: false, default: ''  }
 ,  password: {type: String, unique: false, required: false, default: ''  }
 ,  lastLogin: {type: Date, unique: false, required: false, default: ''  }
 ,  lang: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_GRP001TB_Model = mongoose.model('DBHSP_GRP001TB', DBHSP_GRP001TB); 
 module.exports.DBHSP_GRP001TB_Model = DBHSP_GRP001TB_Model; 

 var DBHSP_GTRN002MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
    gbktTxnId: {type: Number, unique: true, required: true, default: '0',  }
 ,  tranSt: {type: String, unique: false, required: false, default: ''  }
 ,  drAmt: {type: String, unique: false, required: false, default: ''  }
 ,  crAmt: {type: String, unique: false, required: false, default: ''  }
 ,  pndCrAmt: {type: String, unique: false, required: false, default: ''  }
 ,  pndDrAmt: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  descr: {type: String, unique: false, required: false, default: ''  }
 ,  billAmt: {type: String, unique: false, required: false, default: ''  }
 ,  billDt: {type: Date, unique: false, required: false, default: ''  }
 ,  cardNum: {type: Number, unique: false, required: false, default: ''  }
 ,  shareCnt: {type: String, unique: false, required: false, default: ''  }
 ,  billRef: {type: String, unique: false, required: false, default: ''  }
 ,  bank: {type: String, unique: false, required: false, default: ''  }
 ,  payMd: {type: String, unique: false, required: false, default: ''  }
 ,  stmtId: {type: Number, unique: false, required: false, default: ''  }
 ,  tranType: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_GTRN002MB.index({GBKT_TXN_ID: 1} ,{unique: true});

 var DBHSP_GTRN002MB_Model = mongoose.model('DBHSP_GTRN002MB', DBHSP_GTRN002MB); 
 module.exports.DBHSP_GTRN002MB_Model = DBHSP_GTRN002MB_Model; 

 var DBHSP_LGNL001HT  = new Schema({ 
    brwsrName: {type: String, unique: false, required: false, default: ''  }
 ,  device: {type: String, unique: false, required: false, default: ''  }
 ,  os: {type: String, unique: false, required: false, default: ''  }
 ,  loginDate: {type: String, unique: false, required: false, default: ''  }
 ,  logoutDate: {type: String, unique: false, required: false, default: ''  }
 ,  loginStatus: {type: String, unique: false, required: false, default: ''  }
 ,  loginDesrc: {type: String, unique: false, required: false, default: ''  }
 ,  clientIp: {type: String, unique: false, required: false, default: ''  }
 ,  clientHost: {type: String, unique: false, required: false, default: ''  }
 ,  geoCountry: {type: String, unique: false, required: false, default: ''  }
 ,  lang: {type: Number, unique: false, required: false, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  prodId: {type: Number, unique: false, required: false, default: ''  }
 ,  geoCity: {type: String, unique: false, required: false, default: ''  }
 ,  geoDtl: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_LGNL001HT_Model = mongoose.model('DBHSP_LGNL001HT', DBHSP_LGNL001HT); 
 module.exports.DBHSP_LGNL001HT_Model = DBHSP_LGNL001HT_Model; 

 var DBHSP_PGDT006MB  = new Schema({ 
 ,  pageId: {type: Number, unique: true, required: true, default: ''  }
 ,  pageBase: {type: String, unique: false, required: false, default: ''  }
 ,  pageKey: {type: String, unique: false, required: false, default: ''  }
 ,  pageName: {type: String, unique: false, required: false, default: ''  }
 ,  pageType: {type: String, unique: false, required: false, default: ''  }
 ,  authReqFlg: {type: String, unique: false, required: false, default: ''  }
 ,  dispOrder: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_PGDT006MB_Model = mongoose.model('DBHSP_PGDT006MB', DBHSP_PGDT006MB); 
 module.exports.DBHSP_PGDT006MB_Model = DBHSP_PGDT006MB_Model; 

 var DBHSP_PROD001MB  = new Schema({ 
 ,  prodId: {type: Number, unique: true, required: true, default: ''  }
 ,  prodName: {type: String, unique: false, required: false, default: ''  }
 ,  prodVersion: {type: String, unique: false, required: false, default: ''  }
 ,  prodStDt: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  dbname: {type: String, unique: false, required: false, default: ''  }
 ,  hostname: {type: String, unique: false, required: false, default: ''  }
 ,  baseHome: {type: String, unique: false, required: false, default: ''  }
 ,  port: {type: String, unique: false, required: false, default: ''  }
 ,  protocal: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_PROD001MB.index({PROD_ID: 1} ,{unique: true});

 var DBHSP_PROD001MB_Model = mongoose.model('DBHSP_PROD001MB', DBHSP_PROD001MB); 
 module.exports.DBHSP_PROD001MB_Model = DBHSP_PROD001MB_Model; 

 var DBHSP_PRTL002MB  = new Schema({ 
 ,  prodId: {type: Number, unique: true, required: true, default: ''  }
 ,  prtlId: {type: Number, unique: true, required: true, default: ''  }
 ,  prtlName: {type: String, unique: false, required: false, default: ''  }
 ,  prtlVersion: {type: String, unique: false, required: false, default: ''  }
 ,  prtlStDt: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  dbname: {type: String, unique: false, required: false, default: ''  }
 ,  hostname: {type: String, unique: false, required: false, default: ''  }
 ,  baseHome: {type: String, unique: false, required: false, default: ''  }
 ,  port: {type: String, unique: false, required: false, default: ''  }
 ,  protocal: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_PRTL002MB.index({PRTL_ID: 1} ,{unique: true});

 var DBHSP_PRTL002MB_Model = mongoose.model('DBHSP_PRTL002MB', DBHSP_PRTL002MB); 
 module.exports.DBHSP_PRTL002MB_Model = DBHSP_PRTL002MB_Model; 

 var DBHSP_PGGR005MB  = new Schema({ 
 ,  prtlPageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  prtlId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageGrpTitle: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageGrpKey: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_PGGR005MB_Model = mongoose.model('DBHSP_PGGR005MB', DBHSP_PGGR005MB); 
 module.exports.DBHSP_PGGR005MB_Model = DBHSP_PGGR005MB_Model; 

 var DBHSP_PGPD009LB  = new Schema({ 
 ,  pageId: {type: Number, unique: true, required: true, default: ''  }
 ,  prtlPageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_PGPD009LB.index({PAGE_ID: 1} ,{unique: true});

 var DBHSP_PGPD009LB_Model = mongoose.model('DBHSP_PGPD009LB', DBHSP_PGPD009LB); 
 module.exports.DBHSP_PGPD009LB_Model = DBHSP_PGPD009LB_Model; 

 var DBHSP_ROLA003MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  roleId: {type: Number, unique: false, required: false, default: ''  }
 ,  roleName: {type: String, unique: false, required: false, default: ''  }
 ,  roleAccess: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_ROLA003MB_Model = mongoose.model('DBHSP_ROLA003MB', DBHSP_ROLA003MB); 
 module.exports.DBHSP_ROLA003MB_Model = DBHSP_ROLA003MB_Model; 

 var DBHSP_RAPG004LB  = new Schema({ 
    rolePageId: {type: String, unique: false, required: false, default: ''  }
 ,  prodPageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  roleId: {type: Number, unique: true, required: true, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 ,  pageGrpId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_RAPG004LB.index({ROLE_ID: 1} ,{unique: true});

 var DBHSP_RAPG004LB_Model = mongoose.model('DBHSP_RAPG004LB', DBHSP_RAPG004LB); 
 module.exports.DBHSP_RAPG004LB_Model = DBHSP_RAPG004LB_Model; 

 var DBHSP_MEMA001MB  = new Schema({ 
 ,  roleId: {type: Number, unique: true, required: true, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_MEMA001MB.index({ROLE_ID: 1} ,{unique: true});

 var DBHSP_MEMA001MB_Model = mongoose.model('DBHSP_MEMA001MB', DBHSP_MEMA001MB); 
 module.exports.DBHSP_MEMA001MB_Model = DBHSP_MEMA001MB_Model; 

 var DBHSP_NOTE001MB  = new Schema({ 
    sno: {type: Number, unique: false, required: false, default: ''  }
 ,  swarmId: {type: Number, unique: false, required: false, default: ''  }
 ,  swaram: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_NOTE001MB_Model = mongoose.model('DBHSP_NOTE001MB', DBHSP_NOTE001MB); 
 module.exports.DBHSP_NOTE001MB_Model = DBHSP_NOTE001MB_Model; 

 var DBHSP_PDPG002MB  = new Schema({ 
 ,  prodId: {type: Number, unique: true, required: true, default: ''  }
 ,  prodPageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  acessInd: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_PDPG002MB.index({PROD_ID: 1} ,{unique: true});

 var DBHSP_PDPG002MB_Model = mongoose.model('DBHSP_PDPG002MB', DBHSP_PDPG002MB); 
 module.exports.DBHSP_PDPG002MB_Model = DBHSP_PDPG002MB_Model; 

 var DBHSP_PERSON  = new Schema({ 
    personId: {type: Number, unique: false, required: false, default: ''  }
 ,  maxNum: {type: Number, unique: false, required: false, default: ''  }
 ,  per1Name: {type: String, unique: false, required: false, default: ''  }
 ,  per2Name: {type: String, unique: false, required: false, default: ''  }
 ,  per3Name: {type: String, unique: false, required: false, default: ''  }
 ,  per4Name: {type: String, unique: false, required: false, default: ''  }
 ,  per5Name: {type: String, unique: false, required: false, default: ''  }
 ,  per6Name: {type: String, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_PERSON_Model = mongoose.model('DBHSP_PERSON', DBHSP_PERSON); 
 module.exports.DBHSP_PERSON_Model = DBHSP_PERSON_Model; 

 var DBHSP_PGRL010LB  = new Schema({ 
 ,  rolePageId: {type: Number, unique: true, required: true, default: ''  }
 ,  pageId: {type: Number, unique: false, required: false, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_PGRL010LB.index({ROLE_PAGE_ID: 1} ,{unique: true});

 var DBHSP_PGRL010LB_Model = mongoose.model('DBHSP_PGRL010LB', DBHSP_PGRL010LB); 
 module.exports.DBHSP_PGRL010LB_Model = DBHSP_PGRL010LB_Model; 

 var DBHSP_RAPD009MB  = new Schema({ 
 ,  idrapd009mb: {type: Number, unique: true, required: true, default: ''  }
 , { autoIndex: false }});

  DBHSP_RAPD009MB.index({idRAPD009MB: 1} ,{unique: true});

 var DBHSP_RAPD009MB_Model = mongoose.model('DBHSP_RAPD009MB', DBHSP_RAPD009MB); 
 module.exports.DBHSP_RAPD009MB_Model = DBHSP_RAPD009MB_Model; 

 var DBHSP_REGISTERED_MEMBERS  = new Schema({ 
    id: {type: Number, unique: true, required: true, default: ''  }
    name: {type: String, unique: true, required: true, default: ''  }
    email: {type: String, unique: true, required: true, default: ''  }
    password: {type: String, unique: true, required: true, default: ''  }
    country: {type: String, unique: true, required: true, default: ''  }
 , { autoIndex: false }});

  DBHSP_REGISTERED_MEMBERS.index({ID: 1} ,{unique: true});

 var DBHSP_REGISTERED_MEMBERS_Model = mongoose.model('DBHSP_REGISTERED_MEMBERS', DBHSP_REGISTERED_MEMBERS); 
 module.exports.DBHSP_REGISTERED_MEMBERS_Model = DBHSP_REGISTERED_MEMBERS_Model; 

 var DBHSP_SEQ  = new Schema({ 
    name: {type: String, unique: true, required: true, default: ''  }
 ,  val: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

  DBHSP_SEQ.index({NAME: 1} ,{unique: true});

 var DBHSP_SEQ_Model = mongoose.model('DBHSP_SEQ', DBHSP_SEQ); 
 module.exports.DBHSP_SEQ_Model = DBHSP_SEQ_Model; 

 var DBHSP_STMT001MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  descr: {type: String, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  authId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_STMT001MB_Model = mongoose.model('DBHSP_STMT001MB', DBHSP_STMT001MB); 
 module.exports.DBHSP_STMT001MB_Model = DBHSP_STMT001MB_Model; 

 var DBHSP_STMT002MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  stmtId: {type: Number, unique: false, required: false, default: ''  }
 ,  monBal: {type: String, unique: false, required: false, default: ''  }
 ,  monSpnd: {type: String, unique: false, required: false, default: ''  }
 ,  descr: {type: String, unique: false, required: false, default: ''  }
 ,  createdDt: {type: Date, unique: false, required: false, default: ''  }
 ,  makerId: {type: Number, unique: false, required: false, default: ''  }
 ,  modifiedDt: {type: Date, unique: false, required: false, default: ''  }
 ,  authId: {type: Number, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_STMT002MB_Model = mongoose.model('DBHSP_STMT002MB', DBHSP_STMT002MB); 
 module.exports.DBHSP_STMT002MB_Model = DBHSP_STMT002MB_Model; 

 var DBHSP_TRN003MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  gbktTxnId: {type: Number, unique: false, required: false, default: ''  }
 ,  tbktTxnId: {type: Number, unique: false, required: false, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  tranAmt: {type: String, unique: false, required: false, default: ''  }
 ,  drCrFlg: {type: String, unique: false, required: false, default: ''  }
 ,  valueDt: {type: Date, unique: false, required: false, default: ''  }
 ,  cretedDt: {type: Date, unique: false, required: false, default: ''  }
 ,  makerId: {type: Number, unique: false, required: false, default: ''  }
 ,  modifiedDt: {type: Date, unique: false, required: false, default: ''  }
 ,  authId: {type: Number, unique: false, required: false, default: ''  }
 ,  busDt: {type: Date, unique: false, required: false, default: ''  }
 , { autoIndex: false }});

 var DBHSP_TRN003MB_Model = mongoose.model('DBHSP_TRN003MB', DBHSP_TRN003MB); 
 module.exports.DBHSP_TRN003MB_Model = DBHSP_TRN003MB_Model; 

 var DBHSP__SEQUENCE  = new Schema({ 
 ,  seqName: {type: String, unique: true, required: true, default: ''  }
 ,  seqVal: {type: Number, unique: false, required: false, default: ''  }
  }); var DBHSP__SEQUENCE_Model = mongoose.model('DBHSP__SEQUENCE', DBHSP__SEQUENCE); 
 module.exports.DBHSP__SEQUENCE_Model = DBHSP__SEQUENCE_Model; 
//done
