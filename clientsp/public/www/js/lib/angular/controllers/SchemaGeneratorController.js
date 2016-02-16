define([],
function()
{

	return [ '$scope' , 'toaster','SchemaGeneratorService','$state',function($scope,toaster,SchemaGeneratorService,$state){




var ufiuss = require('ufi.core');
var ufiframegen = require('ufi.frameGen');
var ufixml = require('ufi.xml');


  var us = new ufiuss.USS();




    //alert('in view');

   // $('#editor').heaerieDocs({ fileUploadError: $scope.showErrorAlert} );
  

var $newdiv1 = $( "<div id='object1'/> Dynamic body</div>" )
var  newdiv2 = document.createElement( "div" );
 
newdiv2.id="middleid";
//alert("main1");


$scope.GenJsonB= function (obj)
{

alert('GenJsonB');
obj=this;
    var SchemaJsonTextId=document.getElementById("SchemaJsonTextId");
    var OutJsonTextId=document.getElementById("OutJsonTextId");
    var MultiLang=document.getElementById("MultiLang"); 

  var PageNameId=document.getElementById("PageNameId"); 
  var PageNameIdLabel=document.getElementById("PageNameIdLabel"); 
try
{
    schemaJson=eval(SchemaJsonTextId.value);


 var  ufiframegen= require('ufi.frameGen');
var us= new ufiframegen.FG();

OutJsonTextId.value=    JSON.stringify(eval( "[{" +us.frameGenerationJson(schemaJson[0].childs,
  schemaJson[0]
) +"}]"));

}
catch(e)
{
    alert("GenJson Exep:" +e);
}


}

$scope.GenFrameB =function (obj)
{


obj=this;
var SchemaJsonTextId=document.getElementById("SchemaJsonTextId");
var OutJsonTextId=document.getElementById("OutJsonTextId");
var readOnlyFlgId=document.getElementById("readOnlyFlgId");
var LangResoureId=document.getElementById("LangResoureId");
var ListValId=document.getElementById("ListValId");
var us = new ufiframegen.FG(); 
var PageNameId=document.getElementById("PageNameId"); 
var PageNameIdLabel=document.getElementById("PageNameIdLabel"); 
var func =readOnlyFlgId.value;
try
{

    resourceJson= eval(LangResoureId.value);
    recSch=eval(SchemaJsonTextId.value);

    rec=eval(OutJsonTextId.value);
    
    listValJson =eval(ListValId.value);

var commonHeader="";
   commonHeader="require([\"jquery\",\"ufi.core\", \"ufi.frameGen\",\"ufi.xml\",\"ufi.validate\"], function($,uficore,ufiframegen,ufixml,ufivalidate) { var us = new ufiframegen.FG(); var USSContainer0 =    us.USSCreateContainer(); var USSHeader    = ''";
        

        
     var vcommonFrameGen =us.frameGeneration(eval("listValJson[0]."+ recSch[0].name) 
                                              ,eval("resourceJson[0]."+ recSch[0].name)
                                              ,eval("rec[0]."+recSch[0].name) 
                                              ,recSch[0].childs
                                              ,recSch[0]
                                              ,0
                                              ,func
                                              ,0
                                          );
        
        
var commonTailer=" document.getElementById('middleid').appendChild(USSContainer0);  \n } );"
//commonTailer+="\n document.getElementById('FrameId').appendChild(USSContainer0); });";

//var vcommonFrameGen="require([\"jquery\",\"ufi.core\", \"ufi.frameGen\",\"ufi.xml\",\"ufi.validate\"], function($,uficore,ufiframegen,ufixml,ufivalidate) { $(function() { alert('test');})} );"

var script=document.createElement("script");
//scr.appendChild(commonHeader + vcommonFrameGen + commonTailer);
script.type='text/javascript';

script.text=commonHeader + vcommonFrameGen + commonTailer;
document.getElementById('middleid').appendChild(script);


}
catch(e)
{
    alert("GenJson Exep:" +e);
}


}

$scope.genResourceB=function ()
{
    //alert("Gen Resource");
var us = new ufiframegen.FG(); 

    var SchemaJsonTextId=document.getElementById("SchemaJsonTextId");
    var LangResoureId=document.getElementById("LangResoureId");
    var MultiLang=document.getElementById("MultiLang"); 
    var PageNameId=document.getElementById("PageNameId"); 

try
{
    schemaJson=eval(SchemaJsonTextId.value);





LangResoureId.value=  JSON.stringify(eval(    "[{" +us.frameGenerationResoure(schemaJson[0].childs,
  schemaJson[0]
)  +"}]" ));

}
catch(e)
{
    alert("GenJson Exep:" +e);
}
}
//alert(commFrameGen(PersonalInfo,PersonalInfoSch,"Y"));

$scope.GenXmlB =function ()
{
    var xml=new ufixml.XML();
    parentId=document.getElementById("parentId"); 
    XMLTextId=document.getElementById("XMLTextId"); 
    XMLTextId.value= xml.genChilTag(parentId.value);

}

$scope.GenXmlJsonB =function ()
{
    var xml=new ufixml.XML();
    parentId=document.getElementById("parentId"); 
    XMLJsonId=document.getElementById("XMLJsonId"); 
    XMLJsonId.value=  JSON.stringify(eval( xml.genChilTagJson(parentId.value)));

}

$scope.GenListValJsonB=function ()
{
    
    var SchemaJsonTextId=document.getElementById("SchemaJsonTextId");
    var ListValId=document.getElementById("ListValId");
  var MultiLang=document.getElementById("MultiLang"); 
  var PageNameId=document.getElementById("PageNameId"); 
    var PageNameIdLabel=document.getElementById("PageNameIdLabel"); 
 var us = new ufiframegen.FG();
try
{
    schemaJson=eval(SchemaJsonTextId.value);





ListValId.value=    "[{"+us.frameGenerationListVal(schemaJson[0].childs,
    schemaJson[0]
)  + "}]"; 

}
catch(e)
{
    alert("GenJson Exep:" +e);
}

}




    ///schema Generator
	
		$scope.basicDetEditSave=function()
    	{


       // console.log($scope);

    			
    	//	alert('basicDetEditSave :name =' + $scope.name);

        SchemaGeneratorService.save({     "grantType"     : "password" 
          /*loginService.authorizeSSO({     "grantType"     : "password" */
                      ,'clientId'    :'CLIENTSP'
                      ,'scope'       : 'GSA'
                      ,'username'    : $scope.email
                      ,'password'    : $scope.password
                      ,'redirectURI' : 'http://localhost:5000/'

                      },function  (resp) {
          // body...
          //console.log($state);
         // $state.go('dashboard');


          //console.log(resp);
          toaster.pop('success','this', JSON.stringify(resp));

          //alert('resp');
        });


          //SchemaGeneratorService.save()
    		

    		//alert("I am in uss_submit");
    	};


  

  var ContinerCount=1;



 $scope.AddContainerField=function(obj,field)
{
  var FrameId=document.getElementById('FrameId');



  var parentId=obj.getAttribute("parentid");

  if ( parentId == null)
  {
      parentObj =obj;
  }
  else
  {
    parentObj=document.getElementById(parentId);
  }

  var div=document.createElement("div");
  div.setAttribute("parentid"        ,parentObj.id);
  //div.setAttribute("id"               ,obj.id);
  div.setAttribute("mndf"             ,"Y");
  div.setAttribute("childCount"       ,"0");
  div.setAttribute("type"             ,"container");
  div.id  = "container" + us.ContinerCount++;



//us.CreateField();



  var divName=document.createElement("input");
  divName.setAttribute("parentid"        ,parentObj.id);
  divName.setAttribute("id"               ,div.id );
  divName.setAttribute("mndf"             ,"Y");
  divName.setAttribute("childCount"       ,"0");
  divName.setAttribute("type"             ,"container");
  divName.setAttribute("placeholder"             ,"name");
  divName.setAttribute("placeholder"             ,"name");

  var divName=document.createElement("input");
  divName.setAttribute("parentid"        ,parentObj.id);
  divName.setAttribute("id"               ,div.id );
  divName.setAttribute("mndf"             ,"Y");
  divName.setAttribute("childCount"       ,"0");
  divName.setAttribute("type"             ,"container");
  divName.setAttribute("placeholder"             ,"name");
  
  divName.setAttribute("onChange"             ,"onChange(this)");

var  divParent=document.createElement("input");
   divParent.setAttribute("parentid"        ,parentObj.id);
   divParent.setAttribute("id"               ,div.id );
   divParent.setAttribute("mndf"             ,"Y");
   divParent.setAttribute("childCount"       ,"0");
   divParent.setAttribute("value"             ,   parentObj.id);
   divParent.setAttribute("type"             ,"container");



var  divParentName=document.createElement("input");
   divParentName.setAttribute("parentid"        ,parentObj.id);
   divParentName.setAttribute("id"               ,div.id );
   divParentName.setAttribute("mndf"             ,"Y");
   divParentName.setAttribute("childCount"       ,"0");
   divParentName.setAttribute("dataType"       ,"PARENT");
   divParentName.setAttribute("value"             ,   parentObj.id);
   divParentName.setAttribute("type"             ,"container");



var  divLabel=document.createElement("input");
   divLabel.setAttribute("parentid"        ,parentObj.id);
   divLabel.setAttribute("id"               ,div.id );
   divLabel.setAttribute("mndf"             ,"Y");
   divLabel.setAttribute("childCount"       ,"0");
   divLabel.setAttribute("dataType"       ,"LABEL");
   divLabel.setAttribute("value"             ,   "");
   divLabel.setAttribute("type"             ,"container");

divLabel.setAttribute("placeholder"             ,"label");


var  divMandatory=document.createElement("select");
   divMandatory.setAttribute("parentid"        ,parentObj.id);
   divMandatory.setAttribute("id"               ,div.id );
   divMandatory.setAttribute("mndf"             ,"Y");
   divMandatory.setAttribute("childCount"       ,"0");
   divMandatory.setAttribute("dataType"       ,"mndf");
   divMandatory.setAttribute("value"             ,   parentObj.id);
   divMandatory.setAttribute("type"             ,"container");




var  divMandatoryOption=document.createElement("option");
   divMandatoryOption.value="Y";
   divMandatoryOption.setAttribute('selected', 'true');
   divMandatoryOption.appendChild(document.createTextNode("YES"));
   divMandatoryOption.id="option";
divMandatory.appendChild(divMandatoryOption);

divMandatoryOption=document.createElement("option");
   divMandatoryOption.value="N";
  //divMandatoryOption.setAttribute('selected', 'true');
   divMandatoryOption.appendChild(document.createTextNode("NO"));
   divMandatoryOption.id="option";
divMandatory.appendChild(divMandatoryOption);


     var divButton=document.createElement("button");
  divButton.setAttribute("parentid"        ,parentObj.id );
  //divButton.setAttribute();
  divButton.type ="button";
  divButton.setAttribute("mndf"             ,"Y");
  divButton.setAttribute("childCount"       ,"0");
  divButton.setAttribute("value"       ,"onclick");
  divButton.setAttribute("type"             ,"button");
  divButton.textContent = "Add Sibling";
    divButton.setAttribute("onclick" ,"AddContainer(this)");




     var divButtonChild=document.createElement("button");
  divButtonChild.setAttribute("parentid"        ,div.id );
  //divButton.setAttribute();
  divButtonChild.type ="button";
  divButtonChild.setAttribute("mndf"             ,"Y");
  divButtonChild.setAttribute("childCount"       ,"0");
  divButtonChild.setAttribute("value"       ,"onclick");
  divButtonChild.setAttribute("type"             ,"button");
  divButtonChild.textContent = "Add Container1";
    divButtonChild.setAttribute("onclick" ,"AddContainer(this)");




tdivDataType=document.createElement("select");
          //tdivDataType.className = 'clabel';
          //tdivDataType.name=  ;
          //tdivDataType.for = fieldObj.name; 
          var inpStrArr= "VARCHAR|VARCHAR|LIST|LIST".split('|');
          for(var i=0 ; i< inpStrArr.length;i+=2)
          {
            
              divFataTypeOption=document.createElement("option");
              divFataTypeOption.value=inpStrArr[i];
              divFataTypeOption.appendChild(document.createTextNode(inpStrArr[i+1]));
              divFataTypeOption.id="option";
                tdivDataType.appendChild(divFataTypeOption);

          }
          //ttableBodyElmnt=tdivDataType;




  div.appendChild(divName);
  div.appendChild(divLabel);
  
  div.appendChild(divParent);
  div.appendChild(divParentName);
  div.appendChild(divMandatory);
  div.appendChild(tdivDataType);
  div.appendChild(divButton);

    div.appendChild(divButtonChild);
try
{
  parentObj.appendChild(div);
}
catch(e)
{
  console.log('Exception' + e);
}



}

 $scope.AddContainer=function(obj)
{
  var FrameId=document.getElementById('FrameId');

  //var us = new ufiuss.USS();

  var parentId=obj.getAttribute("parentid");

  if ( parentId == null)
  {
      parentObj =obj;
  }
  else
  {
    parentObj=document.getElementById(parentId);
  }

  var div=document.createElement("div");
  div.setAttribute("parentid"        ,parentObj.id);
  //div.setAttribute("id"               ,obj.id);
  div.setAttribute("mndf"             ,"Y");
  div.setAttribute("childCount"       ,"0");
  div.setAttribute("type"             ,"container");
  div.setAttribute("class","col-sm-6");
  div.id  = "container" + us.ContinerCount++;



//us.CreateField();



  var divName=document.createElement("input");
  divName.setAttribute("parentid"        ,parentObj.id);
  divName.setAttribute("id"               ,div.id );
  divName.setAttribute("mndf"             ,"Y");
  divName.setAttribute("childCount"       ,"0");
  divName.setAttribute("type"             ,"container");
  divName.setAttribute("placeholder"             ,"name");
  divName.setAttribute("placeholder"             ,"name");

  var divName=document.createElement("input");
  divName.setAttribute("parentid"        ,parentObj.id);
  divName.setAttribute("id"               ,div.id );
  divName.setAttribute("mndf"             ,"Y");
  divName.setAttribute("childCount"       ,"0");
  divName.setAttribute("type"             ,"container");
  divName.setAttribute("placeholder"             ,"name");
  
  divName.setAttribute("onChange"             ,"onChange(this)");

var  divParent=document.createElement("input");
   divParent.setAttribute("parentid"        ,parentObj.id);
   divParent.setAttribute("id"               ,div.id );
   divParent.setAttribute("mndf"             ,"Y");
   divParent.setAttribute("childCount"       ,"0");
   divParent.setAttribute("value"             ,   parentObj.id);
   divParent.setAttribute("type"             ,"container");



var  divParentName=document.createElement("input");
   divParentName.setAttribute("parentid"        ,parentObj.id);
   divParentName.setAttribute("id"               ,div.id );
   divParentName.setAttribute("mndf"             ,"Y");
   divParentName.setAttribute("childCount"       ,"0");
   divParentName.setAttribute("dataType"       ,"PARENT");
   divParentName.setAttribute("value"             ,   parentObj.id);
   divParentName.setAttribute("type"             ,"container");



var  divLabel=document.createElement("input");
   divLabel.setAttribute("parentid"        ,parentObj.id);
   divLabel.setAttribute("id"               ,div.id );
   divLabel.setAttribute("mndf"             ,"Y");
   divLabel.setAttribute("childCount"       ,"0");
   divLabel.setAttribute("dataType"       ,"LABEL");
   divLabel.setAttribute("value"             ,   "");
   divLabel.setAttribute("type"             ,"container");

divLabel.setAttribute("placeholder"             ,"label");


var  divMandatory=document.createElement("select");
   divMandatory.setAttribute("parentid"        ,parentObj.id);
   divMandatory.setAttribute("id"               ,div.id );
   divMandatory.setAttribute("mndf"             ,"Y");
   divMandatory.setAttribute("childCount"       ,"0");
   divMandatory.setAttribute("dataType"       ,"mndf");
   divMandatory.setAttribute("value"             ,   parentObj.id);
   divMandatory.setAttribute("type"             ,"bcontainer");




var  divMandatoryOption=document.createElement("option");
   divMandatoryOption.value="Y";
   divMandatoryOption.setAttribute('selected', 'true');
   divMandatoryOption.appendChild(document.createTextNode("YES"));
   divMandatoryOption.id="option";
divMandatory.appendChild(divMandatoryOption);

divMandatoryOption=document.createElement("option");
   divMandatoryOption.value="N";
  //divMandatoryOption.setAttribute('selected', 'true');
   divMandatoryOption.appendChild(document.createTextNode("NO"));
   divMandatoryOption.id="option";
divMandatory.appendChild(divMandatoryOption);


     var divButton=document.createElement("button");
  divButton.setAttribute("parentid"        ,parentObj.id );
  //divButton.setAttribute();
  divButton.type ="button";
  divButton.setAttribute("mndf"             ,"Y");
  divButton.setAttribute("childCount"       ,"0");
  divButton.setAttribute("value"       ,"onclick");
  divButton.setAttribute("type"             ,"button");
  divButton.textContent = "Add Sibling";
    divButton.setAttribute("onclick" ,"AddContainer(this)");




     var divButtonChild=document.createElement("button");
  divButtonChild.setAttribute("parentid"        ,div.id );
  //divButton.setAttribute();
  divButtonChild.type ="button";
  divButtonChild.setAttribute("mndf"             ,"Y");
  divButtonChild.setAttribute("childCount"       ,"0");
  divButtonChild.setAttribute("value"       ,"onclick");
  divButtonChild.setAttribute("type"             ,"button");
  divButtonChild.textContent = "Add Container1";
    divButtonChild.setAttribute("onclick" ,"AddContainer(this)");




tdivDataType=document.createElement("select");
          //tdivDataType.className = 'clabel';
          //tdivDataType.name=  ;
          //tdivDataType.for = fieldObj.name; 
          var inpStrArr= "VARCHAR|VARCHAR|LIST|LIST".split('|');
          for(var i=0 ; i< inpStrArr.length;i+=2)
          {
            
              divFataTypeOption=document.createElement("option");
              divFataTypeOption.value=inpStrArr[i];
              divFataTypeOption.appendChild(document.createTextNode(inpStrArr[i+1]));
              divFataTypeOption.id="option";
                tdivDataType.appendChild(divFataTypeOption);

          }
          //ttableBodyElmnt=tdivDataType;




  div.appendChild(divName);
  div.appendChild(divLabel);
  
  div.appendChild(divParent);
  div.appendChild(divParentName);
  div.appendChild(divMandatory);
  div.appendChild(tdivDataType);
  div.appendChild(divButton);

    div.appendChild(divButtonChild);
try
{
  parentObj.appendChild(div);
}
catch(e)
{
  console.log('Exception' + e);
}



}


var Sibling=0;

 NewSibling=function(obj)
{

  //alert('in Sibling');
  //var us= new ufiuss.USS();

  us.NewSibling(obj);
}

 ProcessSJson=function()
{
 // var us= new USS();

  var parentObj=document.getElementById('container0');
  var SchemaJsonTextId=document.getElementById('SchemaJsonTextId');

  var SchemaJson = eval(SchemaJsonTextId.value);
  parentObj.appendChild( us.ProcessSJson(SchemaJson , parentObj.id));


}


NewChild=function(obj)
{

//  alert('NewChild');
 // var us= new ufiuss.USS();

  us.NewChild(obj);
}

DeleteThis=function(obj)
{

 // alert('DeleteThis');
 // var us=new ufiuss.USS();
  us.DeleteThis(obj);
}




GenSJson=function (obj)
{
 // var us= new USS();

  var parentObj=document.getElementById('container0');
  var SchemaJsonTextId=document.getElementById('SchemaJsonTextId');
  var SchemaJsonOuputId=document.getElementById('SchemaJsonOutputId');

  var SchemaJson = eval(SchemaJsonTextId.value);
  

    var  outPut =us.GenSJson(parentObj.id);
    console.log(outPut);
    var jsonOutPut=JSON.stringify(  outPut );

    //alert(jsonOutPut);
       SchemaJsonOuputId.value =jsonOutPut;

}


PreView=function(obj)
{
//alert('Preview 0');
//var us = new ufiuss.USS();
us.Preview(obj);

}




    
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