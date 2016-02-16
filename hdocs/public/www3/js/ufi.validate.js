define(function(require, exports, module) {
"use strict";


var USS=require("ufi.core").USS;
var XML=require("ufi.xml").XML;
<!--

//alert("import validate");


var DownKeyCode=0,PressKeyCode=0,UpKeyCode=0;
var prcDate=new Date();
var bizDate=new Date();
var sysDate=new Date();


  var VAL=USS;

VAL.prototype.ErrorBox=function ( obj, text ) {
 	
 	//alert(obj.id);
       $("#"+ obj.getAttribute("ErrorBox"))
         .text( text )
         .addClass( "ui-state-highlight" );
 
       setTimeout(function() {
 //	alert("1");
         $("#"+ obj.getAttribute("ErrorBox")).text("").removeClass( "ui-state-highlight",1500);
 	//$("#"+ obj.getAttribute("ErrorBox")).text("");
       }, 100*120 );
     }

VAL.prototype.onKeyUp=function(obj)
{
    
	//alert("KeyUp");

	try
	{
    cust_pre_onKeyUp(obj);
	}
	catch(e)
	{

	}
    var event;
    
    if (window.event)
	{
			event = window.event;
	}
    UpKeyCode=event.keyCode;
    
   // alert( "PressKeyCode= " +PressKeyCode + "|DownKeyCode = " + DownKeyCode + "|UpKeyCode=" +UpKeyCode);
    
    /* 
     * Need to test the key code combination  in windows /Unix
     * Need to check all browsers are compatible with opera/safri/chrome
     * 
     * 
     * */
    if( (PressKeyCode ==  0 || PressKeyCode ==  223   )&& DownKeyCode == 83 && UpKeyCode == 83 )//Alt+s 	
    {
    
        if( obj.getAttribute('dataType') =='DATE' )
        {
                obj.value= sysDate;
                obj.onchange();
        }
        else
        {
                alert( VLDOKU00001);
             
        }
        
    }
    if( (PressKeyCode ==  0 || PressKeyCode == 8747)  && DownKeyCode == 66 && UpKeyCode == 66 ) //alt +b
    {
        if( obj.getAttribute('dataType') =='DATE' )
        {
                obj.value= bizDate;
                obj.onchange();
        }
        else
        {
                alert(VLDOKU00001);
             
        }
        
    }
    if( (PressKeyCode ==  0 || PressKeyCode == 960) && DownKeyCode == 80 && UpKeyCode == 80 ) //alt + p
    {
        if( obj.getAttribute('dataType') =='DATE' )
        {
                obj.value=prcDate;
                obj.onchange();
        }
        else
        {
                alert(VLDOKU00001);
             
        }
        
    }
    try
    {
    cust_post_onKeyUp(obj);
}
catch(e)
{

}
    DownKeyCode=0;
    PressKeyCode=0;
    UpKeyCode=0;
    
}

VAL.prototype.onKeyDown= function (obj)
{

	try
	{
     cust_pre_onKeyDown(obj);
     }
catch(e)
{
	
}
     var event;
     if (window.event)
	{
			event = window.event;
	}
     DownKeyCode=event.keyCode;
    
    try
	{
     cust_post_onKeyDown(obj);
     }
catch(e)
{
	
}
}

VAL.prototype.onKeyPress=  function (obj)
{
	 try
	{
    cust_pre_onKeyPress(obj);
     }
catch(e)
{
	
}
    var event;
    if (window.event)
	{
			var event = window.event;
	}
    PressKeyCode=event.keyCode;
     try
	{
    cust_post_onKeyPress(obj);
     }
catch(e)
{
	
}
}

VAL.prototype.onChange= function onChange(obj)
{
	try
	{
    cust_pre_onChange(obj);    
      }
catch(e)
{
	
}

$("#"+ obj.getAttribute("ErrorBox")).text("").removeClass( "ui-state-highlight",15);

	if(obj.getAttribute('dataType') =="DATE")
	{
		onChangeVal(obj);
	}
	if(obj.getAttribute('dataType')=="NUMBER")
	{
		valNumber(obj);
	}
	if(obj.getAttribute('dataType')=="AMOUNT")
	{
		
		valAmount(obj);
	}
	if(obj.getAttribute('dataType')=="OPTION")
	{
		
		//alert("id "+ obj.id +" value "+obj.value);
		var radioButtons=  document.forms[0].elements[obj.id];
		for(var i=0; i< radioButtons.length; i++)
		{
			if(i==0 )
			radioButtons[i].value = obj.value;
			//alert("value =["+i+"] "+radioButtons[i].value );
		}
		
	}
//alert("onChange <" + obj.value +">" );

try
{
	cust_post_onChange(obj);

	  }
catch(e)
{
	
}
}
VAL.prototype.valAmount=  function (obj)
{
	if(IsFloate(obj.value)== false)
	{
		//alert(obj.getAttribute('label') + VLDOKU00004);

		ErrorBox(obj,obj.getAttribute('label') + VLDOKU00004);
		obj.value="";
		obj.focus();
	}
	
}

VAL.prototype.valNumber=   function (obj)
{
	if(IsPositiveNumber(obj.value)== false)
	{
		//alert(obj.getAttribute('label') + VLDOKU00002);
		ErrorBox(obj,obj.getAttribute('label') + VLDOKU00002);
		obj.value="";
		obj.focus();
	}
}

VAL.prototype.IsFloate=    function (a_strString) 
{

	if(( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 )  )
		return false;
	else if (a_strString < 0 )
		return true;//-ve active
	else
		return true;
}


VAL.prototype.IsPositiveNumber=   function (a_strString) 
{

	if(( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 ) || ( a_strString.indexOf(".") != -1 ))
		return false;
	else if (a_strString < 0 )
		return false;
	else
		return true;
}

VAL.prototype.onValidate=  function onValidate(obj)
{

	try
	{
			if (	cust_pre_onValidate(obj) == false )
				{
					return false;
				}
	}
	catch(e)
	{

	}
	try
	{
	if(obj.getAttribute('task')=='CANCEL')
	{
		window.close();
	}
	if(obj.getAttribute('task') =='SUBMIT')
	{
		if(!fnValidate())
		{
			return false;
			
		}
		//document.forms[0].method="post";
		//document.forms[0].submit();
		//alert("VALOVDL:003");
	}
	if(obj.getAttribute('task') == 'VALIDATE')
	{
		fnValidate();
	
	}
	}
	catch(e)
	{
		alert('VLDOVLException'+e);
	}

	try
	{
			if (	cust_pre_onValidate(obj) == false )
				{
					return false;
				}
	}
	catch(e)
	{

	}
}

VAL.prototype.onClick=   function onClick(obj)
{

	//alert(obj.id);

	try
	{

		try
		{
				if (	cust_pre_onClick(obj) == false )
				{
					return false;
				}
		}
		catch(e)
		{

		}
	if(obj.getAttribute('task')=='CANCEL')
	{
		window.close();
	}
	else if(obj.getAttribute('task') =='SUBMIT')
	{
		if(!fnValidate())
		{
			return false;
			
		}
			//alert("VALOVDL:003");
	}
	else if(obj.getAttribute('task') == 'VALIDATE')
	{
		if(!fnValidate())
		{
			return false;
			
		}
	
	}
		try
		{	
			 if  (cust_post_onClick(obj) == false )
			{
				return false;
			}
		}
		catch(e)
		{
			
		}
	}
	catch(e)
	{
		alert('VLDOVLExceptiom'+e);
	}

//	alert("V:Submit");

	if(obj.getAttribute('task') =='SUBMIT')
	{

	document.forms[0].method="post";
		document.forms[0].submit();

	}

}

VAL.prototype.fnValidate=  function ()
{
var elmnts = document.forms[0].elements;
	
	for ( var i=0; i<elmnts.length;i++)
	{
			if(elmnts[i].getAttribute('mndf') =='Y')
			{
				
				
				if(elmnts[i].getAttribute('dataType') == 'OPTION')
				{
					
					var radioButtons=  document.forms[0].elements[elmnts[i].id];
					try
					{
						var lvFlg=true;
						/*
						if(radioButtons[0].value.length !=0)
						{
						//	return false;
							lvFlg=false;

							
						}
						*/
						for(var j=1;j<=radioButtons.length;j++)
						{
						
							
							if( radioButtons[j].checked == true)
							lvFlg=false;
							//return true;
							break;
						}
						
						if (lvFlg  == true)
						{
							//alert( VLDOKU00003 + radioButtons[0].getAttribute('label') );
							ErrorBox( radioButtons[0],VLDOKU00003 + radioButtons[0].getAttribute('label') );
							radioButtons[1].focus();
							return false;
						}

					}
					catch(e)
					{
						alert("FVDException:"+e);
					}
				}
				else if(elmnts[i].value.length==0)
				{
					//alert( VLDOKU00003 + elmnts[i].getAttribute('label') );
					ErrorBox(elmnts[i], VLDOKU00003 + elmnts[i].getAttribute('label') );
					elmnts[i].focus();
					return false;
				}
				
			}
	}
	XML.genXml();
	return true;

}
//alert("end validate");
-->
exports.VAL=VAL;

});