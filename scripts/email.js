/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var http = require("http");
		var ip = request.headers["x-forwarded-for"];
		var iplookupUrl = "http://pip.im:8080/json/" + ip;
		var response = http.request({url: iplookupUrl});
		            
		if(response.status == "200"){
		    var result = JSON.parse(response.body);
		    var country = result.country_name;
		    if(!storage.local[country]){
		    	storage.local[country] = {count :1}
		    }else{
		     	storage.local[country].count += 1;
		    }      
          
          var time = request.parameters["time"];
          
          var message= "from " + ip + " IP " + 
            storage.local[country].count +  " times, located in " + country +".";
          
          var mailBody = "Hello,<br> " + message + "<br>";
	//		  mailBody += "<a href='https://api.scriptr.io/discard?id=" + request.id + "'>Click here to discard the alert</a>";
		  var emailConfig = {
				  "to": "tom@scriptr.io",
				  "fromName": "scriptio",
				  "subject": "fun is where you find it",
				  "bodyHtml": mailBody
					};
			return sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.bodyHtml);                                  
            
		 }			