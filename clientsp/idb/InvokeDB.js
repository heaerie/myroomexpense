var mapper= require('./mapper').mapper;

console.log(mapper);

try {
	var schema={ Name:"Schema"};
	var schemaJson={ Name:"Json"};
	var rslt=require('./map/' + mapper[0].map).navi( schema, schemaJson, function (result,outSchema, outJson)
{

	console.error(result);
	console.error(outSchema);
	console.error(outJson);

}

  );


} catch(e) {
	var errMsg = 'Error packing data from  ' + 0 + '\nPackager:  ' ;
	console.error(errMsg);
	throw new Error(errMsg + ': ' + e.message);
}


var  InvokeDB = function(pageId,pageType,SchemaJson,DataJson,calback) {
        pageId && (this.pageId = pageId);
try
{
	if( pageType == 'NAVI')
	{
		require('./map/' + mapper[pageId].map).navi( SchemaJson, DataJson,  calback);
	}
	else if ( pageType == 'CRIT')
	{
		require('./map/' + mapper[pageId].map).crit( SchemaJson, DataJson,  calback);
	}
	else if ( pageType == 'DTIL')
	{
		require('./map/' + mapper[pageId].map).dtil( SchemaJson, DataJson,  calback);
	}
	else if ( pageType == 'RSLT')
	{
		require('./map/' + mapper[pageId].map).rslt( SchemaJson, DataJson,  calback);
	}
}
catch(e)
{
	var errMsg = 'Error mapper data from  ' + pageId + '\n Mapper:  '  + pageType ;
	console.error(errMsg);
	throw new Error(errMsg + ': ' + e.message);

}
	

};

var pageId=1;
var pageType='NAVI';
var SchemaJson={Schema:'Dashboard'};
var DataJson={DataJson:'Dashboard'};


InvokeDB(pageId,pageType,SchemaJson,DataJson,function(rslt,respSchemaJson, respDataJson)
{

	console.log(rslt);
	console.log(respSchemaJson);
	console.log(respDataJson);

});
exports.InvokeDB=InvokeDB;
