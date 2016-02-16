define([],
function()
{

	return [ '$scope' , 'toaster','basicDetService','$state',function($scope,toaster,basicDetService,$state){



var ufivalidate=require("ufi.validate");

 var VAL=new ufivalidate.VAL();

$scope.ErrorBox         =VAL.ErrorBox        ;
$scope.onKeyUp          =VAL.onKeyUp         ;
$scope.onKeyDown        =VAL.onKeyDown       ;
$scope.onKeyPress       =VAL.onKeyPress      ;
$scope.onChange         =VAL.onChange        ;
$scope.valAmount        =VAL.valAmount       ;
$scope.valNumber        =VAL.valNumber       ;
$scope.IsFloate         =VAL.IsFloate        ;
$scope.IsPositiveNumber =VAL.IsPositiveNumber;
$scope.onValidate       =VAL.onValidate      ;
$scope.onClick          =VAL.onClick         ;
$scope.fnValidate       =VAL.fnValidate      ;

var ErrorBox         =VAL.ErrorBox        ;
var onKeyUp          =VAL.onKeyUp         ;
var onKeyDown        =VAL.onKeyDown       ;
var onKeyPress       =VAL.onKeyPress      ;
var onChange         =VAL.onChange        ;
var valAmount        =VAL.valAmount       ;
var valNumber        =VAL.valNumber       ;
var IsFloate         =VAL.IsFloate        ;
var IsPositiveNumber =VAL.IsPositiveNumber;
var onValidate       =VAL.onValidate      ;
var onClick          =VAL.onClick         ;
var fnValidate       =VAL.fnValidate      ;



$scope.entitlement=  [
  {
   'grpOrderId':1
  ,'groupId':1
  ,'grpName':'dashboard'
  ,'grpLink':'#/dashboard/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  } 
  ,{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'basicDetUSSAdd'
  ,'grpLink':'#/basicDetUSSAdd/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  },{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'SchemaGeneratorView'
  ,'grpLink':'#/SchemaGeneratorView/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  }

  ,{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'SchemaGenerator'
  ,'grpLink':'#/SchemaGenerator/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  },{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'KeyBoard'
  ,'grpLink':'#/KeyBoard/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  }
];

      // alert("basicDetService");
	
		

          //basicDetService.save()
    		

    		//alert("I am in uss_submit");
    
    
	}];
	
});

/*[

 toasterService.pop('success', "title", "text");
      var url = "/authorize"; 
      var config =  { 
          headers: {
            "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIZWFlcmllIEdTTCIsImF1ZCI6Ind3dy5teXJvb21leHBlbnNlLmNvbSIsImlhdCI6IjYwbXMifQ.G37Yj8ljUjbOf-kSyc4j3-YAlbseb1KET9CMBgbJfaE"
           ,'Authorization': 'Basic dGVzdDp0ZXN0'
            ,      'Content-Type': 'application/x-www-form-urlencoded'
            ,'Access-Control-Allow-Origin': false

            
        }
      };
      var dataJson = 
      {
        "email" : "durai145@live.in"
        ,"password" : "1qaz2wsx"
        ,"grantType": "password"
            ,"clientId" : "CLIENTSP"
            ,"scope" : "GSA"
            ,"redirectURI" :"http://localhost:5000"
      };

    /*
    $.post(url , dataJson , function (resp,status,xhr){

        alert("resp" + status);

    },dataType);


  $http.post(url,dataJson,config).then(function (response) 
    { 
     // alert("resp");
      console.log(response);
      alert(JSON.stringify(response));
    },function(data){

      if(data.status == 302)
      {

        alert("Invalid request");
      }
     });
    };

]*/