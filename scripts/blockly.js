 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="-883" y="-71"><field name="VAR">it</field><value name="VALUE"><block type="scriptr_callhttp" id="2" inline="false"><field name="url">http://pip.im:8080/json/</field><field name="method">GET</field></block></value><next><block type="scriptr_return" id="3" inline="false"><value name="return"><block type="scriptr_publish" id="4" inline="true"><value name="message"><block type="variables_get" id="5"><field name="VAR">it</field></block></value><value name="channel"><block type="text" id="6"><field name="TEXT">wackamole</field></block></value></block></value></block></next></block></xml>*#*#*/
var it;


it = (require("http").request({"url": "http://pip.im:8080/json/" , "method": "GET", "params": null, "headers": null}));
return publish ('wackamole', it,false)			