 // yadlee.js
 Promise = require('bluebird'),
 request = Promise.promisify(require('request'));


doLogin=function()
{
   var options = {
    method: 'POST',
    uri: 'http://localhost:5000/gpasso/token',
    form: {                     "grantType"     : "password"
          /*loginService.authorizeSSO({     "grantType"     : "password" */
                      ,'clientId'    : req.getParam('clientId')
                      ,'scope'       : req.getParam('scope')
                      ,'username'    : req.getParam('username')
                      ,'password'    : req.getParam('password')
                      ,'redirectURI' : req.getParam('redirectURI')

                      },
    headers: respObj

                };


console.log('after validInputSSO : options');
console.log(options);

        request(options)
    .then(function (resp) {
}

}
doLogin();