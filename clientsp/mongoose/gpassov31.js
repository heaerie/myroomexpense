//File	Owner
 // tomg.scr generated version 1.0


 var GPASSO_timestamps  = new Schema({ 
    createtime: {type: String, unique: false, required: false, default: Date.now  }
 ,  updatetime: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_timestamps_Model = mongoose.model('GPASSO_timestamps', GPASSO_timestamps); 
 module.exports.GPASSO_timestamps_Model = GPASSO_timestamps_Model; 

 var GPASSO_MMM001MB  = new Schema({ 
    mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  pageId: {type: Number, unique: false, required: false, default: ''  }
 ,  accessGroup: {type: String, unique: false, required: false, default: ''  }
 ,  accessLevel: {type: String, unique: false, required: false, default: ''  }
 ,  critSjson: {type: String, unique: false, required: false, default: ''  }
 ,  dtilSjson: {type: String, unique: false, required: false, default: ''  }
 ,  rsltSjson: {type: String, unique: false, required: false, default: ''  }
 ,  critProc: {type: String, unique: false, required: false, default: ''  }
 ,  dtilProc: {type: String, unique: false, required: false, default: ''  }
 ,  rsltProc: {type: String, unique: false, required: false, default: ''  }
 ,  baseUrl: {type: String, unique: false, required: false, default: ''  }
 ,  activeSt: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_MMM001MB_Model = mongoose.model('GPASSO_MMM001MB', GPASSO_MMM001MB); 
 module.exports.GPASSO_MMM001MB_Model = GPASSO_MMM001MB_Model; 

 var GPASSO_CARD001MB  = new Schema({ 
    mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  card4: {type: Number, unique: false, required: false, default: ''  }
 ,  balTrnsAmt: {type: Number, unique: false, required: false, default: ''  }
 ,  minDueAmt: {type: Number, unique: false, required: false, default: ''  }
 ,  ttlBal: {type: Number, unique: false, required: false, default: ''  }
 ,  dueDate: {type: String, unique: false, required: false, default: ''  }
 ,  dueDays: {type: Number, unique: false, required: false, default: ''  }
 ,  acctStatus: {type: String, unique: false, required: false, default: ''  }
 ,  purchaseApr: {type: Number, unique: false, required: false, default: ''  }
 ,  balTransApr: {type: Number, unique: false, required: false, default: ''  }
 ,  bankId: {type: Number, unique: false, required: false, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  aprZeroDate: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_CARD001MB_Model = mongoose.model('GPASSO_CARD001MB', GPASSO_CARD001MB); 
 module.exports.GPASSO_CARD001MB_Model = GPASSO_CARD001MB_Model; 

 var GPASSO_GRP001MB  = new Schema({ 
    prtlId: {type: Number, unique: false, required: false, default: ''  }
 ,  grpId: {type: Number, unique: true, required: true, default: ''  }
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
 }, { autoIndex: false });

  GPASSO_GRP001MB.index({GRP_ID: 1} ,{unique: true});

 var GPASSO_GRP001MB_Model = mongoose.model('GPASSO_GRP001MB', GPASSO_GRP001MB); 
 module.exports.GPASSO_GRP001MB_Model = GPASSO_GRP001MB_Model; 

 var GPASSO_SID001MB  = new Schema({ 
    usrId: {type: Number, unique: true, required: true, default: ''  }
 ,  fName: {type: String, unique: false, required: false, default: ''  }
 ,  lName: {type: String, unique: false, required: false, default: ''  }
 ,  emailId: {type: String, unique: false, required: false, default: ''  }
 ,  password: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_SID001MB.index({USR_ID: 1} ,{unique: true});

 var GPASSO_SID001MB_Model = mongoose.model('GPASSO_SID001MB', GPASSO_SID001MB); 
 module.exports.GPASSO_SID001MB_Model = GPASSO_SID001MB_Model; 

 var GPASSO_GID001MB  = new Schema({ 
    mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  forUsrId: {type: Number, unique: true, required: true, default: ''  }
 ,  usrId: {type: Number, unique: true, required: true, default: ''  }
 ,  grpId: {type: Number, unique: true, required: true, default: ''  }
 ,  acctType: {type: String, unique: false, required: false, default: ''  }
 ,  adminFlg: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_GID001MB.index({GRP_ID: 1, USR_ID: 1, FOR_USR_ID: 1} ,{unique: true});

 var GPASSO_GID001MB_Model = mongoose.model('GPASSO_GID001MB', GPASSO_GID001MB); 
 module.exports.GPASSO_GID001MB_Model = GPASSO_GID001MB_Model; 

 var GPASSO_DBER001MB  = new Schema({ 
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
 }, { autoIndex: false });

 var GPASSO_DBER001MB_Model = mongoose.model('GPASSO_DBER001MB', GPASSO_DBER001MB); 
 module.exports.GPASSO_DBER001MB_Model = GPASSO_DBER001MB_Model; 

 var GPASSO_GID001TB  = new Schema({ 
    usrId: {type: Number, unique: true, required: true, default: ''  }
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
 ,  grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  lang: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  otpe: {type: String, unique: false, required: false, default: ''  }
 ,  otp: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_GID001TB.index({USR_ID: 1} ,{unique: true});

 var GPASSO_GID001TB_Model = mongoose.model('GPASSO_GID001TB', GPASSO_GID001TB); 
 module.exports.GPASSO_GID001TB_Model = GPASSO_GID001TB_Model; 

 var GPASSO_PROD001MB  = new Schema({ 
    prodId: {type: Number, unique: true, required: true, default: ''  }
 ,  prodName: {type: String, unique: false, required: false, default: ''  }
 ,  prodVersion: {type: String, unique: false, required: false, default: ''  }
 ,  prodStDt: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  dbname: {type: String, unique: false, required: false, default: ''  }
 ,  hostname: {type: String, unique: false, required: false, default: ''  }
 ,  baseHome: {type: String, unique: false, required: false, default: ''  }
 ,  port: {type: String, unique: false, required: false, default: ''  }
 ,  protocal: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_PROD001MB.index({PROD_ID: 1} ,{unique: true});

 var GPASSO_PROD001MB_Model = mongoose.model('GPASSO_PROD001MB', GPASSO_PROD001MB); 
 module.exports.GPASSO_PROD001MB_Model = GPASSO_PROD001MB_Model; 

 var GPASSO_PRTL002MB  = new Schema({ 
    prodId: {type: Number, unique: true, required: true, default: ''  }
 ,  prtlId: {type: Number, unique: true, required: true, default: ''  }
 ,  prtlName: {type: String, unique: false, required: false, default: ''  }
 ,  prtlVersion: {type: String, unique: false, required: false, default: ''  }
 ,  prtlSt: {type: String, unique: false, required: false, default: ''  }
 ,  prtlStDt: {type: String, unique: false, required: false, default: ''  }
 ,  dbname: {type: String, unique: false, required: false, default: ''  }
 ,  hostname: {type: String, unique: false, required: false, default: ''  }
 ,  baseHome: {type: String, unique: false, required: false, default: ''  }
 ,  port: {type: String, unique: false, required: false, default: ''  }
 ,  protocal: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_PRTL002MB.index({PRTL_ID: 1} ,{unique: true});

 var GPASSO_PRTL002MB_Model = mongoose.model('GPASSO_PRTL002MB', GPASSO_PRTL002MB); 
 module.exports.GPASSO_PRTL002MB_Model = GPASSO_PRTL002MB_Model; 

 var GPASSO_GRBL001MB  = new Schema({ 
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
 ,  lastLogon: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_GRBL001MB.index({GRP_ID: 1} ,{unique: true});

 var GPASSO_GRBL001MB_Model = mongoose.model('GPASSO_GRBL001MB', GPASSO_GRBL001MB); 
 module.exports.GPASSO_GRBL001MB_Model = GPASSO_GRBL001MB_Model; 

 var GPASSO_GRP001TB  = new Schema({ 
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
 }, { autoIndex: false });

 var GPASSO_GRP001TB_Model = mongoose.model('GPASSO_GRP001TB', GPASSO_GRP001TB); 
 module.exports.GPASSO_GRP001TB_Model = GPASSO_GRP001TB_Model; 

 var GPASSO_GTRN002MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  gbktTxnId: {type: Number, unique: true, required: true, default: '0'  }
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
 }, { autoIndex: false });

  GPASSO_GTRN002MB.index({GBKT_TXN_ID: 1} ,{unique: true});

 var GPASSO_GTRN002MB_Model = mongoose.model('GPASSO_GTRN002MB', GPASSO_GTRN002MB); 
 module.exports.GPASSO_GTRN002MB_Model = GPASSO_GTRN002MB_Model; 

 var GPASSO_LGNL001HT  = new Schema({ 
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
 ,  geoRegion: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_LGNL001HT_Model = mongoose.model('GPASSO_LGNL001HT', GPASSO_LGNL001HT); 
 module.exports.GPASSO_LGNL001HT_Model = GPASSO_LGNL001HT_Model; 

 var GPASSO_ROLA003MB  = new Schema({ 
    grpId: {type: Number, unique: false, required: false, default: ''  }
 ,  roleId: {type: Number, unique: false, required: false, default: ''  }
 ,  roleName: {type: String, unique: false, required: false, default: ''  }
 ,  roleAccess: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: Date, unique: false, required: false, default: ''  }
 ,  dtModified: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_ROLA003MB_Model = mongoose.model('GPASSO_ROLA003MB', GPASSO_ROLA003MB); 
 module.exports.GPASSO_ROLA003MB_Model = GPASSO_ROLA003MB_Model; 

 var GPASSO_ROLE001MB  = new Schema({ 
    prtlId: {type: Number, unique: true, required: true, default: ''  }
 ,  roleId: {type: Number, unique: true, required: true, default: ''  }
 ,  roleName: {type: String, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_ROLE001MB.index({ROLE_ID: 1, PRTL_ID: 1} ,{unique: true});

 var GPASSO_ROLE001MB_Model = mongoose.model('GPASSO_ROLE001MB', GPASSO_ROLE001MB); 
 module.exports.GPASSO_ROLE001MB_Model = GPASSO_ROLE001MB_Model; 

 var GPASSO_MEMA001MB  = new Schema({ 
    roleId: {type: Number, unique: false, required: false, default: ''  }
 ,  usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  activeFlg: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_MEMA001MB_Model = mongoose.model('GPASSO_MEMA001MB', GPASSO_MEMA001MB); 
 module.exports.GPASSO_MEMA001MB_Model = GPASSO_MEMA001MB_Model; 

 var GPASSO_PDPG002MB  = new Schema({ 
    prodId: {type: Number, unique: true, required: true, default: ''  }
 ,  prodPageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  acessInd: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_PDPG002MB.index({PROD_ID: 1} ,{unique: true});

 var GPASSO_PDPG002MB_Model = mongoose.model('GPASSO_PDPG002MB', GPASSO_PDPG002MB); 
 module.exports.GPASSO_PDPG002MB_Model = GPASSO_PDPG002MB_Model; 

 var GPASSO_PGDT006MB  = new Schema({ 
    pageId: {type: Number, unique: true, required: true, default: ''  }
 ,  pageBase: {type: String, unique: false, required: false, default: ''  }
 ,  pageKey: {type: String, unique: false, required: false, default: ''  }
 ,  pageName: {type: String, unique: false, required: false, default: ''  }
 ,  pageType: {type: String, unique: false, required: false, default: ''  }
 ,  authReqFlg: {type: String, unique: false, required: false, default: ''  }
 ,  dispOrder: {type: Number, unique: false, required: false, default: ''  }
 ,  menu: {type: String, unique: false, required: false, default: ''  }
 ,  critJson: {type: String, unique: false, required: false, default: ''  }
 ,  dtilJson: {type: String, unique: false, required: false, default: ''  }
 ,  rsltJson: {type: String, unique: false, required: false, default: ''  }
 ,  url: {type: String, unique: false, required: false, default: ''  }
 ,  critProc: {type: String, unique: false, required: false, default: ''  }
 ,  dtilProc: {type: String, unique: false, required: false, default: ''  }
 ,  rsltProc: {type: String, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_PGDT006MB_Model = mongoose.model('GPASSO_PGDT006MB', GPASSO_PGDT006MB); 
 module.exports.GPASSO_PGDT006MB_Model = GPASSO_PGDT006MB_Model; 

 var GPASSO_PGGR005MB  = new Schema({ 
    prtlPageGrpId: {type: Number, unique: true, required: true, default: ''  }
 ,  prtlId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageGrpId: {type: String, unique: false, required: false, default: ''  }
 ,  pageGrpTitle: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  pageGrpKey: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_PGGR005MB.index({PRTL_PAGE_GRP_ID: 1} ,{unique: true});

 var GPASSO_PGGR005MB_Model = mongoose.model('GPASSO_PGGR005MB', GPASSO_PGGR005MB); 
 module.exports.GPASSO_PGGR005MB_Model = GPASSO_PGGR005MB_Model; 

 var GPASSO_PGPD009LB  = new Schema({ 
    pageId: {type: Number, unique: false, required: false, default: ''  }
 ,  prtlPageGrpId: {type: Number, unique: true, required: true, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: 'N'  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_PGPD009LB_Model = mongoose.model('GPASSO_PGPD009LB', GPASSO_PGPD009LB); 
 module.exports.GPASSO_PGPD009LB_Model = GPASSO_PGPD009LB_Model; 

 var GPASSO_RAPG004LB  = new Schema({ 
    rolePageId: {type: String, unique: false, required: false, default: ''  }
 ,  pageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  prtlPageGrpId: {type: Number, unique: false, required: false, default: ''  }
 ,  roleId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_RAPG004LB_Model = mongoose.model('GPASSO_RAPG004LB', GPASSO_RAPG004LB); 
 module.exports.GPASSO_RAPG004LB_Model = GPASSO_RAPG004LB_Model; 

 var GPASSO_CNTY001MB  = new Schema({ 
    prodId: {type: Number, unique: false, required: false, default: ''  }
 ,  countryId: {type: String, unique: true, required: true, default: ''  }
 ,  countryCode: {type: Number, unique: true, required: true, default: ''  }
 ,  countryIso: {type: String, unique: true, required: true, default: ''  }
 ,  currencyCode: {type: String, unique: true, required: true, default: ''  }
 ,  currencyName: {type: String, unique: false, required: false, default: ''  }
 ,  timezone: {type: String, unique: false, required: false, default: ''  }
 ,  dst: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_CNTY001MB_Model = mongoose.model('GPASSO_CNTY001MB', GPASSO_CNTY001MB); 
 module.exports.GPASSO_CNTY001MB_Model = GPASSO_CNTY001MB_Model; 

 var GPASSO_SEQ  = new Schema({ 
    name: {type: String, unique: true, required: true, default: ''  }
 ,  val: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_SEQ.index({NAME: 1} ,{unique: true});

 var GPASSO_SEQ_Model = mongoose.model('GPASSO_SEQ', GPASSO_SEQ); 
 module.exports.GPASSO_SEQ_Model = GPASSO_SEQ_Model; 

 var GPASSO__SEQUENCE  = new Schema({ 
    seqName: {type: String, unique: true, required: true, default: ''  }
 ,  seqVal: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO__SEQUENCE.index({SEQ_NAME: 1} ,{unique: true});

 var GPASSO__SEQUENCE_Model = mongoose.model('GPASSO__SEQUENCE', GPASSO__SEQUENCE); 
 module.exports.GPASSO__SEQUENCE_Model = GPASSO__SEQUENCE_Model; 

 var GPASSO_STAT002MB  = new Schema({ 
    stateId: {type: Number, unique: true, required: true, default: ''  }
 ,  countryId: {type: Number, unique: true, required: true, default: ''  }
 ,  stateCode: {type: String, unique: true, required: true, default: ''  }
 ,  stateName: {type: String, unique: true, required: true, default: ''  }
 ,  timezone: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  status: {type: String, unique: false, required: false, default: ''  }
 ,  prodId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_STAT002MB.index({STATE_ID: 1} ,{unique: true});

 var GPASSO_STAT002MB_Model = mongoose.model('GPASSO_STAT002MB', GPASSO_STAT002MB); 
 module.exports.GPASSO_STAT002MB_Model = GPASSO_STAT002MB_Model; 

 var GPASSO_GIBL002MB  = new Schema({ 
    usrId: {type: Number, unique: false, required: false, default: ''  }
 ,  curBal: {type: Number, unique: false, required: false, default: ''  }
 ,  pendAmt: {type: Number, unique: false, required: false, default: ''  }
 ,  pendQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  apvdQCnt: {type: Number, unique: false, required: false, default: ''  }
 ,  lastLogin: {type: Date, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

 var GPASSO_GIBL002MB_Model = mongoose.model('GPASSO_GIBL002MB', GPASSO_GIBL002MB); 
 module.exports.GPASSO_GIBL002MB_Model = GPASSO_GIBL002MB_Model; 

 var GPASSO_PGRL010LB  = new Schema({ 
    rolePageId: {type: Number, unique: true, required: true, default: ''  }
 ,  pageId: {type: Number, unique: false, required: false, default: ''  }
 ,  accessInd: {type: String, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 }, { autoIndex: false });

  GPASSO_PGRL010LB.index({ROLE_PAGE_ID: 1} ,{unique: true});

 var GPASSO_PGRL010LB_Model = mongoose.model('GPASSO_PGRL010LB', GPASSO_PGRL010LB); 
 module.exports.GPASSO_PGRL010LB_Model = GPASSO_PGRL010LB_Model; 

 var GPASSO_CNRY001MB  = new Schema({ 
    cntryId: {type: Number, unique: true, required: true, default: ''  }
 ,  alpha2: {type: String, unique: false, required: false, default: ''  }
 ,  alpha3: {type: String, unique: false, required: false, default: ''  }
 ,  cntryName: {type: String, unique: false, required: false, default: ''  }
 ,  mkrId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtCreated: {type: String, unique: false, required: false, default: ''  }
 ,  athId: {type: Number, unique: false, required: false, default: ''  }
 ,  dtModified: {type: String, unique: false, required: false, default: ''  }
  }); var GPASSO_CNRY001MB_Model = mongoose.model('GPASSO_CNRY001MB', GPASSO_CNRY001MB); 
 module.exports.GPASSO_CNRY001MB_Model = GPASSO_CNRY001MB_Model; 
//done
