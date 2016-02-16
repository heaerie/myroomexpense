/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([

    './controllers/index'
    ,'./services/index'
   /* ,'./directives/index'
      ,'./filters/index'
      
    */

], function (controllers,services) {
    'use strict';

console.log('controllers in app');
console.log(controllers);

//console.log('ufi in app');
//console.log(ufi);

    var webApp= angular.module('app', [
         'controllers'
        ,'ngRoute'
        ,'toaster' 
        ,'services'
        ,'ui.router'
        ,'ngAnimate'
        //,'$http'
      //  , 'require'
        //,'ufi'
        //,''
        /*,'app.directives'
        ,'app.filters'
        ,'app.services'
        */
    ]);

    webApp.provider('heaerieUssService', function heaerieUssServiceProvider() {
  var GenHtmlTemplateFromSJson = false;



  this.GenHtmlTemplateFromSJson = function(jsonSchema,value,mode) {
   // alert("test" + value);
   var USS=require("ufi.core").USS;
   var ufiframegen=require("ufi.frameGen");
   var ufivalidate=require("ufi.validate");
   var $=require("jquery");


   var us= new ufiframegen.FG();
   //var val= new ufivalidate.VAL();
/*

   $http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    
      alert('success');
  }, function errorCallback(response) {

     alert('failure');
     console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
*/

var schemaJson=[
  { 
  group:'ussms',name:'basicDet',label:'Basic Details',task:'EA',desc:'N',htmlType:'PAGE',entitle:'N',enttlname:'', maxCol:2, col: 1,mndf:'N',dataType:'PAGE',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs: 
  [
   {  group:'ussms',name:'name',label:'Name ',task:'NONE',desc:'N',htmlType:'TEXT',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'name1',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N' }
  ,{  group:'ussms',name:'bodyType',label:'Body Type',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'NONE',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|SLIM|Slim|AVERAGE|Average|ATHLETIC|Athletic|HEAVY|Heavy ',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N' }
  ,{  group:'ussms',name:'complexion',label:'complexion',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'N',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|VFAIR|Very Fair|FAIR|Fair |WHEATISH|Wheatish|BWHEATISH|Wheatish |BROWN|brown|DARK|Dark',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'age',label:'Age ',task:'NONE',desc:'N',htmlType:'TEXT',entitle:'N',enttlname:'',mndf:'N',dataType:'NUMBER',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N' }
  ,{  group:'ussms',name:'dob',label:'Date of Birth',task:'NONE',desc:'N',htmlType:'DATE',entitle:'N',enttlname:'',mndf:'Y',dataType:'DATE',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'DD/MM/YYYY or DD/MON/YYYY',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N' }
  ,{  group:'ussms',name:'phyStaus',label:'Physical Status ',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'NONE',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|NORMAL|Normal|PHYSICALLYCHALLENGED|Physically challenged',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'height',label:'Height ',task:'NONE',desc:'N',htmlType:'TEXT',entitle:'N',enttlname:'',mndf:'Y',dataType:'WIGHT',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'weight ',label:'Weight ',task:'NONE',desc:'N',htmlType:'TEXT',entitle:'N',enttlname:'',mndf:'N',dataType:'HIGHT',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N' }
  ,{  group:'ussms',name:'motherTongue',label:'Mother Tongue ',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'0',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'maritalStaus',label:'Marital Status ',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|U|Unmarried|NM|Never married',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'eatingHabits',label:'Eating Habits ',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'N',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|NV|Non Vegetarian|V|Vegetarian',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'drinkingHabits',label:'Drinking Habits ',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'NONE',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|ND|Non-drinker|D|Drinker',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ,{  group:'ussms',name:'smokingHabits',label:'Smoking Habits ',task:'NONE',desc:'N',htmlType:'LIST',entitle:'N',enttlname:'',mndf:'Y',dataType:'VARCHAR',cclass:'ctext',validate:'',dflt:'NONE',min:'0',max:'60',tips:'',onkeyup:'onKeyUp(this)',onchange:'onChange(this)',onkeydown:'onKeyDown(this)',onkeypress:'onKeyPress(this)',onclick:'onClick(this)',listVal:'NONE|None|NS|Non-smoker|S|Smoker',help:'N',helpLink:'',xml:'Y',Xpath:'/', childs:'N'  }
  ]
  }
  
];


 /* 
 $.post("/jsonSchema/"+jsonSchema+".sjson", {suggest: 'txt'}, function(result){
        
         //
         schemaJson=result;

    });
*/


  var result=$.ajax({
        type: "POST",
        url: "/jsonSchema/"+jsonSchema+".sjson",
        cache: false,
        async: false
    }).responseText;
        
 // alert('Inital Load');

  schemaJson=eval(result);
    GenHtmlTemplateFromSJson =USS;

    


   // alert(GenHtmlTemplateFromSJson);

   var usResource= eval(    "[{" +us.frameGenerationResoure(schemaJson[0].childs,
  schemaJson[0]
)  +"}]" );


var  usListVal=eval("[{"+us.frameGenerationListVal(schemaJson[0].childs,
    schemaJson[0]
)  + "}]"); 



var OutJson=    eval( "[{" +us.frameGenerationJson(schemaJson[0].childs,
  schemaJson[0]
) +"}]");

var func=value;
//alert(func);
var inpUsListVal  = eval("usListVal[0]."+ schemaJson[0].name) ;
var inpUsResource = eval("usResource[0]."+ schemaJson[0].name) ;
var inpOutJson    = eval("OutJson[0]."+ schemaJson[0].name) ;
var ussScript=us.frameGeneration(inpUsListVal
                                              ,inpUsResource
                                              ,inpOutJson 
                                              ,schemaJson[0].childs
                                              ,schemaJson[0]
                                              ,0
                                              ,func
                                              ,0
                                              ,mode
                                          );


  ussScript+="return USSContainer0";
    console.log('-------------ussScript------------');
    console.log(ussScript);

   // try
    {
      var dynFGCall=(new Function("return function(us) {" + ussScript + "};"))();
   
      var appendObj=dynFGCall(us);

       console.log('appendObj.innerHTML');
      console.log(appendObj.innerHTML);

      //return "<div> thsis dashboard from heaerieUssServiceProvider </div>";
      return  "<div class='pageLayout'> <div class='bcontainer'>"+appendObj.innerHTML + "</div></div>";
     
    }
  /*  catch(e)
    {
      alert('Core App:' + e);
    }
*/
  };

  this.$get = ["apiToken", function heaerieUssServiceFactory(apiToken) {

    // let's assume that the heaerieUssService constructor was also changed to
    // accept and use the GenHtmlTemplateFromSJson argument
    return new heaerieUssService(apiToken, GenHtmlTemplateFromSJson);
  }];
});

/*
webApp.config(["heaerieUssServiceProvider", function(heaerieUssServiceProvider) {
  heaerieUssServiceProvider.GenHtmlTemplateFromSJson(true);
  console.log('heaerieUssServiceProvider.GenHtmlTemplateFromSJson');
  console.log(heaerieUssServiceProvider.GenHtmlTemplateFromSJson);
}]);

*/
     webApp.config(['$routeProvider', '$locationProvider', '$httpProvider' ,'$stateProvider','$urlRouterProvider','heaerieUssServiceProvider','$injector'
          ,function  ($routeProvider,$locationProvider,$httpProvider,$stateProvider,$urlRouterProvider ,heaerieUssServiceProvider,$injector
            ) {
        // body...
        console.log('$stateProvider');
        console.log($stateProvider);
        console.log($urlRouterProvider);
       // console.log(ussService);


      

      

       //alert(heaerieUssServiceProvider.GenHtmlTemplateFromSJson('Y'));
          $stateProvider.state('login', 
        {
            url         : '/www/'
           ,views:{

             'pageMainContext' :
              {                
               
                templateUrl : 'js/lib/views/loginView.html'
                ,controller :  'naviController'
               // templateUrl : 'view/loginView.html'
              }
            }
        });

          $stateProvider.state('dashboard', 
        {
            url         : '/dashboard/'
           ,views:{
              'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@dashboard' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','N',"FULL") //EIDT and ADD
                //template : 'this is test'
                templateUrl : 'js/lib/views/dashboardView.html'

               ,controller :  'dashboardController'
              }

             
            }
        });




         $stateProvider.state('SchemaGenerator', 
        {
            url         : '/SchemaGenerator/'
           ,views:{
              'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@SchemaGenerator' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','N',"FULL") //EIDT and ADD
                //template : 'this is test'
                templateUrl : 'js/lib/views/SchemaGenerator.html'

               ,controller :  'SchemaGeneratorController'
              }

             
            }
        });

//basicDet/USSAdd

 $stateProvider.state('basicDetUSSAdd', 
        {
            url         : '/basicDetUSSAdd/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@basicDetUSSAdd' :
              {                
               
                template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','Y' ,'ADD')
                ,controller :  'basicDetController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });


//basicDetUSSSave


$stateProvider.state('SchemaGeneratorView', 
        {
            url         : '/SchemaGeneratorView/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
               
              }
              ,

              'pageSubContext@SchemaGeneratorView' :
              {                
               
                templateUrl : 'js/lib/views/SchemaGeneratorView.html'
                ,controller :  'SchemaGeneratorController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });
$stateProvider.state('SchemaGenerator', 
        {
            url         : '/SchemaGenerator/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
               
              }
              ,

              'pageSubContext@SchemaGenerator' :
              {                
               
                templateUrl : 'js/lib/views/SchemaGenerator.html'
                ,controller :  'SchemaGeneratorController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });
$stateProvider.state('KeyBoard', 
        {
            url         : '/KeyBoard/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
               
              }
              ,

              'pageSubContext@KeyBoard' :
              {                
               
                templateUrl : 'js/lib/views/keyBoard.html'
                ,controller :  'keyBoardController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });


$stateProvider.state('basicDetUSSSave', 
        {
            url         : '/basicDetUSSSave/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@basicDetUSSSave' :
              {                
               
                template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','Y' ,'SAVE')
                ,controller :  'basicDetController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });

  $stateProvider.state('basicDetUSSNew', 
        {
            url         : '/basicDetUSSNew/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@basicDetUSSNew' :
              {                
               
                template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','Y' ,'NEW')
                ,controller :  'basicDetController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });

  $stateProvider.state('basicDetUSSView', 
        {
            url         : '/basicDetUSSView/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@basicDetUSSView' :
              {                
               
                template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','N',"FULL")
                ,controller :  'basicDetController'
                //template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });



$stateProvider.state('basicDetUSSEdit', 
        {
            url         : '/basicDetUSSEdit/'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
               ,controller :  'naviController'
              }
              ,

              'pageSubContext@basicDetUSSEdit' :
              {                
               
                template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','Y','SAVE')
                //template : '<form name="myForm" > <label for="exampleInput">Pick a date in 2013:</label> <input type="date" id="exampleInput" name="input" ng-model="example.value"placeholder="yyyy-MM-dd" min="2013-01-01" max="2016-12-31" required /> <div role="alert"> <span class="error" ng-show="myForm.input.$error.required"> Required!</span> <span class="error" ng-show="myForm.input.$error.date"> Not a valid date!</span> </div> <tt>value = {{example.value | date: "yyyy-MM-dd"}}</tt><br/> <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/> <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/> <tt>myForm.$valid = {{myForm.$valid}}</tt><br/> <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/> </form>'//heaerieUssServiceProvider.GenHtmlTemplateFromSJson('Y','SAVE') ,controller :  'basicDetController'
                ,controller :  'basicDetController'//template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });


 $stateProvider.state('signup', 
        {
            url         : '/signup/'
           ,views:{
              'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/signupView.html'
               ,controller :  'signupController'
              }
              ,

              'pageSubContext@signup' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','N',"FULL") //EIDT and ADD
                //template : 'this is test'
               // templateUrl : 'js/lib/views/dashboardView.html',controller :  'dashboardController'
                template:  "<center> <div style='width:600px'>" + heaerieUssServiceProvider.GenHtmlTemplateFromSJson('signup','Y',"REGISTER|BACK") + "</div> </center>"
               ,controller :  'signupController'
              }

             
            }
        });

    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');

        $state.go('login', {
            title: "Page not found",
            message: 'Could not find a state associated with url "'+$location.$$url+'"'
        });
    });
        


      

 
    //$httpProvider.defaults.headers.post['XSRF-AUTH'] = "some accessToken to be generated later"; 

        console.log('httpProvider');
        console.log($httpProvider);
      // $httpProvider.defaults.headers.post['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIZWFlcmllIEdTTCIsImF1ZCI6Ind3dy5teXJvb21leHBlbnNlLmNvbSIsImlhdCI6IjYwbXMiLCJleHAiOjE0NDg2ODYwNTR9.-JiMA_sU22ZVbBSxuxTnyQY6khghSjGy7hdmNk11Ysk";
        $httpProvider.interceptors.push(['$q', '$injector','toaster','$window'//,'uss' 
                                ,function($q, $injector,toaster,$window//,uss
                                  ){  
    var sessionRecoverer = {
        responseError: function(response) {
            // Session has expired

               console.log(response);
            if (response.status == 302){
                //var SessionService = $injector.get('SessionService');
                var $http = $injector.get('$http');
                var deferred = $q.defer();
                toaster.pop('error','this', 'session is expired');

             //   uss.Test('Test');
                // Create a new session (recover the session)
                // We use login method that logs the user in using the current credentials and
                // returns a promise
                //SessionService.login().then(deferred.resolve, deferred.reject);

                // When the session recovered, make the same backend call again and chain the request

                $injector.get('$state').go('login');

                return deferred.promise.then(function() {
                    return $http(response.config);
                });
            }
            else if(response.status == 404)
            {
                toaster.pop('error','404', 'Request services is not avaliable for You');
                $injector.get('$state').go('login');
            }
            return $q.reject(response);
        }
        ,response: function(response) {
            var deferred = $q.defer();

             // console.log('response');
              //console.log(response);

            

              var respJSON=JSON.stringify(response);

              // alert("success["+ respJSON + "]" );
              
                //toaster.pop('success','200', 'Success response [' + response.headers('x-access-token') +"]");

                   var accessToken= response.headers('x-access-token');

                  // alert('accessToken:' + accessToken);
                   if (angular.isDefined(accessToken))
                   {
                      if( accessToken != null)
                      {
                        $window.sessionStorage.accessToken=accessToken;
                      }
                  }
                return response;

            }
            ,request: function(request) {
           
                   console.log('request');
              console.log(request);

                //toaster.pop('success','Request', 'Send response session [' +$window.sessionStorage.accessToken +"]");


               request.headers['x-access-token'] = $window.sessionStorage.accessToken || '';
          
            return request;
        }
    };
    return sessionRecoverer;
}]);




        }]);

webApp.provider('$dashboardState', function($stateProvider,heaerieUssServiceProvider){
        this.$get = function($state){
            return {
                /**
                 * @function app.dashboard.dashboardStateProvider.addState
                 * @memberof app.dashboard
                 * @param {string} title - the title used to build state, url & find template
                 * @param {string} controllerAs - the controller to be used, if false, we don't add a controller (ie. 'UserController as user')
                 * @param {string} templatePrefix - either 'content', 'presentation' or null
                 * @author Alex Boisselle
                 * @description adds states to the dashboards state provider dynamically
                 * @returns {object} user - token and id of user
                 */
                addState: function(title, controllerAs, templatePrefix) {

                   /* $stateProvider.state('dashboard.' + title, {
                        url: '/' + title,
                        views: {
                            'dashboardModule@dashboard': {
                                templateUrl: PATHS.DASHBOARD + (templatePrefix ? templatePrefix + '/' : '/') + title + '/' + title + '.view.html',
                                controller: controllerAs ? controllerAs : null
                            }
                        }
                    });
*/

           // alert('dynamic State Add');
              $stateProvider.state('basicDetUSSNavi', 
        {
            url         : '/basicDetUSSNavi'
           ,views:{

             'pageMainContext' :
              {                
               
                //template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('N')
               templateUrl : 'js/lib/views/naviView.html'
              }
              ,

              'pageSubContext@basicDetUSSNavi' :
              {                
               
                template : heaerieUssServiceProvider.GenHtmlTemplateFromSJson('basicDet','Y','SAVE')
                //template : '<form name="myForm" > <label for="exampleInput">Pick a date in 2013:</label> <input type="date" id="exampleInput" name="input" ng-model="example.value"placeholder="yyyy-MM-dd" min="2013-01-01" max="2016-12-31" required /> <div role="alert"> <span class="error" ng-show="myForm.input.$error.required"> Required!</span> <span class="error" ng-show="myForm.input.$error.date"> Not a valid date!</span> </div> <tt>value = {{example.value | date: "yyyy-MM-dd"}}</tt><br/> <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/> <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/> <tt>myForm.$valid = {{myForm.$valid}}</tt><br/> <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/> </form>'//heaerieUssServiceProvider.GenHtmlTemplateFromSJson('Y','SAVE') ,controller :  'basicDetController'
                ,controller :  'basicDetController'//template : 'this is test'
               // templateUrl : 'view/loginView.html'
              }
            }
        });



                }
            }
        }
    });

webApp.run(['$rootScope','$q', '$injector', function($rootScope,$q, $injector) {

    //$rootScope.$state = $state;
    $rootScope.goUrl= function(stateToGo)
    {

      //alert('I am in stateToGo' );
      //console.log(angular.toJson($state.get()));
       // console.log($injector.get('$state').get());

      if(stateToGo == 'registerUSSBack')
      {

         $injector.get('$state').go('login');
      }
     else
      {
         $injector.get('$state').go(stateToGo);
      }


         
    }
}]);


/*


   */

/*


    webApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  alert('alert config');
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

*/


    return webApp;
});