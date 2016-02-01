/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var http = require("http");
		var ip = request.headers["x-forwarded-for"];
		var iplookupUrl = "http://pip.im:8080/json/" + ip;
		var response = http.request({url: iplookupUrl});

return response;

// return http + " " + ip +" " + iplookupUrl;
   				   				   							