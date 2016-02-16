info: [libs/mongoose.js] Connected to DB!
info: [NodeAPI/dataGen.js] New user - oceane:voluptas
info: [NodeAPI/dataGen.js] New user - tomas:nihil
info: [NodeAPI/dataGen.js] New user - marilyne:non
info: [NodeAPI/dataGen.js] New user - lucious:illum
info: [NodeAPI/dataGen.js] New user - andrey:simplepassword
info: [NodeAPI/dataGen.js] New client - mobileV1:abc123456

http POST http://localhost:1337/oauth/token grant_type=password client_id=mobileV1 client_secret=abc123456 username=andrey password=simplepassword


HTTP/1.1 200 OK
Cache-Control: no-store
Connection: keep-alive
Content-Type: application/json
Date: Sun, 05 Oct 2014 10:15:43 GMT
Pragma: no-cache
Transfer-Encoding: chunked
X-Powered-By: Express

{
    "access_token": "SIfGG9FP2IJ0axXGriPvYLvNkz58YWhuF5LQakQi2jk=", 
    "expires_in": 3600, 
    "refresh_token": "RfiIUouwFMHCsjb7KlSkHgNeT6KPvRsEVH9KfLxfAE4=", 
    "token_type": "bearer"
}

http POST http://localhost:1337/oauth/token grant_type=refresh_token client_id=mobileV1 client_secret=abc123456 refresh_token=TOKEN
